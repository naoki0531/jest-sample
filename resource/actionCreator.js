import Dispatcher from './dispatcher';

class ActionCreator {
  addTodo(name, date) {
    Dispatcher.dispatch({type: 'ADD_TODO', data: {name, date}})
  }
}

export default new ActionCreator();