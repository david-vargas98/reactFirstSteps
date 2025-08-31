import { ItemCounter } from "./shopping-cart/ItemCounter";

interface itemInCart {
    productName: string;
    quantity: number;
};

const itemsInCart: itemInCart[] = [
    {productName: "Nintendo switch 2", quantity: 1},
    {productName: "Pro controller", quantity:3},
    {productName: "Super smash", quantity:5}
]


export function FirstStepsApp() {
    return (
        <>
            <h1>Shopping cart</h1>
            {
                itemsInCart.map(({productName, quantity}) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }
            {/* <ItemCounter name="Nintendo switch 2" quantity={1} />
            <ItemCounter name="Pro controller" quantity={1} />
            <ItemCounter name="Super smash" quantity={1} /> */}
        </>
    )
}