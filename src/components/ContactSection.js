import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Contact from "./Contact";
import "./ContactSection.scss";

function ContactSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        ></SectionHeader>
        <Row>
          <Col xs={12} md={6}>
            <iframe
              className="ContactSection__map has-background-light"
              src={props.embedSrc}
              title="Contact Map"
              frameBorder={0}
            ></iframe>
          </Col>
          <Col xs={12} md={6} className="mt-3 mt-md-0">
            <Contact
              showNameField={props.showNameField}
              buttonText={props.buttonText}
              buttonColor={props.buttonColor}
              inputSize={props.inputSize}
            ></Contact>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default ContactSection;
