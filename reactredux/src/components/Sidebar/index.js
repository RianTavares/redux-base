import React from 'react';

const modules = [
  {
    id: 1,
    title: "Iniciando com React",
    lessons: [
      { id: 1, title: "Primeira Aula" },
      { id: 2, title: "Segunda Aula" }    
    ]
  },
  {
    id: 2,
    title: "Aprendendo Redux",
    lessons: [
      { id: 3, title: "Terceira Aula" },
      { id: 4, title: "Quarta Aula" }    
    ]
  }
]

const Sidebar = () => {
  return (
    <aside>
      {modules.map(module => {
        return (
          <div key={module.id}>
            <strong>{module.title}</strong>
            <ul>
              {module.lessons.map(lesson => {
                return (
                  <li key={lesson.id}>{lesson.title}</li>
                )
                })}
            </ul>
          </div>
        )
      })}
    </aside>
  )
}

export default Sidebar;