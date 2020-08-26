import React from 'react';
import './Course.css'
const Course = (props) => {
    const course = props.course;
    const {name,instructor,price} = course;
    const handleAddClick = props.handleAddClick;
    return (
        <div className='course-info'>
            <p>Course Name: {name}</p>
            <p>Instructor: {instructor}</p>
            <p>Price: {price}</p>
            <button onClick={()=>handleAddClick(course)}>add to cart</button>
        </div>
    );
};

export default Course;