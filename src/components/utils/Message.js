import classes from './Message.module.css';

const Message = ({messageContent, setMessage}) => {
  // return ( 
  //   <div className={classes.messageContainer}>
  //     <div className={classes.messageBody}>
  //       <h1>{messageContent}</h1>
  //     </div>
  //   </div> 
  // );
  return <div>
  <div className={classes.backdrop}></div>
  <div className={`${classes.card} ${classes.modal}`}>
    <header className={classes.header}>
      <h2>Invalid Input</h2>
    </header>
    <div className={classes.content}>
      <p>{messageContent}</p>
    </div>
    <footer className={classes.actions}>
      <button className={classes.button} onClick={() => {setMessage(null)}}>Okay</button>
    </footer>
  </div>;
</div>
}
 
export default Message;