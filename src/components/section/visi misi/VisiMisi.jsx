import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function VisiMisi() {
  const [isHovered, setIsHovered] = useState(false);

  const columnStyle = {
    position: "relative",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    transition: "opacity 0.3s ease-in-out",
    opacity: isHovered ? 0.5 : 1,
  };

  const textStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    width: "80%",
    textAlign: "start",
    pointerEvents: "none",
  };

  return (
    <>
      <Container className="mt-5 mb-5" id="visi">
        <h3 className="text-center fw-semibold mt-5 mb-3">Visi & Misi</h3>
        <Row>
          <Col
            style={columnStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="src/assets/landing page/visi.png"
              alt="Visi Image"
              style={imageStyle}
            />
            {isHovered && (
              <p style={textStyle}>“KOKOH BERAKAR, BERKILAU TERANG”</p>
            )}
          </Col>
          <Col
            style={columnStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="src/assets/landing page/misi.png"
              alt="Misi Image"
              style={imageStyle}
            />
            {isHovered && (
              <p style={textStyle}>
                <ol>
                  <li>
                    Membangun komunikasi yang baik secara internal maupun
                    eksternal
                  </li>
                  <li>Mengoptimalkan potensi sumber daya manusia</li>
                  <li>
                    Menciptakan lingkungan yang nyaman untuk para anggota
                    mengekspresikan dirinya
                  </li>
                  <li>
                    Menjadi fasilitator bagi para anggota untuk menunjukkan
                    eksistensinya di masyarakat.
                  </li>
                </ol>
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
