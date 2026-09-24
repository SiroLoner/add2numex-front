import { copy, type Language } from '../i18n'

const examples = [
  [24, 17],
  [58, 26],
  [137, 245],
] as const

type ExampleSelectorProps = { language: Language; onSelect: (a: number, b: number) => void }

export function ExampleSelector({ language, onSelect }: ExampleSelectorProps) {
  const text = copy[language]

  return (
    <div className="examples" aria-label={text.tryExample}>
      <span className="examples-label">{text.tryExample}</span>
      <div className="example-buttons">
        {examples.map(([a, b]) => (
          <button key={`${a}-${b}`} type="button" onClick={() => onSelect(a, b)}>{a} + {b}</button>
        ))}
      </div>
    </div>
  )
}
