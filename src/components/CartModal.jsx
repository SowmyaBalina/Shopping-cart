import styles from  '../styles/ItemCard.module.css';
import { useValue } from "../ItemContext";

function CartModal(){
    const {cart,total,clear,toggle} = useValue();
    return (
        <div className= {styles.itemButtonsWrapper}>
            <div className= {styles.itemButton} onClick={toggle}>
                Close
            </div>
            <div className = {styles.itemButton} onClick = {clear}>
                Clear
            </div>
            <div className = {styles.itemContainer}>
               { cart.map((item)=>{
                return(
                      <div className = {styles.cartContent} key ={item.id}>
                        <h1>{item.name}</h1>
                        <h3>X {item.qty}</h3>
                        <h3>X {item.qty * item.price}</h3>
                        </div>
                );

                })
            }

            </div>
            <div className= {styles.total}>
                <div className = {styles.totalText}>Total</div>
                <div className={styles.totalPrice}>{total}</div>

            </div>
        </div>
    );
}

export default CartModal;