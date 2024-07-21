import React, { useEffect } from "react";
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
import PVC1 from "../assets/img/PVC1.jpg";
import PVC2 from "../assets/img/PVC2.jpg";
import PVC3 from "../assets/img/PVC3.jpg";
import PVC4 from "../assets/img/PVC4.jpg";
import jonah1 from "../assets/img/jonah1.jpg";
import jonah2 from "../assets/img/jonah2.jpg";
import third1 from "../assets/img/3.jpg";
import third2 from "../assets/img/4.jpg";
import fourth1 from "../assets/img/5.jpg";
import fourth2 from "../assets/img/6.jpg";
import fifth1 from "../assets/img/7.jpg";
import fifth2 from "../assets/img/8.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMobile } from "@/contexts/MobileContext";

const MainContent: React.FC = () => {
  const isMobile = useMobile();

  const PVCImages = [PVC1, PVC2, PVC3, PVC4];
  const [currentPVC, setCurrentPVC] = React.useState(0);

  const jonahImages = [jonah1, jonah2];
  const [currentJonah, setCurrentJonah] = React.useState(0);

  const thirdImages = [third1, third2];
  const [currentThird, setCurrentThird] = React.useState(0);

  const fourthImages = [fourth1, fourth2];
  const [currentFourth, setCurrentFourth] = React.useState(0);

  const fifthImages = [fifth1, fifth2];
  const [currentFifth, setCurrentFifth] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentJonah((prevIndex) => (prevIndex + 1) % jonahImages.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [jonahImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPVC((prevIndex) => (prevIndex + 1) % PVCImages.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [PVCImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentThird((prevIndex) => (prevIndex + 1) % thirdImages.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [thirdImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFourth((prevIndex) => (prevIndex + 1) % fourthImages.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [fourthImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFifth((prevIndex) => (prevIndex + 1) % fifthImages.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [fifthImages.length]);

  return (
    <main
      className="main-content"
      style={{
        display: "flex",
        flexDirection: `${!isMobile ? "row" : "column-reverse"}`,
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <ScrollArea
        className="rounded-md border p-4"
        style={{
          width: !isMobile ? "50%" : "100%",
          height: !isMobile ? "85%" : "65%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0.5rem",
          }}
        >
          <Dialog>
            <DialogTrigger>
              <Card style={{ cursor: "pointer" }}>
                <CardContent style={{ padding: 4 }}>
                  <img
                    src={PVCImages[currentPVC]}
                    style={{ borderRadius: "5px" }}
                  />
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent style={{ padding: 0, paddingBottom: "1.2rem" }}>
              <img
                src={PVCImages[currentPVC]}
                style={{ borderRadius: "10px" }}
              />
              <DialogHeader style={{ textAlign: "center" }}>
                <DialogTitle>PVC Real Estate</DialogTitle>
                <DialogDescription>directed by Holly Hunter</DialogDescription>
                <DialogDescription
                  style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                >
                  A music video for the song PVC Real Estate by Shelf Lives.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <Card style={{ cursor: "pointer" }}>
                <CardContent style={{ padding: 4 }}>
                  <img
                    src={jonahImages[currentJonah]}
                    style={{ borderRadius: "5px" }}
                  />
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent style={{ padding: 0, paddingBottom: "1.2rem" }}>
              <img
                src={jonahImages[currentJonah]}
                style={{ borderRadius: "10px" }}
              />
              <DialogHeader style={{ textAlign: "center" }}>
                <DialogTitle>Datura Daydreams</DialogTitle>
                <DialogDescription>
                  directed by Jonah Garrett-Bannister
                </DialogDescription>
                <DialogDescription
                  style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                >
                  Sam is bored of hookup culture, and while trying to find the
                  balance between superficial appearance and genuine attraction
                  he discovers an escape: an ugly thorned flower where he
                  convinces himself the man of his dreams resides.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <Card style={{ cursor: "pointer" }}>
                <CardContent style={{ padding: 4 }}>
                  <img
                    src={thirdImages[currentThird]}
                    style={{ borderRadius: "5px" }}
                  />
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent style={{ padding: 0, paddingBottom: "1.2rem" }}>
              <img
                src={thirdImages[currentThird]}
                style={{ borderRadius: "10px" }}
              />
              <DialogHeader style={{ textAlign: "center" }}>
                <DialogTitle>Rise Like Water</DialogTitle>
                <DialogDescription>
                  directed by Jonah Garrett-Bannister
                </DialogDescription>
                <DialogDescription
                  style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                >
                  Lena comes across a group of nomads in London who help her
                  come to terms with her troubled past by connecting her to
                  spirit and balance. By turning her back on the establishment,
                  she ultimately sees her connection to the natural world and
                  learns the need to fight for it.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <Card style={{ cursor: "pointer" }}>
                <CardContent style={{ padding: 4 }}>
                  <img
                    src={fourthImages[currentFourth]}
                    style={{ borderRadius: "5px" }}
                  />
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent style={{ padding: 0, paddingBottom: "1.2rem" }}>
              <img
                src={fourthImages[currentFourth]}
                style={{ borderRadius: "10px" }}
              />
              <DialogHeader style={{ textAlign: "center" }}>
                <DialogTitle>Morning After</DialogTitle>
                <DialogDescription>
                  directed by Saoirse D. Byrne
                </DialogDescription>
                <DialogDescription
                  style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                >
                  Three queer friends make their way home from a night out.
                  Throughout the film, they will question their own
                  self-censorship, and the place in which it is coming from – is
                  it out of fear, embarrassment, self-preservation, or a
                  combination of the three? And how can we liberate ourselves
                  from this judgment not only from others but from ourselves,
                  and become comfortable in being unapologetically queer?
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <Card style={{ cursor: "pointer" }}>
                <CardContent style={{ padding: 4 }}>
                  <img
                    src={fifthImages[currentFifth]}
                    style={{ borderRadius: "5px" }}
                  />
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent style={{ padding: 0, paddingBottom: "1.2rem" }}>
              <img
                src={fifthImages[currentFifth]}
                style={{ borderRadius: "10px" }}
              />
              <DialogHeader style={{ textAlign: "center" }}>
                <DialogTitle>Fragile</DialogTitle>
                <DialogDescription>directed by Laura Esteban</DialogDescription>
                <DialogDescription
                  style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                >
                  A music video for the song Fragile by Noor Mandviwalla.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </ScrollArea>
      <ScrollArea
        className="rounded-md border p-4"
        style={{
          width: !isMobile ? "40%" : "100%",
          height: !isMobile ? "85%" : "35%",
        }}
      >
        <Card style={{ textAlign: "left", fontSize: "0.9em" }}>
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
