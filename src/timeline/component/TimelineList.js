import React from 'react';

function TimelineList({ timelines }) {
  const list = timelines.map(timeline => (
    <li key={timeline.id}>
      {timeline.desc}
    </li>
  ))
  return (
    <ul>
      {list}
    </ul>
  )
}

export default TimelineList;
