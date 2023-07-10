import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";

function AllResto() {
    return (
      <div style={{padding:"0%",background: "#F6FFEE",margin:'0px'}}>
          <Container style={{padding:"5%",background: "#F6FFEE",margin:'0%',marginLeft:"1px"}}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row style={{textAlign:"center"}}>
            {data.map((rest)=>
                <Col onClick={()=>window.location.href="/AllRestaurants/"+rest.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                    <Card>
                        <Card.Img variant="top" src="./TCard1.png"/>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>vwjh</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )};
            </Row>
          </Container>
      </div>
    );
  }
  
  export default AllResto;