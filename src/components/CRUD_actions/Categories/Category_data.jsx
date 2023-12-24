import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_products_by_category_id } from '../../../store/actions/categories/get_products_by_category_id';
import { CategoryCard } from "../../Templates/Cards/CategoryCard/CategoryCard";

export const HandlerAddStudentToCourse = (id) => {
    const navigate = useNavigate();
    navigate(`/add-student-to-course/${id}`)
};


export const Category_data = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //the state => state.categories.categories came from the store state in the index file
    const categories = useSelector(state => state.categories.categories);//like this i can access to the specific categories state in the reducer 

    const handlerProducts_by_category = (id, data) => {
        console.log("handlerProducts_by_category", id);
        dispatch(get_products_by_category_id(id))
            .then(() => {
                navigate(`/products-by-category/${id}`, {
                    state: {
                        data: data,
                        category_id: id
                    }
                });
            })
            .catch((err) => {
                console.error('Failed to add products:', err);
            });
    }
    return (
        <div>
            <h1>Category details from Category_data Component </h1>
            <CategoryCard
                data={categories}
                onButtonClickGetProperties={(category) => handlerProducts_by_category(category.category_id, category)}
            />
        </div>
    );
};