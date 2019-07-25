const ls = localStorage

export default {
  get() {
    return ls.getItem('token')
  },
  set(value) {
    ls.setItem('token', value)
  },
  remove() {
    ls.removeItem('token')
  },
  exists() {
    return !!this.get()
  },
  clear() {
    ls.clear()
  }
}