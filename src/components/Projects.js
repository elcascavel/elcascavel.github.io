import React from "react";
import { Container, Row, Col, Tabs, Tab, Button} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp, faJs, faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";

const Projects = () => {
  const {t} = useTranslation();
  return (
    <Container id="projects" className="mt-4 text-center">
<Row>
    <Col>
     <h2 className="title-color"><FontAwesomeIcon icon={faKeyboard} /> {t('projects.title')}</h2>
    </Col>
</Row>
<Row className="mb-4">
<Tabs fill justify defaultActiveKey="snake" className="mt-3 mb-3">
  <Tab eventKey="snake" title="Snake">
    <Row className="align-items-center">
    <Col className="px-0">
    <img src="./snake_gameplay.png" className="img-fluid" width="80%" alt="snake game screenshot"></img>
    </Col>
    <Col>
    <p>{t('projects.snake')}</p>
    <Button href="https://github.com/elcascavel/Snake" target="_blank" rel="noreferrer noopener" variant="outline-dracula-purple">{t('projects.elements.github-button')}</Button>{' '}
    </Col>
    </Row>
  </Tab>
  <Tab eventKey="klochon" title="Klochon">
  <Row className="align-items-center">
    <Col className="px-0">
    <img className="img-fluid" src="./klochon-gta-api.gif" alt="klochon in action"></img>
    </Col>
    <Col className="mt-2">
      <p>Built with <FontAwesomeIcon icon={faJs} size="lg" /></p>
    <p>{t('projects.klochon')}</p>
    <Button href="https://github.com/elcascavel/Klochon" target="_blank" rel="noreferrer noopener" variant="outline-dracula-purple">{t('projects.elements.github-button')}</Button>{' '}
    </Col>
    </Row>
  </Tab>
  <Tab eventKey="gta-api" title= "GTA API">
  <p>Built with <FontAwesomeIcon icon={faJs} size="lg" /></p>
    <p>{t('projects.gta-api')}</p>
    <Button href="https://github.com/elcascavel/gta-api" target="_blank" rel="noreferrer noopener" variant="outline-dracula-purple">{t('projects.elements.github-button')}</Button>{' '}
  </Tab>
  <Tab eventKey="resumos-cm" title="Resumos CM">
    <FontAwesomeIcon icon={faMarkdown} size="lg" />
    <p>{t('projects.resumos')}</p>
    <Button href="https://github.com/elcascavel/ResumosCM" target="_blank" rel="noreferrer noopener" variant="outline-dracula-purple">{t('projects.elements.github-button')}</Button>{' '}
    <Button className="mx-2 mt-m-0 mt-l-0 mt-xl-0 mt-2" href="https://elcascavel.me/ResumosCM" target="_blank" rel="noreferrer noopener" variant="outline-dracula-yellow">{t('projects.elements.live-site-button')}</Button>{' '}
  </Tab>
  <Tab eventKey="online-shop" title="Online Shop" disabled>
    php
  </Tab>
</Tabs>
</Row>
    </Container>
  );
};
export default Projects;
