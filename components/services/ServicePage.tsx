type Props = {
  title: string
  category: string
  headline: string
  emphasis: string
  price: string
}

export default function ServicePage({
  title,
  category,
  headline,
  emphasis,
  price,
}: Props) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm text-neutral-500">Services / {title}</p>

      <p className="mt-4 text-sm font-medium text-[#ff6b00]">
        {category}
      </p>

      <h1 className="mt-4 text-5xl font-semibold leading-tight text-neutral-900">
        {headline}
      </h1>

      <h2 className="mt-2 text-5xl font-semibold italic text-[#ff6b00]">
        {emphasis}
      </h2>

      <p className="mt-6 max-w-2xl text-lg text-neutral-600">
        We create beautifully planned events with a calm, reliable process from
        the first conversation to the final guest departure.
      </p>

      <button className="mt-8 rounded-full bg-black px-6 py-3 text-white">
        What’s included
      </button>

      <section className="mt-20">
        <p className="text-sm text-neutral-500">— what’s included —</p>
        <h3 className="mt-3 text-3xl font-semibold">Everything, handled.</h3>

        <p className="mt-4 text-2xl font-semibold text-[#ff6b00]">
          from ₹{price} per event
        </p>
      </section>

      <section className="mt-20 rounded-[32px] bg-neutral-50 p-10 text-center">
        <h3 className="text-3xl font-semibold text-neutral-900">
          Let’s plan your event
        </h3>

        <p className="mt-3 text-neutral-600">
          We usually respond within 24 hours. No obligation, just a conversation.
        </p>

        <button className="mt-6 rounded-full bg-[#ff6b00] px-8 py-3 font-medium text-white">
          Get a proposal
        </button>
      </section>
    </main>
  )
}