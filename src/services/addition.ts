import type { AdditionStep, Calculation, ColumnKind } from '../types'
import type { Language } from '../i18n'

const placeNames: Array<{ kind: ColumnKind; label: string }> = [
  { kind: 'ones', label: 'Ones' },
  { kind: 'tens', label: 'Tens' },
  { kind: 'hundreds', label: 'Hundreds' },
  { kind: 'thousands', label: 'Thousands' },
]

export function buildCalculation(a: number, b: number, total: number): Calculation {
  const topDigits = String(a).split('').reverse().map(Number)
  const bottomDigits = String(b).split('').reverse().map(Number)
  const steps: AdditionStep[] = []
  let carry = 0
  const columnCount = Math.max(topDigits.length, bottomDigits.length)

  for (let index = 0; index < columnCount; index += 1) {
    const topDigit = topDigits[index] ?? 0
    const bottomDigit = bottomDigits[index] ?? 0
    const carryIn = carry
    const subtotal = topDigit + bottomDigit + carryIn
    const resultDigit = subtotal % 10
    carry = Math.floor(subtotal / 10)
    const place = placeNames[index] ?? { kind: 'thousands' as const, label: `${10 ** index}s` }

    steps.push({
      index,
      kind: place.kind,
      placeLabel: place.label,
      topDigit,
      bottomDigit,
      carryIn,
      subtotal,
      resultDigit,
      carryOut: carry,
    })
  }

  if (carry > 0) {
    const place = placeNames[columnCount] ?? { kind: 'thousands' as const, label: `${10 ** columnCount}s` }
    steps.push({
      index: columnCount,
      kind: place.kind,
      placeLabel: place.label,
      topDigit: 0,
      bottomDigit: 0,
      carryIn: carry,
      subtotal: carry,
      resultDigit: carry,
      carryOut: 0,
    })
  }

  return { a, b, total, steps }
}

export function describeStep(step: AdditionStep, language: Language = 'en'): string {
  const carryText = step.carryIn > 0 ? ` ${language === 'vi' ? 'cộng thêm số nhớ' : 'plus the carried'} ${step.carryIn}` : ''
  if (step.subtotal >= 10 && step.carryOut > 0) {
    return language === 'vi'
      ? `${step.topDigit} + ${step.bottomDigit}${carryText} = ${step.subtotal}. Viết ${step.resultDigit}, nhớ ${step.carryOut}.`
      : `${step.topDigit} + ${step.bottomDigit}${carryText} = ${step.subtotal}. Write ${step.resultDigit}, carry ${step.carryOut}.`
  }
  return language === 'vi'
    ? `${step.topDigit} + ${step.bottomDigit}${carryText} = ${step.subtotal}. Viết ${step.resultDigit}.`
    : `${step.topDigit} + ${step.bottomDigit}${carryText} = ${step.subtotal}. Write ${step.resultDigit}.`
}
