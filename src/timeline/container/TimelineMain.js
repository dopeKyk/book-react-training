import React, { useEffect, useState } from 'react'
import store from '../../common/store'
import { getNextTimeline } from '../../common/mockData'
import { addTimeline} from '../state'
import TimelineList from '../component/TimelineList'

function TimelineMain() {
  const [timelines, setTimeLines] = useState([])

  store.subscribe(() => {
    const timelines = store.getState().timeline.timelines
    setTimeLines(timelines)
  })

  const onAdd = () => {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline))
  }

  return (
    <div>
      <button onClick={onAdd}>
        타임라인 추가
      </button>
      <TimelineList timelines={timelines} />
    </div>
  )
}

export default TimelineMain;
