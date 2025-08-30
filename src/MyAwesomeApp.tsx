export function MyAwesomeApp() {
    const firstName = "Edgar";
    const lastName = "Vargas";

    const myFavoriteGames = ['Halo', 'Ninja Gaiden', 'Doom'];
    const isActive = true;

    const address = {
        zipCode: 'ABC-123',
        country: 'Canada'
    }

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{myFavoriteGames.join(', ')}</p>

            <h1>{isActive ? 'Active' : 'Not active'}</h1>

            <p style={{
                backgroundColor: 'red',
                borderRadius: 20,
                padding: 10
            }}> {JSON.stringify(address)} </p>
        </>
    );
}
