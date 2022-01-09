import React from "react";
import { Container, Row, Col, Tabs, Tab, Button} from "react-bootstrap";

const Projects = () => {
  return (
    <Container id="projects" className="mt-4 text-center">
<Row>
    <Col>
    <div>
     <h2 className="title-color"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
</svg> Projects</h2>
    </div>
    </Col>
</Row>
<Row className="mb-4">
<Tabs defaultActiveKey="snake" className="mt-3 mb-3">
  <Tab eventKey="snake" title="Snake (C++)">
    <Row className="align-items-center">
    <Col className="px-0">
    <img src="./snake_gameplay.png" width="80%" alt="snake game screenshot"></img>
    </Col>
    <Col>
    <p>Snake clone built with C++ using SDL2. This was a huge milestone for me.</p>
    <Button href="https://github.com/elcascavel/Snake" target="_blank" rel="noreferrer noopener" variant="outline-dracula-purple">Github Repository</Button>{' '}
    </Col>
    </Row>
  </Tab>
  <Tab eventKey="klochon" title="Klochon (JavaScript)">
  <Row className="align-items-center">
    <Col className="px-0">
    <img src="./klochon-gta-api.gif" alt="klochon in action"></img>
    </Col>
    <Col className="mt-2">
    <p>Klochon is a Discord bot working in conjunction with an <span eventKey="gta-api">API</span> I programmed. It will fetch GTA San Andreas files from a database for modding purposes.</p>
    <Button href="https://github.com/elcascavel/Klochon" target="_blank" rel="noreferrer noopener" variant="outline-dracula-purple">Github Repository</Button>{' '}
    </Col>
    </Row>
  </Tab>
  <Tab eventKey="gta-api" title="GTA API (JavaScript)">
    <p>This is the API working with Klochon. It was built with Express and JavaScript.</p>
    <Button href="https://github.com/elcascavel/gta-api" target="_blank" rel="noreferrer noopener" variant="outline-dracula-purple">Github Repository</Button>{' '}
  </Tab>
  <Tab eventKey="resumos-cm" title="Resumos CM">
    <p>College notes for students in Communication and Multimedia. They are written in Portuguese.</p>
    <Button href="https://github.com/elcascavel/ResumosCM" target="_blank" rel="noreferrer noopener" variant="outline-dracula-purple">Github Repository</Button>{' '}
    <Button href="https://elcascavel.me/ResumosCM" target="_blank" rel="noreferrer noopener" variant="outline-dracula-yellow">See It Live</Button>{' '}
  </Tab>
  <Tab eventKey="online-shop" title="Online Shop (PHP)" disabled>
    php
  </Tab>
</Tabs>
</Row>
    </Container>
  );
};
export default Projects;
