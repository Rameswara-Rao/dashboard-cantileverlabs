import { useState } from "react";

import { Row, Col, Stack, Button, Offcanvas } from "react-bootstrap";
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
      <Row>
        <Col sm={9}>
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
                  <RxHamburgerMenu size={24} />
                </Button>
              )}
            </div>
            <div>
              <p className="dashboard-header">Weeklysumup</p>
            </div>
          </Stack>
          <p className="header-subtext">
            Get summary of your weekly online transactions here.
          </p>
        </Col>
        <Col sm={3}>
          <Stack direction="horizontal">
            <div>
              <img src="/header/mail.svg" alt="" />
            </div>
            <div className="ms-3">
              <img src="/header/bell.svg" alt="" />
            </div>
            <div className="d-flex mt-3 ms-3">
              <div>
                <img width={35} src="/header/profile-icon.svg" alt="" />
              </div>
              <div className="ms-1">
                <p className="header-name">Andrew</p>
                <p className="header-role">Admin account</p>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </>
  );
};

export default Header;
