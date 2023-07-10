import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header1() {
  return (
    <div style={{padding:"0%",margin:"0%",background: "#F6FFEE"}}>
      <Navbar style={{position:"absolute",left:"0px",right:"0px",top:"0px",background: "#F6FFEE"}}>
        <Container>
          <Navbar.Brand href="#home" style={{color:"#676565",fontWeight:"400",fontStyle:"normal",fontFamily:"Fredoka One",fontSize:"48px",lineHeight:"58px"}}>Cibo</Navbar.Brand>
          <Nav>
              <Nav.Link href="/" style={{color:"#676565",fontWeight:"500",fontStyle:"normal",fontFamily:"Ubuntu",fontSize:"28px",lineHeight:"37px"}}>Home</Nav.Link>
              <Nav.Link href="SignUp" style={{color:"#676565",fontWeight:"500",fontStyle:"normal",fontFamily:"Ubuntu",fontSize:"28px",lineHeight:"37px"}}>Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header1;