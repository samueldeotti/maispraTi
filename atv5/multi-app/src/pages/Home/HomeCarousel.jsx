import React, { useState } from 'react';
import { CarouselContainer, CarouselItem, CustomCarousel, StyledLink } from './HomeStyle';

export default function HomeCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <CarouselContainer>
      <CustomCarousel
        showArrows
        infiniteLoop
        autoPlay
        interval={ 5000 }
        selectedItem={ carouselIndex }
        onChange={ (index) => setCarouselIndex(index) }
      >
        <CarouselItem>
          <h2>QR Code Generator</h2>
          <StyledLink to="QRCodeGenerator">
            Acessar
          </StyledLink>
        </CarouselItem>
        <CarouselItem>
          <h2>IP Address Finder</h2>
          <StyledLink to="IPAddressFinder">
            Acessar
          </StyledLink>
        </CarouselItem>
        <CarouselItem>
          <h2>Movie Search Engine</h2>
          <StyledLink
            to="MovieSearchEngine"
          >
            Acessar
          </StyledLink>
        </CarouselItem>
        <CarouselItem>
          <h2>Todo App</h2>
          <StyledLink to="TodoApp">
            Acessar
          </StyledLink>
        </CarouselItem>
        <CarouselItem>
          <h2>Quiz App</h2>
          <StyledLink to="QuizApp">
            Acessar
          </StyledLink>
        </CarouselItem>
        <CarouselItem>
          <h2>Language Translator</h2>
          <StyledLink
            to="home/LanguageTranslator"
          >
            Acessar
          </StyledLink>
        </CarouselItem>
      </CustomCarousel>
    </CarouselContainer>
  );
}
