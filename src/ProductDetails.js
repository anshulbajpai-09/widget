import React, { useState } from 'react'
import axios from "axios";
import { axiosInstance } from './Config';

const ProductDetails = (props) => {
    const [productDetails, setProductDetails] = useState({});
    const [loading, setLoading] = useState(true);
    console.log('productDetails: ', productDetails);
    const sku = props.match.params.id;
    console.log('itemId: ', sku);

    useState(() => {
        // axiosInstance.get('products/24200NYCFC-LE-1.50').then((res) => {
        axios.get(`https://tafe.siplsolutions.com/rest/V1/te-productbyurl/${sku}/1200/1200`).then((res) => {
            console.log('res: ', res);
            setLoading(false)
            setProductDetails(res.data[0]);
        }).catch((error) => {
            setLoading(false);
            console.log('error: ', error);
            console.log('error: ', error.error);
        })
    }, [])

    if (loading) {
        return <h3>Loading...</h3>
    }

    return (
        <div>
            <h1>
                {productDetails.name}
            </h1>
        </div>
    )
}

export default ProductDetails;