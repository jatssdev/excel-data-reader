import React, { useState } from 'react'
import Home from './Home'

const Logic = ({ getQtyDepth, jsonResult, depth, qty }) => {
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
        <div className='mt-24'>
            <Home getQtyDepth={getQtyDepth} depth={depth} qty={qty} />
            <section className='mx-12'>
                <div className='grid gap-2  mb-16 mt-12   grid-cols-12'>
                    <div className='col-span-6'>
                        <label htmlFor="spgr">SPGR NORMAL TEMPERATURE</label>
                        <input value={spgr} id='spgr' onChange={spgrHandler} className='border my-2 w-full p-4 rounded' type="text" placeholder='SPGR NORMAL TEMPERATURE' />
                    </div>
                    <div className='col-span-6'>
                        <label htmlFor="dqik">DISPATCH QTY IN K.G. </label>
                        <input id='dqik' value={dqik} onChange={dqikHandler} className='border my-2 w-full p-4 rounded' type="text" placeholder='DISPATCH QTY IN K.G.' />
                    </div>

                </div>
                {jsonResult.length && (dqik && spgr) && <table className='min-w-full my-12 bg-white border border-gray-200 shadow-md'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='py-3 px-6' colSpan={2}> LOADING MATERIAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='py-3 px-6 text-left font-medium text-gray-600 border-b border-gray-200'>Depth</th>
                            <td className='py-3 px-6 text-left border-b border-gray-200'>{depth}</td>
                        </tr>
                        <tr>
                            <th className='py-3 px-6 text-left font-medium text-gray-600 border-b border-gray-200'>Qty</th>
                            <td className='py-3 px-6 text-left border-b border-gray-200'>{qty}</td>
                        </tr>
                        <tr>
                            <th className='py-3 px-6 text-left font-medium text-gray-600 border-b border-gray-200'>SPGR</th>
                            <td className='py-3 px-6 text-left border-b border-gray-200'>{spgr}</td>
                        </tr>
                        <tr>
                            <th className='py-3 px-6 text-left font-medium text-gray-600 border-b border-gray-200'>Dispatch Qty in K.G.</th>
                            <td className='py-3 px-6 text-left border-b border-gray-200'>{dqik}</td>
                        </tr>
                        <tr>
                            <th className='py-3 px-6 text-left font-medium text-gray-600 border-b border-gray-200'>Dispatch Qty in LTR.</th>
                            <td className='py-3 px-6 text-left border-b border-gray-200'>{Math.trunc((dqik && spgr) && (dqik / spgr))}</td>
                        </tr>
                        <tr>
                            <th className='py-3 px-6 text-left font-medium text-gray-600 border-b border-gray-200'>Remaining Depth</th>
                            <td className='py-3 px-6 text-left border-b border-gray-200'>{jsonResult.length && (dqik && spgr) && findNearestValue(jsonResult, Math.trunc((qty - (dqik / spgr))))}</td>
                        </tr>
                        <tr>
                            <th className='py-3 px-6 text-left font-medium text-gray-600 border-b border-gray-200'>Remaining Material Qty in LTR</th>
                            <td className='py-3 px-6 text-left border-b border-gray-200'>{Math.trunc((dqik && spgr) && (qty - (dqik / spgr)))}</td>
                        </tr>
                    </tbody>
                </table>}

            </section>

        </div>
    )
}

export default Logic
