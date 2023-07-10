import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div>
      <div style={{background: "#C7F2A4"}}>
          <br></br>
          <br></br>
          <br></br>
          <a href='https://www.instagram.com/' style={{marginLeft:"600px"}}><img src="instagram 2.png"/></a>
          <a href='https://twitter.com/' style={{marginLeft:"50px"}}><img src="twitter 2.png"/></a>
          <a href='https://www.facebook.com/' style={{marginLeft:"30px"}}><img src="facebook-app-symbol 2.png"/></a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div style={{background:"#9D9C9C"}}>
          <br></br>
          <br></br>
          <p style={{fontFamily: 'Ubuntu',fontStyle: "normal",textAlign: "center",color:"#494848",justifyContent:"center"}}>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All rights are reserved.</p>
          <br></br>
        </div>
    </div>
    
  );
}

export default Footer;