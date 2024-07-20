import React from "react";
import "../style/Header.css";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import MenuIcon from "../assets/menuicon.svg";
import FakeIcon from "../assets/fakeicon.svg";
import { useMobile } from "@/contexts/MobileContext";

const Header: React.FC = () => {
  const isMobile = useMobile();
  return (
    <header className="header">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Button variant="ghost" className="fake-menu">
          <img src={FakeIcon}></img>
        </Button>
        <div>
          <h1 style={{ fontSize: !isMobile ? "2em" : "" }}>Mira El Bacha</h1>
          <h2>1st Assistant Director</h2>
        </div>
        <Sheet>
          <SheetTrigger>
            <Button
              variant="ghost"
              className="menu-button"
              style={{ marginRight: "2vw" }}
            >
              <img src={MenuIcon}></img>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
