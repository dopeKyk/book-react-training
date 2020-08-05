import createReducer from './createReducer';

export default function createItemsLogic(name) {
  const ADD = `${name}/ADD`;
  const REMOVE = `${name}/REMOVE`;
  const EDIT = `${name}/EDIT`;

  const add = item => ({ type: ADD, item });
}
