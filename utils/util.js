const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  regPhone: /^(1)\d{10}$/,
  regYzm: /^\d{6}$/,
  regCount: /^\+?[1-9]\d*$/,
  regNumber: /^(\d+|\d+\.\d+|\.\d+)$/,
  regInteger: /^[0-9]*$/,
  regNumberAndWord: /^[0-9a-zA-Z]+$/
}
