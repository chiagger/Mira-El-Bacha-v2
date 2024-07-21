import React from "react";
import "../style/Header.css";
import Header from "./Header";
import "../style/Contacts.css";
import { Card, CardTitle } from "./ui/card";
import Mandy from "../assets/img/mandy.svg";
import Instagram from "../assets/img/ig.png";
import Linkedin from "../assets/img/in.png";

const Contacts: React.FC = () => {
  return (
    <>
      <Header />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ padding: "3rem", textAlign: "center" }}>
          <p style={{ fontSize: "1.5em", color: "black", fontWeight: "480" }}>
            Work Email
          </p>
          <p>miraelbacha.eb@gmail.com</p>
          <p
            style={{
              fontSize: "1.5em",
              color: "black",
              fontWeight: "480",
              marginTop: "1.1em",
            }}
          >
            Phone
          </p>
          <p>+44 7884 177270</p>
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() =>
                window.open("https://www.mandy.com/u/mira-el-bacha/", "_blank")
              }
            >
              <img src={Mandy} style={{ width: "40px" }}></img>
              <p className="social">Mandy</p>
            </div>
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/mira.elbacha/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA%3D%3D",
                  "_blank"
                )
              }
            >
              <img src={Instagram} style={{ width: "40px" }}></img>
              <p className="social">Instagram</p>
            </div>
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mira-el-bacha-00a5ab2a9",
                  "_blank"
                )
              }
            >
              <img src={Linkedin} style={{ width: "40px" }}></img>
              <p className="social">Linkedin</p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Contacts;
