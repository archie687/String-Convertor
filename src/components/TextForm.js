import React ,{useState}from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("On Change ");
        setText(event.target.value)
    }
    const [text, setText] = useState(' ');
  return ( 
    <>
    <div className="container"> 
        <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
</div> 
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
    </div> 

    <div className="container my-3">
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words , {text.length} characters</p>
        <p> {0.008 * text.split(" ").length}Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
