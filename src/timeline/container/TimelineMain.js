import React from 'react'
import { connect } from 'react-redux'
import { getNextTimeline } from '../../common/mockData'
import { addTimeline } from '../state'
import TimelineList from '../component/TimelineList'

function TimelineMain(props) {
  const onAdd = () => {
    const timeline = getNextTimeline();
    props.addTimeline(timeline)
  }
  return (
    <div>
      <button onClick={onAdd}>
        타임라인 추가
      </button>
      <TimelineList timelines={props.timelines} />
    </div>
  )
}
const mapStateToProps = state => {
  return {
    timelines: state.timeline.timelines,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTimeline: timeline => {
      dispatch(addTimeline(timeline))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineMain)
