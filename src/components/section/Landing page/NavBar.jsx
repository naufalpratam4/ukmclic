import { Container, Navbar, Nav } from "react-bootstrap";
import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredLink(index);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const navLinkStyle = {
    color: "black",
    fontWeight: 400,
    transition: "color 0.5s",
  };

  const navLinkHoverStyle = {
    color: "orange",
    fontWeight: 600,
    transition: "color 0.3s",
  };

  const menuItems = ["Home", "About", "Visi", "Divisi", "Kerja Sama", "Kontak"];

  return (
    <>
      <Navbar
        expand="md"
        className="navbar sticky-top border-body"
        style={{ background: "white", borderBottom: "2px solid grey" }}
      >
        <Container style={{ paddingTop: "5px", paddingBottom: "5px" }}>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="src/assets/landing page/Logo CLIC.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            {isMobile ? "UKM CLIC" : "UKM Fotografi & Sinematografi CLIC"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ms-auto">
              {menuItems.map((link, index) => (
                <Nav.Link
                  className="pe-3"
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  style={
                    hoveredLink === index ? navLinkHoverStyle : navLinkStyle
                  }
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
