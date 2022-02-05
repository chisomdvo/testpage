/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Nav from "./navbar";
import Homepage from "./homepage";
import Cta from "./cta";
import Actionshared from "./actionshared";
import Howitworks from "./howitworks";
import Tabs from "./tabspage";
import Carousel from "./carousel";
import Ourpartner from "./ourpartners";
import Footer from "./footer";

export default function Landingpage() {
  return (
    <Fragment>
      <Nav></Nav>
      <Homepage></Homepage>
      <Cta></Cta>
      <Actionshared></Actionshared>
      <Howitworks></Howitworks>
      <Tabs></Tabs>
      <Carousel></Carousel>
      <Ourpartner></Ourpartner>
      <Footer></Footer>
    </Fragment>
  );
}
