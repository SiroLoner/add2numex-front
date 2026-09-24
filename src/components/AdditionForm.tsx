type AdditionFormProps = {
  a: string
  b: string
  isLoading: boolean
  onAChange: (value: string) => void
  onBChange: (value: string) => void
  onSubmit: () => void
}

const digitsOnly = (value: string) => value.replace(/\D/g, '')

export function AdditionForm({ a, b, isLoading, onAChange, onBChange, onSubmit }: AdditionFormProps) {
  return (
    <form className="addition-form" onSubmit={(event) => { event.preventDefault(); onSubmit() }}>
      <label>
        <span>First number</span>
        <input type="number" inputMode="numeric" min="0" step="1" value={a} onChange={(event) => onAChange(digitsOnly(event.target.value))} placeholder="24" aria-label="First number" />
      </label>
      <div className="plus-sign" aria-hidden="true">+</div>
      <label>
        <span>Second number</span>
        <input type="number" inputMode="numeric" min="0" step="1" value={b} onChange={(event) => onBChange(digitsOnly(event.target.value))} placeholder="17" aria-label="Second number" />
      </label>
      <button className="calculate-button" type="submit" disabled={isLoading}>
        <span aria-hidden="true">{isLoading ? '...' : '='}</span>
        {isLoading ? 'Checking...' : 'Calculate'}
      </button>
    </form>
  )
}
