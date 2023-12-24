import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Category_data } from '../../CRUD_actions/Categories/Category_data.jsx';
import { ProductCard } from '../Cards/ProductCard/ProductCrd.jsx';

export const Main = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={< Category_data />} />
                <Route path="/products-by-category/:id" element={<ProductCard />} />
            </Routes>
        </div>
    )
}