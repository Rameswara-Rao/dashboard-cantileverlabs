import "./App.css";
import { Row, Col, Container } from "react-bootstrap";

import MainContent from "./MainContent";
import SideNavBar from "./components/sideNavBar/SideNavBar";

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} className="sidebar">
          <SideNavBar />
        </Col>
        <Col sm={10} className="main-content">
          <MainContent />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
