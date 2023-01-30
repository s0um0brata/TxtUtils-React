import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState("");

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleUpChange=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case.","success")
    }
    const handleLoChange=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case.","success")
    }
    const handleClearChange=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text is Cleared.","success")
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success")
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces are Removed.","success")
    }
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
        <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleUpChange}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleLoChange}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleClearChange}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2">
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} Characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text here."}</p>
        </div>
    </div>
    </>
  )
}
