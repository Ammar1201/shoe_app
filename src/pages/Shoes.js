import React, { useEffect, useState } from 'react';
import { getShoes } from "../api";
import ShoeCard from "../components/ShoeCard";
import classes from "./Shoes.module.css";

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const data = async () => {
      const shoesData = await getShoes();
      console.log(shoesData);
      setShoes(shoesData);
    };
    data();
  }, []);


  return ( 
    <div className={classes.container}>
      <h1>Shoes</h1>
      <div className={classes.shoesContainer}>
        {shoes.map(shoe => <ShoeCard key={shoe.id} shoe={shoe} />)}
      </div>
    </div> 
  );
}
 
export default Shoes;