import { Row, Col, Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import MainContent from "./MainContent";
import SideNavBar from "./components/sideNavBar/SideNavBar";
import "./App.css";

const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  return (
    <Container fluid>
      <Row>
        {isDesktop && (
          <Col className="p-0" sm={2}>
            <div className="sidebar px-3">
              <SideNavBar />
            </div>
          </Col>
        )}

        <Col sm={isDesktop ? 10 : 12} className="main-content px-3 ">
          <MainContent />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
