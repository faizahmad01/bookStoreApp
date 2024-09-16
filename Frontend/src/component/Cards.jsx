import React from 'react'
import list from "../../public/list.json"

function Cards({ item }) {
    // console.log(item);
    
  return (
    <>
    <div className='mt-4 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>Whatever you want to buy ! <span className="text-purple-950">Just Buy NOW</span></p>
    <div className="card-actions justify-end">
    <div className="cursor-pointer  px-2 py-1 rounded-full border-[2px] bg-slate-100">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-green-500 hover:text-white">Add to Cart</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards