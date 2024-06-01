import "./App.css";
import {
  Row,
  Col,
  Card,
  Button,
  Stack,
  InputGroup,
  Form,
  Container,
  Table,
} from "react-bootstrap";
import { HiPlus } from "react-icons/hi";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import ProgressBar from "react-bootstrap/ProgressBar";

const App = () => {
  const Goals = [
    {
      price: "550",
      date: "12/20/20",
      imgurl: "/motain.svg",
      title: "Holidays",
    },
    {
      price: "200",
      date: "12/20/20",
      imgurl: "/paint.svg",
      title: "Holidays",
    },
    {
      price: "200",
      date: "12/20/20",
      imgurl: "/xbox.svg",
      title: "Holidays",
    },
  ];

  const stats = [
    {
      imgurl: "/cart.svg",
      title: "Shopping",
      percentage: "52",
      colour: "progress-bar-custom-orange",
    },
    {
      imgurl: "/truck.svg",
      title: "Electronics",
      percentage: "21",
      colour: "progress-bar-custom-green",
    },
    {
      imgurl: "/areoplane.svg",
      title: "Travel",
      percentage: "74",
      colour: "progress-bar-custom-blue",
    },
  ];

  const newTransImg = [
    {
      imgurl: "/ann.svg",
      name: "Ann",
    },
    {
      imgurl: "/monica.svg",
      name: "Monica",
    },
    {
      imgurl: "/john.svg",
      name: "John",
    },
    {
      imgurl: "/mike.svg",
      name: "Mike",
    },
    {
      imgurl: "/mia.svg",
      name: "Mia",
    },
  ];

  const tableData = [
    {
      icon: "/transaction-history/tescomarket.svg",
      reciever: "Tesco Market",
      type: "Shopping",
      date: "13 Dec 2020",
      amount: "$75.67",
    },
    {
      icon: "/transaction-history/electromenmarket.svg",
      reciever: "ElectroMen Market",
      type: "Shopping",
      date: "14 Dec 2020",
      amount: "$250.00",
    },
    {
      icon: "/transaction-history/fiorgiorestaurant.svg",
      reciever: "Fiorgio Restaurant",
      type: "Food",
      date: "07 Dec 2020",
      amount: "$19.50",
    },
    {
      icon: "/transaction-history/jhohnmathewkayne.svg",
      reciever: "John Mathew Kayne",
      type: "Sport",
      date: "06 Dec 2020",
      amount: "$350",
    },
    {
      icon: "/transaction-history/jhohnmathewkayne.svg",
      reciever: "Ann Marlin",
      type: "Shopping",
      date: "31 Nov 2020",
      amount: "$430",
    },
  ];
  return (
    <Container fluid>
      <Row>
        <Col sm={10}>
          <p className="dashboard-header">Weeklysumup</p>
          <p className="header-subtext">
            Get summary of your weekly online transactions here.
          </p>
        </Col>
        <Col sm={2}>sm=8</Col>
      </Row>
      <Row>
        <Col sm={12} xl={6}>
          <Card className="card-mod">
            <Card.Body>
              <p className="goals-head">Cards</p>
              <Row>
                <Col sm={8} className="credit-card-left-border">
                  <Stack direction="horizontal" gap={0}>
                    <div>
                      <FaAngleLeft size={28} color="#197BBD" />
                    </div>
                    <div>
                      <img src="/creditcard.svg" alt="" />
                    </div>
                    <div>
                      <FaAngleRight size={28} color="#197BBD" />
                    </div>
                  </Stack>
                  <div className="ms-5">
                    <ProgressBar
                      variant="success"
                      className={"progress-bar-custom-darkblue"}
                      now={20}
                      style={{ minWidth: "26vw", height: "10px" }}
                    />
                    <Stack className="mt-2" direction="horizontal">
                      <div>
                        <p className="card-text-secondary">
                          Weekly payment limit
                        </p>
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
                    <label for="switch"></label>
                    <p className="current-balance-text-secondary mt-2">
                      Deacivate card
                    </p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="card-mod mt-4">
            <Card.Body>
              <p className="goals-head">Transaction history</p>

              <Table responsive>
                <thead>
                  <tr>
                    <th>Reciever</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data, ind) => {
                    return (
                      <tr key={ind} className="row-spacing">
                        <td className="py-3">
                          <img src={data.icon} width={22} alt="" />
                          <span className="reciever-text">{data.reciever}</span>
                        </td>
                        <td className="type-date-text py-3">{data.type}</td>
                        <td className="type-date-text py-3">{data.date}</td>
                        <td className="amount-text py-3">{data.amount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} xl={6}>
          <div>
            <p className="goals-head mt-5 mt-xl-0">
              Goals{" "}
              <Button className="button-goals text-center">
                <HiPlus size={18} fontWeight={900} className="icon" />
              </Button>
            </p>
            <Row>
              {Goals?.map((data, ind) => {
                return (
                  <Col key={ind} sm={4}>
                    <Card className="card-mod">
                      <Card.Body>
                        <p className="goals-card-title">${data.price}</p>
                        <p className="goals-card-subtitle">{data.date}</p>

                        <img
                          className="mt-3"
                          width={30}
                          src={data.imgurl}
                          alt=""
                        />
                        <p className="goals-card-text">{data.title}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className="mt-5">
            <p className="goals-head mb-4">Outcome Statistics</p>
            <Row>
              {stats?.map((data, ind) => {
                return (
                  <Col className="stats-col" key={ind} sm={12}>
                    <Stack direction="horizontal">
                      <div className="">
                        <img src={data.imgurl} width={100} alt="" />
                      </div>
                      <div className="">
                        <ProgressBar
                          variant="success"
                          className={`${data.colour} progressbar-width`}
                          now={parseInt(data.percentage)}
                        />
                        <p className="progress-bar-text">{data.title}</p>
                      </div>
                      <div className="stats-percentage ms-4">
                        {data.percentage}%
                      </div>
                    </Stack>
                  </Col>
                );
              })}
            </Row>
          </div>
          <div>
            <Row>
              <Col sm={8} xl={8}>
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
                          <InputGroup.Text
                            id="basic-addon2"
                            className="input-text-mod"
                          >
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
              <Col sm={4} xl={4}>
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
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
