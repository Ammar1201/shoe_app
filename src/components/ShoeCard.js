import { Link } from "react-router-dom";
import classes from './ShoeCard.module.css';

const shoe = {
  "name": "Adidas",
  "picture": "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "price": "447.01",
  "description": "Aspernatur assumenda quasi quos dolor ducimus quisquam. Pariatur minus placeat itaque et dolor.",
  "id": "1"
};

const ShoeCard = () => {
  return ( 
    <div className={classes.card}>
      <h2>{shoe.name}</h2>
      <img src={shoe.picture} alt="shoe" />
      <p>{shoe.description}</p>
      <h4>{shoe.price}$</h4>
      <Link to={`/shoes/${shoe.id}`} >Show More</Link>
    </div> 
  );
}
 
export default ShoeCard;