import './App.css';
import { useState } from 'react';
import axios from "axios";
import ProductItem from './ProductItem';
import { axiosInstance } from './Config';

const App = ({ domElement, ...props }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const dataAttribute = domElement.getAttribute("data-key")
  console.log('dataAttribute: ', dataAttribute);
  console.log('productList: ', productList);

  useState(() => {
    // axiosInstance.get(`categories/2/products`).then((res) => {
    axios.get(`https://uatmagapi.tafegenuine.com/rest/V1/te-categorybyurl/accessories/1/15/120/120/0/0`).then((res) => {
      console.log('res: ', res);
      setLoading(false)
      setProductList(res.data[0].items);
    }).catch((error) => {
      setLoading(false)
      console.log('error: ', error);
      console.log('error: ', error.error);
    })
  }, [])

  const renderProductList = () => {
    const list = productList.map((item, index) => {
      return (
        <ProductItem key={index} item={item} {...props} />
      )
    })
    return list
  }

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <h2>Product List through {dataAttribute}</h2>
      {renderProductList()}
    </div>
  );
}

export default App;
