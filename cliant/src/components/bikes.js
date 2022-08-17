import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Bikes = () => {

    const [bikes, setbikes] = useState([]);
    const [dealers, setdealers] =useState([]);
    const [show, setshow] = useState("");
    const {id} = useParams()

    const getsingle = async ()=>{
        const data = await fetch(`http://localhost:3030/vehicle/${id}`);
        const result = await (data.json());
        setbikes(result);
    }

    const getalldealers = async (id, name) => {
        // Navigate(`/dealer/${id}`)
        document.getElementById("dealerstable").style.visibility = "visible";
        var data = await fetch(`http://localhost:3030/dealer/${id}`);
        var result = await (data.json());
        setdealers(result[0].dealers);
        setshow(name);
    }

    useEffect(()=>{
        getsingle();
    },[])

    return (
        <div>
         {/* div for showing vehicle list  */}
        <div>
            <table>
                <thead id="heading">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Milage</th>
                        <th>Launchyear</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    bikes.map((ele)=>{
                        return(
                            <tr key={ele?.v_id} id="rows">
                                <td>{ele?.v_id}</td>
                                <td>{ele?.v_name}</td>
                                <td>{ele?.v_milage}</td>
                                <td>{ele?.v_launchyear}</td>
                                <td onClick={()=>getalldealers(ele.v_id, ele?.v_name)} style={{cursor:'pointer'}}>Dealers</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>

         {/* list for showing dealers list for that vehicle  */}
        <div id="dealerstable">
            <h4 id="vtitle">Dealers for {show}</h4>
            <table>
                <thead id="heading">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                {
                    dealers.map((ele)=>{
                        return(
                            <tr key={ele?.d_id} id="rows">
                                <td>{ele?.d_id}</td>
                                <td>{ele?.d_name}</td>
                                <td>{ele?.d_phone}</td>
                                <td>{ele?.d_email}</td>
                                <td>{ele?.d_address}</td>
                                {/* <td onClick={()=>getalldealers(ele.v_id)} style={{cursor:'pointer'}}>Dealers</td> */}
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Bikes;