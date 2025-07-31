import React from 'react'

function ShopNowButton({ title }) {
    return (
        <button className="cursor-pointer hover:bg-white text-white duration-300 hover:rounded-md hover:text-black py-3 px-14 border-4 font-semibold uppercase border-white ">{title} </button>
    )
}

export default ShopNowButton
