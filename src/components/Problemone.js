import React from 'react';
import { useState } from 'react';

const Problemone = () => {
  const[data, setData]= useState([
    {id:1, username:"Atharva"},
    {id:2, username:"shriram"},
    {id:3, username:"Deshapnde"},
    {id:4, username:"Anjali"},
    {id:5, username:"Atha"},
    {id:6, username:"Athu"}
    ]);

    const dropItem = (id)=>{
      const newData = data.filter(data=> data.id!==id)
      setData(newData)
    }
  return (
          <>
          <div className='prob'>
            {data.map(data=> <div>{data.id}{data.username}<button onClick={()=> dropItem(data.id)}>Drop</button></div>)}
            </div>
          </>
    
  )
}

export default Problemone


// const Problemone = () => {
//   const [data, setData] = useState([
//     {id:1, username:"Atharva"},
//     {id:2, username:"shriram"},
//     {id:3, username:"Deshapnde"},
//    {id:4, username:"Anjali"},
//    {id:5, username:"Atha"},
//     {id:6, username:"Athu"}
//     ]);

//       const removename = (id) =>{
//         const newData = data.filter(data=> id!==data.id);
//         setData(newData)
//       }


//      return (
//             <>
//               <div className='prob'>
//               {data.map(data=><div>{data.id}{data.username}<button onClick={()=>removename(data.id)}>Drop</button></div>)}
              
              
//               </div>
//             </>
  
//   )
// }

// export default Problemone 