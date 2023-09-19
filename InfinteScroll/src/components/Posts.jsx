import React, { useEffect,useRef,useState,useCallback} from 'react'
import SinglePost from './SinglePost';
import '../App.css'
import InfinteScroll from '../hooks/InfinteScroll';
const LIMIT =40;
const Posts = () => {
const[posts,setposts] =useState([])
const[loading,setloading] = useState(true)
// const loader = useRef(null);
//const[page,setpage] =useState(1)
//  useEffect(()=>{
//  fetchposts();
//  },[page])
//  const handleIntersect =(enteries)=>{
//   if(loading) return;
//   if(enteries[0].isIntersecting){
    
//     setpage((page)=>page+1)
   
//   }
//  }
//  useEffect(() => {
//   if (loader.current) {
//     Observer.observe(loader.current);
//   }
//   return () => {
//     if (loader.current) {
//       Observer.unobserve(loader.current);
//     }
//   };
// }, [loader.current]);
//   const Observer = new IntersectionObserver(handleIntersect,{
//     root:null,
//     threshold:1
//    })
//this is we are doing to make more customisable and we are using ref basically when this is the last element of the current list we will attach ref to this
const renderitem =({title},key,ref)=>{
  return (<div ref={ref} key={key}>{title}</div>)
} 
const fetchposts = async (page)=>{
  
  setloading(true)
  let url = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  let res =await fetch(url);
  res = await res.json();
  setposts([...posts,...res])
  setloading(false)
  
}

console.log(posts)
  return (
    <InfinteScroll fetchdata={fetchposts} renderitem={renderitem} datalist={posts} />
  //   {/* <div className='posts'>
    
  //   <div >
  //       {posts.length>0&&posts.map((post,index)=>{
  //           return <SinglePost post={post} key={post.id}/>
  //       })}
  //   </div>
  //   {/* <div ref={loader}>
  //   {loading&&<div className='loading'></div>}
  //   </div> */}
  
    
  // </div> */}
    
  )
}

export default Posts