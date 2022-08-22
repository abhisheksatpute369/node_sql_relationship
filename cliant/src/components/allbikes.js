import React, { useEffect, useState } from 'react';

const Allbikes = () => {

    const [bikes, setbikes] = useState([]);
    const [page, setpage] = useState(1);

     // for getting all bikes with pagination 
     const getvehicle = async ()=>{
        const data = await fetch(`http://localhost:3030/allvehicle?page=${page}`);
        const result = await (data.json());

        setbikes(result.rows);
    }

    const handlepage = (val) => {
        if(page === 1 && val === -1){
            setpage(page);
        }
        else if(bikes.length === 0 && val === 1){
            setpage(page - 1);
        }
        else{
            setpage(page + val);
        }
        
    }

    useEffect(()=>{
        getvehicle();
    },[page])

    return (
        <div>
            <table>
                <thead id="heading">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Milage</th>
                        <th>Launchyear</th>
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
            <div id="bikebuttons">
                <button onClick= {()=>handlepage(-1)} id="pagechange">Pre</button>
                <button onClick= {()=>handlepage(1)} id="pagechange">Next</button>
            </div>
        </div>
    );
};

export default Allbikes;