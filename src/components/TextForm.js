import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick = () =>{
        // console.log("Upper case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleTiClick = () =>{
        // console.log("Upper case was clicked");
        let newText = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        setText(newText);
        props.showAlert("Converted to Title Case","success");
    }
    

    const handleCopyClick = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copyed","success");
    }

    const handleClClick = () =>{
        setText("");
        props.showAlert("Text cleared","success");
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the stase   
    // setText = "new text"; // Correct way to change the stase   
  return (
    <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver to upper case</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Conver to lower case</button>       
            <button className="btn btn-primary mx-1 my-1" onClick={handleTiClick}>Conver to title case</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy text to Clipboard</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear Text</button>

        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p> {text.length >0?text.trim().split(/\s+/).length:0} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>
    </>
        
  )
}
