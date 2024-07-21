import { useMobile } from "@/contexts/MobileContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Header.css";
import Header from "./Header";

const Contacts: React.FC = () => {
  //   const isMobile = useMobile();
  //   const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="container">ok Contacts</div>
    </>
  );
};

export default Contacts;