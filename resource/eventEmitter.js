import Dispatcher from './dispatcher';

export default class EventEmitter {
  constructor() {
    /**
     * @type {Map<String, Array>}
     * @private
     */
    this._callbacks = new Map();

    Dispatcher.register((action) => {
      const actionName = `_${action.type}`;
      if (actionName in this) {
        this[actionName](action.data);
      }
    });
  }

  on(type, callback) {
    if (this._callbacks.has(type)) {
      this._callbacks.get(type).push(callback);
    } else {
      this._callbacks.set(type, [callback]);
    }
  }

  emit(type) {
    if (this._callbacks.has(type)) {
      for (const callback of this._callbacks.get(type).values()) {
        callback();
      }
    }
  }
}