import React, { useState, useEffect } from 'react';
import { useParams, Route, Redirect } from 'react-router-dom';
import { getShoeReq, deleteShoeReq } from '../api';
import UpdateShoe from '../components/UpdateShoe';
import classes from './ShoeDetails.module.css';

// const shoe = {
//   name: "Adidas",
//   picture: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   price: "447.01",
//   description: "Aspernatur assumenda quasi quos dolor ducimus quisquam. Pariatur minus placeat itaque et dolor. Aliquam sapiente sit et.",
//   id: "1"
// }

const Shoe = ({setIsLoading, setMessage, setTitle}) => {
  const { shoeID } = useParams();
  const [shoe, setShoe] = useState(null);
  const [updateShoe, setUpdateShoe] = useState(false);
  const [deleteShoe, setDeleteShoe] = useState(false);

  useEffect(() => {
    const getShoeData = async () => {
      setIsLoading(true);
      const data = await getShoeReq(shoeID);
      setShoe(data);
      setIsLoading(false);
    };
    getShoeData();
  }, [shoeID, setIsLoading]);

  const editHandler = () => {
    setUpdateShoe(true);
  };

  const deleteHandler = async () => {
    setIsLoading(true);
    const data = await deleteShoeReq(shoeID);
    if(data === null) {
      setMessage('something went wrong!');
      return;
    }
    setIsLoading(false);
    setDeleteShoe(true);
    setTitle('Success!');
    setMessage('Shoe Deleted Successfully!');
  };

  return ( 
    <div>
      {!updateShoe && <h1 style={{textAlign: 'center'}}>Shoe Details</h1>}
      {shoe && !updateShoe && <div className={classes.container}>
        <div>
          <img src={shoe.picture} alt="shoe" />
        </div>
        <div className={classes.info}>
          <h2>{shoe.name}</h2>
          <p>{shoe.description}</p>
          <h4>{shoe.price}$</h4>
          <div className={classes.btns}>
            <button onClick={editHandler}>Update</button>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </div> 
      </div>}
      {shoe && updateShoe && <UpdateShoe shoe={shoe} setShoe={setShoe} setUpdateShoe={setUpdateShoe} setIsLoading={setIsLoading} setMessage={setMessage} setTitle={setTitle} />}
      {deleteShoe && <Route><Redirect to='/shoes' /></Route>}
    </div> 
  );
}
 
export default Shoe;