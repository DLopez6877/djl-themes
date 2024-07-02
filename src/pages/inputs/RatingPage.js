import React, { useState } from 'react';
import { Container, Typography, Box, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RatingPage = () => {
    const [value, setValue] = useState(2);
    const [hoverValue, setHoverValue] = useState(-1);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Rating Examples
            </Typography>

            {/* Basic Rating */}
            <Box mb={4}>
                <Typography variant="h6">Basic Rating</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </Box>

            {/* Rating with Hover */}
            <Box mb={4}>
                <Typography variant="h6">Rating with Hover</Typography>
                <Rating
                    name="hover-feedback"
                    value={hoverValue}
                    onChange={(event, newValue) => {
                        setHoverValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHoverValue(newHover);
                    }}
                />
                {hoverValue !== -1 && (
                    <Box ml={2}>
                        <Typography>{hoverValue} Stars</Typography>
                    </Box>
                )}
            </Box>

            {/* Disabled Rating */}
            <Box mb={4}>
                <Typography variant="h6">Disabled Rating</Typography>
                <Rating name="disabled" value={value} disabled />
            </Box>

            {/* Read Only Rating */}
            <Box mb={4}>
                <Typography variant="h6">Read Only Rating</Typography>
                <Rating name="read-only" value={value} readOnly />
            </Box>

            {/* Custom Icon Rating */}
            <Box mb={4}>
                <Typography variant="h6">Custom Icon Rating</Typography>
                <Rating
                    name="customized-empty"
                    value={value}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </Box>
        </Container>
    );
};

export default RatingPage;
