const ComponenteConChildren = (props) => {

    return (
        <div>
            <h1>Componente con Children</h1>
            <div style={{ background: 'pink', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {props.children}
            </div>
        </div>
    )
}

export default ComponenteConChildren