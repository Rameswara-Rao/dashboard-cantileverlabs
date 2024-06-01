import { Row, Col, Stack } from 'react-bootstrap'
import "./HeaderStyles.css"

const Header = () => {
  return (
    <>
    <Row>
        <Col sm={9}>
          <p className="dashboard-header">Weeklysumup</p>
          <p className="header-subtext">
            Get summary of your weekly online transactions here.
          </p>
        </Col>
        <Col sm={3}>
          <Stack direction="horizontal">
            <div>
              <img src="/header/mail.svg" alt="" />
            </div>
            <div className="ms-3">
              <img src="/header/bell.svg" alt="" />
            </div>
            <div className="d-flex mt-3 ms-3">
              <div>
                <img width={35} src="/header/profile-icon.svg" alt="" />
              </div>
              <div className="ms-1">
                <p className="header-name">Andrew</p>
                <p className="header-role">Admin account</p>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </>
  )
}

export default Header