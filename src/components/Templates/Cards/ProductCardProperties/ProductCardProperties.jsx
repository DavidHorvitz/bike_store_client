import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { add_product_to_cart } from '../../../../store/features/productsSlice';
import { get_product_by_id } from '../../../../store/actions/products/get_products_by_id';

export const ProductCardProperties = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { productData, productId } = location.state || {};
    console.log("productData from location ", productData);
    React.useEffect(() => {
        // Dispatch the action when the component mounts or when the page refreshes
        if (id) {
            dispatch(get_product_by_id(id));
        }
    }, [dispatch, id]);

    const handleAddToCart = (productData) => {
        dispatch(add_product_to_cart(productData));
    };

    return (
        <div>
            <h2>Product by "{id}" ID </h2>
            <Grid container spacing={1}>
                {/* First row */}
                <Grid item xs={12} sm={4}>
                    <Box
                        component="ul"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row', // Arrange items vertically
                            gap: 3,
                            p: 4,
                            border: '1px solid',
                            height: '100vh',
                        }}
                    >
                        <Card key={productData.product_id}
                            sx={{
                                width: 400,
                                height: 450,
                                minHeight: 200,
                                flexGrow: 1,
                                minWidth: 200,
                                maxWidth: 460,
                                borderRadius: 10 // Adjust the value as needed
                            }}>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {productData.product_name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price :   {productData.list_price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Model year :      {productData.model_year}
                                </Typography>
                            </CardContent>
                            <Button
                                size="medium" sx={{ color: 'yellowgreen' }}
                                onClick={() => handleAddToCart(productData)}>
                                <AddShoppingCartIcon fontSize='large' />
                                Shopping Cart
                            </Button>
                        </Card>
                    </Box>
                </Grid>

                {/* Second row */}
                <Grid item xs={12} sm={4}>
                    <Box
                        component="ul"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            // gap: 3,
                            p: 4,
                            border: '1px solid',
                            height: '100vh'

                        }}
                    >
                        <CardMedia
                            sx={{
                                height: 350, width: 600,
                                minHeight: 200,
                                flexGrow: 1,
                                minWidth: 200,
                                maxWidth: 600,
                            }}
                            image={productData.product_img}
                            title={productData.product_name}
                        />
                    </Box>
                </Grid>

                {/* Third row */}
                <Grid item xs={12} sm={4}>
                    <Box
                        component="ul"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 3,
                            p: 4,
                            border: '1px solid',
                            height: '100vh'
                        }}
                    >
                        <Typography gutterBottom variant="h5" component="div">
                            {productData.product_name}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};
