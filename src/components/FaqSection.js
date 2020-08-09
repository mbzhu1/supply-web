import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Faq from "./Faq";

function FaqSection(props) {
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
        <Faq
          items={[
            {
              question: "What is the problem you are solving?",
              answer: "At the start of COVID-19, there was a shortage of essential supplies. Although there were many community leaders who led the way for donations, the process of this distribution chain can be confusing, disorganized and slow. Oftentimes, an individual relies on a donation from an organization, and then that organization relies on donations from another individual and so on. The side effects of this distribution chain cause people to receive their donations either late or not at all. It is important for people to have their basic needs fulfilled. In addition, these problems do not just occur during a pandemic. These issues arise in protests that need first aid kits, women’s shelters that need toothbrushes, or a man that needs new clothes. A person’s basic necessities should not be compromised due to the side effects of a good deed.",
            },
            {
              question: "What inspired you to work on this problem?",
              answer: "There are a lot of people among us, especially during quarantine, contributing to others in need. We have each worked alongside people who sew masks at home, donate gear to hospitals, and volunteer at homeless shelters (pre-Covid). As a team of students who are familiar with performing acts of charity and donation, we believe that essential goods are basic necessities, and that everyone is entitled to them regardless of their background, views, or socioeconomic status.",
            },
            {
              question: "What is your vision for this product?",
              answer:"In order to reach more people in need, we decided to create a platform for donating essential goods to make it simpler to give to others. The goal of Supply. is to be able to flawlessly connect voluntary donors to people (or organizations) that are in need of specific supplies. With this user-friendly app, we aim to encourage users to give to others by showing them just how easy it is to donate, and to increase the supply of essential products.",
            },
            {
              question: "How does it work?",
              answer:"We wanted Supply. to be clear and easy to navigate. So, it has four main screens (functions) accessible from the bottom tap bar: Home, Create a Listing, Notifications & Messages, and Profile. Home: On the home page, users can search for an essential product by using the search bar and/or choosing its respective category. To make it simple, we have five categories that an essential good can belong in: Medical, Hygiene, Water, Food, Clothing. Then, users can view posts of donors and requesters of that item. If they are interested in donating or requesting, they will be able to view more by just tapping on the post. Create a Listing: Users can create a post as a donor or requester. Donors can post a picture, write a description, and set a time for when the item needs to be donated on the donor listing page. On the requester listing, requesters can post what item they need, the quantity of the item, and whether they can pick up the item. Notifications/Messages: Users can accept or decline requests and donations in the notifications, as well as open or delete messages. The purpose of messages is to give an extra layer of clarification between donors and requesters. Profile: On their profile page, users can view their current listings and their upcoming requests or donations that they have already agreed to.",
            },
            {
              question: "Explain your designs",
              answer:"The logo of Supply. was inspired by a price tag to signify the exchange of goods. However, instead of a price, we centered our design and logo around hearts to symbolize kindness, since donations stem from the heart. The string going through the tag also doubles as “S.”, which is short for Supply. For our color scheme, we chose a color palette revolving around a pastel grey-purple (#DBCBD8) as it is a soft and warm color.",
            },
            {
              question: "How did you build it?",
              answer:"We first used Figma to prototype the application and figure out what we wanted the application to look like to the end user. Based on these designs, we coded the application in Xcode using SwiftUI to power the backend logic and designs.",
            },
            {
              question: "What challenges did you run into?",
              answer:"Many of our challenges came from learning how to use SwiftUI and trying to untangle ourselves from merge conflicts. (Just for context, UIKit is an older UI toolkit for iOS apps. At WWDC 2019, Apple introduced SwiftUI which is a newer UI toolkit based on declarative programming). When we started the project, we decided to use UIKit to create our app since we were more familiar with the framework. However, due to UIKit’s API complexity, we ended up with several code conflict problems in git and created an even bigger problem for ourselves after a series of unsuccessful merges and checkouts. We realized that we were heading into a dead end, and that SwiftUI’s simpler interface would help alleviate our problems. We took about 5 hours to speedrun through SwiftUI tutorials and get as familiar as we could with this new framework. We recreated the project in SwiftUI and even figured out how to recycle our UIKit code in combination with our new SwiftUI setup.",
            },
            {
              question: "What accomplishments are you proud of?",
              answer:"Designing and prototyping our entire app interface on Figma to guide software development. Using Swift and Xcode to create an iOS application. Learning the SwiftUI framework. Solving the problems we faced regarding git and UI. Using React to build a landing page to promote our project.  ",
            },
            {
              question: "What did you learn?",
              answer:"We learned how to prototype our designs/ideas in Figma, build iOS apps using the Swift UI framework, and create a landing page using React.  ",
            },
            {
              question: "What's next for Supply?",
              answer:"We will continue improving the UI and fleshing out more features in the backend.  ",
            },
          ]}
        ></Faq>
      </Container>
    </Section>
  );
}

export default FaqSection;
