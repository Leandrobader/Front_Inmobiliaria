import React from "react";
import "./Home.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import carousel1 from "../../../assets/images/carousel/Slide-Landing-Pocito.jpg";
import carousel2 from "../../../assets/images/carousel/home-bg-01a.jpg"
import carousel3 from "../../../assets/images/carousel/bg-housinga.jpg"

const Home = () => {
  return (
    <>
      <section>
        <Carousel className="h-auto">
          <Carousel.Item fluid>            
            <Container fluid className="w-100 px-0 slider1_bg">
              <img
                src="#"
                alt=""
                className="carousel_bg w-100 mx-0 px-0"
              />
              {/* <Row className="justify-content-center align-items-center pt-5">
                <Col lg={12} md={12} className="pb-2">
                  <img
                    className="d-block w-100 h-auto mt-3 img-fluid"
                    src="#"
                    alt="Hamburguesa de carne"
                  />
                </Col>                
              </Row> */}
            </Container>
          </Carousel.Item>
          <Carousel.Item fluid>
            <Container fluid className="w-100 px-0 slider2_bg">
              <img
                src="#"
                alt=""
                className="carousel_bg w-100 mx-0 px-0"
              />
              {/* <Row className="justify-content-center align-items-center pt-5">
                <Col lg={12} md={12}>
                  <img
                    className="d-block w-100 h-auto mt-2 img-fluid"
                    src="#"
                    alt="Hamburguesa de pollo"
                  />
                </Col>                
              </Row> */}
            </Container>
          </Carousel.Item>
          <Carousel.Item fluid className="">
            <Container fluid className="w-100 px-0 slider3_bg">
              <img
                src="#"
                alt=""
                className="carousel_bg w-100 mx-0 px-0"
              />
              {/* <Row className="justify-content-center align-items-center pt-5">
                <Col lg={12} md={12}>
                  <img
                    className="d-block w-100 h-auto mt-2 img-fluid"
                    src="#"
                    alt="Hamburguesa vegetariana"
                  />
                </Col>                
              </Row> */}
            </Container>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Home;
