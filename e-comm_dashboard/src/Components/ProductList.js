import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function ProductList() {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  },[])

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result)
  }

  const deleteProduct = async (id) => {
    console.log("Product id: ", id);
    let result = await fetch(`http://localhost:5000/product/${id}`,
      {
        method: 'Delete'
      });
    result = await result.json()
    if (result) {
      getProducts();
    }
  }

  const searchHandle = async(event)=>{
    console.log(event.target.value);
    
    let key = event.target.value;
    if(key){      
      let result = await fetch(`http://localhost:5000/search/${key}`)
      result = await result.json()
      console.log(result)
      if(result){
        setProducts(result)
      }
    }
    else{
      getProducts();
    }
  }

  return (
    <div className='product_list'>
      <h1>Product List</h1>
      <Form>
        <Form.Group className="mb-3 mt-4 searchBar">
          <Form.Label>Search for product</Form.Label>
          <Form.Control type="text"  onChange={searchHandle} placeholder="Enter product info" />
        </Form.Group>
      </Form>
      <div className='table_box'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Company</th>
            <th colSpan={2}>Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            products.length > 0 ? products.map((item, index) =>
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.company}</td>
                <td className='updateBtn'><Button variant="success" onClick={() => navigate("/update/" + item._id)} type="button">Update</Button></td>
                <td className='deleteBtn'><Button variant="danger" onClick={() => deleteProduct(item._id)} type="button">Delete</Button></td>
              </tr>) : <tr><td colSpan={6}> No result found</td></tr>
          }
        </tbody>
      </Table>
      </div>
    </div>
  )
}

export default ProductList
