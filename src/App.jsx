import "./App.css";
import { Row, Col, Button, Container, Navbar, Nav } from "react-bootstrap";
import { MdArrowUpward } from "react-icons/md";

import MainContent from "./MainContent";

const App = () => {
  const navLink = [
    {
      name: "Overview",
      icon: "/sidebar/overview.svg",
    },
    {
      name: "Transactions",
      icon: "/sidebar/transactions.svg",
    },
    {
      name: "Cards",
      icon: "/sidebar/cards.svg",
    },
    {
      name: "Invoices",
      icon: "/sidebar/invoices.svg",
    },
    {
      name: "Goals",
      icon: "/sidebar/goals.svg",
    },
    {
      name: "Settings",
      icon: "/sidebar/settings.svg",
    },
  ];
  return (
    <Container fluid>
      <Row>
        <Col sm={2} className="sidebar pl-0">
          <Navbar expand="lg" className="d-flex flex-column vh-100">
            <Navbar.Brand>
              <img src="/sidebar/brandlogo.svg" width={150} alt="" />
            </Navbar.Brand>
            <Nav className="flex-column mt-4">
              {navLink.map((data, ind) => {
                return (
                  <Nav.Link
                    className={`${ind == 0 ? "nav-link-active" : ""} px-4`}
                    key={ind}
                  >
                    <img src={data.icon} className="me-4 py-2" alt="" />
                    <span
                      className={`${
                        ind == 0 ? "navlink-text-blue" : "navlink-textt"
                      }`}
                    >
                      {data.name}
                    </span>
                  </Nav.Link>
                );
              })}
            </Nav>
            <div className="mt-auto text-center mb-3">
              <img src="/sidebar/premiumimg.svg" className="mb-3" alt="" />
              <Button className="premium-btn" variant="primary">
                Upgrade to premium <MdArrowUpward />
              </Button>
            </div>
          </Navbar>
        </Col>
        <Col sm={10} className="main-content">
          <MainContent />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
