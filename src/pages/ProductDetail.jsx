import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Product from '../components/Products/Product';
import TitlePages from '../components/TitlePages/TitlePages';
import { getProduct } from '../services/api';

function ProductDetail(props) {
    const history = useHistory()
    const {idProduct} = useParams();
    const [product, setProduct] = useState(false);

    useEffect(()=>{
        if(idProduct.split('-').length>2)
            history.push('/not-found');
        else{
            getProduct(idProduct.split('-')[0])
            .then((response) => {
                if(idProduct.split('-').length===1 || ((response.data.name).replace(/\s/g, '').toLowerCase()).includes(idProduct.split('-')[1]))
                    setProduct(response.data);
                else
                    history.push('/not-found');
            })
            .catch(err => {
                    history.push('/not-found');
                    console.error(err);
            });
        }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[idProduct,history])

    return (
        <div>
            <TitlePages title="PRODUCT" />
            {product && <Product product={product} />}
        </div>
    );
}

export default ProductDetail;