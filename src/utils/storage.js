/**
 * 本地存储封装模块
 */

// 获取
export const getItem = name => {
  const data = window.localStorage.getItem(name)
  // data 可能不是json字符串，故用try
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

// 设置
export const setItem = (name, data) => {
  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }
  window.localStorage.setItem(name, data)
}

// 删除

export const removeItem = name => {
  window.localStorage.removeItem(name)
}
