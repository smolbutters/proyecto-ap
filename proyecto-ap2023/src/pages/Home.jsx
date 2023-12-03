import React from 'react'
import TaskList from '../components/TaskList'
import TaskItem from '../components/TaskItem'
import TaskForm from '../components/TaskForm'

const Home = () => {
  return (
    <div>
      <TaskList />
      <TaskItem />
      <TaskForm />
    </div>
  )
}

export default Home
