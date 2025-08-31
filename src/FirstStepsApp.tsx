import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
    return (
        <>
            <h1>Shopping cart</h1>

            <ItemCounter name="Nintendo switch 2" quantity={1} />
            <ItemCounter name="Pro controller" quantity={1} />
            <ItemCounter name="Super smash" quantity={1} />
        </>
    )
}