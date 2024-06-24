import React from "react"

const SingleColor = ({ color }) => {
  console.log(color)
  const { hex, weight } = color
  return (
    <article className="color" style={{ background: `#${hex}` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value"> #{hex}</p>
    </article>
  )
}

export default SingleColor
