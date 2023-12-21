import { Container, Row, Col } from "react-bootstrap";

export default function HeroSection() {
  return (
    <>
      <Container className="pt-3">
        <Row>
          {/* kiri */}
          <Col xs={4}>
            <div>
              <img
                src="src/assets/landing page/fotobareng.png"
                style={{ width: "100%" }}
              />
            </div>
            <div className="text-center pt-4">
              <div>Kepengurusan 2023/2024</div>
              <div>Kabiner Amanah</div>
            </div>
            <Row className="text-center pt-2">
              {/* kiri */}
              <Col>
                <img src="src/assets/landing page/struktur.png" />{" "}
                <div>7 Divisi</div>
              </Col>
              {/* kanan */}
              <Col>
                {" "}
                <img src="src/assets/landing page/community.png" />
                <div>50 Pengurus</div>
              </Col>
            </Row>
          </Col>

          {/* kanan */}
          <Col xs={8}>
            <div style={{ display: "flex" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="450"
                viewBox="0 0 6 839"
                fill="none"
                style={{ marginRight: "10px" }}
              >
                <path
                  d="M3 3V835.5"
                  stroke="#FF6000"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <h5>Selamat Datang di Website UKM CLIC</h5>
                <h5>Universitas Negeri Semarang</h5>
                <h6 className="fw-bold pt-4">Lates Event</h6>
                <Row>
                  <Col>
                    <img
                      src="src/assets/landing page/event.png"
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col>
                    <img
                      src="src/assets/landing page/event.png"
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col>
                    <img
                      src="src/assets/landing page/event.png"
                      style={{ width: "100%" }}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
