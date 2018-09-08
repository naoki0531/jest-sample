import ActionCreator from '../resource/actionCreator';

test('add todo', () => {
  ActionCreator.addTodo('test', '2018/08/10');
});