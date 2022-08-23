import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TitlePages from '../components/TitlePages/TitlePages';
import { getProducts } from '../services/api';

function SearchPage(props) {
    const {idProduct} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts()
        .then((response) => {
            setProducts((response.data).filter((item,index)=>{
                return (item.code).replace(/\s/g, '').toLowerCase().includes(idProduct) || (item.name).replace(/\s/g, '').toLowerCase().includes(idProduct);
            }));
        })
        .catch(err => {
            console.error(err);
        });
    },[idProduct]);

    return (
        <div>
            <TitlePages title="SEARCH"/>
            {
                
            }
        </div>
    );
}

export default SearchPage;