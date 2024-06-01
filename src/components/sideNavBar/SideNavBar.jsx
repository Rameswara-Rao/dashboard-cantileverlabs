import { Navbar, Nav, Button, Stack } from "react-bootstrap";
import { MdArrowUpward } from "react-icons/md";
import { navLinkItems } from "../../utils/constants";
import "./SideNavBarStyle.css";

const SideNavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="d-flex flex-column vh-100">
        <Navbar.Brand>
          <img src="/sidebar/brandlogo.svg" width={150} alt="" />
        </Navbar.Brand>
        <Nav className="flex-column mt-4">
          {navLinkItems.map((data, ind) => {
            return (
              <Nav.Link
                className={`${ind == 0 ? "nav-link-active" : ""} px-4`}
                key={ind}
              >
                <img src={data.icon} className="me-2 py-2" alt="" />
                <span
                  className={`${
                    ind == 0 ? "navlink-text-blue" : "navlink-textt"
                  }`}
                >
                  {data.name}
                </span>
              </Nav.Link>
            );
          })}
        </Nav>
        <div className="d-flex flex-column mt-auto text-center mb-3">
          <img src="/sidebar/premiumimg.svg" className="mb-3" alt="" />
          <Button className="premium-btn" variant="primary">
            Upgrade to premium <MdArrowUpward />
          </Button>
        </div>
      </Navbar>
    </>
  );
};

export default SideNavBar;
