import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignIn() {
  return (
    <div style={{padding:"0%",margin:"0%",background: "#F6FFEE"}}>
      <div style={{padding:"0%",background: "#F6FFEE",zIndex:-1}}>
           <img style={{padding:"0%",marginLeft:"3%",marginTop:"7%",opacity:"0.8",background: "#F6FFEE",zIndex:-1,height:"600px",width:"1430px"}} src='login_back.png'/>
      </div>
      <div style={{padding:"20px",margin:"0%",background: "#9D9C9C",zIndex:2,top:"50%",left:"50%",textAlign:"center",transform:"translate(-50%,-50%)",zIndex:2,position:"absolute",borderRadius:"66px"}}>
        <Form style={{fontFamily:"Fredoka One",textAlign:"center"}}>
          <Form.Text style={{color:"#494848",fontFamily:"Fredoka One",fontWeight:400,fontSize:"64px",lineHeight:"77px",textAlign:"center"}}>LOGIN</Form.Text>
          <br></br>
          <br></br>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control style={{borderRadius:"50px",color:"#494848",fontFamily:"Ubuntu",fontStyle:"normal",fontWeight:"200",fontSize:"20px",height:"50px",width:"730px",textAlign:"center",backgroundColor:"#F6FFEE"}} type="email" placeholder="Email address"/> 
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control style={{borderRadius:"50px",color:"#494848",fontFamily:"Ubuntu",fontStyle:"normal",fontWeight:"200",fontSize:"20px",height:"50px",width:"730px",textAlign:"center",backgroundColor:"#F6FFEE"}}type="password" placeholder="Password" />
          </Form.Group>
          <br></br>
          <Button type="submit" style={{backgroundColor:"#C7F2A4",boxShadow: "3px 8px 4px rgba(70, 70, 70, 0.33)",borderRadius: "40",height:"80px",textAlign: "center",justifyContent:"center",width:"100px"}}>
            <p  style={{fontFamily: 'Fredoka One',fontStyle: "normal",fontWeight: 400,fontSize: "45px",lineHeight: "67px",textAlign: "center",color:"#494848",justifyContent:"center"}}>Go</p>
          </Button>
        </Form>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default SignIn;