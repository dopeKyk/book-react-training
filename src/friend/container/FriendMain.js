import React from 'react';
import { getNextFriend } from '../../common/mockData';
import { addFriend, setAgeLimit, setShowLimit } from '../state';
import FriendList from '../component/FriendList';
import { connect } from 'react-redux';
import NumberSelect from '../component/NumberSelect'
import { MAX_SHOW_LIMIT, MAX_AGE_LIMIT } from '../../friend/common'

const ageLimitOptions = [15, 20, 25, MAX_AGE_LIMIT]
const showLimitOptions = [2, 4, 6, MAX_SHOW_LIMIT]

function FriendMain (props) {
  // console.log(store.getState())
  // console.log('FriendMain: ', props)
  const onAdd = () => {
    const friend = getNextFriend();
    props.addFriend(friend);
  };
  const {
    friendsWithAgeLimit,
    friendsWithAgeShowLimit,
    ageLimit,
    showLimit,
    setAgeLimit,
    setShowLimit
  } = props;
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        onChange={setAgeLimit}
        value={ageLimit}
        options={ageLimitOptions}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={setShowLimit}
        value={showLimit}
        options={showLimitOptions}
        postfix="명 이하만 보기"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
}

const mapStateToProps = state => {
  const friends = state.friend.friends;
  const ageLimit = state.friend.ageLimit;
  const showLimit = state.friend.showLimit;
  const friendsWithAgeLimit = friends.filter(friend => friend.age <= ageLimit);
  const friendsWithAgeShowLimit = friendsWithAgeLimit.slice(0, showLimit);
  return {
    ageLimit,
    showLimit,
    friendsWithAgeLimit,
    friendsWithAgeShowLimit,
  };
};

// mapDispatchToProps 함수로 액션 전달하기
const mapDispatchToProps = dispatch => {
  return {
    addFriend: friend => {
      dispatch(addFriend(friend));
    },
    setAgeLimit: age => {
      dispatch(setAgeLimit(age))
    },
    setShowLimit: limit => {
      dispatch(setShowLimit(limit))
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FriendMain);
