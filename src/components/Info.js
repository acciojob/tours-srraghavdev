import React,{useState} from 'react'

let Info = (props)=>{
    let [string,Setstring]=useState(props.a)
    console.log(string.length)
    function changedata(){
      if(string.length==200){
         Setstring(props.a)
      }
      else{
       
        Setstring(props.a.substring(0,200))
      }
    }
   
    return (
       <div>
        <div id='tour-item-para-rec6d6T3q5EBIdCfD'>{string}</div>
     <button onClick={changedata}>{string.length==200 ? 'Show More' : 'Show Less'}</button>
       </div>
    )
}
export default Info