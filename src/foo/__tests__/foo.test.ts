import { foo } from '../foo.js'

// ES Module 中如果想用全局的 jest 变量，参考：
// https://jestjs.io/docs/ecmascript-modules#differences-between-esm-and-commonjs
const globalJest = (import.meta as any).jest as typeof jest

describe('foo', () => {
  const jest = globalJest

  it('should behave...', () => {
    expect(foo).toBe('foo')
    expect(typeof jest.fn === 'function').toBe(true)
    const obj = { a: true }
    expect({ ...obj }).toEqual(obj) // 触发导入 tslib，确保不会报错（低版本 jest 会报错）
  })
})
