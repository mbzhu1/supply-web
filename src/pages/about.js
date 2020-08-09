import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import TeamBiosSection from "./../components/TeamBiosSection";

function AboutPage(props) {
  return (
    <>
      <HeroSection2
        bg="magenta"
        textColor="white"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="We got the credentials"
        title2="To find you some essentials"
        title3="Yeah, its exponential"
        subtitle="- Snoop Dogg*"
        asterisk="* (not really)"
      ></HeroSection2>
      <TeamBiosSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      ></TeamBiosSection>
    </>
  );
}

export default AboutPage;
