import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ProductList() {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  })

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result)
  }

   const deleteProduct = async (id)=>{
    console.log("Product id: ",id);
    let result = await fetch(`http://localhost:5000/product/${id}`,
      {
        method : 'Delete'
      });
      result = await result.json()
      if(result){
        getProducts();
      }    
   }

  return (
    <div className='product_list'>
      <h1>Product List</h1>
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
          products.map( (item, index)=>
          <tr key={item._id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>{item.company}</td>
            {/* <td><Button variant="primary" type="button"><Link to={"/update/" + item._id}>Update</Link></Button></td> */}
            <td><Button variant="success" onClick={()=>navigate("/update/" + item._id)} type="button">Update</Button></td>
            <td><Button variant="danger" onClick={()=>deleteProduct(item._id)} type="button">Delete</Button></td>
          </tr>)
          }
        </tbody>
      </Table>
    </div>
  )
}

export default ProductList
