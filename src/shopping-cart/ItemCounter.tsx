// challenge: create an interface to receive the props and use it into the component to display name
interface Props {
    name: string;
}

export const ItemCounter = ({name}: Props)=> {
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
            <button>+1</button>
            <span>10</span>
            <button>-1</button>
        </section>
    )
}
