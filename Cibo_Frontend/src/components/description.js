import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";

function Description() {
    return (
      <div style={{padding:"0%",background: "#F6FFEE",margin:'0px'}}>
          <Container style={{padding:"0%",background: "#F6FFEE",margin:'0%'}}>
              <Row style={{padding:"0%",background: "#F6FFEE",margin:'0px'}}> 
                    <a style={{backgroundColor:'#F6FFEE'}} href="https://www.w3schools.com">
                        <img src="rectangle 1.png" style={{backgroundColor:'#F6FFEE',marginRight:'0px',marginLeft:'40px'}}></img> 
                    </a>
              </Row>
              <br></br>
              <br></br>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control style={{borderRadius:"50px",color:"white",fontFamily:"Ubuntu",fontStyle:"normal",fontWeight:"200",fontSize:"20px",height:"50px",width:"1330px",textAlign:"inherit",backgroundColor:"white",marginLeft:"100px"}} placeholder="Search"/> 
              </Form.Group>
              <br></br>
              <br></br>
              <br></br>
              <Row style={{padding:"0%",background: "#F6FFEE",margin:'0px'}}>
                <Col style={{padding:"0%",background: "#F6FFEE",margin:'0px'}}>
                    <Row style={{padding:"0%",background: "#F6FFEE",margin:'0px'}}>
                        <p style={{marginRight:'0px',marginLeft:'80px',fontFamily:"Fredoka One",color:"#C7F2A4",fontSize:"38px",fontWeight:"400",lineHeight:"58.08px"}}>not sure what to eat....?</p>
                        <p style={{marginRight:'0px',marginLeft:'80px',fontFamily:"Ubuntu",color:"#676565",fontSize:"40px",lineHeight:"63.2px"}}>How're you feeling today ?</p>
                    </Row>
                    <Row style={{padding:"0%",background: "#F6FFEE",margin:'0px'}}>
                        <CardGroup style={{backgroundColor:'#F6FFEE'}}>
                            <Card.Img src="Frame1.png" style={{backgroundColor:'#F6FFEE',marginRight:'0px',marginTop:"0px",marginLeft:'40px',width:"697px",Height:"268px"}}/>
                        </CardGroup>
                    </Row>
                </Col>
                <Col className="d-flex align-items-start bg-light mb-3" style={{padding:"0%",background: "#F6FFEE",margin:'0px'}}>
                        <img src="weather2.png" style={{backgroundColor:'#F6FFEE',marginRight:'0px',marginTop:"15px",marginLeft:'9px',width:"550px",Height:"900px",padding:"0px"}}/>
                </Col> 
              </Row>
              <br></br>
              <br></br>
              <br></br>
              <Row>
                    <p style={{marginRight:'0px',marginLeft:'90px',fontFamily:"Fredoka One",color:"#C7F2A4",fontSize:"38px",fontWeight:"400",lineHeight:"58.08px"}}>customize what you eat....</p>
                    <p style={{marginRight:'0px',marginLeft:'90px',fontFamily:"Ubuntu",color:"#676565",fontSize:"40px",lineHeight:"63.2px"}}>Get your fav meals personalized</p>
                    <br></br>
              </Row>
              <Row style={{padding:"0%",background: "#F6FFEE",margin:'0px'}}>
                        <a style={{backgroundColor:'#F6FFEE'}} href="/AllRestaurants">
                            <img src="restaurants.png" style={{backgroundColor:'#F6FFEE',marginRight:'10px',marginLeft:'80px',marginTop:"10px",marginBottom:"10px",width:"1370px",height:"375px"}}></img> 
                        </a>
              </Row>
              <br></br>
              <br></br>
              <Row style={{padding:"0%",background: "#F6FFEE",margin:'0px'}}> 
                    <p style={{marginRight:'0px',marginLeft:'90px',fontFamily:"Ubuntu",color:"#676565",fontSize:"40px",lineHeight:"63.2px"}}>Choose your favourite dishes</p>
              </Row>
          </Container>
      </div>
    );
  }
  
  export default Description;