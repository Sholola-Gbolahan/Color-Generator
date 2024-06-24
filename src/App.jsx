import { useState } from "react"
import ColorList from "./ColorList"
import Form from "./Form"
import Values from "values.js"

const App = () => {
  const [colors, setColors] = useState()
  // This show different list of colors relating to the input. from light to dark
  console.log(new Values("#0000").all(10))

  return (
    <section>
      <Form />
      <ColorList />
    </section>
  )
}
export default App
