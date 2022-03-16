import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header() {

  return (
    <Navbar sticky="top" bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="#">123GO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">메인</Nav.Link>
            <NavDropdown title="술지도" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">인기순</NavDropdown.Item>
              <NavDropdown.Item href="#">지역별</NavDropdown.Item>
              <NavDropdown.Item href="#">나만의 지도</NavDropdown.Item>
              <NavDropdown.Item href="#">지도 등록</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="회차별" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">1차: 가볍게</NavDropdown.Item>
              <NavDropdown.Item href="#">2차: 신나게</NavDropdown.Item>
              <NavDropdown.Item href="#">3차: 제대로</NavDropdown.Item>
              <NavDropdown.Item href="#">4차: 끝까지</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="취향별" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">소맥</NavDropdown.Item>
              <NavDropdown.Item href="#">양주</NavDropdown.Item>
              <NavDropdown.Item href="#">칵테일</NavDropdown.Item>
              <NavDropdown.Item href="#">전통주</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#">설정</Nav.Link>
            <Nav.Link href="#">로그인</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;