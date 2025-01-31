import React, { useEffect } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import Showtodo from './Showtodo';
import AddTodo from './AddTodo';

const Home = () => {
  const { data,task} = useAuthStore();  
  const todos = task
  
  useEffect(() => {
    data()
  },[])
  return (
    <div className='flex flex-col gap-4 mx-auto'>
      <AddTodo/>
      <Showtodo todos={todos}/>
    </div>
  )
}

export default Home