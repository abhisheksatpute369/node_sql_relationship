import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Bikes = () => {

    const [bikes, setbikes] = useState([]);
    const {id} = useParams()

    const getsingle = async ()=>{
        var data = await fetch(`http://localhost:3030/vehicle/${id}`);
        var result = await (data.json());
        setbikes(result);
    }

    const getalldealers = () => {

    }

    useEffect(()=>{
        getsingle();
    },[])

    return (
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
                                <td onClick={()=>getalldealers(ele.v_id)} style={{cursor:'pointer'}}>Dealers</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default Bikes;