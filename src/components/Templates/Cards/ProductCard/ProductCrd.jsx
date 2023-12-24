import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

export const ProductCard = () => {
    const product_by_category = useSelector(state => state.categories.product_by_category);
    console.log("product_by_category", product_by_category);
    return (
        <div>
            <Box
             component="ul"
             sx={{
                 display: 'flex',    
                 gap: 2,
                 flexWrap: 'wrap',
                // height:'400px',
                // width:'200px',
                 p: 1,
                 m: 0,
             }}>
                {
                    product_by_category.map((product) => {

                        return (

                            <Card key={product.product_id} sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="https://dalicanvas.co.il/wp-content/uploads/2022/10/%D7%AA%D7%95%D7%9B%D7%99-%D7%98%D7%95%D7%A7%D7%9F-%D7%A1%D7%A1%D7%92%D7%95%D7%A0%D7%992.jpg"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.product_name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Price :   {product.list_price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                   Model year :      {product.model_year}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        );
                    })
                }
            </Box>
        </div>
    )
}