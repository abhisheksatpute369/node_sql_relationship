import React, { useEffect, useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import "../styles/company.css"

const Company = () => {

    const [company, setcompany] = useState([]);
    const [name, setname] = useState("");
    const Navigate = useNavigate();

      // for getting all company data 
      const getdata = async () =>{
        var result = await fetch(`http://localhost:3030/company`);
        var res = await result.json();
        setcompany(res);
        
    }

    //for getting ascending data if selected ASC filter
    const getascdata = async() => {
        var result = await fetch(`http://localhost:3030/company?order=ASC`);
        var res = await result.json();
        setcompany(res);
    }

    // for getting descending data if selected DESC filter 
    const getdescdata = async() => {
        var result = await fetch(`http://localhost:3030/company?order=DESC`);
        var res = await result.json();
        setcompany(res);
    }

    const handleview = (id)=> {
        Navigate(`company/${id}`)
    }

    const bikelist = (id) => {
        Navigate(`bikes/${id}`)
    }

    // function for handle filter functionality 
    const handlefilter = (e) => {
       const order = e.target.value;
       if(order === "ASC"){
            getascdata();
       }
       else if(order === "DESC"){
            getdescdata();
       }
       else{
            getdata();
       }

    }

    // function for handle comapny name input 
    const handlechange = (e) =>{
        const name = e.target.value;
        setname(name);
    }

    const handlecompanysearch = async()=>{
        if(name === "all"){
            var result = await fetch(`http://localhost:3030/company`);
            var res = await result.json();
            setcompany(res);
        }
        else{
            var result = await fetch(`http://localhost:3030/companybyname?name=${name}`);
            var res = await result.json();
            if(res[0] == null){
                alert("company not found")
            }else{
                setcompany(res);
            }
        }
                
    }

    useEffect(()=>{
        getdata();
    },[]);

    // useEffect(()=>{
    //     getfiltereddata();
    // },[order]);

    return (
        <div>
            <div id="companynav">
                <div id="testing">
                <input id="compname" placeholder='Search by Company name' onChange={handlechange}></input>
                <button id="searchbtn" onClick={handlecompanysearch}>Search</button>
                </div>
                <select id = "selectfilter" onChange={handlefilter}>
                    <option value="">--Filter--</option>
                    <option value="ASC">Name A-Z</option>
                    <option value ="DESC">Name Z-A</option>
                </select>
            </div>
            
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
                            <tr key={ele?.comp_id || " "} id="rows">
                                <td>{ele?.comp_id || " "}</td>
                                <td>{ele?.comp_name || " "}</td>
                                <td>{ele?.email || " "}</td>
                                <td>{ele?.origin || " "}</td>
                                <td onClick={()=>handleview(ele?.comp_id)} style={{cursor:'pointer'}}>View</td>
                                <td onClick={()=>bikelist(ele?.comp_id)} style={{cursor:'pointer'}}>Bikes</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <Link to="/allbikes">
            <button id="bkbutton">All Bikes</button>
            </Link>
        </div>
    );
};

export default Company;