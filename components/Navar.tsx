"use client";
import { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n';
import 'bootstrap/dist/css/bootstrap.min.css';



export const Navar = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="my-navbar">
      <Container>
        <Navbar.Brand href="/">Developer Fullstack</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#experience">{t('experience')}</Nav.Link>
            <Nav.Link href="/#skills">{t('skills')}</Nav.Link>
            <Nav.Link href="/#contact">{t('contact')}</Nav.Link>
            

          </Nav>
          <Nav>
            <NavDropdown title={t('language')} id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={() => i18n.changeLanguage('es')}>
                {t('spanish')}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>
                {t('english')}
              </NavDropdown.Item>
            </NavDropdown>

            <Form.Check
              type="switch"
              id="custom-switch"
              label={darkMode ? "🌙" : "☀️"}
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="text-light mx-3"
              style={{ paddingTop: "9px" }} 
            />

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
//<Nav.Link href="/proyects">{t('projects')}</Nav.Link>