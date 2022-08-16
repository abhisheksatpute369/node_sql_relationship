import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/company.css"

const Company = () => {

    const [company, setcompany] = useState([]);
    const Navigate = useNavigate();

      // for getting all company data 
      const getdata = async () =>{
        var result = await fetch("http://localhost:3030/company");
        var res = await result.json();
        setcompany(res);
        
    }

    const handleview = (id)=> {
        console.log(id);
        Navigate(`company/${id}`)
    }

    const bikelist = (id) => {
        console.log(id);
        Navigate(`bikes/${id}`)
    }

    useEffect(()=>{
        getdata();
    },[]);

    return (
        <div>
            <table>
                <thead id="heading">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Origin</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    company.map((ele)=>{
                        return(
                            <tr key={ele?.comp_id} id="rows">
                                <td>{ele?.comp_id}</td>
                                <td>{ele?.comp_name}</td>
                                <td>{ele?.email}</td>
                                <td>{ele?.origin}</td>
                                <td onClick={()=>handleview(ele.comp_id)} style={{cursor:'pointer'}}>View</td>
                                <td onClick={()=>bikelist(ele.comp_id)} style={{cursor:'pointer'}}>Bikes</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default Company;