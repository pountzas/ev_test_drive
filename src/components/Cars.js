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
    <div className="text-center ">
      <h1 className="py-5">EV models</h1>
      <h2 className="py-3">Car List</h2>
      <section className="services" id="projects">
        <div className="">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={carsReducer.length}
            visibleSlides={3}
            isIntrinsicHeight
          >
            <div className="d-flex align-items-baseline justify-content-between">
              <ButtonBack className="btn btn-primary ms-5">Back</ButtonBack>
              <Slider className="container ms-4">
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
