import { useEffect, useState } from 'react';
import Pagenation from './Pagenation';
import "./style.css"
import Popup from './popup';

const Products=(props)=>{
    const [product,setProducts]=useState([])
    const [presentpage, setPresentpage]=useState(1)
    const [posts,setposts]=useState(4)
    const length=props.category.length
    useEffect(()=>{
    if(length===0){
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            
        
    }else{
        fetch(`https://fakestoreapi.com/products/category/${props.category}`)
        .then(res=>res.json())
        .then(json=>setProducts(json))
    }
    },[length])
    const lastpost=presentpage*posts
    const firstpost=lastpost-posts
    const currentpost=product.slice(firstpost,lastpost)
    const pagenumber=(num)=>{
        setPresentpage(num)
    }

    return (
        <>
            <div className='display-page'>
            {
            currentpost.map((data)=>{
                return (
                    <div className="my-div">
                        
                    <img src={data.image} alt=''/>
                    <Popup product={data}/>
                    </div>
                )
            })
            }
            <div className="page">
            <Pagenation posts={posts} totalposts={product.length} pagenate={pagenumber} />
            </div>
            </div>
        </>
    )   
}

export default Products