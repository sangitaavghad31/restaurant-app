import React, { useState } from "react";
import {
  FaDownload,
  FaPrint,
  FaSearch,
  FaWindowMinimize,
  FaWindowMaximize
} from "react-icons/fa";
import "./Toolbar.css";

const Toolbar = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [zoom, setZoom] = useState(1);

  // 🔽 Download (downloads page content as text file)
  const handleDownload = () => {
    const content = document.body.innerText;
    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "page-content.txt";
    a.click();

    window.URL.revokeObjectURL(url);
  };

  // 🖨️ Print
  const handlePrint = () => {
    window.print();
  };

  // 🔍 Search (basic prompt search)
  const handleSearch = () => {
    const text = prompt("Enter text to search:");
    if (!text) return;

    const found = document.body.innerText
      .toLowerCase()
      .includes(text.toLowerCase());

    alert(found ? "Text found!" : "Text not found.");
  };

  // ➖ Minimize (hide content)
  const handleMinimize = () => {
    setIsMinimized(true);
  };

  // ⬜ Maximize (restore + zoom in)
  const handleMaximize = () => {
    setIsMinimized(false);
    setZoom((prev) => prev + 0.1);
  };

  return (
    <>
      <div className="toolbar">
        <button onClick={handleDownload} title="Download">
          <FaDownload />
        </button>

        <button onClick={handlePrint} title="Print">
          <FaPrint />
        </button>

        <button onClick={handleMinimize} title="Minimize">
          <FaWindowMinimize />
        </button>

        <button onClick={handleSearch} title="Search">
          <FaSearch />
        </button>

        <button onClick={handleMaximize} title="Maximize / Zoom">
          <FaWindowMaximize />
        </button>
      </div>

      {/* CONTENT AREA */}
      {!isMinimized && (
        <div
          style={{
            padding: "20px",
            transform: `scale(${zoom})`,
            transformOrigin: "top left"
          }}
        >
          <h2>Sample Content</h2>
          <p>This is your page content. Try toolbar actions above.</p>
        </div>
      )}
    </>
  );
};

export default Toolbar;