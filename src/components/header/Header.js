import React, { useState, useEffect } from "react";
import "./Header.css";
import Toolbar from "./Toolbar";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [starred, setStarred] = useState(false);

  useEffect(() => {
  const handleClickOutside = () => {
    setActiveMenu(null);
  };

  document.addEventListener("click", toggleMenu);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  // 📂 FILE ACTIONS

  const handleOpen = (e) => {
    e.stopPropagation();
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) alert("Opened file: " + file.name);
    };
    input.click();
  };

  const handleShare = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  const handleDownload = (e) => {
    e.stopPropagation();
    const content = document.body.innerText;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "file.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  const handleStar = (e) => {
    e.stopPropagation();
    setStarred((prev) => !prev);
  };

  const handlePrint = (e) => {
    e.stopPropagation();
    window.print();
  };

  const handleDetails = (e) => {
    e.stopPropagation();
    alert(`URL: ${window.location.href}\nTitle: ${document.title}`);
  };

  const handleZoom = (e) => {
    e.stopPropagation();
    const value = prompt("Enter zoom (e.g., 1.2)", zoom);
    if (value && !isNaN(value)) setZoom(parseFloat(value));
  };

  const handleFeedback = (e) => {
    e.stopPropagation();
    window.open("https://support.google.com/", "_blank");
  };

  return (
    <>
      <div className="header">
        <div className="menu">

          {/* FILE */}
          <div className="menu-item" onClick={() => toggleMenu("file")}>
            File
            {activeMenu === "file" && (
              <div className="dropdown">
                <div onClick={handleOpen}>Open</div>
                <div onClick={handleShare}>Share</div>
                <div onClick={handleDownload}>Download</div>
                <div onClick={handleStar}>
                  {starred ? "Remove from starred" : "Add to starred"}
                </div>
                <div onClick={handleDetails}>Details</div>
                <div onClick={handlePrint}>Print</div>
              </div>
            )}
          </div>

          {/* VIEW */}
          <div className="menu-item" onClick={() => toggleMenu("view")}>
            View
            {activeMenu === "view" && (
              <div className="dropdown">
                <div onClick={(e) => e.stopPropagation()}>
                  Comments (Coming soon)
                </div>
                <div onClick={handleZoom}>Zoom</div>
              </div>
            )}
          </div>

          {/* HELP */}
          <div className="menu-item" onClick={() => toggleMenu("help")}>
            Help
            {activeMenu === "help" && (
              <div className="dropdown">
                <div onClick={handleFeedback}>Send feedback</div>
                <div onClick={(e) => e.stopPropagation()}>
                  Report (Simulated)
                </div>
                <div onClick={(e) => e.stopPropagation()}>
                  Keyboard: Ctrl + P
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "top left",
          padding: "20px"
        }}
      >
        <h2>Page Content</h2>
        <p>Use the menu above.</p>
      </div>
    </>
  );
};

export default Header;