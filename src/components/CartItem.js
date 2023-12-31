import React from "react";
import {MdDelete} from 'react-icons/md'
import {BiPlus, BiMinus} from 'react-icons/bi'
import { useGlobalContext } from "../context/context";
import formatNumber from "../utils/formatNumber";


const CartItem = ({_id, name, image, price, qty, countInStock}) => {

  const {deleteItem, addQty, dimQty} = useGlobalContext();

  const aggiungiQty = (_id) => {
    if(qty + 1 > countInStock){
      return
    }
    return addQty(_id)
  }

  const diminuisciQty = (_id) => {
    if(qty - 1 <= 0){
      return deleteItem(_id)
    }
    return dimQty(_id)
  }

  return (
    <article className="cart-item">
      {/* IMG */}
      <div className="card-items">
        <img src={image} alt={name} className="img"/>
      </div>
      {/* Nomi */}
      <p className="prd-name">
        {name}
      </p>
      {/* Tasto + */}
      <div className="qty-selector">
        <button className="btn icon-btn" onClick={() => aggiungiQty(_id)}>
          <BiPlus className="icon" />
        </button>
        <p>
          {qty}
        </p>
        {/* Tasto - */}
        <button className="btn icon-btn" onClick={() => diminuisciQty(_id)}>
          <BiMinus className="icon" />
        </button>
      </div>
      <p>{formatNumber(price)}</p>
      {/* Tasto di cancellazione del prodotto */}
      <button className="btn icon-btn">
        <MdDelete className="icon minus-icon" onClick={() => deleteItem(_id)}/>
      </button>
    </article>
  )
};

export default CartItem;
