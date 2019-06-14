function watch(context, obj) {
  let keys = Object.keys(context.data);
  for (let i = 0; i < keys.length; i++) {
    let value = context.data[keys[i]];
    Object.defineProperty(context.data, keys[i], {
      configurable: true,
      enumerable: true,
      get() {
        return value
      },
      set(newValue) {
        if (value === newValue) {
          return
        } else {
          value = newValue;
          obj.hasOwnProperty(keys[i]) && obj[keys[i]].call(context)
        }
      }
    })
  }
}

module.exports.watch = watch;