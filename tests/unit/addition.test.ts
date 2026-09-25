import { describe, expect, it } from 'vitest'
import { buildCalculation, describeStep } from '../../src/services/addition'

 describe('buildCalculation', () => {
  it('explains addition without carrying', () => {
    const calculation = buildCalculation(12, 34, 46)
    expect(calculation.steps.map((step) => step.resultDigit)).toEqual([6, 4])
    expect(calculation.steps.every((step) => step.carryOut === 0)).toBe(true)
  })

  it('tracks a single carry', () => {
    const calculation = buildCalculation(24, 17, 41)
    expect(calculation.steps.map((step) => step.carryOut)).toEqual([1, 0])
    expect(calculation.steps[1].carryIn).toBe(1)
  })

  it('tracks multiple carries and different lengths', () => {
    const calculation = buildCalculation(999, 2, 1001)
    expect(calculation.steps.map((step) => step.resultDigit)).toEqual([1, 0, 0, 1])
    expect(calculation.steps.map((step) => step.carryIn)).toEqual([0, 1, 1, 1])
  })

  it('describes a step in both supported languages', () => {
    const step = buildCalculation(8, 7, 15).steps[0]
    expect(describeStep(step, 'en')).toContain('carry 1')
    expect(describeStep(step, 'vi')).toContain('nhớ 1')
  })
})
