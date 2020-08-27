import React from 'react';
import './Cart.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    let total = 0;
    for (let i = 0; i < cart.length; i++){
        const item = cart[i];
        total = total + item.price;
    }
    return (

        <div className="cart-component-container d-flex justify-content-center">
            <div>
                <h4 className="cart-component-text-decoration">Order Summary</h4>
            {
                cart.map(course=>
                <div className="cart-component-single-cart-item ">
                    <h6>Course: <span className="cart-component-text-decoration"> {course.name}</span></h6>
                    <h6>Price:<span className="cart-component-text-decoration"> ${course.price}</span> </h6>
                </div>
                )
            }
            </div>
            <div>
            <h5> Total purchase Courses: <span style={{color: 'red'}}>{cart.length}</span></h5>
            <h5>Total price:<span style={{color: 'red'}}> ${(total).toFixed(2)}</span></h5>
            <button className='btn btn-danger'>Confim Order</button>
            </div>
            
        </div>
    );
};

export default Cart;