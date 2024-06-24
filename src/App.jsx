import { useState } from "react"
import ColorList from "./ColorList"
import Form from "./Form"
import Values from "values.js"

const App = () => {
  const [colors, setColors] = useState(new Values("#1f45").all(10))

  // This show different list of colors relating to the input. from light to dark

  return (
    <section>
      <Form />
      <ColorList colors={colors} />
    </section>
  )
}
export default App
