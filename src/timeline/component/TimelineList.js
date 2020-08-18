import React from 'react';

function TimelineList({ timelines, onLike }) {
  const list = timelines.map(({ id, desc, likes }) => (
    <li key={id}>
      {desc}
      <button data-id={id} onClick={onLike}>
        {`좋아요(${likes})`}
      </button>
    </li>
  ))
  return (
    <ul>
      {list}
      {/*{timelines.map(timeline => (*/}
      {/*  <li key={timeline.id}>{timeline.desc}</li>*/}
      {/*))}*/}
    </ul>
  );
}
export default TimelineList;
