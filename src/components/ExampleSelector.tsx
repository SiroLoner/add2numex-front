const examples = [
  [24, 17],
  [58, 26],
  [137, 245],
] as const

type ExampleSelectorProps = { onSelect: (a: number, b: number) => void }

export function ExampleSelector({ onSelect }: ExampleSelectorProps) {
  return (
    <div className="examples" aria-label="Try an example">
      <span className="examples-label">Try an example</span>
      <div className="example-buttons">
        {examples.map(([a, b]) => (
          <button key={`${a}-${b}`} type="button" onClick={() => onSelect(a, b)}>{a} + {b}</button>
        ))}
      </div>
    </div>
  )
}
