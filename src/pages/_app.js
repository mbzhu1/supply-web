import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import TeamBiosSection2 from "./../components/TeamBiosSection2";
import ContactSection from "./../components/ContactSection";
import FaqPage from "./faq";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import { ProvideAuth } from "./../util/auth.js";
import SupplyLogo from "../resources/supply.svg"

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo={SupplyLogo}
          ></NavbarCustom>

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bg="light"
            textColor="dark"
            size="sm"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright="Made with ❤️ and ☕️"
            logo={SupplyLogo}
          ></Footer>
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
