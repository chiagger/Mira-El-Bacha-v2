import React from "react";
import "../style/MainContent.css";
import "../style/Scrollbar.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const MainContent: React.FC = () => {
  return (
    <main
      className="main-content"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <ScrollArea
        className="rounded-md border p-4"
        style={{
          width: "45%",
          height: "85%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
          }}
        >
          <Card>
            <CardContent>ok</CardContent>
          </Card>
          <Card>
            <CardContent>ok</CardContent>
          </Card>
          <Card>
            <CardContent>ok</CardContent>
          </Card>
          <Card>
            <CardContent>ok</CardContent>
          </Card>
          <Card>
            <CardContent>ok</CardContent>
          </Card>
        </div>
      </ScrollArea>
      <ScrollArea
        className="rounded-md border p-4"
        style={{ width: "45%", height: "85%" }}
      >
        <Card style={{ textAlign: "left" }}>
          <CardHeader style={{ textAlign: "center" }}>
            <CardTitle>Welcome!</CardTitle>
            <CardDescription>
              I am a 1st AD based in East London.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-[10px]">
              I have worked as an AD across continents, collaborating with
              brands in Italy, the UAE, Germany, the Netherlands, and the UK.
            </p>
            <p className="mb-[10px]">
              You can find a full list of my brand collaborations and AD work
              below: they range from the Roundhouse in London, to the Cineteca
              di Bologna in Italy, to the Abu Dhabi Media Company in the UAE.
            </p>
            <p className="mb-[10px]">
              <i>I am currently open to new work.</i>
            </p>

            <p className="mb-[10px]">
              <b>Organised.</b> I keep everything on track while making sure
              creativity has the space it needs to thrive. I have managed
              schedules for teams of over 50 people without a hitch. Every film
              I have AD-ed has wrapped up on time, and with satisfied creative
              teams.
            </p>
            <p className="mb-[10px]">
              <b>Inclusive.</b> I have been an LGBT activist since I was
              fifteen, as an queer Arab myself. I have worked in anti-racist
              advocacy, and I am trained in disability inclusion. My work is
              about listening to the needs of everyone on set and making sure
              every crew member is valued and motivated.
            </p>
            <p className="mb-[10px]">
              <b>Passionate.</b> I love being part of this industry. I have
              taught film, studied film, and made films since 2014. Films are
              the most powerful tool for inspiring and connecting people: my
              commitment to this field is unwavering.
            </p>
          </CardContent>
        </Card>
      </ScrollArea>
    </main>
  );
};

export default MainContent;
