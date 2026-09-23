type AdditionFormProps = {
  a: string
  b: string
  isLoading: boolean
  onAChange: (value: string) => void
  onBChange: (value: string) => void
  onSubmit: () => void
}

export function AdditionForm({ a, b, isLoading, onAChange, onBChange, onSubmit }: AdditionFormProps) {
  return (
    <form className="addition-form" onSubmit={(event) => { event.preventDefault(); onSubmit() }}>
      <label>
        <span>First number</span>
        <input inputMode="numeric" pattern="[0-9]*" value={a} onChange={(event) => onAChange(event.target.value)} placeholder="24" aria-label="First number" />
      </label>
      <div className="plus-sign" aria-hidden="true">+</div>
      <label>
        <span>Second number</span>
        <input inputMode="numeric" pattern="[0-9]*" value={b} onChange={(event) => onBChange(event.target.value)} placeholder="17" aria-label="Second number" />
      </label>
      <button className="calculate-button" type="submit" disabled={isLoading}>
        <span aria-hidden="true">{isLoading ? '...' : '='}</span>
        {isLoading ? 'Checking...' : 'Calculate'}
      </button>
    </form>
  )
}
