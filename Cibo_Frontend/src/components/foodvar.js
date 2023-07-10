import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FoodVar() {
  return (
    <div>
        <Container style={{padding:"0%",background: "#F6FFEE",marginLeft:'60px',marginRight:"150px",color:"#F6FFEE",alignItems:"center",justifyContent:"center"}}>
            <Row style={{margin:"5%"}}>
                <Col style={{padding:"0%",background: "#E8F5D4",marginLeft:'100px',color:"#F6FFEE",borderRadius:"30%"}}>
                    <img style={{marginLeft:'9%',marginTop:"4%",padding:"5%",alignContent:"center"}} src="food6.png"/>
                </Col>
                <Col style={{padding:"0%",background: "#C7F2A4",marginLeft:'100px',color:"#F6FFEE",borderRadius:"30%"}}>
                    <img style={{marginLeft:'13%',padding:"5%",alignContent:"center"}} src="food5.png"/>
                </Col>
                <Col style={{padding:"0%",background: "#E8F5D4",marginLeft:'100px',color:"#F6FFEE",borderRadius:"30%"}}> 
                    <img style={{marginLeft:'18%',padding:"5%",alignContent:"center"}} src="food4.png"/>
                </Col>
            </Row>
            <Row style={{margin:"5%"}}>
                <Col style={{padding:"0%",background: "#C7F2A4",marginLeft:'100px',color:"#F6FFEE",borderRadius:"30%"}}>
                    <img style={{marginLeft:'12%',padding:"5%",alignContent:"center"}} src="food3.png"/>
                </Col>
                <Col style={{padding:"0%",background: "#E8F5D4",marginLeft:'100px',color:"#F6FFEE",borderRadius:"30%"}}>
                    <img style={{marginLeft:'22%',marginTop:"2%",padding:"5%",alignContent:"center"}} src="food2.png"/>
                </Col>
                <Col style={{padding:"0%",background: "#C7F2A4",marginLeft:'100px',color:"#F6FFEE",borderRadius:"30%"}}> 
                    <img style={{marginLeft:'23%',marginTop:"8%",padding:"5%",alignContent:"center"}} src="food1.png"/>
                </Col>
            </Row>
            <br></br>
        </Container>
    </div>
  );
}

export default FoodVar;