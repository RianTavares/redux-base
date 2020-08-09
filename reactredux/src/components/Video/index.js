import React from 'react';
import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => {
  return (
    <div>
      <strong>Módulo {activeModule.title} - </strong>
      <span> {activeLesson.title}</span>
    </div>
  )
}

export default connect(state => ({
  activeModule: state.classes.activeModule,
  activeLesson: state.classes.activeLesson
}))(Video);