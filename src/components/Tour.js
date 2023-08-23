import React,{useState} from 'react'

let Tour = ({arr,set})=>{
    let[info,Setinfo]=useState()
    function changedata(id){
        arr.forEach((element,index)=>{
            if(element.id==id){
                let temparr=[...arr]
                temparr.splice(index,1)
                set(temparr)
            }
        })
    }
    console.log(arr[0].info.split(' ').length)
    return (
        arr.map(element=>{
            return (
                <div className='single-tour'>
                    <div className='title'>{element.name}</div>
                    <div className='tour-info'>{element.info}</div>
                    <div className='tour-price'>{element.price}
                    <button></button>
                    </div>
                    <img src={element.image} alt='temp' ></img>
                    <button className='delete-btn-rec6d6T3q5EBIdCfD' onClick={()=>{changedata(element.id)}}>Delete Tour</button>
                </div>
            )
        })
    )
}
export default Tour