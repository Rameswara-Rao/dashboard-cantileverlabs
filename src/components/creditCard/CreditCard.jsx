import { Card, Row, Col, Stack, ProgressBar, Image } from "react-bootstrap";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import "./CreditCardStyles.css";

const CreditCard = () => {
  return (
    <>
      <Card className="card-mod">
        <Card.Body>
          <p className="goals-head text-center text-xl-start">Cards</p>
          <Row>
            <Col sm={8} className="credit-card-left-border">
              <div className="d-flex justify-content-center px-3">
                <p className="my-auto">
                  <FaAngleLeft size={28} color="#197BBD" />
                </p>

                <Image src="/creditcard.svg" alt="" fluid />

                <p className="my-auto">
                  <FaAngleRight size={28} color="#197BBD" />
                </p>
              </div>
              <div className="ms-xl-4">
                <ProgressBar
                  variant="success"
                  className={"progress-bar-custom-darkblue"}
                  now={20}
                  style={{ height: "10px" }}
                />
                <Row className="text-center mt-2">
                  <Col xs={12} sm={6}>
                    <p className="card-text-secondary text-sm-start">
                      Weekly payment limit
                    </p>
                  </Col>
                  <Col xs={12} sm={6}>
                    <p className="card-text-money text-sm-end">
                      $350.60 / $4000
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={4} className="credit-card-left-border">
              <div className="text-center text-xl-end">
                <p className="current-balance-text">$ 2850.75</p>
                <p className="current-balance-text-secondary">
                  Current balance
                </p>
              </div>

              <div className="text-center text-xl-end">
                <p className="income-text">$ 1500.50</p>
                <p className="current-balance-text-secondary">Income</p>
              </div>
              <div className="text-center text-xl-end">
                <p className="outcome-text">$ 350.60</p>
                <p className="current-balance-text-secondary">Outcome</p>
              </div>
              <div className="text-center text-xl-end">
                <input type="checkbox" id="switch" />
                <label htmlFor="switch"></label>
                <p className="current-balance-text-secondary mt-2">
                  Deacivate card
                </p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default CreditCard;
