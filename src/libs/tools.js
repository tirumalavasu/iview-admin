export const forEach = (arr, fn) => {
  if (!arr.length || !fn) return
  let i = -1
  let len = arr.length
  while (++i < len) {
    let item = arr[i]
    fn(item, i, arr)
  }
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description Get the intersection of two arrays whose values are numeric or string
 */
export const getIntersection = (arr1, arr2) => {
  let len = Math.min(arr1.length, arr2.length)
  let i = -1
  let res = []
  while (++i < len) {
    const item = arr2[i]
    if (arr1.indexOf(item) > -1) res.push(item)
  }
  return res
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description Get the union of two arrays whose values are numeric or string
 */
export const getUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]))
}

/**
 * @param {Array} target Target array
 * @param {Array} arr Array to be queried
 * @description Determine if the array to be queried contains at least one element in the target array
 */
export const hasOneOf = (targetarr, arr) => {
  return targetarr.some(_ => arr.indexOf(_) > -1)
}

/**
 * @param {String|Number} value The string or value to validate
 * @param {*} validList List used for verification
 */
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

/**
 * @param {Number} timeStamp Determine if the timestamp format is milliseconds
 * @returns {Boolean}
 */
const isMillisecond = timeStamp => {
  const timeStr = String(timeStamp)
  return timeStr.length > 10
}

/**
 * @param {Number} timeStamp Incoming timestamp
 * @param {Number} currentTime Current time stamp
 * @returns {Boolean} Whether the incoming timestamp is earlier than the current timestamp
 */
const isEarly = (timeStamp, currentTime) => {
  return timeStamp < currentTime
}

/**
 * @param {Number} num Numerical value
 * @returns {String} Processed string
 * @description If the value passed in is less than 10, that is, the number of digits is only 1 digit, then 0 is added in front.
 */
const getHandledValue = num => {
  return num < 10 ? '0' + num : num
}

/**
 * @param {Number} timeStamp Incoming timestamp
 * @param {Number} startType The format type of the time string to be returned, passing 'year' returns the full time at the beginning of the year
 */
const getDate = (timeStamp, startType) => {
  const d = new Date(timeStamp * 1000)
  const year = d.getFullYear()
  const month = getHandledValue(d.getMonth() + 1)
  const date = getHandledValue(d.getDate())
  const hours = getHandledValue(d.getHours())
  const minutes = getHandledValue(d.getMinutes())
  const second = getHandledValue(d.getSeconds())
  let resStr = ''
  if (startType === 'year') resStr = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + second
  else resStr = month + '-' + date + ' ' + hours + ':' + minutes
  return resStr
}

/**
 * @param {String|Number} timeStamp timestamp
 * @returns {String} relative time string
 */
export const getRelativeTime = timeStamp => {
    // determine whether the current incoming timestamp is a second format or a millisecond
    const IS_MILLISECOND = isMillisecond(timeStamp)
    // If it is a millisecond format, it will be converted to the second format.
    if (IS_MILLISECOND) Math.floor(timeStamp /= 1000)
    // The incoming timestamp can be a numeric or string type, which is converted to a numeric type here.
    timeStamp = Number(timeStamp)
    // get the current time stamp
    const currentTime = Math.floor(Date.parse(new Date()) / 1000)
    // determine whether the incoming timestamp is earlier than the current timestamp
    const IS_EARLY = isEarly(timeStamp, currentTime)
    // Get two timestamp differences
    let diff = currentTime - timeStamp
    // If the IS_EARLY is false then the difference is inverted
    if (!IS_EARLY) diff = -diff
    let resStr = ''
    const dirStr = IS_EARLY ? 'previous' : 'after'
    // less than or equal to 59 seconds
    if (diff <= 59) resStr = diff + 'second' + dirStr
    // More than 59 seconds, less than or equal to 59 minutes and 59 seconds
    else if (diff > 59 && diff <= 3599) resStr = Math.floor(diff / 60) + 'minutes' + dirStr
    // More than 59 minutes and 59 seconds, less than or equal to 23 hours, 59 minutes, 59 seconds
    else if (diff > 3599 && diff <= 86399) resStr = Math.floor(diff / 3600) + 'hour' + dirStr
    // More than 23 hours, 59 minutes, 59 seconds, less than or equal to 29 days, 59 minutes, 59 seconds
    else if (diff > 86399 && diff <= 2623859) resStr = Math.floor(diff / 86400) + 'day' + dirStr
    // More than 29 days 59 minutes 59 seconds, less than 364 days 23 hours 59 minutes 59 seconds, and the incoming timestamp is earlier than the current
    else if (diff > 2623859 && diff <= 31567859 && IS_EARLY) resStr = getDate(timeStamp)
    else resStr = getDate(timeStamp, 'year')
    return resStr
  }
  
  /**
   * @returns {String} current browser name
   */
  export const getExplorer = () => {
    const ua = window.navigator.userAgent
    const isExplorer = (exp) => {
      return ua.indexOf(exp) > -1
    }
    if (isExplorer('MSIE')) return 'IE'
    else if (isExplorer('Firefox')) return 'Firefox'
    else if (isExplorer('Chrome')) return 'Chrome'
    else if (isExplorer('Opera')) return 'Opera'
    else if (isExplorer('Safari')) return 'Safari'
  }

/**
 * @description Binding event on(element, event, handler)
 */
export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * @description Untie event off(element, event, handler)
 */
export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

/**
  * Determine whether an object has a key. If the second parameter key is passed, it is determined whether the obj object has a key.
  * If there is no parameter passed in the key, then determine if the obj object has a key-value pair.
  */
export const hasKey = (obj, key) => {
  if (key) return key in obj
  else {
    let keysArr = Object.keys(obj)
    return keysArr.length
  }
}

/**
  * @param {*} obj1 object
  * @param {*} obj2 object
  * @description determines whether two objects are equal. The values of these two objects can only be numbers or strings.
  */
export const objEqual = (obj1, obj2) => {
  const keysArr1 = Object.keys(obj1)
  const keysArr2 = Object.keys(obj2)
  if (keysArr1.length !== keysArr2.length) return false
  else if (keysArr1.length === 0 && keysArr2.length === 0) return true
  /* eslint-disable-next-line */
  else return !keysArr1.some(key => obj1[key] != obj2[key])
}
