import React, { useState } from "react"

const Form = () => {
  const [color, setColor] = useState()

  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="rgb(244, 191, 31)"
        />

        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: color }}
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Form
