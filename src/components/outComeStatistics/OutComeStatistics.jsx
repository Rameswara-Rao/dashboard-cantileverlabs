import { Row, Col, ProgressBar, Stack } from "react-bootstrap";
import { stats } from "../../utils/constants";
import "./OutComeStatisticsStyle.css";
const OutComeStatistics = () => {
  return (
    <div className="mt-5">
      <p className="goals-head mb-4 text-center text-xl-start">
        Outcome Statistics
      </p>
      <Row>
        {stats?.map((data, ind) => {
          return (
            <Col className="stats-col mx-auto" key={ind} sm={12}>
              <Stack direction="horizontal">
                <div>
                  <img src={data.imgurl} width={100} alt="" />
                </div>
                <div>
                  <ProgressBar
                    variant="success"
                    className={`${data.colour} progressbar-width`}
                    now={parseInt(data.percentage)}
                  />
                  <p className="progress-bar-text">{data.title}</p>
                </div>
                <div className="stats-percentage ms-4">{data.percentage}%</div>
              </Stack>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default OutComeStatistics;
