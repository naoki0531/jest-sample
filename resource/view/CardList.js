import CardStore from '../store/CardStore';

export default class CardList {
  constructor(id) {
    this._node = document.getElementById(id);
    CardStore.on('CHANGE', () => this.create());
  }

  create() {
    this._node.innerHTML = '';
    for (const card of CardStore.list) {
      const tag = document.createElement('li');
      tag.innerText = card.name + ' ' + card.date;
      this._node.appendChild(tag);
    }
  }
}