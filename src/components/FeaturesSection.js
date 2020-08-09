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
                    "Imagine a world of COVID-19 where people didn't have to worry about toilet paper shortages or dwindling food supplies.",
                  iconClass: "fas fa-briefcase-medical",
                  iconColor: "danger",
                },
                {
                  title: "Donate items you don't need",
                  description:
                    "If you have certain items in abundance, donate them to those in need! Especially if you have extra masks, hand sanitizer, or any other quarantine essentials.",
                  iconClass: "fas fa-dove",
                  iconColor: "primary",
                },
                {
                  title: "Make the world a better place",
                  description:
                    "Everyone right now is going through tough times. If you're able to, reach out to others and lend them a helping hand.",
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
