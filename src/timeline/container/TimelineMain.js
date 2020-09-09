import React from 'react'
import { getNextTimeline } from '../../common/mockData';
import { connect } from 'react-redux';
import { actions } from '../state';
import TimelineList from '../component/TimelineList.js';
function TimelineMain(props) {
  const onLike = (e) => {
    const { timelines } = props;
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find(item => item.id === id);
    props.requestLike(timeline);
  }
  const onAdd = () => {
    const timeline = getNextTimeline();
    props.addTimeline(timeline)
  };
  const { timelines, isLoading } = props;
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {!!isLoading && <p>전송중...</p>}
    </div>
  );
}

const mapStateToProps = state => ({
  timelines: state.timeline.timelines,
  isLoading: state.timeline.isLoading,
  nextPage: state.timeline.nextPage,
})

export default connect(
  mapStateToProps,
  actions,
)(TimelineMain);
