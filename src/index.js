import { createStore, combineReducers } from 'redux'
import timelineReducer, {
  addTimeline,
  removeTimeline,
  editTimeline,
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

// store.subscribe(() => {
//   const state = store.getState();
//   console.log(state)
// })

// store.dispatch(addTimeLine({ id: 1, desc: '코딩은 지옥' }));
// store.dispatch(addTimeLine({ id: 2, desc: '리덕스 지옥' }));
// store.dispatch(increaseNextPage());
// store.dispatch(editTimeLine({ id: 2, desc: '리덕스 너무 지옥' }));
// store.dispatch(removeTimeLine({ id: 1, desc: '코딩은 지옥' }));

// store.dispatch(addFriend({ id: 1, name: '아이유' }));
// store.dispatch(addFriend({ id: 2, name: '손나은' }));
// store.dispatch(editFriend({ id: 2, name: '권나라' }));
// store.dispatch(removeFriend({ id: 1, name: '아이유' }));
// store.dispatch(removeFriend({ id: 2, name: '권나라' }));
