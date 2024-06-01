import { Button, Row, Col, Card } from "react-bootstrap";
import { HiPlus } from "react-icons/hi";
import { goalsData } from "../../utils/constants";
import "./GoalsStyle.css";

const Goals = () => {
  return (
    <div>
      <p className="goals-head text-center text-xl-start mt-5 mt-xl-0">
        Goals{" "}
        <Button className="button-goals text-center">
          <HiPlus size={18} fontWeight={900} className="icon" />
        </Button>
      </p>
      <Row>
        {goalsData?.map((data, ind) => {
          return (
            <Col key={ind} sm={4}>
              <Card className="card-mod text-center text-xl-start my-4 my-xl-0 mx-4 mx-sm-0">
                <Card.Body>
                  <p className="goals-card-title">${data.price}</p>
                  <p className="goals-card-subtitle">{data.date}</p>

                  <img className="mt-3" width={30} src={data.imgurl} alt="" />
                  <p className="goals-card-text">{data.title}</p>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Goals;
