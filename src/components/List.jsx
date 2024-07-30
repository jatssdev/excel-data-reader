import React from 'react'

const List = ({ search, jsonResult, SearchHandler }) => {
    return (
        <div>
            <div className="my-12">
                <input className='border outline-none border-black block mx-auto w-3/5 p-3' onChange={SearchHandler} type="search" placeholder='Search Depth Or Quantity' />
            </div>
            {
                search === null ? <ul className='w-full px-6 md:w-3/5 mx-auto '>
                    {jsonResult.map((x, i) => {
                        return <li className='flex gap-12 justify-between my-2 shadow  p-3 text-xl font-bold' key={i}><p>Depth : {x.depth}</p> <p>Qty Ltr : {x.qty}</p></li>
                    })}
                </ul> : search.length ? <ul className='w-full px-6 md:w-3/5 mx-auto '>{search.map((x, i) => {
                    return <li className='flex gap-12 justify-between my-2 shadow  p-3 text-xl font-bold' key={i}><p>Depth : {x.depth}</p> <p>Qty Ltr : {x.qty}</p></li>
                })}</ul> : <p className='searchMsg'>No Search Result Found!</p>
            }
        </div>
    )
}

export default List
