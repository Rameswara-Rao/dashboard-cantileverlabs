import { Row, Col } from "react-bootstrap";

import Goals from "./components/goals/Goals";
import Header from "./components/header/Header";
import CreditCard from "./components/creditCard/CreditCard";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import OutComeStatistics from "./components/outComeStatistics/OutComeStatistics";
import NewTransaction from "./components/newTransaction/NewTransaction";

const MainContent = () => {
  return (
    <>
      <Header />
      <Row>
        <Col sm={12} xl={6}>
          <CreditCard />
          <TransactionHistory />
        </Col>
        <Col sm={12} xl={6}>
          <Goals />
          <OutComeStatistics />
          <NewTransaction />
        </Col>
      </Row>
    </>
  );
};

export default MainContent;
