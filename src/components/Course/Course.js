import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Course.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Course = (props) => {
    const course = props.course;
    const {name,instructor,price,img} = course;
    const handleAddClick = props.handleAddClick;
    return (
        <div className="course-component-courses-info d-flex justify-content-center">
            <div className='image-component'>
                <img className='img-thumbnail img-fluid' src={img} alt=""/>
            </div>
            <div className='course-component-single-course-info'>
                <h4>Course Name: <span className='course-component-text-decoration'>{name}</span></h4>
                <h4>Price: <span className='course-component-text-decoration'>${price}</span></h4>
                <p>Instructor: <span className='course-component-text-decoration'> {instructor}</span></p>
                <button  className="btn btn-primary" onClick={()=>handleAddClick(course)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
        </div>
        </div>
        
    );
};

export default Course;