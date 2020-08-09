import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Features from "./Features";
import "./FeaturesSection.scss";

function FeaturesSection(props) {
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
          <Col lg={6} className="text-center text-lg-left">
            <figure className="FeaturesSection__image-container mx-auto">
              <Image src={props.image} fluid={true}></Image>
            </figure>
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0 ">
            <Features
              items={[
                {
                  title: "Find essentials you need",
                  description:
                    "Imagine a world where you can chat with your friends without having to see their dumb faces.",
                  iconClass: "fas fa-briefcase-medical",
                  iconColor: "danger",
                },
                {
                  title: "Donate items you don't need",
                  description:
                    "We embedded a bunch free flash games inside our app. What we lack in quality we make up in quantity.",
                  iconClass: "fas fa-dove",
                  iconColor: "primary",
                },
                {
                  title: "Make the world a better place",
                  description:
                    "Our market research told us people like cats so we put some cat icons on our website.",
                  iconClass: "fas fa-hand-holding-heart",
                  iconColor: "dark",
                },
              ]}
            ></Features>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
