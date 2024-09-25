import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getProductDetails();
  }, [])

  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();

    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company)
  }

  const updateProduct = async () => {
    console.log(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`,
      {
        method: 'Put',
        body: JSON.stringify({ name, price, category, company }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    result = await result.json()
    console.log(result);
    navigate('/');
  }

  return (
    <div className='update_product'>
      <Form>
        <h1 className='mt-5'>Update Product</h1>
        <Form.Group className="mb-3 mt-4">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" />
        </Form.Group>

        <Form.Group className="mb-3 mt-4">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter product price" />
        </Form.Group>

        <Form.Group className="mb-3 mt-4">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter product category" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter product company" />
        </Form.Group>

        <Button variant="success" onClick={() => { updateProduct() }} type="button">Update Product</Button>
      </Form>
    </div>
  )
}

export default Update;
