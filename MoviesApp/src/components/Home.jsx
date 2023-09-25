import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getproducts } from '../store/ProductsSlice'
import SingleProduct from './SingleProduct'
import LinearProgress from '@mui/material/LinearProgress';
const Home = () => {
    let usersDB= [ {userid : "abc@media.com",password:"abc123","username":"tom"}, {userid : "def@media.com",password:"def123","username":"dick"},
    {userid : "abcde@media.com",password:"abc123","username":"tomy"}
]
    
    const [searchinput,setsearchinput] =useState(""); 
    const[showSearchResult,setSearchResult] = useState(true);
    const[selectedUsername,setSelectedUsername] =useState("");
     const searchresult =()=>{
        if(searchinput==="") return;
        let searchitems = usersDB.filter((user)=>user.userid.toLowerCase().includes(searchinput.toLowerCase()))
        return searchitems
     }
     
    const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getproducts())
},[])
const handleclick =(username)=>{
 setSelectedUsername(username)
setSearchResult(false)
}

const{Products,loading} =useSelector((state)=>state.Products)

  return (

    <div className='p-[2.4rem] '>
         
        <div className='relative'> 
        {!showSearchResult&&<div className='md:w-[50%] w-[100%] min-h-[200px] bg-[#F4E869] border-2 border-l-[blue] rounded-md gap-2 flex justify-center items-center text-4xl'>
            <p className='bg-[green] border-2 rounded-md px-[40px] py-4 text-white cursor-pointer' >{selectedUsername.toUpperCase()}</p>
            <hr className='h-[40px] border-2 '></hr>
        </div>
}
        {showSearchResult&&<textarea className=' md:w-[50%] w-[100%] max-h-[600px] border-2 border-black p-[1rem] text-2xl' rows="10" value={searchinput} onChange={(e)=>setsearchinput(e.target.value)}/>}
         {showSearchResult&&searchresult()&&<div className='flex flex-col text-3xl absolute w-[20%] border-2 cursor-pointer shadow-white px-2 rounded-md top-[50%] left-[10%]'>
         {searchresult()&&searchresult().map((item)=>{
            return <span onClick={()=>handleclick(item.username)}>{item.username}</span>
         })
        }
         </div>
}
         </div>
        
        <div className='grid md:grid-cols-4 gap-10  grid-cols-1 mb-[50px]'>
         {Products.map((product)=>{
            return <SingleProduct product ={product} key={product.id}/>
         })}
        </div>
    </div>
  )
}

export default Home