import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ClassesActions from '../../store/actions/classes';

const Sidebar = ({ modules, toggleLesson }) => {
  return (
    <aside>
      {modules.map(module => {
        return (
          <div key={module.id}>
            <strong>{module.title}</strong>
            <ul>
              {module.lessons.map(lesson => {
                return (
                  <li key={lesson.id}>
                    {lesson.title}
                    <button onClick={() => toggleLesson(module, lesson)}>
                      Selecionar  
                    </button>
                  </li>
                )
                })}
            </ul>
          </div>
        )
      })}
    </aside>
  )
}

const mapStateToProps = state => ({
  modules: state.classes.modules
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ClassesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);