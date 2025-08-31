import { useState } from "react";


//import './ItemCounter.css';
import styles from './ItemCounter.module.css';

// challenge: create an interface to receive the props and use it into the component to display name
interface Props {
    name: string;
    quantity?: number;
};

// we add 'quantity = 1' in case quantity is equals to undefined
export const ItemCounter = ({ name, quantity = 1 }: Props) => {

    // useState is destructured into count and setCount, we use count to get the value and setCount to change it:
    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleSub = () => {
        if (count === 1) return;

        setCount(count - 1)
    };

    return (
        <section
            className={ styles['item-row'] } // if style name includes '-' then we use [''] notation
            // className="item-row"
        // style={{
        //     display: 'flex',
        //     alignItems: 'center',
        //     gap: 10,
        //     marginTop: 10
        // }}
        >
            <span
                className={ styles.itemText } // if style name it's in camelCase, then we use dot notation 
                style={{
                    color: count === 1 ? 'red' : 'black' // we use style when we apply conditional styles
                }}>
                {name}
            </span>
            <button onClick={handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleSub}>-1</button>
        </section>
    )
}
