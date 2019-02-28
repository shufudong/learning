function call() {
  let tmp: Map<number, string> = new Map()
  tmp.set(1, 'shufd')
  tmp.set(2, '王倩')
  for (let [key, value] of tmp) {
    console.log('key is %s,and value is %s', key, value)
  }
}

call()
