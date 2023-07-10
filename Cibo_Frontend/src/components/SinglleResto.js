import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { useShoppingCart } from "./shoppingCart";
//import { ShoppingCartProvider } from "./shoppingCart";
import { useShoppingCart } from "./shoppingCart.tsx";
//import useShoppingCart  from './components/shoppingCart'

function SingleResto() {

    const {restid}=useParams();
    //console.log(restid); 
    const [data,setData] = useState([]);
    var rest

    useEffect(async()=> {
        try {
            const response = await axios.get('http://localhost:5000/food');
            //console.log(response);
            setData(response.data);
          } catch (error) {
            console.error(error);
          }
    }, []);
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    
    return (
        <div>
            <Container style={{padding:'5%',background:'#F6FFEE'}}>
                <Row style={{textAlign:'center'}}>
                {data.map((rest)=> {
                    
                    const quantity=getItemQuantity(rest.id)
                    // console.log(1);
                    // console.log(restid);
                    // console.log(2);
                    //if(rest.hotel===restid) {
                        return(
                            <Col id={rest.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={rest.imageURL}/>
                                    <Card.Body>
                                        <Card.Title>{rest.title}</Card.Title>
                                        {/* <Card.Text>{rest.type}</Card.Text> */}
                                        <Card.Text>Rs.{rest.price}</Card.Text>
                                        {/* <Card.button>Add to cart</Card.button> */}
                                        {/* <Card.Text>{rest.type}</Card.Text> */}
                                        {/* <button style={{fontSize:'18px',fontWeight:"500",fontStyle:"normal",fontFamily:"Ubuntu",color:"#676565",borderRadius:'5%'}}>Add to cart</button> */}
                                        <div className="mt-auto">
                                            {quantity===0 ?(
                                                <button className="w-100">Add To Cart</button>
                                            ): <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                                                <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                                                    <button>-</button>
                                                    <div>
                                                    <span className="fs-3">{quantity}</span> in cart
                                                    </div>
                                                    <button>+</button>
                                                </div>
                                                <button variant="danger" size="sm">Remove</button>
                                                </div>}
                                        </div>
                                    </Card.Body>
                                    
                                </Card>
                            </Col>
                        )
                        //}
                        })}
                </Row>
            </Container>
        </div>
    );
  }
  
  export default SingleResto;