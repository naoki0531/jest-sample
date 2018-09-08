class Dispatcher {
  constructor() {
    this._callbacks = [];
  }

  register(callback) {
    this._callbacks.push(callback);
  }

  dispatch(action) {
    for (const callback of this._callbacks) {
      callback(action);
    }
  }
}

export default new Dispatcher();