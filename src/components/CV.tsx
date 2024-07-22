import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import "../style/Header.css";
import "../style/MainContent.css";
import Header from "./Header";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";

const CV: React.FC = () => {
  //   const isMobile = useMobile();
  //   const navigate = useNavigate();

  const createWorkExperience = (
    title: string,
    project: string,
    year: string,
    description: string
  ) => {
    return (
      <Card style={{ padding: 13 }}>
        <CardContent style={{ padding: 0 }}>
          <h1 style={{ fontWeight: "550" }}>{title}</h1>
          <h1 style={{ fontSize: "0.9em" }}>{project}</h1>
          <p style={{ fontSize: "0.7em" }}>{year}</p>
          <p>{description}</p>
        </CardContent>
      </Card>
    );
  };
  return (
    <>
      <Header />

      <div
        className="container"
        style={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Drawer>
          <DrawerTrigger>
            <Button variant="secondary" style={{ marginTop: "15%" }}>
              Education & Skills
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <div
          style={{
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            gap: "1rem",
            width: "100%",
            height: "80%",
          }}
        >
          <Card
            style={{
              width: "60%",
              height: "100%",
              backgroundColor: "#F1F5F9",
            }}
          >
            <CardHeader style={{ padding: 15, paddingBottom: 7 }}>
              <h1 style={{ fontSize: "1.2em" }}>1st Assistant Director</h1>
            </CardHeader>
            <ScrollArea
              className="rounded-md p-1"
              style={{
                height: "80%",
              }}
            >
              <CardContent style={{ padding: 5 }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "0.5rem",
                  }}
                >
                  {createWorkExperience("", "The Black Pill", "2024", "")}
                  {createWorkExperience("", "The Sandman", "2024", "")}
                  {createWorkExperience("", "The Chopping Block", "2024", "")}
                  {createWorkExperience("", "That's All From Me", "2024", "")}
                  {createWorkExperience("", "PVC Real Estate", "2024", "")}
                  {createWorkExperience("", "The Barn", "2024", "")}
                  {createWorkExperience("", "In Two Minds", "2024", "")}
                  {createWorkExperience(
                    "",
                    "You Won't Help Me",
                    "2023-2024",
                    ""
                  )}
                  {createWorkExperience("", "Datura Daydream", "2022", "")}
                  {createWorkExperience("", "The Morning After", "2022", "")}
                  {createWorkExperience("", "Rise Like Water", "2021", "")}
                  {createWorkExperience("", "Fragile", "2021", "")}
                </div>
              </CardContent>
            </ScrollArea>
          </Card>
          <Card
            style={{
              width: "40%",
              height: "100%",
              backgroundColor: "#F1F5F9",
            }}
          >
            <CardHeader style={{ padding: 15, paddingBottom: 7 }}>
              <h1 style={{ fontSize: "1.2em" }}>Other Work Experience</h1>
            </CardHeader>
            <ScrollArea
              className="rounded-md p-1"
              style={{
                height: "80%",
              }}
            >
              <CardContent style={{ padding: 5 }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "0.5rem",
                  }}
                >
                  {createWorkExperience(
                    "Production Assistant",
                    "This Person Does Not Exist",
                    "2022",
                    "Short film production."
                  )}
                  {createWorkExperience(
                    "Documentary Film Maker",
                    "Il sole in cantina",
                    "2019",
                    "Production of a short documentary about music and history. Production of a series of interviews."
                  )}
                  {createWorkExperience(
                    "Film Festival Organiser",
                    "Some Prefer Cake and Genderbender",
                    "2014-2020",
                    "Administrative work to put the festival together, from getting more volunteers to helping choose the films to be screened."
                  )}
                  {createWorkExperience(
                    "Film Tutor",
                    "Mediateca di San Lazzaro",
                    "2019",
                    "Tutor younger people in making a short video."
                  )}
                  {createWorkExperience(
                    "Events Organiser",
                    "Cassero LGBT Center",
                    "2015-2020",
                    "Coordinated a team to organise events and awareness campaigns. Did a lot of team-building."
                  )}
                  {createWorkExperience(
                    "Internship TV",
                    "Twofour54",
                    "2018",
                    "Internship in television where I rehearsed every role in a live news programme."
                  )}
                  {createWorkExperience(
                    "Documentary Film Maker",
                    "Younet",
                    "2017-2018",
                    "Cultural exchange in Germany to make a documentary about young jugglers. Interviewer."
                  )}
                  {createWorkExperience(
                    "Director",
                    "Salaborsa, Cineteca di Bologna",
                    "2014-2015",
                    "Production of a short film for the municipal library."
                  )}
                </div>
              </CardContent>
            </ScrollArea>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CV;
