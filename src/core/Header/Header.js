import './Header.css';
import logo from '../../asset/logo.png';

function Header({parentGetValue, searchValue}) {
    const handleOnchange = (e) =>{
        console.log(e.target.value);
        parentGetValue(e);
    }
  return (
    <div className="header">
      <header className="App-header">
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <div>
            <input className="input-search" type="text" name="search" onChange={handleOnchange} value={searchValue} placeholder='Serach keyword'/>
        </div>
        <div className='nav-list'>
            <ul>
                <li className='nav-list'>store</li>
                <li className='nav-list'>Account</li>
                <li className='nav-list'>Wish List</li>
                <li className='nav-list'>Basket</li>
            </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;