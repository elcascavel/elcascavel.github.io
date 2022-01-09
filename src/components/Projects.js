import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

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
    <Col>
    <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Snake Clone (C++)</Card.Title>
    <Card.Text>
      Snake clone built with C++, using SDL2 as a development library.
    </Card.Text>
    <Button href="https://github.com/elcascavel/Snake" target="_blank" rel="noreferrer noopener" variant="primary">Github Repository</Button>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Klochon (JavaScript)</Card.Title>
    <Card.Text>
      Bot created for a few Discord servers using discord.js.
    </Card.Text>
    <Button href="https://github.com/elcascavel/Snake" target="_blank" variant="primary">Github Repository</Button>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>API (JavaScript)</Card.Title>
    <Card.Text>
      API to be used by Klochon. This allowed me to fetch files from a database I created and serve them to whoever requested it on Discord.
    </Card.Text>
    <Button href="https://github.com/elcascavel/Snake" target="_blank" variant="primary">Github Repository</Button>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Resumos CM</Card.Title>
    <Card.Text>
      Studying material for students in my bachelor's degree.
    </Card.Text>
    <Button href="https://github.com/elcascavel/Snake" target="_blank" variant="primary">Github Repository</Button>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>PHP Online Shop (PHP)</Card.Title>
    <Card.Text>
      A fictional online store written in PHP for a college project.
    </Card.Text>
    <Button href="https://github.com/elcascavel/Snake" target="_blank" variant="danger" disabled>Coming soon</Button>
  </Card.Body>
</Card>
    </Col>
</Row>
    </Container>
  );
};
export default Projects;
