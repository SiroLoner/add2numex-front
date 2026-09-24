import { copy, type Language } from '../i18n'

type AdditionFormProps = {
  language: Language
  a: string
  b: string
  isLoading: boolean
  onAChange: (value: string) => void
  onBChange: (value: string) => void
  onSubmit: () => void
}

const digitsOnly = (value: string) => value.replace(/\D/g, '')

export function AdditionForm({ language, a, b, isLoading, onAChange, onBChange, onSubmit }: AdditionFormProps) {
  const text = copy[language]

  return (
    <form className="addition-form" onSubmit={(event) => { event.preventDefault(); onSubmit() }}>
      <label>
        <span>{text.firstNumber}</span>
        <input type="number" inputMode="numeric" min="0" step="1" value={a} onChange={(event) => onAChange(digitsOnly(event.target.value))} placeholder="24" aria-label={text.firstNumber} />
      </label>
      <div className="plus-sign" aria-hidden="true">+</div>
      <label>
        <span>{text.secondNumber}</span>
        <input type="number" inputMode="numeric" min="0" step="1" value={b} onChange={(event) => onBChange(digitsOnly(event.target.value))} placeholder="17" aria-label={text.secondNumber} />
      </label>
      <button className="calculate-button" type="submit" disabled={isLoading}>
        <span aria-hidden="true">{isLoading ? '...' : '='}</span>
        {isLoading ? text.checking : text.calculate}
      </button>
    </form>
  )
}
