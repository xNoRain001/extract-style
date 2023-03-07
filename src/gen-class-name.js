const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const genClassName = (n = 32) => {
  let res = ''

  for (let i = 0; i < n; i++) {
    const index = Math.floor(Math.random() * 52)
    
    res += letters[index]
  }

  return res
}

module.exports = genClassName
