import React, {useState} from "react";




export default  function Textforms(props){
    const handleonchange=(event)=>{
        console.log('changed')
        setText(event.target.value)

    }

    const handleonclick=()=>{
        console.log('clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleloclick=()=>{
        console.log('clicked');
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clear=()=>{
        console.log('clicked');
        setText(" ");
    }
    const copy=()=>{
        console.log('clicked');
        var text=document.getElementById('box');
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const extraspaces=()=>{
        console.log('clicked');
        
       const extra= text.split(/[ ]+/)
        setText(extra.join(" "))
    }


    const clickforpreview =()=>{
         setPreview(text);
        
    }

    const [text, setText]=useState('enter your text')
    const [preview, setPreview]=useState('')
    
   
    return(
        <>
            <div className="container" >
          <textarea className="form-control" placeholder="Leave a comment here" id="box" value ={text} onChange={handleonchange}  rows={10} cols={20}   style={{backgroundColor:props.mode==='=dark' ? 'gray':'gray',color:props.mode==='=dark' ? 'white':'white'}}></textarea>
        </div> 
        <div className={`container my-1 `}>
          <button className="btn btn-primary mx-2"onClick={handleonclick}>UPPERCASE</button>
           
          <button className="btn btn-primary mx-2"onClick={handleloclick}>lowercase</button>
          <button className="btn btn-primary mx-2"onClick={clear}>clear</button>
          <button className="btn btn-primary mx-2"onClick={copy}>copy</button>
          <button className="btn btn-primary mx-2"onClick={extraspaces}>extra</button>
       </div>
       <div 
           className={`container  text-${props.mode==='light' ? 'dark':'black'}`}>
          

            <h4>Your Text Summary</h4>
        </div>
       <div className="container"> 
        <p>{text.split(" ").length} words,
            and {text.length}charecters
        </p >
         <button onClick={clickforpreview}>preview</button>
         <p>{preview}</p>

       </div>
       </>

    );
}