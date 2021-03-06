import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "./SectionHeader";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./HeroSection.scss";

function HeroSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="text-center text-lg-left">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
              spaced={false}
              style={{margin: 4}}
            ></SectionHeader>
            <Button
              variant={props.buttonColor}
              size="lg"
              onClick={props.buttonOnClick}
              style={{margin: 5}}
            >
              {props.buttonText}
            </Button>
            <br></br>
            <Button
              variant={props.buttonColor}
              size="lg"
              onClick={props.secondOnClick}
              style={{margin: 5}}
            >
              Our codebase!
            </Button>
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0 ">
            <figure className="HeroSection__image-container mx-auto">
              <Image src={props.image} fluid={true}></Image>
            </figure>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HeroSection;
