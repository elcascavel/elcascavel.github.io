import React from "react";
import Typewriter from "typewriter-effect";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

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
    <h2 className="title-color"><FontAwesomeIcon icon={faInfoCircle} />  {t('about.title')}</h2>
  <p>{t('about.intro')}</p>
    </Col>
</Row>
    </Container>
  );
};
export default About;
