import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getShoe } from '../api';
import EditShoe from '../components/EditShoe';
import classes from './ShoeDetails.module.css';

// const shoe = {
//   name: "Adidas",
//   picture: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   price: "447.01",
//   description: "Aspernatur assumenda quasi quos dolor ducimus quisquam. Pariatur minus placeat itaque et dolor. Aliquam sapiente sit et.",
//   id: "1"
// }

const Shoe = ({setIsLoading}) => {
  const { shoeID } = useParams();
  const [shoe, setShoe] = useState(null);
  const [editShoe, setEditShoe] = useState(false);

  useEffect(() => {
    const getShoeData = async () => {
      setIsLoading(true);
      const data = await getShoe(shoeID);
      setShoe(data);
      setIsLoading(false);
    };
    getShoeData();
  }, [shoeID, setIsLoading]);

  const editHandler = () => {
    setEditShoe(true);
  };

  const deleteHandler = () => {};

  return ( 
    <div>
      {!editShoe && <h1 style={{textAlign: 'center'}}>Shoe Details</h1>}
      {shoe && !editShoe && <div className={classes.container}>
        <div>
          <img src={shoe.picture} alt="shoe" />
        </div>
        <div className={classes.info}>
          <h2>{shoe.name}</h2>
          <p>{shoe.description}</p>
          <h4>{shoe.price}$</h4>
          <div className={classes.btns}>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </div> 
      </div>}
      {shoe && editShoe && <EditShoe shoe={shoe} setShoe={setShoe} setEditShoe={setEditShoe} setIsLoading={setIsLoading} />}
    </div> 
  );
}
 
export default Shoe;