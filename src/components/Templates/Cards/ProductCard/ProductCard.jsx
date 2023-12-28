import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'; // Assuming you are using React Router
import { get_products_by_category_id } from '../../../../store/actions/categories/get_products_by_category_id';
import { get_product_by_id } from '../../../../store/actions/products/get_products_by_id';
import { add_product_to_cart, remove_product_from_cart } from '../../../../store/features/productsSlice';



export const ProductCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products_by_category = useSelector(state => state.categories.product_by_category);
    const { id } = useParams(); // Extract id from the URL using React Router

    useEffect(() => {
        // Dispatch the action when the component mounts or when the page refreshes
        if (id) {
            dispatch(get_products_by_category_id(id));
        }
    }, [dispatch, id]);

    const handleAddToCart = (product) => {
        dispatch(add_product_to_cart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(remove_product_from_cart(product));
    };

    const handlerProducts_by_id = (product_id, product_data) => {
        console.log("handlerProducts_by_id", product_id);
        dispatch(get_product_by_id(id))
            .then(() => {
                navigate(`/products-by-id/${product_id}`, {
                    state: {
                        productData: product_data,
                        productId: product_id
                    }
                });
            })
            .catch((err) => {
                console.error('Failed to add products:', err);
            });
    }
    return (
        <div>
            <h2>Products by Category Id Show by ProductCard Component </h2>
            <Box
                component="ul"
                sx={{
                    display: 'flex',
                    gap: 3,
                    flexWrap: 'wrap',
                    p: 4,
                    m: 0,
                }}
            >
                {
                    products_by_category.map((product) => {
                        return (
                            <Card
                                key={product.product_id}
                                sx={{
                                    width: 400,
                                    height: 450,
                                    minHeight: 200,
                                    flexGrow: 1,
                                    minWidth: 200,
                                    maxWidth: 460,
                                    borderRadius: 10, // Adjust the value as needed
                                    alignContent: 'center',
                                }}>
                                <CardMedia
                                    onClick={() => handlerProducts_by_id(product.product_id, product)}
                                    sx={{ height: 225 }}
                                    image={product.product_img}
                                    title="green iguana"
                                />
                                <CardContent>
                                    {/* <Typography gutterBottom variant="h5" component="div"> */}
                                    <Typography
                                        gutterBottom
                                        variant="h4"
                                        component="div"
                                        sx={{
                                            fontSize: 'inherit', // Set the default font size
                                            fontWeight: 'normal', // Set the default font weight
                                            transition: 'font-weight 0.3s ease-in-out', // Add a smooth transition effect

                                            // Define styles for the hover state
                                            ':hover': {
                                                fontWeight: 'bold', // Change font weight on hover
                                                cursor: 'pointer', // Change cursor to pointer on hover
                                            },
                                        }}
                                    >
                                        {product.product_name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price :   {product.list_price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Model year :  {product.model_year}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small" onClick={() => handleAddToCart(product)}>Add To Cart</Button> */}
                                    <Button
                                        size="medium" sx={{ color: 'yellowgreen' }}
                                        onClick={() => handleAddToCart(product)}>
                                        <AddShoppingCartIcon fontSize='large' />
                                        Add To Cart
                                    </Button>
                                    <Button
                                        size="medium" sx={{ color: 'red' }}
                                        onClick={() => handleRemoveFromCart(product)}>

                                        <RemoveShoppingCartIcon fontSize='large' />
                                        Remove From Cart</Button>
                                </CardActions>
                            </Card>
                        );
                    })
                }
            </Box>
        </div>
    );
};