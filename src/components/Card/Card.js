import React from 'react' 
import './Card.css'
const Card = ({title, description, price, category, image}) => {

  return (
    <div className="product-cards">
        <div className="top">
          <img src={image} alt="" />
          {/* <span className="material-icons more_horiz">more_horiz</span> */}
        </div>
        <button className='add-cart'>🛒</button>
        <div className="itemname">
          <span>{title}</span>
        </div>
        <div className="price">
          <span>${price}</span>
        </div>
        <div className="buttons">
          <div className="button add-to-cart">Add to Cart</div>
          <div className="button">Buy Now</div>
        </div>
    </div>
  )
}

export default Card