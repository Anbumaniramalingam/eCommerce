import { useEffect, useState } from 'react';

import './Store.css';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import PaginationCom from '../PaginationCom/PaginationCom';

function Store(props) {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState({});
  const [catageryList, setCatageryList] = useState([]);
  const [selectCatagery, setSelectCatagery] = useState('all');
  const [searchValue, setSearchValue] = useState(props.searchKey || "");
  const [paginationCount, setPaginationCount] = useState(0);
  const cardCount = window.innerWidth > 550 ? 10 : 4;
  
   useEffect(() => {
    
    fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((res) => {
          setAllData(res);
          setData(res.products?.slice(0, cardCount));
          paginationCountLogic(res.products?.length);
        })
        .catch((err) => {
          console.log(err.message);
        });
    fetch('https://dummyjson.com/products/categories')
    .then((response) => response.json())
    .then((data) => {
      setCatageryList(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
   }, []);
   useEffect(()=>{
    if (selectCatagery !== 'all'){
      fetch(`https://dummyjson.com/products/category/${selectCatagery}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data.products?.slice(0, cardCount));
          paginationCountLogic(data.products?.length);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      setData(allData.products?.slice(0, cardCount));
      paginationCountLogic(allData.products?.length);
    }
   },[selectCatagery]);
   useEffect(()=>{
    if (props.searchKey !== ''){
      fetch(`https://dummyjson.com/products/search?q=${props.searchKey}`)
        .then((response) => response.json())
        .then((resData) => {;
          setData(resData.products?.slice(0, cardCount));
          paginationCountLogic(resData.products?.length);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }else {
      setData(allData.products?.slice(0, cardCount));
      paginationCountLogic(allData.products?.length);
    }
   },[ props.searchKey]);

   const handleChange = (e) =>{
    setSelectCatagery(e.target.value);
    setSearchValue('');
   }
   const paginationCountLogic = (count) => {
    count && setPaginationCount(Math.ceil(count / cardCount));
   }
   const setDataLimit = (value) => {
    let temp = [...allData?.products];
    setData(temp?.splice((value -1) * 10, cardCount));
   }

  return (
    <div className="store">
      <main>
        <DiscountOffer></DiscountOffer>
        <div className="filter">
          <select onChange={handleChange} value={selectCatagery}>
            <option value="all">ALL</option>
            { 
              catageryList?.map((categories) =>
              <option key={categories} value={categories}>{categories}</option>
              )
            }
          </select>
        </div>
        <div className="card-list">
          { 
            data?.map((product) =>
              <Card key={product.id} item={product}></Card>
            )
          }
        </div>
        <PaginationCom countValue={paginationCount} paginationGetValue={setDataLimit}></PaginationCom>
      </main>
     <Footer></Footer>
    </div>
  );
}

export default Store;
