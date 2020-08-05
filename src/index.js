import { createStore, combineReducers } from 'redux'
import timelineReducer, {
  addTimeLine,
  removeTimeLine,
  editTimeLine,
  increaseNextPage,
} from './timeline/state';
import friendReducer, {
  addFriend,
  removeFriend,
  editFriend
} from './friend/state'

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});
const store = createStore(reducer);
store.subscribe(() => {
  const state = store.getState();
  console.log(state)
})

store.dispatch(addTimeLine({ id:1, desc: '코딩지옥' }))
store.dispatch(addTimeLine({ id:2, desc: '리액트지옥' }))
store.dispatch(increaseNextPage());
