import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Button } from '@mui/material';

export const CategoryCard = ({ data, onButtonClickGetProperties }) => {
    return (
        <div>
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                    p: 0,
                    m: 0,
                }}
            >
                {data.map((categoryItem) => {
                    const { category_id, category_img, category_name } = categoryItem;

                    return (
                        <Button key={category_id} onClick={() => onButtonClickGetProperties(categoryItem)}>
                        <Card
                            component="li"
                            sx={{
                                width: 435,
                                height: 600,
                                minHeight: 400,
                                flexGrow: 1,
                                minWidth: 200,
                                maxWidth: 460,
                                transition: 'box-shadow 0.3s, border 0.3s', // Smooth transition for box-shadow and border
                                overflow: 'hidden',
                                '&:hover': {
                                    '& img': {
                                        transform: 'scale(1.1)', // Zoom in the image on hover
                                        transition: 'transform 0.6s', // Slow down the zoom effect
                                    },
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)' // Apply a black shadow on hover
                                },
                                '&:not(:hover)': {
                                    '& img': {
                                        transform: 'scale(1)', // Return to normal size when not hovered
                                        transition: 'transform 0.6s', // Smooth transition back to normal size
                                    }
                                },
                                '&:active, &:focus': {
                                    border: '2px solid black' // Add a black border on click or focus
                                }
                            }}
                        >
                            <CardCover>
                                <img
                                    src={category_img}
                                    srcSet={`${category_img}&dpr=2 2x`}
                                    loading="lazy"
                                    alt={category_name}
                                    sx={{
                                        width: '100%', // Make sure the image takes the full width of the container
                                        height: '100%', // Make sure the image takes the full height of the container
                                        objectFit: 'cover', // Cover the entire container
                                        transition: 'transform 0.6s' // Apply the slower transition to the image
                                    }}
                                />
                            </CardCover>
                            <CardContent>
                                <Typography
                                    level="h3"
                                    fontWeight="lg"
                                    textColor="#fff"
                                    mt={{ xs: 12, sm: 18 }}
                                >
                                    {category_name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Button>
                    
                    );
                })}
            </Box>
        </div>
    );
};


