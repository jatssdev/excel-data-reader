import React from 'react'

const Home = ({ getQtyDepth, qty }) => {
    return (
        <div>

            {/* visual 2 */}

            <div className="flex px-3 py-12 items-center justify-evenly">
                <fieldset >
                    <legend className='py-2'>Depth</legend>
                    <input className='border outline-none w-28 md:w-auto p-2 md:p-3  rounded-md text-center' onChange={getQtyDepth} type="text" />
                </fieldset>
                <p className='text-2xl py-2 mt-8'>=</p>
                <fieldset >
                    <legend className='py-2'>Quantity</legend>
                    <input className='border outline-none w-28 md:w-auto p-2 md:p-3  rounded-md text-center' value={qty} type="text" />
                </fieldset>
            </div>

        </div>
    )
}

export default Home
