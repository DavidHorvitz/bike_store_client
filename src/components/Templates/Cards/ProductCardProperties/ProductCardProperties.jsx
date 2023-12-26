import { Box, Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { get_product_by_id } from '../../../../store/actions/products/get_products_by_id';

export const ProductCardProperties = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const location = useLocation();
    const { productData, productId } = location.state || {};
    console.log("productData from location ", productData);
    React.useEffect(() => {
        // Dispatch the action when the component mounts or when the page refreshes
        if (id) {
            dispatch(get_product_by_id(id));
        }
    }, [dispatch, id]);
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
                            {/* <CardActions> */}
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
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
                            image="https://dalicanvas.co.il/wp-content/uploads/2022/10/%D7%AA%D7%95%D7%9B%D7%99-%D7%98%D7%95%D7%A7%D7%9F-%D7%A1%D7%A1%D7%92%D7%95%D7%A0%D7%992.jpg"
                            title="green iguana"
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
