import { updateShoe } from '../api';
import classes from './EditShoe.module.css';

const EditShoe = ({shoe, setShoe, setEditShoe, setIsLoading, setMessage}) => {
  const editHandler = async (event) => {
    event.preventDefault();
    const { name, picture, price, description } = event.target.elements;
    if(!name.value.trim() || !picture.value.trim() || !price.value.trim()) {
      setMessage('Empty Strings Are Not Valid!');
      return;
    }
    const updatedShoe = {
      name: name.value,
      picture: picture.value,
      price: price.value,
      description: description.value || 'No description'
    };
    setIsLoading(true);
    const update = await updateShoe(shoe.id, updatedShoe);
    setShoe(update);
    setEditShoe(false);
    setIsLoading(false);
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