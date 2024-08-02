import React, { useState } from 'react'

const Home = ({ getQtyDepth, jsonResult, depth, qty }) => {
    let [spgr, setSpgr] = useState(null)
    let [dqik, setDqik] = useState(null)

    let spgrHandler = (e) => {
        setSpgr(e.target.value)
    }
    let dqikHandler = (e) => {
        setDqik(e.target.value)
    }
    function findNearestValue(array, target) {
        if (array.length === 0) {
            throw new Error("Array is empty");
        }

        let nearestValue = 0;
        let minDifference = Math.abs(array[0].qty - target);
        for (let i = 1; i < array.length; i++) {
            const currentDifference = Math.abs(array[i].qty - target);
            if (currentDifference < minDifference) {
                minDifference = currentDifference;
                nearestValue = array[i].depth;
            }
        }
        return nearestValue;
    }
    return (
        <div>

            {/* visual 2 */}

            <div className="flex px-3 py-12 items-center justify-evenly">
                <fieldset >
                    <legend className='py-2'>Depth</legend>
                    <input value={depth} className='border outline-none w-28 md:w-auto p-2 md:p-3  rounded-md text-center' onChange={getQtyDepth} type="text" />
                </fieldset>
                <p className='text-2xl py-2 mt-8'>=</p>
                <fieldset >
                    <legend className='py-2'>Quantity</legend>
                    <input className='border outline-none w-28 md:w-auto p-2 md:p-3  rounded-md text-center' value={qty} type="text" />
                </fieldset>
            </div>
            <button onClick={getQtyDepth} className='bg-black text-white my-2 mx-auto block px-3 py-1 rounded-sm'>Reset</button>
            <section className='mx-12'>
                <h2 className='text-2xl text-center my-4'> LOADING MATERIAL</h2>
                <div className='grid gap-2  grid-cols-5'>
                    <div>
                        <label htmlFor="">SPGR NORMAL TEMPERATURE</label>
                        <input value={spgr} onChange={spgrHandler} className='border w-full p-4 rounded' type="text" placeholder='SPGR NORMAL TEMPERATURE' />
                    </div>
                    <div>
                        <label htmlFor="">DISPATCH QTY IN K.G. </label>
                        <input value={dqik} onChange={dqikHandler} className='border w-full p-4 rounded' type="text" placeholder='DISPATCH QTY IN K.G.' />
                    </div>
                    <div>
                        <label htmlFor="">DISPATCH QTY IN LTR.</label>
                        <input value={Math.trunc((dqik && spgr) && (dqik / spgr))} className='border w-full p-4 rounded' type="text" placeholder='DISPATCH QTY IN LTR.' />
                    </div>
                    <div>
                        <label htmlFor="">REMANING  DEPTH</label>
                        <input value={jsonResult.length && (dqik && spgr) && findNearestValue(jsonResult, Math.trunc((qty - (dqik / spgr))))} className='border w-full p-4 rounded' type="text" placeholder='REMANING DEPTH' />
                    </div>
                    <div>
                        <label htmlFor="">REMANING MATERIAL QTY IN LTR</label>
                        <input value={Math.trunc((dqik && spgr) && (qty - (dqik / spgr)))} className='border w-full p-4 rounded' type="text" placeholder='REMANING MATERIAL QTY IN LTR' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
