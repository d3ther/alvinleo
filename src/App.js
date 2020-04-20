import React from "react";
import { View } from "react-native";
import Home from "./Home";
import Nav from "./Nav";
import LandingPage from "./LandingPage";
import EmailPDF from "./EmailPDF";
import HelpCenter from "./HelpCenter";
import LazadaAnniversary from "./LazadaAnniversary";
import About from "./About";
import Footer from "./Footer";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";

const navData = {
  name: "Alvin Leonardo",
  title: "Currently Building Traveloka as UI Developer",
  photo: require("./assets/image/Me1.JPG"),
  position: "Jakarta, Indonesia",
  links: [
    {
      name: "Home",
      link: `/alvinleo/`,
    },
    {
      name: "About",
      link: `/alvinleo/about`,
    },
  ],
};

const homeData = {
  name: "Quick Overview",
  content:
    "I am an over 6 year-strong UI Developer in both Tech & E-Commerce industry, based in Jakarta, Indonesia. As I am currently building Traveloka as the UI Developer and previously built Lazada as a Web Designer, words cannot describe how I enjoy creating mock-ups while developing them to live components.",
  works: {
    title: "Works",
    images: [
      {
        photo: require("./assets/image/HC1.png"),
        name: "Landing Page",
        year: 2019,
        link: `/alvinleo/help-center`,
      },
      {
        photo: require("./assets/image/Airline2.png"),
        name: "Landing Page",
        year: 2019,
        link: `/alvinleo/landing-page`,
      },
      {
        photo: require("./assets/image/Email2.png"),
        name: "Landing Page",
        year: 2020,
        link: `/alvinleo/email-pdf`,
      },
      {
        photo: require("./assets/image/LazadaAnniv.png"),
        name: "Lazada Anniversary",
        year: 2016,
        link: `/alvinleo/lazada-anniversary`,
      },
    ],
  },
};

const helpCenterData = {
  briefPicture: require("./assets/image/Result1.gif"),
  title: "Traveloka's Help Center",
  briefExplanations: [
    "A Customer Experience Product Manager announced to revamp the previous generation of Help Center with the help of the Design Team and Engineering Team since there was a recent launch of Traveloka's Design System. The PM would like to revamp the old-fashioned Help Center with the aid of the Design System to present users with new look-and-feel.",
    "As a part of the Design Team, I was tasked with providing visual components in React Native for both iOS and Android. Why React Native if you may ask, it was due to the only Frontend Engineer we got, was only for Web. As the UI Designer prepared the high-fidelity sketches, I was conducting a meeting with Front End Engineers. The meeting's agenda was to discuss the needed component's properties for both of us to create components. Therefore that would save us a lot of time & headache during the development process.",
    "Over 2 months and as the bridge between the Design Team and Engineering Team, I would work very closely with UI Designer and Front End Engineer to convert the Design language into React Native to progress the development.",
  ],
  techStack: {
    title: "My Tech Stack Used: ",
    lists: [
      "React: A front-end framework to create and maintain scalable components.",
      "React Native: A subset of React framework but to create components for the Mobile Apps environment.",
      "TypeScript: A framework that can be used in various front-end frameworks, while React being one of them. A really handy framework for developers to develop components without having to worry about the type of variables being used while pointing out whether the variables were used wrongly or not.",
      "Prettier: An addon in various IDEs. Another handy add-on to tidy up messy codes while developing to create readable codes.",
      "Android Studio: An Android IDE that I used this to launch an Android Emulator and installed the staging version of the app.",
      "XCode: Similar to Android Studio however this is for iOS, I used this to launch iOS Emulator and installed the staging version of the app.",
      "Reactotron : A debugging tool for both Emulators in Android Studio & XCode.",
    ],
  },
  process: {
    title: "Process",
    flow: "Discovery > Mockups > Design > Development > Test > Live",
  },
  firstStep: {
    picture: require("./assets/image/HC2.png"),
    content: [
      "While the UI Designer was working on the mock-ups, I initiated the development phase by conducting the meeting with Front-End Engineer. We discussed what the prerequisite properties are for the components. Therefore, during the development phase, we would only have one source of truth to look out for. Later, I will begin developing the component relying upon the discussed properties.",
    ],
  },
  secondStep: {
    picture: require("./assets/image/HC1_1.png"),
    content: [
      "As the UI Designer finished creating mock-ups. I reviewed and questioned regarding the design whether the deliverables made sense to the Users or not. If the solution didn't seem to work, I looked for some solutions by asking and answering questions and looked for other available components from the Design System to provide solutions.",
    ],
    details: {
      title: "The way that I did for development:",
      lists: [
        "Categorize the layout into components, this way the components were scalable, modular and reusable for other team members in need.",
        "What are the prerequisite animations for the components?",
        "Begin developing while discussing and questioning things with the UI Designer.",
      ],
    },
  },
  thirdStep: {
    picture: require("./assets/image/Result1.gif"),
    content: [
      "Once I finished developing the components, I would again initiated a meeting with Front-End in order to review the components that I made. In the end, Front-End Engineer will start wiring the data from Back-End Engineer to the components that I made earlier. Once Front-End Engineer finished wiring the data, I would again re-check whether the data changed the component's layout, and finally we could launch the Help Center.",
    ],
  },
};

const lpData = {
  briefPicture: require("./assets/image/Citilink.gif"),
  title: "Traveloka's Airline Landing Page",
  briefExplanations: [
    "Ever since Traveloka have had numerous amount of airline partners, an SEO Analyst came up with an idea to increase the score of SEO of Traveloka's airline landing page in Google.",
    "As Traveloka has almost 60+ airline partners, I had to come up with a solution to create modular, scalable and reusable template for all of the airline partners.",
    "Over the course of 3 months, I worked very closely with UI Designer, SEO Analyst and Product Team to convert the Market & Design Needs into reusable, scalable, and modular templates for all airline landing pages.",
  ],
  techStack: {
    title: "My Tech Stack Used: ",
    lists: [
      "HTML, CSS & JS: Bread and Butter in Web Development. ",
      "Velocity: A templating language.",
    ],
  },
  process: {
    title: "Process",
    flow: "Discovery > Mockups > Design > Development > Test > Live",
  },
  firstStep: {
    picture: require("./assets/image/Airline1.png"),
    content: [
      "We kicked off the meeting with me as a UI Developer, SEO Analyst, UI Designer, and Product Team. After the presentation, I began to ask questions regarding the project in order to make me more comfortable as to provide expectations to all stakeholders. I began to ask regarding the best and worst expected outcome of this project, timelines, delegating works. More often than not, I began to look for other opportunities in terms of the maximum gain while providing the least effort for the team.",
    ],
  },
  secondStep: {
    picture: require("./assets/image/Airline2.png"),
    content: [
      "As the UI Designer finished the mock-ups. I reviewed and questioned regarding the design whether the deliverables made sense to the Users or not. If the solution didn't seem to work, I looked for some solutions by asking questions and pointing out what discomforted me.",
    ],
    details: {
      title: "The way that I did for development:",
      lists: [
        "Categorize the layout into components, this way the components were scalable, modular and reusable for other team members in need.",
        "Begin developing while discussing and questioning things with the UI Designer.",
      ],
    },
  },
  thirdStep: {
    picture: null,
    content: [
      "Once I finished developing the components in a reusable template, I needed to conduct a meeting with the entire team. In order to get unbiased comments, I had to get feedback regarding the layout that I developed. Once everything was clear and good to go, our prediscussed plan would continue by providing guidance on how to fill in the content to the delegated team. In the end, I would again re-check the components and layout see if there is any problem or any error to the inputted content. Once everything was good, I launched the landing pages to production.",
    ],
  },
};

const emailPDFData = {
  briefPicture: require("./assets/image/EmailPDF1.png"),
  title: "Traveloka's Upsell Baggage Email & PDF",
  briefExplanations: [
    "As Traveloka recently launched another way for users to buy baggage, there was a need to inform Users with the purchased baggage. Typically, Traveloka uses 2 media of Email & attached PDF to inform Users about their purchased Item.",
    "The email & PDF must contain the items that Users bought, amount Users paid, and other information that Users should know/prepare before traveling.",
    "Over the course of a month, I worked very closely with UI Designer, Interaction Designer, Product Team and Back End Engineer to convert the Design and Product Needs into both EMail & PDF templates.",
  ],
  techStack: {
    title: "My Tech Stack Used: ",
    lists: [
      "HTML, CSS & JS : Bread and Butter in Web Development. ",
      "Velocity: A templating language.",
    ],
  },
  process: {
    title: "Process",
    flow: "Research > Discovery > Mockups > Design > Development > Test > Live",
  },
  firstStep: {
    picture: require("./assets/image/SampeDataEmailPDF.png"),
    content: [
      "We kicked off the project by having a meeting with me as UI Developer, UI Designer, Interaction Designer, Product Team and Back End Engineer. After the brief explanation of the project, I and the Design team gathered all of the necessary information to put up in Users' Email & PDF. As we were gathering the information, I was conducting a meeting with Back End Engineer and Product Team to create a mock API regarding what the required information was in the templates, including the naming variable therefore both of us will only have a single source of truth of required data.",
    ],
  },
  secondStep: {
    picture: require("./assets/image/Email2.png"),
    content: [
      "As the UI Designer finished the mock-ups. I reviewed and questioned regarding the design whether the deliverables made sense to the Users or not. If the solution didn't seem to work, I looked for some solutions by asking questions and pointing out what discomforted me. During the development, there was something wrong with the User information, therefore I had to conduct another meeting with all parties in order to look for a solution that required the least effort for our team.",
    ],
    details: {
      title: "The way that I did for development:",
      lists: [
        "Categorize the layout into components, this way the components",
        "Begin developing while discussing and questioning things with the UI Designer & Back EndEngineer.",
      ],
    },
  },
  thirdStep: {
    picture: require("./assets/image/EmailPDF1.png"),
    content: [
      "Once I finished developing the layout, I needed to conduct a meeting with the entire team. To get unbiased comments, I had to get feedback regarding the layout that I developed to see if anything was lacking. Personally, this particular type of tasks made me to become a Front End Engineer, as I was the one who wired the data coming up from Back End Engineer. Once everything was clear and good to go, I would again re-check the components and layout to see if there is any problem or any error to the inputted content. Once everything was good, I launched both EMail & PDF templates to production.",
    ],
  },
};

const aboutData = {
  aboutEdu: {
    title: "About & Education",
    icon: require("./assets/image/EduIcon.png"),
    content:
      "Alvin is a multidisciplinary Designer & Developer with over 6 years experience. My skill set extends to user research, interface design, SEO, web & mobile development. I have been working with and leading team over multiple projects and campaigns. Furthermore, I get geeky stuff when it comes to creative and computer stuff, will definitely use my spare time to do swimming, read books and tweak my server.",
    university: "Bina Nusantara University",
    year: "Year 2010",
  },
  workExp: {
    title: "Work Experience",
    experiences: [
      {
        top: "2020 • 4 years",
        name: "Traveloka",
        content:
          "Building Traveloka in Product Design Team as UI Developer. The earliest core member of Transport Business Unit. Gathered User Insights, designed, developed and launched numerous products, such as: Train, Airport Transfer, Product Insurance and Bus (respectively). Grew multiple junior UI Developers in Traveloka's Tech Stack, soon they were able to be an independent UI Developers.",
      },
      {
        top: "2014 • 2 years",
        name: "Lazada",
        content:
          "Built Lazada Indonesia in Technology Team as Web Designer. I was the key person in delivering Front End technology capabilities according to on-demands campaigns needs. During the tenure in Lazada, I was responsible for managing multiple major and minor campaigns by providing solutions and timeline for the team.",
      },
    ],
  },
  skillExpertise: {
    title: "Skills & Expertise",
    abilities: [
      {
        subtitle: "Programming Language",
        content:
          "Javascript ES6, React & React Native Framework, Type Script, Velocity, PHP, HTML, CSS, Vanilla JS, jQuery",
      },
      {
        subtitle: "Design Tools",
        content: "Sketch, Figma, Zeplin",
      },
    ],
  },
  contact: {
    title: "Contact",
    content: [
      {
        icon: require("./assets/image/EmailIcon.png"),
        link: "mailto:alvinleonardo2010@gmail.com",
      },
      {
        icon: require("./assets/image/LinkedinIcon.png"),
        link: "https://id.linkedin.com/in/alvin-leonardo-bb156955",
      },
    ],
  },
};

const lazData = {
  briefPicture: require("./assets/image/LazadaAnniv.png"),
  title: "Lazada Anniversary 2016 Campaign",
  briefExplanations: [
    "Lazada holds huge campaigns especially during its anniversaries, its purpose of having anniversary mega deals was to introduce new customers who hadn't purchased anything in Lazada, or even buying online goods. Not only did it have huge deals on specific products, I had to create campaigns for various departments as well.",
    "As a part of the Tech Team as a Web Designer, I had to gather all prerequisites with the other country product managers before creating pages from the regional country product manager. Once each country got their codes and basic design templates, I would start preparing the pages for Indonesia.",
    "Over the course of 2 weeks of preparation, I had to initiate meetings with Design, Promotion and Marketing Team in order to fully support the campaign for Indonesia. The meetings were to provide the information required for each other, in the end I was able to create the pages for Indonesia. Fortunately, by the end of the Lazada Anniversary campaign, Indonesia managed to score the most GBV across South East Asia.",
  ],
  techStack: {
    title: "My Tech Stack Used: ",
    lists: ["HTML, CSS & JS : Bread and Butter in Web Development. "],
  },
  process: {
    title: "Process",
    flow:
      "Gather Requirements > Information Share > Design > Development > Test > Live",
  },
};

const footerData = {
  title: "About",
};

function App() {
  return (
    <Router>
      <View>
        <Nav data={navData} />
        <Switch>
          <Route
            path='/alvinleo/'
            exact
            render={(props) => <Home {...props} data={homeData} />}
          />
          <Route
            path='/alvinleo/help-center'
            render={(props) => <HelpCenter {...props} data={helpCenterData} />}
          />
          <Route
            path='/alvinleo/landing-page'
            render={(props) => <LandingPage {...props} data={lpData} />}
          />
          <Route
            path='/alvinleo/email-pdf'
            render={(props) => <EmailPDF {...props} data={emailPDFData} />}
          />
          <Route
            path='/alvinleo/about'
            render={(props) => (
              <About {...props} data={aboutData} work={homeData.works} />
            )}
          />
          <Route
            path='/alvinleo/lazada-anniversary'
            render={(props) => <LazadaAnniversary {...props} data={lazData} />}
          />
        </Switch>
        <Footer data={footerData} aboutData={aboutData} />
      </View>
    </Router>
  );
}

export default App;
