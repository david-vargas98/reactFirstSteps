export const ItemCounter = () => {
    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10
        }}>
            <span style={{
                backgroundColor: 'red',
                width: 130
            }}>
                Nintendo switch 2
            </span>
            <button>+1</button>
            <span>10</span>
            <button>-1</button>
        </section>
    )
}
