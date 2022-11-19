import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { addShoeReq } from '../api';
import classes from './AddShoe.module.css';

const AddShoe = ({setIsLoading, setMessage, setTitle}) => {
  const [addShoe, setAddShoe] = useState(false);

  const addHandler = async (event) => {
    event.preventDefault();
    const { name, picture, price, description } = event.target.elements;
    if(!name.value.trim() || !picture.value.trim() || !price.value.trim()) {
      setTitle('Invalid Input!');
      setMessage('Empty Strings Are Not Valid! You can leave the description blank');
      return;
    }
    const addedShoe = {
      name: name.value,
      picture: picture.value,
      price: price.value,
      description: description.value || 'No description!'
    };
    setIsLoading(true);
    const add = await addShoeReq(addedShoe);
    if(add === null) {
      setTitle('Error!');
      setMessage('something went wrong!');
      return;
    }
    setIsLoading(false);
    setAddShoe(true);
    setTitle('Success!');
    setMessage('Shoe added Successfully!');
  };

  return ( 
    <div className={classes.formContainer}>
      <h1>Add Shoe</h1>
      <form className={classes.form} onSubmit={addHandler}>
        <div className={classes.formGroup}>
          <label>Name:</label>
          <input name='name' type="text" />
        </div>
        <div className={classes.formGroup}>
          <label>Image URL:</label>
          <input name='picture' type="text" />
        </div>
        <div className={classes.formGroup}>
          <label>Price:</label>
          <input name='price' type="text" />
        </div>
        <div className={classes.formGroup}>
          <label>Description:</label>
          <textarea name='description' cols="30" rows="10" ></textarea>
        </div>
        <input type="submit" value='Add Shoe' />
      </form>
      {addShoe && <Route><Redirect to='/shoes' /></Route>}
    </div> 
  );
}
 
export default AddShoe;