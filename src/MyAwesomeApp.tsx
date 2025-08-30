import type { CSSProperties } from "react";

const firstName = "Edgar";
const lastName = "Vargas";

const myFavoriteGames = ['Halo', 'Ninja Gaiden', 'Doom'];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Canada'
}

const myStyles: CSSProperties = {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
    marginTop: 50
}

export function MyAwesomeApp() {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{myFavoriteGames.join(', ')}</p>

            <h1>{isActive ? 'Active' : 'Not active'}</h1>

            <p style={myStyles}> {JSON.stringify(address)} </p>
        </>
    );
}
