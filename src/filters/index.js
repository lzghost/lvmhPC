// 格式化日期 yyyy-MM-dd
let dateFormat = value => {
  if (!value) return ''
  let date = new Date(value)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  return year + '-' + (month > 9 ? month : '0' + month) + '-' + (day > 9 ? day : '0' + day)
}

// 格式化时间 yyyy-MM-dd hh:mm:ss
let timeFormat = value => {
  if (!value) return ''
  let date = new Date(value)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  let time = (hour > 9 ? hour : '0' + hour) + ':' + (minute > 9 ? minute : '0' + minute) + ':' + (second > 9 ? second : '0' + second)
  return year + '-' + (month > 9 ? month : '0' + month) + '-' + (day > 9 ? day : '0' + day) + ' ' + time
}

export { dateFormat, timeFormat }
