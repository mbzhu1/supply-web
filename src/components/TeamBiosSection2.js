import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import TeamBios2 from "./TeamBios2";

function TeamBiosSection2(props) {
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
        <TeamBios2
          items={[
            {
              headerImage: "https://source.unsplash.com/pe_R74hldW4/1080x360",
              avatarImage: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
              name: "John Smith",
              role: "Software Engineer",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              headerImage: "https://source.unsplash.com/uwPBAlQyIag/1080x360",
              avatarImage: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
              name: "Lisa Zinn",
              role: "Software Engineer",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
            {
              headerImage: "https://source.unsplash.com/pJ_DCj9KswI/1080x360",
              avatarImage: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Diana Low",
              role: "Designer",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com",
            },
          ]}
        ></TeamBios2>
      </Container>
    </Section>
  );
}

export default TeamBiosSection2;
