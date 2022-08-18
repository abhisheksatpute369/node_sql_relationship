import React,{useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import "../styles/companydetails.css"

const Companydetails = () => {

    const [details, setdetails] = useState([]);
    const {id} = useParams()

    const getsingle = async ()=>{
        var data = await fetch(`http://localhost:3030/company/${id}`);
        var result = await (data.json());
        setdetails(result);
    }

    useEffect(()=>{
        getsingle();
    },[])
    return (
        <div>
            <div id="main">
            <div id="vehiclename">
                <p id="">{details?.comp_name}</p>
            </div>
            <div id="vehicleinfo">
                <div id="title">
                    <p className='titles'>CEO</p>
                    <p className='titles'>Manager</p>
                    <p className='titles'>headquarter</p>
                    <p className='titles'>Workers</p>
                </div>
                <div id="info">
                    <p className='titles'>{details?.compdetail?.ceo_name || "name"}</p>
                    <p className='titles'>{details?.compdetail?.manager || "name"}</p>
                    <p className='titles'>{details?.compdetail?.headquarter || "city name"}</p>
                    <p className='titles'>{details?.compdetail?.employee_num || "number"}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Companydetails;