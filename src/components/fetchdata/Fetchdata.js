import React from 'react'
import './fetch.css'

const Fetchdata = () => {
    const value=[
        {id:1,time:"12:30",amount:"3,223",narration:"payment for june",sendderName:"Mic Mary",acount:"232****34",status:"creadit"},
        {id:2,time:"11:20",amount:"3,223",narration:"payment for march",sendderName:"Jane Bone",acount:"232****34",status:"creadit"},
        {id:3,time:"12:13",amount:"12,221",narration:"payment for march",sendderName:"Okey Okoro",acount:"232****34",status:"creadit"},
        {id:4,time:"11:01",amount:"672",narration:"payment for may",sendderName:"Amaka Eze",acount:"232****34",status:"Debit"},
        {id:5,time:"9:12",amount:"543",narration:"payment for Nov",sendderName:"Jane Bame",acount:"232****34",status:"Debit"},
        {id:6,time:"8:21",amount:"3443",narration:"payment for Nov",sendderName:"Emeka Agu",acount:"232****34",status:"Debit"},
        {id:7,time:"08:21",amount:"332",narration:"payment for Nov",sendderName:"Ugwu Ego",acount:"232****34",status:"Debit"},
        {id:8,time:"11:21",amount:"902",narration:"payment for Nov",sendderName:"Adamma Edu",acount:"232****34",status:"Debit"},
    ];
  return (
    <div className='table design'>
    <table className='table'>
        <thead>
            <tr>
                <th>Time</th>
                <th>Amount</th>
                <th>Narration</th>
                <th>Sender Name</th>
                <th>Account</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {value.map(v=>{
                const {id,time,amount,narration,sendderName,acount,status}=v
                return(
                    
                    <tr key={id} className="tb-row">
                    <td>{time}</td>
                    <td>{amount}</td>
                    <td>{narration}</td>
                    <td>{sendderName}</td>
                    <td>{acount}</td>
                    <td><div className='status'>{status}</div>
                    </td>
                    </tr>
            
                )
            })}
         </tbody>
    </table>
    </div>
  )
}

export default Fetchdata;