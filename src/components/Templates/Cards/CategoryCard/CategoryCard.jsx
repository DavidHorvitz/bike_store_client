import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Button } from '@mui/material';

export const CategoryCard = ({ data, onButtonClickGetProperties }) => {
    console.log("data", data);
    return (
        <div>
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                    p: 1,
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
                                    width: 400,
                                    height: 600,
                                    minHeight: 400,
                                    flexGrow: 1,
                                    minWidth: 200,
                                    maxWidth: 460
                                }}
                            >
                                <CardCover>
                                    <img src={category_img} srcSet={`${category_img}&dpr=2 2x`} loading="lazy" alt={category_name} />
                                </CardCover>
                                <CardContent>
                                    <Typography
                                        level="body-lg"
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
