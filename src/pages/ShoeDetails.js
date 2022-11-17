import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getShoe } from '../api';
import classes from './ShoeDetails.module.css';

// const shoe = {
//   name: "Adidas",
//   picture: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   price: "447.01",
//   description: "Aspernatur assumenda quasi quos dolor ducimus quisquam. Pariatur minus placeat itaque et dolor. Aliquam sapiente sit et.",
//   id: "1"
// }

const Shoe = () => {
  const { shoeID } = useParams();
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    console.log('useEffect');
    const getShoeData = async () => {
      const data = await getShoe(shoeID);
      console.log(data);
      setShoe(data);
    };
    getShoeData();
  }, [shoeID]);

  return ( 
    <div>
      <h1 style={{textAlign: 'center'}}>Shoe</h1>
      <div className={classes.container}>
        <div>
          <img src={shoe.picture} alt="shoe" />
        </div>
        <div className={classes.info}>
          <h2>{shoe.name}</h2>
          <p>{shoe.description}</p>
          <h4>{shoe.price}$</h4>
          <div className={classes.btns}>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div> 
      </div>
    </div> 
  );
}
 
export default Shoe;