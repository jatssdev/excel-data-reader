import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const convertExcelToJson = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(worksheet);
            resolve(json);
        };
        reader.onerror = (error) => reject(error);
        reader.readAsArrayBuffer(file);
    });
};

const transformData = (data) => {
    const transformed = [];
    data.forEach((row) => {
        const depth = row['Depth'];
        const qty = row['Qty'];

        if (depth && qty) {
            let obj = { depth, qty }
            transformed.push(obj)
        }
    });
    return transformed;
};

const ExcelToJson = () => {
    const [jsonResult, setJsonResult] = useState([]);
    const [search, setSearch] = useState(null);
    const [qty, setQty] = useState('');

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const json = await convertExcelToJson(file);
                const transformedData = transformData(json);
                setJsonResult(transformedData);
                setSearch(transformedData)
            } catch (error) {
                console.error('Error converting file:', error);
            }
        }
    };
    let SearchHandler = (e) => {
        let value = e.target.value
        if (value) {
            let searched = jsonResult.filter((x) => {
                return x.depth == value || x.qty == value
            })
            setSearch(searched)
        } else {
            setSearch(null)
        }

    }

    let getQtyDepth = (e) => {
        let value = e.target.value

        let obj = jsonResult.find((x) => x.depth == value)
        setQty(obj.qty)

    }

    return (
        <>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />



            {/* visual 2 */}

            <div className="main">

                <fieldset>
                    <legend>Depth</legend>
                    <input onChange={getQtyDepth} type="text" />
                </fieldset>
                <p>=</p>
                <fieldset>
                    <legend>Quantity</legend>
                    <input value={qty} type="text" />
                </fieldset>

            </div>



            {/* visual 1 */}
            <div className="search">
                <input onChange={SearchHandler} type="search" placeholder='Search Depth Or Quantity' />
            </div>
            {

                search === null ? <ul className='wrapper'>
                    {jsonResult.map((x, i) => {
                        return <li key={i}><p>Depth : {x.depth}</p> <p>Qty Ltr : {x.qty}</p></li>
                    })}
                </ul> : search.length ? <ul className='wrapper'>{search.map((x, i) => {
                    return <li key={i}><p>Depth : {x.depth}</p> <p>Qty Ltr : {x.qty}</p></li>
                })}</ul> : <p className='searchMsg'>No Search Result Found!</p>}
        </>
    );
};

export default ExcelToJson;
