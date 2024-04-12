import React from "react";
import "./Home.css"
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import LocationBanner from "../components/LocationBanner";
import CardSmall from "../components/CardSmall";

import PrizeRibbon from "../images/prizeRibbon.png";
import Drumroom from "../images/drumRoom.jpg";
import Instruments from "../images/instruments.jpg";
import Accessories from "../images/accessories.jpg";
import Repairs from "../images/repairs.jpg"
import Rentals from "../images/rentals.gif"
import Recording from "../images/recording.jpg"
import Poster from "../images/poster.jpg"


function Home() {
  return (
    <div id="CTRDIV" className="fade" style= {{marginBottom: "80px"}}>
      <Hero />
      <Banner
        graphic1={PrizeRibbon}
        graphic2={PrizeRibbon}
        txtPre={"We pride ourselves in 20+ years of "} highlightTxt={"musical service"} txtPost={" to our community."}
      />

      <div className= "topContainer">
        <CardSmall cardTitle="LESSONS" redirect="/lessons" bgImage={Drumroom} highlightTxt="Learn" txtPost=" music in a variety of formats with professional teachers."/>
        <CardSmall cardTitle="INSTRUMENTS" redirect="/instruments" bgImage={Instruments} highlightTxt="Explore" txtPost=" the wide range of instruments that are taught within our facility."/>
        <CardSmall cardTitle="ACCESSORIES" redirect="/accessories" bgImage={Accessories} highlightTxt="Purchase" txtPost=" all your music gear and accessories everyday."/>
        <CardSmall cardTitle="REPAIR" redirect="/repair" bgImage={Repairs} highlightTxt="Fix" txtPost=" instruments with technicians who have decades of experience."/>
        <CardSmall cardTitle="RENTALS" redirect="/rentals" bgImage={Rentals} highlightTxt="Rent" txtPost=" instruments for school, gigs or fun."/>
        <CardSmall cardTitle="RECORDING" redirect="/recording" bgImage={Recording} highlightTxt="Record" txtPost=" in our state of the art music studio."/>
        <CardSmall cardTitle="CONTACT US" redirect="/contact" bgImage={Poster} highlightTxt="Contact us" txtPost=" to jump start your musical journey."/>
      </div>

      <LocationBanner />
      <iframe title="Parkville Map"  width="600" height="450" style= {{border: "0", maxWidth: "95vw", margin: "20px auto"}}loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/search?q=All%20About%20Music%2C%20Waltham%20Woods%20Road%2C%20Parkville%2C%20MD%2C%20USA&key=AIzaSyDut_9fPyaDMJ8QYS8ciwjVTN3S1lKR0zw"></iframe>
      <Banner txtSize={"60px"} txtWeight={"Bold"} txtPre={"Sign Up Today And "} highlightTxt={"Learn To Play!"} graphicDisplay= {"none"} />
    </div>
  )
}

export default Home;
