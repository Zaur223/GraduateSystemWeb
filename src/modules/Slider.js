import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const Slider = () => {
  const slides = [
    "https://res.cloudinary.com/dfqzrs0lg/image/upload/v1754392498/image_11_yee6ta.png",
    "https://res.cloudinary.com/dfqzrs0lg/image/upload/v1754392508/image12_fazskq.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1240",
        aspectRatio: "1240 / 413",
        margin: "0 auto",
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
        backgroundImage: `url(${slides[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 5,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
        }}
      >
        {slides.map((_, index) => (
          <IconButton
            key={index}
            size="small"
            onClick={() => goToSlide(index)}
            sx={{
              color: currentIndex === index ? "#02eaffff" : "grey.400",
            }}
          >
            <CircleIcon fontSize="20" />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Slider;
