import { customRef } from 'vue'


export function useDebounceRef<T> (value: T, delay = 200) {
  let timeOutId: any
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue: T) {
        clearTimeout(timeOutId)
        timeOutId = setTimeout(() => {
          value = newValue
          trigger() 
        }, delay)
      }
    }
  })
}

export function useThrottleRef<T> (value: T, delay = 200) {
  let flag = false
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue: T) {
        if(flag) return
        flag = true 
        setTimeout(() => {
          value = newValue
          flag = false
          trigger() 
        }, delay)
      }
    }
  })  
}