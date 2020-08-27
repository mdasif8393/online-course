import React from 'react';
import logo from './logo.svg';
import './App.css';
import courseInfo from './fakeData/FakeData';
import Course from './components/Course/Course';
import { useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {
  const [coursesInfo, setCoursesInfo] = useState(courseInfo);
  const [cart, setCart] = useState([]);

  const handleAddClick = (course) =>{
    const newItem = [...cart, course];
    setCart(newItem);
  }
  return (
    <div className='app-container container d-flex justify-content-center'>
      <div className="app-main-component">
        <div className='app-course-component'>
          {
            coursesInfo.map(course => <Course course={course} handleAddClick={handleAddClick}></Course>)
          }
        </div>
        <div>
          <Cart cart = {cart}></Cart>

        </div>
      </div>
    </div>
  );
}

export default App;
