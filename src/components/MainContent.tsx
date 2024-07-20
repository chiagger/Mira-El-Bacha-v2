import React from "react";
import "../style/MainContent.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MainContent: React.FC = () => {
  return (
    <main
      className="main-content"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="portfolio">
        {/* You can loop through images if you have a list */}
        <div className="portfolio-item">
          <img src="path_to_image1.jpg" alt="Project 1" />
        </div>
        <div className="portfolio-item">
          <img src="path_to_image2.jpg" alt="Project 2" />
        </div>
        <div className="portfolio-item">
          <img src="path_to_image3.jpg" alt="Project 3" />
        </div>
        <div className="portfolio-item">
          <img src="path_to_image4.jpg" alt="Project 4" />
        </div>
      </div>
      <Card style={{ width: "45%", height: "60%", overflowY: "scroll" }}>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Welcome! I am a 1st AD based in East London. I have worked as an AD
            across continents, collaborating with brands in Italy, the UAE,
            Germany, the Netherlands, and the UK. You can find a full list of my
            brand collaborations and AD work below: they range from the
            Roundhouse in London, to the Cineteca di Bologna in Italy, to the
            Abu Dhabi Media Company in the UAE. I am currently open to new work.
            Organised. I keep everything on track while making sure creativity
            has the space it needs to thrive. I have managed schedules for teams
            of over 50 people without a hitch. Every film I have AD-ed has
            wrapped up on time, and with satisfied creative teams. Inclusive. I
            have been an LGBT activist since I was fifteen, as an queer Arab
            myself. I have worked in anti-racist advocacy, and I am trained in
            disability inclusion. My work is about listening to the needs of
            everyone on set and making sure every crew member is valued and
            motivated. Passionate. I love being part of this industry. I have
            taught film, studied film, and made films since 2014. Films are the
            most powerful tool for inspiring and connecting people: my
            commitment to this field is unwavering.
          </p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
};

export default MainContent;
