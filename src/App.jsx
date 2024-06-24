import { useState } from "react"
import ColorList from "./ColorList"
import Form from "./Form"
import Values from "values.js"
import { ToastContainer, toast } from "react-toastify"

const App = () => {
  const [colors, setColors] = useState(new Values("#1f45").all(10))

  toast.error("Error")
  toast.success("success")
  return (
    <section>
      <Form />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </section>
  )
}
export default App
