import { useState} from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Store from './core/Store/Store';
import Header from './core/Header/Header';
import Details from './core/Details/Details';

function App() {   
  const navigate = useNavigate();
  const [searchValue, setSearchValue]= useState("")
  const getSearchValue = (searchKey) => {
    setSearchValue(searchKey.target.value);
    navigate('/store',{searchKey: searchKey});
   }
  return (
    <div ClassNames="app">
      <Header parentGetValue={getSearchValue} setValue={searchValue}></Header>
      <Routes>
        <Route exact path="/" element={<Store searchKey={searchValue}/>} />
        <Route path="/details" element={<Details />} />
        <Route path="/store" element={<Store searchKey={searchValue}/>} />
      </Routes>
    </div>  
  );
}

export default App;
