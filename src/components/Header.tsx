import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMobile } from "@/contexts/MobileContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import FakeIcon from "../assets/fakeicon.svg";
import MenuIcon from "../assets/menuicon.svg";
import "../style/Header.css";

const Header: React.FC = () => {
  const isMobile = useMobile();
  const navigate = useNavigate();
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
            <SheetHeader
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  gap: "0.6rem",
                }}
              >
                <Button
                  variant="secondary"
                  style={{ width: "100%" }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </Button>
                <Button
                  variant="outline"
                  style={{ width: "100%" }}
                  onClick={() => {
                    navigate("/CV");
                  }}
                >
                  CV
                </Button>
                <Button
                  variant="outline"
                  style={{ width: "100%" }}
                  onClick={() => {
                    navigate("/contacts");
                  }}
                >
                  Contacts
                </Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
