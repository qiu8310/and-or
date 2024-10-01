import { andOr } from '../index.js'

// ES Module 中如果想用全局的 jest 变量，参考：
// https://jestjs.io/docs/ecmascript-modules#differences-between-esm-and-commonjs
// const globalJest = (import.meta as any).jest as typeof jest
// const jest = globalJest

describe('andOr', () => {

  const is = (n: string) => [ 'a', 'e', 'i', 'o', 'u' ].some(k => n.includes(k))
  it('logic 1', () => {
    expect(andOr('a', is)).toBe(true)
    expect(andOr('b', is)).toBe(false)
  })
  it('logic 2', () => {
    expect(andOr('( a || b )', is)).toBe(true)
    expect(andOr('a || b', is)).toBe(true)
    expect(andOr('( a && b )', is)).toBe(false)
    expect(andOr('a && b', is)).toBe(false)
  })

  it('logic 3', () => {
    expect(andOr('c && ( a || b )', is)).toBe(false)
    expect(andOr('( a || b ) && c', is)).toBe(false)
  })

  it('error', () => {
    expect(() => {
      andOr('a ( c', is)
    }).toThrowErrorMatchingInlineSnapshot(`"Unexpected transform "a ( c" => "true(false""`)
  })
})
