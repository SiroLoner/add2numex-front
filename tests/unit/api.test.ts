import { afterEach, describe, expect, it, vi } from 'vitest'
import { requestAddition } from '../../src/services/api'

afterEach(() => vi.restoreAllMocks())

describe('requestAddition', () => {
  it('sends the documented payload and reads sum', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ sum: 579 }), { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)

    await expect(requestAddition(123, 456)).resolves.toBe(579)
    expect(fetchMock).toHaveBeenCalledWith('/api/v1/additions', expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({ firstNumber: '123', secondNumber: '456' }),
    }))
  })

  it('rejects an unreadable response without exposing its contents', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(JSON.stringify({ message: 'internal detail' }), { status: 200 })))

    await expect(requestAddition(1, 2)).rejects.toThrow('We received an answer we could not read.')
  })

  it('does not treat null or an empty string as zero', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(JSON.stringify({ sum: null }), { status: 200 })))

    await expect(requestAddition(1, 2)).rejects.toThrow('We received an answer we could not read.')
  })

  it('turns failed requests into a friendly error', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('', { status: 503 })))

    await expect(requestAddition(1, 2)).rejects.toThrow('The addition helper is taking a little break.')
  })
})
