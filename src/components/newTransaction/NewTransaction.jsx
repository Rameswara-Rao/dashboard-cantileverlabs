import {
  Row,
  Col,
  Card,
  Stack,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import { newTransImg } from "../../utils/constants";
import { HiPlus } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa6";
import "./NewTransactionStyles.css";
const NewTransaction = () => {
  return (
    <Row className="my-3">
      <Col sm={9} xl={8}>
        <Card className="card-mod">
          <Card.Body>
            <p className="goals-card-title mb-4">New transaction</p>
            <Stack direction="horizontal">
              {newTransImg.map((data, ind) => {
                return (
                  <div className="mx-2 text-center" key={ind}>
                    <img src={data.imgurl} alt="" />
                    <p className="tran_user_name">{data.name}</p>
                  </div>
                );
              })}
              <div className="my-auto py-auto text-center">
                <Button className="button-goals text-center new-trac-btn">
                  <HiPlus size={18} fontWeight={900} className="icon" />
                </Button>
              </div>
            </Stack>
            <Stack className="mt-3" direction="horizontal">
              <div>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="0"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="form-control-mod"
                  />
                  <InputGroup.Text id="basic-addon2" className="input-text-mod">
                    $
                  </InputGroup.Text>
                </InputGroup>
              </div>
              <div>
                <Button className="sent-tran-btn">
                  Send transfer <FaAngleRight fontSize={12} />
                </Button>
              </div>
            </Stack>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={3} xl={4}>
        <Card className="text-white border-0">
          <Card.Img src="/cardbg.svg" alt="Card image" />
          <Card.ImgOverlay className="d-flex flex-column justify-content-end">
            <Card.Text className="card-text-mod">
              Get great <br /> loan !
              <FaAngleRight className="mb-1" fontSize={18} />
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Col>
    </Row>
  );
};

export default NewTransaction;
