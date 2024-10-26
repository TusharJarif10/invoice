import React from 'react'
import { useEffect, useState } from 'react'
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import { v4 as uuidv4 } from 'uuid';
// import TitleNames from './TitleName';

import './Table.css'


export default function TableForm({selectedTitle, setDue, setSelectedTitle, description, setDescription , rate , setRate,quantity, setQuantity, amount ,setAmount,file, setFile,handleChange, list, setList, total, setTotal, discount , setDiscount}) {
  const [isEditing, setEditing] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    const newItems = {
       id :uuidv4(),
       selectedTitle,
       description,
       file,
       rate,
       quantity,
       amount,
    }

    setSelectedTitle("")
    setDescription("")
    setFile()
    setQuantity("")
    setRate("")
    setAmount("")
    setList([...list, newItems])
    setEditing(false)

    console.log(list)

  }
// calculate amount of each rows
  useEffect( ()=> {
  const calculateAmount = (amount) => {
    setAmount (quantity * rate)
  }

  calculateAmount(amount)
  }, [amount, rate, quantity, setAmount])

// delete rows
  const deleteRow = (id)=> setList(list.filter((row) => row.id !==id))


// Editing each rows
  const editRow = (id)=> {
    const editingRow = list.find ((row)=> row.id ===id)
    setList(list.filter((row)=> row.id !== id))
    setEditing(true)
    setSelectedTitle(editingRow.selectedTitle)
    setDescription(editingRow.description)
    setRate(editingRow.rate)
    setQuantity(editingRow.quantity)
    setFile(editingRow.file)
  }

  // calculate total amount
  let rows = document.querySelectorAll(".amount")
  let sum = 0


  useEffect(()=> {
    for (let i =0; i<rows.length; i++){
      if (rows[i].className ==="amount"){
        sum+= isNaN(rows[i].innerHTML) ? 0: parseInt(rows[i].innerHTML)
  
      }
    }
    setTotal(sum)
    console.log(sum)

    setDue(sum - discount)
  },)

  
  

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div className='md:grid grid-cols-2 gap-10 md:mt-16'>
          {/* <div  className="flex flex-col ">
          <label htmlFor="description">Item Title</label>
            <select name="itemtitle" id="itemtitle" value={selectedTitle}
            onChange={(e) => setSelectedTitle(e.target.value)}>
              {TitleNames.map((title) =>(
                <option  value= {title} >
                 {title}
                </option>
              ))}
              <option value="">select </option>
              <option value="Stage">Stage</option>
              <option value="Table">Table</option>
              <option value="Chair">Chair</option>
            </select>

          </div> */}
          <div className="flex flex-col ">
              <label htmlFor="description">Item description</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Item description"
                maxLength={96}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
          </div>

        </div>
        

      <div className='md:grid grid-cols-3 gap-10'>
        <div className="flex flex-col ">
              <label htmlFor="rate">Rate</label>
              <input
                type="text"
                name="rate"
                id="rate"
                placeholder="Item rate"
                maxLength={96}
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
        </div>
      <div className="flex flex-col ">
              <label htmlFor="description">Item quantity</label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                placeholder="Item quantity"
                maxLength={96}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
        </div>
      <div className="flex flex-col ">
              <label htmlFor="description"> Amount</label>
              <p>{amount}</p>
        </div>
          
        </div>
      
      <div className="flex flex-col ">
      <label htmlFor="image"> Enter your image</label>
      
          <input type="file" onChange={handleChange} />
              
      </div>
      <button className= "bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 my-5"type='submit'>{isEditing ? "Editing Item" : "Add Table Item"}</button>
      </form>

      <table width = "100%" className=' mb-10'>
            <thead>
                <tr className='bg-gray-100 p-1'>
                    {/* <th className="font-bold p-2 border">Title</th> */}
                    <th className="font-bold p-2 border">Description</th>
                    {/* <th className="font-bold p-2 border">Sample Design</th> */}
                    <th className="font-bold p-2 border">Amount</th>
                    <th className="font-bold p-2 border">Quantity</th>
                    <th className="font-bold p-2 border">Total</th>
                    <th className="font-bold p-2 border">Actions</th>
                </tr>
            </thead>
        {list.map(({id, selectedTitle, description, quantity, rate, file, amount}) => (
            <React.Fragment key={id}>
                <tbody>
                {/* <tr >
                  <td>{selectedTitle}</td>
                    <td>

                      {description}
                    </td>
                    <td><img src={file}  className=" h-20" alt="" /></td>
                    <td>{rate}</td>
                    <td>{quantity}</td>
                    <td className= "amount">{amount}</td>
                    <td><button className= "text-red-500 font-bold text-xl"onClick={()=> deleteRow(id)}><AiOutlineDelete/></button></td>
                    <td><button className= "text-green-500 font-bold text-xl" onClick={() => editRow(id)}><AiOutlineEdit/></button></td>
                </tr> */}
                 <tr key={id} className="border">
                            {/* <td className="p-2 border" data-label="Title">{selectedTitle}</td> */}
                            <td className="p-2 border" data-label="Description">{description}</td>
                            {/* <td className="p-2 border" data-label="Sample Design"><img src={file} className="h-20" alt="" /></td> */}
                            <td className="p-2 border" data-label="Amount">{rate}</td>
                            <td className="p-2 border" data-label="Quantity">{quantity}</td>
                            <td className= "amount" data-label="Amount">{amount}</td>
                            <td className="p-2 border" data-label="Actions">
                                <button className="text-red-500 font-bold text-xl" onClick={() => deleteRow(id)}><AiOutlineDelete /></button>
                                <button className="text-green-500 font-bold text-xl" onClick={() => editRow(id)}><AiOutlineEdit /></button>
                            </td>
                        </tr>
            </tbody>
            </React.Fragment>

        ))}
            
        </table>

        <div>
        <h2 className='flex items-end justify-end text-gray-800 text-2xl font-bold'>Advance: {discount}</h2>
          <h2 className='flex items-end justify-end text-gray-800 text-4xl font-bold'>Total: {total.toLocaleString()}</h2>
        </div>
    </>
  
  )
}
