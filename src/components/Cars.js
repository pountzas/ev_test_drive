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
    <div className="text-center resize-component">
      <h1 className="py-5">EV models</h1>
      <h2 className="py-3">Car List</h2>
      <section id="projects">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={carsReducer.length}
          visibleSlides={3}
          isIntrinsicHeight
        >
          <div className="d-flex align-items-baseline justify-content-between">
            <ButtonBack className="bi bi-caret-left-fill border-0 h2 bg-white" />
            <Slider className="ms-4">
              {carsReducer.map((element) => (
                <Slide index={element.id} key={element.id}>
                  <CarItem car={element} key={element.id} />
                </Slide>
              ))}
            </Slider>
            <ButtonNext className="bi bi-caret-right-fill border-0 h2 bg-white" />
          </div>
        </CarouselProvider>
      </section>
    </div>
  );
};

export default Cars;
