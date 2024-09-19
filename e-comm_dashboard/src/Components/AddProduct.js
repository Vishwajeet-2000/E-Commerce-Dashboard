import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddProduct() {

const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [category, setCategory] = useState('');
const [company, setCompany] = useState('');

const [error, setError] = useState(false)

const addProduct = async()=>{

  if(!name || !price || !category || !company){
    setError(true)
    return false
  }
  console.log(name, price, category, company);

  const userId = JSON.parse(localStorage.getItem('user'))._id;

  let result = await fetch('http://localhost:5000/add-product', {
    method : 'post',
    body : JSON.stringify({ name, price, category, company, userId }),
    headers : {
      'Content-Type': 'application/json'
    }
  });
    result = await result.json();
    console.log(result)
    // localStorage.setItem("user", JSON.stringify(result));
    // navigate('/')
}

  return (
    <div className='add_product'>
      <Form>
        <h1 className='mt-5'>Add Product</h1>
        <Form.Group className="mb-3 mt-4">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" />
          {error && !name && <Form.Text className="text-muted">*Please enter a valid product name</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3 mt-4">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter product price" />
          { error && !price &&<Form.Text className="text-muted">*Please enter a valid price</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3 mt-4">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter product category" />
          { error && !category &&<Form.Text className="text-muted">*Please enter a valid price</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Company </Form.Label>
          <Form.Control type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter product company" />
          { error && !company &&<Form.Text className="text-muted">*Please enter a valid price</Form.Text>}
        </Form.Group>

        <Button variant="primary" onClick={addProduct} type="button">Add Product</Button>
      </Form>
    </div>
  )
}

export default AddProduct
