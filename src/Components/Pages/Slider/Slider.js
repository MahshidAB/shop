import { Carousel } from "react-bootstrap";
import "./slider.css";
import { useSlider } from "../../CustomHooks/CustomerSlider";
import { useState } from "react";

const Slider = () => {
  const { isLoading, isError, error, data } = useSlider();

  return (
    <>
      <div className="col-12 text-center mt-3">
        {isLoading && (
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <Carousel fade data-bs-theme="dark" className="mt-4">
        {data?.map((elem) => {
          return (
            <Carousel.Item interval={3000} key={elem.id}>
              <img
                className="pics"
                src={require(`../../Images/${elem.url}`)}
                alt="First slide"
              />
              <Carousel.Caption>
                <p className="color">{elem.body}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slider;
