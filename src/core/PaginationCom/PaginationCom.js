
import Pagination from '@mui/material/Pagination';
import './PaginationCom.css';

function PaginationCom({countValue, paginationGetValue}) {
    
    const handleChange = (event, value) => {
        paginationGetValue(value);
    }
    return(
        <div className="pagination">
            <Pagination count={countValue} onChange={handleChange} variant="outlined" shape="rounded" />
        </div>
    );
}

export default PaginationCom;