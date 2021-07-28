// write your CatList component here
import React from 'react'
const CatList = (props) => (
  <div>
    {props.catPics.map((catPic, i) => (
      <div key={i}>
        <img src={catPic.url} />
      </div>
    ))}
  </div>
)

export default CatList
