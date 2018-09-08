import ActionCreator from './actionCreator';
import CardList from './view/CardList';

const addButton = document.getElementsByClassName('js-add')[0];
const inputName = document.getElementsByClassName('js-name')[0];
const inputDate = document.getElementsByClassName('js-date')[0];
new CardList('js-card-list');

addButton.addEventListener('click', () => {
  ActionCreator.addTodo(inputName.value, inputDate.value);
});