import { updateShoeReq } from '../api';
import classes from './UpdateShoe.module.css';

const EditShoe = ({shoe, setShoe, setUpdateShoe, setIsLoading, setMessage, setTitle}) => {
  const editHandler = async (event) => {
    event.preventDefault();
    const { name, picture, price, description } = event.target.elements;
    if(!name.value.trim() || !picture.value.trim() || !price.value.trim()) {
      setTitle('Invalid Input!');
      setMessage('Empty Strings Are Not Valid! You can leave the description blank');
      return;
    }
    const updatedShoe = {
      name: name.value,
      picture: picture.value,
      price: price.value,
      description: description.value || 'No description!'
    };
    setIsLoading(true);
    const update = await updateShoeReq(shoe.id, updatedShoe);
    if(update === null) {
      setTitle('Error!');
      setMessage('something went wrong!');
      return;
    }
    setShoe(update);
    setIsLoading(false);
    setUpdateShoe(false);
    setTitle('Success!');
    setMessage('Shoe Updated Successfully!');
  };

  return ( 
    <div className={classes.formContainer}>
      <h1>Edit Shoe</h1>
      <form className={classes.form} onSubmit={editHandler}>
        <div className={classes.formGroup}>
          <label>Name:</label>
          <input name='name' type="text" defaultValue={shoe.name} />
        </div>
        <div className={classes.formGroup}>
          <label>Image URL:</label>
          <input name='picture' type="text" defaultValue={shoe.picture} />
        </div>
        <div className={classes.formGroup}>
          <label>Price:</label>
          <input name='price' type="text" defaultValue={shoe.price} />
        </div>
        <div className={classes.formGroup}>
          <label>Description:</label>
          <textarea name='description' cols="30" rows="10" defaultValue={shoe.description}></textarea>
        </div>
        <input type="submit" value='Edit' />
      </form>
    </div> 
  );
}
 
export default EditShoe;