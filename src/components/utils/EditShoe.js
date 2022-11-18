import { updateShoe } from '../../api';
import classes from './EditShoe.module.css';

const EditShoe = ({shoe, setShoe, setEditShoe, setIsLoading}) => {
  const editHandler = async (event) => {
    event.preventDefault();
    const { elements } = event.target;
    const updatedShoe = {
      name: elements.name.value,
      picture: elements.picture.value,
      price: elements.price.value,
      description: elements.description.value
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