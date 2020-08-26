import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    let total = 0;
    for (let i = 0; i < cart.length; i++){
        const item = cart[i];
        total = total + item.price;
    }
    return (

        <div>
            <div>
            {
                cart.map(course=>
                <div>
                    <p>{course.name}</p>
                    <p> {course.price} </p>
                </div>
                )
            }
            </div>
            <div>
            <h4>Total price: {total}</h4>
            </div>
            
        </div>
    );
};

export default Cart;