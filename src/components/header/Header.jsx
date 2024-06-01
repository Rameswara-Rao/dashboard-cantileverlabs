import { useState } from "react";

import {
  Stack,
  Button,
  Offcanvas,
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./HeaderStyles.css";
import { useMediaQuery } from "react-responsive";
import SideNavBar from "../sideNavBar/SideNavBar";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                {" "}
                <SideNavBar />{" "}
              </Offcanvas.Body>
            </Offcanvas>
            <Stack direction="horizontal">
              <div>
                {!isDesktop && (
                  <Button
                    className="sidebaroffcanvas sidebaroffcanvas-btn"
                    variant="primary"
                    onClick={handleShow}
                  >
                    <RxHamburgerMenu size={20} />
                  </Button>
                )}
              </div>
              <div>
                <p className="dashboard-header">Weeklysumup</p>
                <p className="header-subtext word-wrap">
                  Get summary of your weekly online transactions here.
                </p>
              </div>
            </Stack>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="my-auto">
                <img src="/header/mail.svg" alt="" />
              </Nav.Link>
              <Nav.Link className="my-auto">
                <img src="/header/bell.svg" alt="" />
              </Nav.Link>
              <Nav.Link>
                <div className="d-flex mt-3 ms-3">
                  <div>
                    <img width={35} src="/header/profile-icon.svg" alt="" />
                  </div>
                  <div className="ms-1">
                    <p className="header-name">Andrew</p>
                    <p className="header-role">Admin account</p>
                  </div>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
