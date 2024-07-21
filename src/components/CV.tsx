import { useMobile } from "@/contexts/MobileContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Header.css";
import Header from "./Header";

const CV: React.FC = () => {
  //   const isMobile = useMobile();
  //   const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="container">ok CV</div>
    </>
  );
};

export default CV;
