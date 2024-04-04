import './Card.css';
import { useNavigate } from 'react-router-dom';
function Card(props) {
  const navigator = useNavigate();
  const redirectDetails = () =>{
    navigator('/details', {state: {id: props.item.id}});
  }
  return (
    <div className='card-list-item' onClick={redirectDetails}>
        <img className="img" src={props.item.images[0]} width="100" height="50" alt={props.item.title} />
        <h3>{props.item.title}</h3>
        <p className='des'>{props.item.description}</p>
        <p><b>$ {props.item.price}</b></p>
        <p className='rating-label'>Rating : {props.item.rating} / 5</p>
    </div>
  );
}

export default Card;