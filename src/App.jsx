import { useState } from "react"
import ColorList from "./ColorList"
import Form from "./Form"
import Values from "values.js"
import { ToastContainer, toast } from "react-toastify"

const App = () => {
  const [colors, setColors] = useState(new Values("#1f45").all(10))

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(1)
      setColors(newColors)
      toast.success("Color Generated")
    } catch (error) {
      toast.error(error.message)
    }
  }
  // toast.error("Error")
  // toast.success("success")
  return (
    <section>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-right" />
    </section>
  )
}
export default App
