import Header from './componets/Header';
import Tasks from './componets/Tasks';
import { useState } from 'react'


function App() {


  const [TasksData, setTasks] = useState([
    {
      id: 1,
      text: "cleaning bedRoom",
      day: "Sunday",
      date: "15-10-2022",
      reminder: true
    }, {
      id: 2,
      text: "Studying",
      day: "Monday",
      date: "13-10-2022",
      reminder: true


    }, {
      id: 3,
      text: "Showering",
      day: "Friday",
      date: "15-10-2022",
      reminder: false


    }, {
      id: 4,
      text: "Sleep Early",
      day: "Sunday",
      date: "15-10-2022",
      reminder: true
    }

  ])

  const dele = (id) => {
    setTasks(TasksData.filter((t) => t.id !== id))
  }
  const reminderClick = (id) => {
    setTasks(TasksData.map((t) => (t.id == id ? { ...t, reminder: !t.reminder } : t)))
  }

  return (
    <div className='container'>
      <Header />
      {TasksData.length > 0 ? <Tasks tasks={TasksData} onDeleteClick={dele}
        remind={reminderClick} /> : "No Tasks to show"}
    </div>
  );
}

export default App;
