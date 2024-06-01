import { Card, Row, Col, Stack, ProgressBar } from "react-bootstrap";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import "./CreditCardStyles.css";

const CreditCard = () => {
  return (
    <>
      <Card className="card-mod">
        <Card.Body>
          <p className="goals-head">Cards</p>
          <Row>
            <Col sm={8} className="credit-card-left-border">
              <div className="d-flex">
                <p className="my-auto">
                  <FaAngleLeft size={28} color="#197BBD" />
                </p>

                <img src="/creditcard.svg" width={320} alt="" />

                <p className="my-auto">
                  <FaAngleRight size={28} color="#197BBD" />
                </p>
              </div>
              <div className="ms-5">
                <ProgressBar
                  variant="success"
                  className={"progress-bar-custom-darkblue"}
                  now={20}
                  style={{ height: "10px" }}
                />
                <Stack className="mt-2" direction="horizontal">
                  <div>
                    <p className="card-text-secondary">Weekly payment limit</p>
                  </div>
                  <div className="ms-auto">
                    <p className="card-text-money">$350.60 / $4000</p>
                  </div>
                </Stack>
              </div>
            </Col>
            <Col sm={4}>
              <div className="text-end">
                <p className="current-balance-text">$ 2850.75</p>
                <p className="current-balance-text-secondary">
                  Current balance
                </p>
              </div>

              <div className="text-end">
                <p className="income-text">$ 1500.50</p>
                <p className="current-balance-text-secondary">Income</p>
              </div>
              <div className="text-end">
                <p className="outcome-text">$ 350.60</p>
                <p className="current-balance-text-secondary">Outcome</p>
              </div>
              <div className="text-end">
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
