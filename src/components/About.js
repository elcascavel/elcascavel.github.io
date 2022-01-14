import React from "react";
import Typewriter from "typewriter-effect";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const About = () => {
  const {t} = useTranslation();
  return (
    <Container id="about" className="mt-4 text-center">
<Row className="align-items-center">
    <Col>
<h3><span className="name-font">Simão Amaral</span>, {t('about.known-as')} <span className="nickname-font">Cascavel</span> {t('about.on-the-web')}</h3>
<Typewriter
  options={{
    strings: ['<span style="color: var(--bs-dracula-pink);">College Student</span>', '<span style="color: var(--bs-dracula-green);">Programmer</span>'],
    autoStart: true,
    loop: true,
  }}
/>
    </Col>
    <Col className="px-0">
    <img className="img-fluid rounded" width="80%" src="./profile_pic.png" alt="Simão in the flesh"></img>
    </Col>
</Row>
<Row className="mt-4">
    <Col>
    <h2 className="title-color"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg> {t('about.title')}</h2>
  <p>{t('about.intro')}</p>
    </Col>
</Row>
    </Container>
  );
};
export default About;
