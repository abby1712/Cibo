import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios"
import { useEffect, useState } from "react";


function AllRestaurants() {
    const [data,setData] = useState([]);
    var rest

    useEffect(async()=> {
        try {
            const response = await axios.get('http://localhost:5000/restaurants');
            console.log(response);
            setData(response.data);
          } catch (error) {
            console.error(error);
          }
    }, []);

    return (
        <div>
            <Container style={{padding:'5%',background:'#F6FFEE'}}>
                <Row style={{textAlign:'center'}}>
                    {data.map((rest) =>
                        <Col id={rest._id} key={rest._id} xs={6} md={4} lg={3} style={{marginBlockStart:'2%'}}>
                        <Card style={{cursor:"pointer"}} onClick={()=> window.location.href=`/restaurant/${rest.title}` }>
                                <Card.Img variant="top" src={rest.imageURL} />
                                <Card.Body >
                                <Card.Text>{rest.title}</Card.Text>
                                <Card.Text>
                                    {rest.type}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
  }
  
  export default AllRestaurants;