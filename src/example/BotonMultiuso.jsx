
const BotonMultiuso = (props) => {

    const styles = {

        backgroundColor: props.color,
        color: 'black',
        border: 'none',
        borderRadius: props.borderRadius,
        padding: props.padding
    }

    const handler = () => {
        props.parametrosConEventos('Milanesa con papas')
    }

    return (
        <button style={styles} onClick={handler}>Click!</button>
    )
}

export default BotonMultiuso
