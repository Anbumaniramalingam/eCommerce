import { useEffect, useState } from 'react';
import './Details.css';
import { useLocation } from 'react-router-dom';

function Details() {
    const location = useLocation();
    const {id} = location.state;
    const [itemInfo, setItemInfo] = useState();

    useEffect(()=>{
        fetch('https://dummyjson.com/products/'+id)
        .then((response) => response.json())
        .then((res) => {
            setItemInfo(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },[id])
    return(
        <>
        { itemInfo ? 
            <div className='details'>
                <img src={itemInfo.images[0]} alt={itemInfo.title}/>
                <p><lable>title</lable>: {itemInfo.title} </p>
                <p><lable>description</lable>: {itemInfo.description}</p>
                <p><lable>discountPercentage</lable>: {itemInfo.discountPercentage}</p>
                <p><lable>rating</lable>: {itemInfo.rating}</p>
                <p><lable>stock</lable>: {itemInfo.stock}</p>
                <p><lable>brand</lable>: {itemInfo.brand}</p>
                <p><lable>category</lable>: {itemInfo.category}</p>
            </div> : null
        }
            
        </>
    )
}
export default Details;