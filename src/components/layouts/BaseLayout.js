import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import ArrowDownCircle from "../../assets/icons/arrow_down_circle_primary.svg";
import CallResidentModal from "../commons/Modal/CallResidentModal";
import AppNavbar from "../commons/Navbar/AppNavbar";
import LeftSidebar from "../commons/Sidebar/LeftSidebar";
import RightSidebar from "../commons/Sidebar/RightSidebar";

const BaseLayout = ({ children, title = "" }) => {
    const [state, setState] = React.useState("Butterhill");
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container-fluid px-0">
            <div className="d-flex custom-grid">
                <LeftSidebar handleShow={handleShow} />
                <main className="w-100">
                    <Container fluid className='px-0 mx-0 h-100'>
                        <Row className='h-100'>
                            <Col xl={9} className='mx-0 h-100 main-area'>
                                <header className="container-fluid">
                                    <Row>
                                        <Col sm={6} className="d-flex align-items-center px-0">
                                            <h6 className="mb-0">{title}</h6>
                                            <h3 className="mb-0 mx-3 text-muted font-weight-light">|</h3>
                                            <Dropdown className='ml-0 carehome-dropdown'>
                                                <Dropdown.Toggle className='ml-0 pl-0'>{state} <img width={20} src={ArrowDownCircle} alt='icon' /></Dropdown.Toggle>

                                                <Dropdown.Menu className='py-0 shadow border-0'>
                                                    <Dropdown.Item className='py-3' onClick={() => setState("Butterhill")}>Butterhill</Dropdown.Item>
                                                    <Dropdown.Item className='py-3' onClick={() => setState("Pontypridd")}>Pontypridd</Dropdown.Item>
                                                    <Dropdown.Item className='py-3' onClick={() => setState("Plas Y Bryn")}>Plas Y Bryn</Dropdown.Item>
                                                    <Dropdown.Item className='py-3' onClick={() => setState("Saxilby Care Centre")}>Saxilby Care Centre</Dropdown.Item>
                                                    <Dropdown.Item className='py-3' onClick={() => setState("Homecrest Care Centre")}>
                                                        Homecrest Care Centre
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                        <Col sm={6} className="d-flex px-0">
                                            <AppNavbar />
                                            <img
                                                src="https://www.kevmill.com/wp-content/uploads/2019/09/cropped-Kevin-profile-pic-2019-square-small-300x300.jpg"
                                                alt="profile"
                                                className="profile-img"
                                            />
                                        </Col>
                                    </Row>
                                </header>
                                {children}
                                <CallResidentModal show={show} handleClose={handleClose} />
                            </Col>
                            <Col xl={3} className='mx-0 h-100 right-sidebar-area'>
                                <RightSidebar />
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
        </div>
    );
};

export default BaseLayout;
