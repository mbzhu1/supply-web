import React from "react";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import BuiltWithSection from "./../components/BuiltWithSection";
import CarouselSection from "./../components/CarouselSection"
import VideoSection from "./../components/VideoSection"
import { useRouter } from "./../util/router.js";
import Mockup1 from "../resources/mockup1.png"
import Mockup2 from "../resources/mockup2.png"
import Mockup3 from "../resources/mockup3.png"
import Mockup4 from "../resources/mockup4.png"
import Mockup5 from "../resources/mockup5.png"



function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Supply."
        subtitle="Donate and request essential goods from your local community!"
        buttonText="Check out our demo video!"
        buttonColor="magenta"
        image= "https://uploads.divjoy.com/undraw-directions_x53j.svg"
        buttonOnClick={() => {
          // Navigate to video page
          window.open("https://youtu.be/HOxSLHF1I2E", "_blank");
        }}
        secondOnClick={() => {
          // Navigate to github page
          window.open("https://github.com/jojo39381/supply", "_blank");
        }}
      ></HeroSection>
      {/* <VideoSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Supply"
        subtitle=""
        embedUrl="https://www.youtube.com/embed/z9Ul9ccDOqE"
      ></VideoSection> */}
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image="https://uploads.divjoy.com/undraw-chatting_2yvo.svg"
      ></FeaturesSection>
      <CarouselSection
        items={[
          {
            image: Mockup1,
            caption: "",
          },
          {
            image: Mockup2,
            caption: "",
          },
          {
            image: Mockup3,
            caption: "",
          },
          {
            image: Mockup4,
            caption: "",
          },
          {
            image: Mockup5,
            caption: "",
          },
        ]}
      ></CarouselSection>
      <BuiltWithSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Built using"
        subtitle=""
      ></BuiltWithSection>
    </>
  );
}

export default IndexPage;
