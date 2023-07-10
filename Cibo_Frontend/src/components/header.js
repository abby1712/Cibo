import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div style={{padding:"0%",margin:"0%",background: "#F6FFEE"}}>
      <Navbar style={{position:"absolute",left:"0px",right:"0px",top:"0px",background: "#F6FFEE"}}>
        <Container>
          <Navbar.Brand href="#home" style={{color:"#C7F2A4",fontWeight:"400",fontStyle:"normal",fontFamily:"Fredoka One",fontSize:"48px",lineHeight:"58px"}}>Cibo</Navbar.Brand>
          <Nav>
              <Button style={{padding:"0%",margin:"0%",background: "#F6FFEE",color:"#676565",fontWeight:"500",fontStyle:"normal",fontFamily:"Ubuntu",fontSize:"28px",lineHeight:"37px"}}>
                Cart
              </Button>
              <Nav.Link href="SignIn" style={{color:"#676565",fontWeight:"500",fontStyle:"normal",fontFamily:"Ubuntu",fontSize:"28px",lineHeight:"37px"}}>Sign In</Nav.Link>
              <Nav.Link href="SignUp" style={{color:"#B6E388",fontWeight:"500",fontStyle:"normal",fontFamily:"Ubuntu",fontSize:"28px",lineHeight:"37px"}}>Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;