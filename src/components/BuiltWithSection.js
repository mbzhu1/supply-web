import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Clients from "./Clients";
import XcodeLogo from "../resources/xcode.png"
import FigmaLogo from "../resources/figma.png"
import GithubLogo from "../resources/github.png"
import VercelLogo from "../resources/vercel.png"
import FirebaseLogo from "./../resources/firebase.png"

function BuiltWithSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        ></SectionHeader>
        <Clients
          items={[
            {
              name: "Xcode",
              image: XcodeLogo,
              width: "155px",
            },
            {
              name: "Figma",
              image: FigmaLogo,
              width: "135px",
            },
            {
              name: "Github",
              image: GithubLogo,
              width: "160px",
            },
            {
              name: "Firebase",
              image: FirebaseLogo,
              width: "180px",
            },
            {
              name: "Vercel",
              image: VercelLogo,
              width: "160px",
            },
            
          ]}
        ></Clients>
      </Container>
    </Section>
  );
}

export default BuiltWithSection;
