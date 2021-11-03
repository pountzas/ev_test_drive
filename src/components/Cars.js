import React from 'react';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import { useSelector } from 'react-redux';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CarItem from './CarItem';

const Cars = () => {
  const { carsReducer } = useSelector((state) => state);
  return (
    <div className="text-center container">
      <h1 className="py-5">EV models</h1>
      <h2 className="py-3">Car List</h2>
      <section className="services" id="projects">
        <div className="max-width">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={carsReducer.length}
            visibleSlides={3}
            isIntrinsicHeight
          >
            <div className="d-flex align-items-baseline">
              <ButtonBack className="btn btn-primary mx-5">Back</ButtonBack>
              <Slider>
                {carsReducer.map((element) => (
                  <Slide index={element.id} key={element.id}>
                    <CarItem car={element} key={element.id} />
                  </Slide>
                ))}
              </Slider>
              <ButtonNext className="btn btn-primary">Next</ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </section>
    </div>
  );
};

export default Cars;
