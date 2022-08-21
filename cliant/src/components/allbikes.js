import React, { useEffect, useState } from 'react';

const Allbikes = () => {

    const [bikes, setbikes] = useState([]);
     // for getting all bikes with pagination 
     const getvehicle = async ()=>{
        const data = await fetch(`http://localhost:3030/allvehicle?page=1`);
        const result = await (data.json());
        setbikes(result.rows);
        console.log(result.rows);
    }

    useEffect(()=>{
        getvehicle();
    },[])

    return (
        <div>
            <table>
                <thead id="heading">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Origin</th>
                    </tr>
                </thead>
                <tbody>
                {
                    bikes.map((ele)=>{
                        return(
                            <tr key={ele?.v_id || " "} id="rows">
                                <td>{ele?.v_id || " "}</td>
                                <td>{ele?.v_name || " "}</td>
                                <td>{ele?.v_milage || " "}</td>
                                <td>{ele?.v_launchyear || " "}</td>
                                {/* <td onClick={()=>handleview(ele?.comp_id)} style={{cursor:'pointer'}}>View</td>
                                <td onClick={()=>bikelist(ele?.comp_id)} style={{cursor:'pointer'}}>Bikes</td> */}
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default Allbikes;