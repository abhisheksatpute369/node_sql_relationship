// import React, { useEffect , useState} from 'react';
// import { useParams} from 'react-router-dom';

// const Dealer = () => {

//     const [dealer, setdealer] = useState([]);
//     const {id} = useParams()

//       // for getting all dealers data 
//       const getdata = async () =>{
//         // var result = await fetch(`http://localhost:3030/dealer/:${id}`);
//         // var res = await (result.json());
//         // console.log(res)
//         // setdealer(res);
        
        
//     }

//     useEffect(() => {
//         getdata();
//     },[])

//     return (
//         <div>
//             <table>
//                 <thead id="heading">
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Phone</th>
//                         <th>Email</th>
//                         <th>Address</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {
//                     dealer.map((ele)=>{
//                         return(
//                             <tr key={ele?.dealers?.d_id} id="rows">
//                                 <td>{ele?.d_id}</td>
//                                 <td>{ele?.d_name}</td>
//                                 <td>{ele?.d_phone}</td>
//                                 <td>{ele?.email}</td>
//                                 <td>{ele?.address}</td>
//                                 {/* <td onClick={()=>handleview(ele.d_id)} style={{cursor:'pointer'}}>View</td>
//                                 <td onClick={()=>bikelist(ele.d_id)} style={{cursor:'pointer'}}>Bikes</td> */}
//                             </tr>
//                         )
//                     })
//                 }
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Dealer;