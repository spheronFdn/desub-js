/**
 * Defines a property with writable permission
 */
function defineWriteOnly<T, K extends keyof T>(object: T, name: K, value: T[K]): void {
  Object.defineProperty(object, name, {
    enumerable: false,
    value: value,
    writable: true,
  })
}

/**
 * Clone an object with all writable properties
 */
function cloneWithWriteAccess(o: any): any {
  if (Array.isArray(o)) return o.map((item) => cloneWithWriteAccess(item))

  if (typeof o === 'object') {
    const result: { [key: string]: any } = {}
    for (const key in o) {
      if (o.hasOwnProperty(key)) {
        const value = o[key]
        if (value === undefined) continue
        defineWriteOnly(result, key, cloneWithWriteAccess(value))
      }
    }
    return result
  }
  return o
}

export { cloneWithWriteAccess }
