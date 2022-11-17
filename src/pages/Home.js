import { Link } from "react-router-dom";
import classes from './Home.module.css';

const Home = () => {
  return ( 
    <div className={classes.container}>
      <h1>Welcome To Our Shoes App</h1>
      <Link to='/shoes'>Navigate Our Stock</Link>
    </div>
  );
}
 
export default Home;