import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useEffect, useState } from "react";

function SignUp() {


  return (
    <div>
      <div style={{padding:"0%",margin:"0%",background: "#F6FFEE"}}>
        <img style={{padding:"0%",marginLeft:"3%",marginTop:"7%",opacity:"0.8",background: "#F6FFEE",zIndex:-1,height:"900px",width:"1430px"}} src="signUp2.jpg"/>
      </div>
      <div style={{padding:"20px",margin:"0%",zIndex:2,top:"70%",left:"71%",textAlign:"center",transform:"translate(-50%,-50%)",zIndex:2,position:"absolute",borderRadius:"66px"}}>
        <Form style={{fontFamily:"Fredoka One",textAlign:"center"}} method="POST">
        {/* 
         */}
        <br></br>
        <br></br>
          <Form.Control style={{borderRadius:"50px",color:"#494848",fontFamily:"Ubuntu",fontStyle:"normal",fontWeight:"200",fontSize:"20px",height:"50px",width:"600px",textAlign:"center",backgroundColor:"#F6FFEE"}} type="text" placeholder="Name" name="name"/> 
          <br></br>
          <Form.Control style={{borderRadius:"50px",color:"#494848",fontFamily:"Ubuntu",fontStyle:"normal",fontWeight:"200",fontSize:"20px",height:"50px",width:"600px",textAlign:"center",backgroundColor:"#F6FFEE"}} type="email" placeholder="Email address" name="email"/> 
          <br></br>
          <Form.Control style={{borderRadius:"50px",color:"#494848",fontFamily:"Ubuntu",fontStyle:"normal",fontWeight:"200",fontSize:"20px",height:"50px",width:"600px",textAlign:"center",backgroundColor:"#F6FFEE"}} type="text" placeholder="Phone Number" name="phone"/>   
          <br></br>
          <Form.Control style={{borderRadius:"50px",color:"#494848",fontFamily:"Ubuntu",fontStyle:"normal",fontWeight:"200",fontSize:"20px",height:"50px",width:"600px",textAlign:"center",backgroundColor:"#F6FFEE"}} type="password" placeholder="Password" name="password"/>
          <br></br>
          <Form.Control style={{borderRadius:"50px",color:"#494848",fontFamily:"Ubuntu",fontStyle:"normal",fontWeight:"200",fontSize:"20px",height:"50px",width:"600px",textAlign:"center",backgroundColor:"#F6FFEE"}} type="password" placeholder="Confirm Password" name="confirmpassword"/>
          <br></br>
          <Form.Control style={{borderRadius:"50px",color:"#494848",fontFamily:"Ubuntu",fontStyle:"normal",fontWeight:"200",fontSize:"20px",height:"50px",width:"600px",textAlign:"center",backgroundColor:"#F6FFEE"}} type="text" placeholder="Apartment, suite, etc." name="suit"/> 
          <br></br>
          <Form.Control style={{borderRadius:"50px",color:"#494848",fontFamily:"Ubuntu",fontStyle:"normal",fontWeight:"200",fontSize:"20px",height:"50px",width:"600px",textAlign:"center",backgroundColor:"#F6FFEE"}} type="text" placeholder="City" name="city" />
          <br></br>
          <Form.Control style={{borderRadius:"50px",color:"#494848",fontFamily:"Ubuntu",fontStyle:"normal",fontWeight:"200",fontSize:"20px",height:"50px",width:"600px",textAlign:"center",backgroundColor:"#F6FFEE"}} type="text" placeholder="State/province" name="state"/> 
          <br></br>
          <Form.Control style={{borderRadius:"50px",color:"#494848",fontFamily:"Ubuntu",fontStyle:"normal",fontWeight:"200",fontSize:"20px",height:"50px",width:"600px",textAlign:"center",backgroundColor:"#F6FFEE"}} type="text" placeholder="ZIP/ postal code" name="zip"/>
          <br></br>
        <Button type="submit" value="Register" style={{backgroundColor:"#C7F2A4",boxShadow: "3px 8px 4px rgba(70, 70, 70, 0.33)",borderRadius: "40",height:"80px",textAlign: "center",justifyContent:"center",width:"100px"}}>
          <p  style={{fontFamily: 'Fredoka One',fontStyle: "normal",fontWeight: 400,fontSize: "45px",lineHeight: "67px",textAlign: "center",color:"#494848",justifyContent:"center"}}>Go</p>
        </Button>
      </Form>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
   </div>
  );
}

export default SignUp;