import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect( ()=>{
    const auth = localStorage.getItem('user')
    if(auth){
      navigate('/')
    }
  })

  const collectData = async ()=> {
    console.log(name, email, password);

      let result = await fetch('http://localhost:5000/register', {
      method : 'post',
      body : JSON.stringify({ name, email, password }),
      headers : {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result)
    localStorage.setItem("user", JSON.stringify(result));
    navigate('/')
  }

  return (
    <div className='signup_form'>
      <Form>
        <h1 className='mt-5'>Sign up Page</h1>
        <Form.Group className="mb-3 mt-4">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </Form.Group>

        <Button variant="primary" onClick={collectData} type="button">Sign Up</Button>
      </Form>

      {/* <form>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} /> <br /> <br />
      <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} /> <br /> <br />
      <input type='password' value={password} autoComplete="on" onChange={(e)=>setPassword(e.target.value)} /> <br /> <br />

      <button onClick={collectData} type='button'>Sign up</button> 
      </form> */}

    </div>
  )
}

export default Signup;




