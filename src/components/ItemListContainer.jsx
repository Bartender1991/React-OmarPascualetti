import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Imput from "./Imput"

const ItemListContainer = ({ mensaje }) => {
    const [data, setData] = useState([])
    const { category } = useParams()

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (category) {
                    //filtro
                    setData(res.filter((item) => item.category === category))
                } else {
                    // data sin filtrar
                    setData(res)
                }
            })
            .catch((error) => console.error(error))
    }, [category])
    console.log(category)
    return (
        <div className="container">
            <Imput/>
            <h1>{mensaje}</h1>
            <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer