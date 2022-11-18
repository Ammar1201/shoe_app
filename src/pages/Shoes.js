import React, { useEffect, useState } from 'react';
import { getShoes } from "../api";
import ShoeCard from "../components/ShoeCard";
import classes from "./Shoes.module.css";

const Shoes = ({setIsLoading}) => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const getShoesData = async () => {
      setIsLoading(true);
      const shoesData = await getShoes();
      setShoes(shoesData);
      setIsLoading(false);
    };
    getShoesData();
  }, [setIsLoading]);


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