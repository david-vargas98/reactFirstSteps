import { useState } from "react";

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
        if(count === 1) return;
        
        setCount(count - 1)
    };

    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10
        }}>
            <span style={{
                width: 130
            }}>
                {name}
            </span>
            <button onClick={handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleSub}>-1</button>
        </section>
    )
}
