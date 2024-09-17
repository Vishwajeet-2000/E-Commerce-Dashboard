import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup() {

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  function collectData(){

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
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </Form.Group>

        <Button variant="primary" onClick={collectData} type="submit">Sign Up</Button>
      </Form>
    </div>
  )
}

export default Signup;




