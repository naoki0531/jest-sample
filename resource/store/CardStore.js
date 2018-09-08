import EventEmitter from '../eventEmitter';
import Card from './Card';

class CardStore extends EventEmitter {
  get list() {
    return this._list;
  }

  constructor() {
    super();
    this._list = [];
  }

  _ADD_TODO(data) {
    this._list.push(new Card(data.name, data.date));
    this.emit('CHANGE');
  }
}

export default new CardStore();