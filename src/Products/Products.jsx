import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('FakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div>
            {
               products.map(product => )
            }
        </div>
    )
}

export default Products