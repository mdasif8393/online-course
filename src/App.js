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
    <div>
      <div className="main-component">
        <div className='course-component'>
          {
            coursesInfo.map(course => <Course course={course} handleAddClick={handleAddClick}></Course>)
          }
        </div>
        <div className='cart-component'>
          <Cart cart = {cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
