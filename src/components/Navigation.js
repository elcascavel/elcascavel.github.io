import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "../118n";

const Navigation = () => {
  const {t} = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand className="cas_logo">
          <img
            src="./brand.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Cascavel Logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#about">{t('nav.about')}</Nav.Link>
          <Nav.Link href="#projects">{t('nav.projects')}</Nav.Link>
        </Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={t('nav.select-language')}
          menuVariant="dark"
        >
          <NavDropdown.Item as="button" onClick={changeLanguage} value='en'>English</NavDropdown.Item>
          <NavDropdown.Item as="button" onClick={changeLanguage} value='pt'>Portuguese</NavDropdown.Item>
        </NavDropdown>
        </Container>
    </Navbar>
  );
};
export default Navigation;
