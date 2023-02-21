import React from 'react'
import './CartWidget.css'

export const CartWidget = () => {
    return (
        <>
            <div>
                <button className="cestaCarrito"><i class="fas fa-shopping-cart"></i><span id="contador-carrito">0</span></button>
            </div>
        </>
    );
}