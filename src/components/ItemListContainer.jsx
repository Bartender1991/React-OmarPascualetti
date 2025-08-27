import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"

const ItemListContainer = ({ mensaje }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getProducts()
            .then((res) => setData(res))
            .catch((error) => console.error(error))
    }, [])
    console.log(data)
    return (
        <div>
            <h1>{mensaje}</h1>
        </div>
    )
}

export default ItemListContainer