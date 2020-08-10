import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import TeamBios from "./TeamBios";
import Michael from "../resources/michaelhead.png"
import Joe from "../resources/joehead.png"
import Malia from "../resources/maliahead.png"
import Lewana from "../resources/lewanahead.png"

function TeamBiosSection(props) {
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
        <TeamBios
          items={[
            {
              avatar: Lewana,
              name: "Lewana Su",
              role: "Designer",
              bio:
                "Lewana is a rising sophomore at UC Berkeley who is interested in Data Science, Operations, or Business. She loves the arts as well, and is involved with music and technical theater. She recently became fascinated with product design and aims to develop her skills. ",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: Malia,
              name: "Malia Jiang",
              role: "Designer",
              bio:
                "Malia is a rising sophomore at UC Berkeley who is interested in Political Science, Cognitive Science, and Business. In her free time, she likes to bake and video edit. She is also passionate about entrepreneurship and society.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: Joe,
              name: "Joseph Yeh",
              role: "Software Engineer",
              bio:
                "Joseph is a rising sophomore at UC Berkeley studying computer science and applied math. He is extremely passionate about mobile development and entreprenuership.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              avatar: Michael,
              name: "Michael Zhu",
              role: "Software Engineer",
              bio:
                "Michael is a rising sophomore at UC Berkeley studying computer science and economics. He is especially interested in machine learning and web development.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
          ]}
        ></TeamBios>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;
