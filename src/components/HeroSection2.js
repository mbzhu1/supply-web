import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";

function HeroSection2(props) {
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
          title2={props.title2}
          title3={props.title3}
          subtitle={props.subtitle}
          asterisk={props.asterisk}
          size={1}
          spaced={true}
          className="text-center"
        ></SectionHeader>
      </Container>
    </Section>
  );
}

export default HeroSection2;
