import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = process.cwd()
const SCAN_DIRS = ['app', 'components', 'lib', 'sanity']
const EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.css'])
const ICON_FACADE = 'components/icons/AppIcons.tsx'
const ALLOWED_ARBITRARY_CLASS_TOKENS = new Set([
  '[&_h3]',
  '[grid-template-columns:1.2fr_1fr]',
  'border-[1.5px]',
  'lg:grid-cols-[1.1fr_1fr]',
  'lg:grid-cols-[1.2fr_1fr]',
  'lg:grid-cols-[1fr_1.2fr]',
  'lg:grid-cols-[1fr_1.4fr]',
  'max-w-[1200px]',
  'max-w-[380px]',
  'max-w-[44ch]',
  'max-w-[48ch]',
  'max-w-[52ch]',
  'max-w-[56ch]',
  'max-w-[600px]',
  'mb-[18px]',
  'md:pb-[140px]',
  'md:text-[56px]',
  'mt-[18px]',
  'pb-[120px]',
  'pb-[140px]',
  'pt-[100px]',
  'pt-[60px]',
  'px-[18px]',
  'py-[100px]',
  'py-[14px]',
  'text-[11px]',
  'text-[13px]',
  'text-[22px]',
  'text-[40px]',
  'text-[56px]',
  'text-[clamp(28px,4vw,48px)]',
  'top-[100px]',
  'tracking-[-.015em]',
  'tracking-[-.03em]',
  'tracking-[.12em]',
  'tracking-[.14em]',
])

const rules = [
  {
    name: 'No inline SVG in app code. Use components/icons/AppIcons.tsx.',
    test: (file, text) => file.endsWith('.tsx') && /<\/?svg\b/.test(text),
  },
  {
    name: 'No TSX inline style objects. Move styling to Tailwind tokens/classes.',
    test: (file, text) => file.endsWith('.tsx') && /style=\{\{/.test(text),
  },
  {
    name: 'No direct react-icons imports outside the shared icon facade.',
    test: (file, text) =>
      file !== ICON_FACADE &&
      /\.(tsx?|jsx?)$/.test(file) &&
      /from ['"]react-icons(?:\/[^'"]*)?['"]/.test(text),
  },
  {
    name: 'No glyph icons/arrows/emoji. Use the shared react-icons facade.',
    test: (_file, text) => /[→←✓★✦●◆📞👋📍🗓🕘]/u.test(text),
  },
  {
    name: 'No arrow span pattern. Use <ButtonArrow />.',
    test: (_file, text) => /<span\s+className=["']arrow["']>/.test(text),
  },
]

function extension(file) {
  const dot = file.lastIndexOf('.')
  return dot === -1 ? '' : file.slice(dot)
}

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry === '.next' || entry === '.git') continue

    const path = join(dir, entry)
    const stat = statSync(path)

    if (stat.isDirectory()) {
      walk(path, files)
    } else if (EXTENSIONS.has(extension(path))) {
      files.push(path)
    }
  }

  return files
}

const failures = []

function arbitraryClassTokens(text) {
  const tokens = []
  const classNamePattern = /className=(?:"([^"]*)"|'([^']*)'|\{`([^`]*)`\})/g

  for (const match of text.matchAll(classNamePattern)) {
    const className = match[1] ?? match[2] ?? match[3] ?? ''
    for (const token of className.matchAll(/(?:[A-Za-z0-9_:/.-]+-)?\[[^\]\s]+\]/g)) {
      tokens.push(token[0])
    }
  }

  return tokens
}

for (const scanDir of SCAN_DIRS) {
  const absoluteDir = join(ROOT, scanDir)
  for (const absoluteFile of walk(absoluteDir)) {
    const file = relative(ROOT, absoluteFile)
    const text = readFileSync(absoluteFile, 'utf8')

    for (const rule of rules) {
      if (rule.test(file, text)) {
        failures.push(`${file}: ${rule.name}`)
      }
    }

    if (file.endsWith('.tsx')) {
      for (const token of arbitraryClassTokens(text)) {
        if (!ALLOWED_ARBITRARY_CLASS_TOKENS.has(token)) {
          failures.push(
            `${file}: New arbitrary Tailwind token "${token}". Move it into app/globals.css as a named token/component class.`
          )
        }
      }
    }
  }
}

if (failures.length > 0) {
  console.error('Style rule check failed:\n')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log('Style rule check passed.')
