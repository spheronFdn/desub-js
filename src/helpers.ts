/**
 * Defines a property with writable permission
 */
function defineWriteOnly<T, K extends keyof T>(object: T, name: K, value: T[K]): void {
  Object.defineProperty(object, name, {
    value,
    writable: true,
    enumerable: false,
  })
}

/**
 * Clone an object with all writable properties
 */
function cloneWithWriteAccess<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map((item) => cloneWithWriteAccess(item)) as unknown as T
  }

  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  const result = {} as T
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key]
      if (value === undefined) {
        continue
      }
      defineWriteOnly(result, key, cloneWithWriteAccess(value))
    }
  }
  return result
}

export { cloneWithWriteAccess }
