import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const CarouselContainer = styled(Box)({
  display: "flex",
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  scrollbarWidth: "none", // For Firefox
  "&::-webkit-scrollbar": {
    display: "none", // For Chrome, Safari, and Edge
  },
});

const CarouselItem = styled(Box)({
  flex: "0 0 100%",
  scrollSnapAlign: "center",
  textAlign: "center",
  backgroundColor: "#1976d2",
  color: "white",
  padding: "40px 20px",
  margin: "10px",
  borderRadius: "8px",
});

const Carousel: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "Welcome to MenuApp",
      description: "Manage your menus effortlessly.",
    },
    {
      id: 2,
      title: "Easy Navigation",
      description: "Access all features with ease.",
    },
    {
      id: 3,
      title: "Customizable Menus",
      description: "Tailor your menus to your needs.",
    },
  ];

  return (
    <CarouselContainer>
      {items.map((item) => (
        <CarouselItem key={item.id}>
          <Typography variant="h5">{item.title}</Typography>
          <Typography variant="body1">{item.description}</Typography>
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
