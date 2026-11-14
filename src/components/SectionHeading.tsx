type Props = {
  eyebrow: string
  title: string
  lead?: string
  id: string
  align?: 'center' | 'left'
}

export default function SectionHeading({ eyebrow, title, lead, id, align = 'center' }: Props) {
  const centered = align === 'center'
  return (
    <div className={`reveal ${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-4 font-display text-3xl leading-tight font-bold text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">{lead}</p>}
    </div>
  )
}
