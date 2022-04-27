import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState("");
    const [textLength, setTextLength] = useState(0);
    
    const handleOnChange = (event) =>{
        /* console.log("On chane event has triggered"); */
        setText(event.target.value);
        
    }

    
    const UpperCaseClicked = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case..!!","success");
    }

    const LowerCaseClicked = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case..!!","success");

    }

    const SentenceCase = () => {
        let akshay = new Array();

        let newText = text.toLowerCase();

        let newText1 = newText.split(" ");
        console.log(newText1);
        
        console.log(newText1);
        newText1.forEach(e => {
            let toggleCase = e.charAt(0).toUpperCase() + e.slice(1);
            akshay.push(toggleCase);

        });

        setText( akshay.join(" "));
        props.showAlert("Converted To Sentence Case..!!","success");

    }

    const SpacesToUnderscore = () => {
        let newText = text.split(" ");
        let newText1 = newText.join("_");
        setText(newText1);
        props.showAlert("Spaces converted to Underscore..!!","success");

    }

    const UnderscoreToSpaces = () => {
        let newText = text.split("_");
        let newText1 = newText.join(" ")
        setText(newText1);
        props.showAlert("Underscore converted to Spaces..!!","success");

    }

    const CopyAll = () => {
        
        
        navigator.clipboard.writeText(text);
     
        props.showAlert("Copyied All..!!","success");
       
    }


    const RemoveExtraSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("Removed the extra spaces..!!","success");

    }

    let slash = () =>{

        let x = text.split(" ");
        let y;
        x.forEach(element => {
            if(element.includes("\n")){
              y= true;
            }
        });


        let a;
        let b =  text.split(" ").filter((element)=>{return element.length!=0}).length;
        if (text.includes("_")){
           a = true;
        }else if(b == 0){
            a = true;
        }else if(y == true){
            a = true;
        }else{
            a = false;
        }
        
        return a;
    }

    let length = () =>{
        let x = text.split(" ");
        let y;
        x.forEach(element => {
            if(element.includes("\n")){
              y= true;
            }
        });

      return y;
    }

    let totalWords = () =>{ 
        let b =  text.split(" ").length;

        return b;


    }



  return (
      <>
      <div className="mb-3 container my-5">
        <h1 className={` text-${props.mode=="light"?"dark":"light"}`}>{props.heading}</h1>
      <textarea className="form-control" id="MyBox" 
      style={{backgroundColor:props.mode=="light"?"white":"#675bb5", color:props.mode=="light"?"black":"white"}}
      value={text} 
      onChange={handleOnChange} rows="8"></textarea>

      <button disabled={text.length===0} className="btn btn-primary mt-4" onClick={UpperCaseClicked}>Upper Case</button>
      <button disabled={text.length===0} className="btn btn-primary mt-4 mx-2" onClick={LowerCaseClicked}>Lower Case</button>
      <button disabled={slash() === true  } className="btn btn-primary mt-4 mx-2" onClick={SentenceCase}>Sentence Case</button>
      <button disabled={length() === true || text.length===0} className="btn btn-primary mt-4 mx-2" onClick={SpacesToUnderscore}>Spaces To Underscore</button>
      <button disabled={length() === true || text.length===0} className="btn btn-primary mt-4 mx-2" onClick={UnderscoreToSpaces}>UnderscoreToSpaces</button>
      <button disabled={text.length===0} className="btn btn-primary mt-4 mx-2" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mt-4 mx-2" onClick={CopyAll}>Copy All</button>
      

    </div>
    <div  className={`mb-3 container text-${props.mode=="light"?"dark":"light"}`}>
        <h1>Text Summary</h1>
        <p>{totalWords()} words and {text.length} characters</p>
        <p>{totalWords() * 0.008} Minutes Required to Read</p>
    </div>
      </>
    
  )
}
