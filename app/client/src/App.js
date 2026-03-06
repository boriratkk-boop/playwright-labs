import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [products,setProducts] = useState([])

  useEffect(()=>{

    axios.get("http://localhost:4000/products")
      .then(res=>{
        setProducts(res.data)
      })

  },[])

  return (

    <div>

      <h1>Product List</h1>

      {products.map(p => (

        <div
          key={p.id}
          data-testid="product-item"
        >
          {p.name} - {p.price}
        </div>

      ))}

    </div>

  )

}

export default App