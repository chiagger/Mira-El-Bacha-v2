import React from "react";
import "../style/MainContent.css";

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
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
    </main>
  );
};

export default MainContent;
