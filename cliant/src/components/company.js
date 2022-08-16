import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/company.css"

const Company = () => {

    const [company, setcompany] = useState([]);
    const Navigate = useNavigate();

      // for getting all company data 
      const getdata = async () =>{
        var result = await fetch("http://localhost:3030/");
        var res = await result.json();
        setcompany([...res]);
        console.log(company);
    }

    const handleview = (id)=> {
        Navigate(`/${id}`)
        console.log("view");
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
                        <th>Action</th>
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
                                <td onClick={()=>handleview(ele?.id)} style={{cursor:'pointer'}}>View</td>
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