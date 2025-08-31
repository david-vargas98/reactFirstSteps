// challenge: create an interface to receive the props and use it into the component to display name
interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
    //Instructor says that it's better to separate logic from the template, so that:
    const handleClick = () => {
        console.log(`Click on ${name}`)
    }

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
            <button
                onClick={handleClick}
            >+1</button>
            <span>{quantity}</span>
            <button>-1</button>
        </section>
    )
}
