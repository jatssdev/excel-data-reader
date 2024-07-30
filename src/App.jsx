
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExcelToJson from './components/ExcelToJson'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import List from './components/List'
import Home from './components/Home'
import Upload from './components/Upload'
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

function App() {




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


  const [jsonResult, setJsonResult] = useState([]);
  const [search, setSearch] = useState(null);
  const [qty, setQty] = useState('');

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const json = await convertExcelToJson(file);
        const transformedData = transformData(json);
        localStorage.setItem('josndata', JSON.stringify(transformedData))
        setJsonResult(transformedData);
        setSearch(transformedData)
        alert('data added successfully!')
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
    setQty(obj ? obj.qty : '')
  }

  useEffect(() => {
    setJsonResult(JSON.parse(localStorage.getItem('josndata')) || [])
  }, [])



  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home qty={qty} getQtyDepth={getQtyDepth} />
        },
        {
          path: 'list',
          element: <List search={search} jsonResult={jsonResult} SearchHandler={SearchHandler} />
        },
        {
          path: 'upload',
          element: <Upload handleFileUpload={handleFileUpload} />
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )

}

export default App
