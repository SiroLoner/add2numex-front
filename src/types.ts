export type ColumnKind = 'ones' | 'tens' | 'hundreds' | 'thousands'

export type AdditionStep = {
  index: number
  kind: ColumnKind
  placeLabel: string
  topDigit: number
  bottomDigit: number
  carryIn: number
  subtotal: number
  resultDigit: number
  carryOut: number
}

export type Calculation = {
  a: number
  b: number
  total: number
  steps: AdditionStep[]
}
