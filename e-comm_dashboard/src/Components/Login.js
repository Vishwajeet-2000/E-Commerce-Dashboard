import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect( ()=>{
    const auth = localStorage.getItem('user')
    if(auth){
      navigate('/')
    }
  })

  const handleLogin = async ()=> {
    console.log(email, password);

      let result = await fetch('http://localhost:5000/login', {
      method : 'post',
      body : JSON.stringify({email, password }),
      headers : {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result)
    if(result.name){
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/')
    }else{
        alert("Please enter correct details")
    }
    
  }

  return (
    <div className='signup_form'>
      <Form>
        <h1 className='mt-5'>Login Page</h1>
        

        <Form.Group className="mb-3">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin} type="button">Sign Up</Button>
      </Form>

      {/* <form>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} /> <br /> <br />
      <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} /> <br /> <br />
      <input type='password' value={password} autoComplete="on" onChange={(e)=>setPassword(e.target.value)} /> <br /> <br />

      <button onClick={handleLogin} type='button'>Sign up</button> 
      </form> */}

    </div>
  )
}

export default Login;




