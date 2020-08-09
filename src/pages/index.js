import React from "react";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import BuiltWithSection from "./../components/BuiltWithSection";
import { useRouter } from "./../util/router.js";

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
        title="supply."
        subtitle="Donate and request essential goods from your local community!"
        buttonText="Check out our demo video!"
        buttonColor="magenta"
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
        secondOnClick={() => {
          // Navigate to github page
          window.open("https://github.com/mbzhu1/supply", "_blank");
        }}
      ></HeroSection>
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image="https://uploads.divjoy.com/undraw-chatting_2yvo.svg"
      ></FeaturesSection>
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
