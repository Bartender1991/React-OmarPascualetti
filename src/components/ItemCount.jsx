import { useEffect, useState } from "react"
const ItemCount = () => {
    const [count, setCount] = useState(0)
    const [comprar, setCompra] = useState(false)

    const sumar = () => {
        setCount(count + 1)
    }

    const restar = () => {
        setCount(count - 1)
    }

    // funcion comprar para setear estados
    const comprarHandler = () => {
        // niego el valor que tenga comprar ya que es boleano va a colocar lo opuesto
        setCompra(!comprar)
    }

    // se ejecuta siempre que le componente se muestra o se actualiza
    // NO SE SUELE USAR YA QUE GENERA UN LOOP 
    useEffect(() => {
        console.log("me ejecuto siempre")
    })

    // se ejecuta cuando monta el componente
    // EL MAS USADO JUNTO CON LA ESCUCHA DE UN ESTADO
    useEffect(() => {
        console.log("me ejecuto 1 sola vez")
    }, [])

    // se ejecuta cuando monta el componente y siempre que cambie lo que esta escuchando
    useEffect(() => {
        console.log("se ejecuta cuando se monta y siempre que compra cambie", comprar)
    }, [comprar])

    // Componente actualizandose : itemCount
    console.log('itemCount')
    return (
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
            <button className="btn btn-primary" onClick={comprarHandler}>Comprar</button>
        </div>
    )
}

export default ItemCount