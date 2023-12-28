import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Category_data } from '../../CRUD_actions/Categories/Category_data.jsx';
import { ProductCard } from '../Cards/ProductCard/ProductCard.jsx';
import { ProductCardProperties } from '../Cards/ProductCardProperties/ProductCardProperties.jsx';
import Shopping_cart from '../Shopping_cart/Shopping_cart.jsx';
import SignIn from '../../SignIn/SignIn.jsx';
import { AddCustomer } from '../../CRUD_actions/Customers/AddCustomer.jsx';

export const Main = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={< Category_data />} />
                <Route path="/products-by-category/:id" element={<ProductCard />} />
                <Route path="/products-by-id/:id" element={<ProductCardProperties />} />
                <Route path="/shopping-cart" element={<Shopping_cart />} />
                <Route path="/sign-up" element={<AddCustomer />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Routes>
        </div>
    )
}