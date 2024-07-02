import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material';

const CardPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Card Examples
            </Typography>

            {/* Basic Card */}
            <Box mb={4}>
                <Typography variant="h6">Basic Card</Typography>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Basic Card
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This is a basic card with some text content. It demonstrates the use of Card and CardContent components.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>

            {/* Card with Media */}
            <Box mb={4}>
                <Typography variant="h6">Card with Media</Typography>
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://picsum.photos/600"
                        alt="Placeholder Image"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Media Card
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This card contains an image along with the text content. It demonstrates the use of CardMedia component.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>

            {/* Complex Card */}
            <Box mb={4}>
                <Typography variant="h6">Complex Card</Typography>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Complex Card
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This card contains more complex content. It demonstrates the use of multiple components within a card.
                        </Typography>
                        <Box mt={2}>
                            <Button variant="contained">Contained Button</Button>
                            <Button variant="outlined" sx={{ ml: 1 }}>Outlined Button</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default CardPage;
