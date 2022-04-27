import React , {useState}from 'react'


export default function About(props) {

    let myStyle = {
        backgroundColor: props.mode == "light"? "white":"gray",
        color:props.mode=="light"?"black":"white"
    }



  return (
    <>
    
    <div className="container my-5 ">
            <h1 className="text-center" 
            style={myStyle}>About us</h1>    
            <div className="accordion" id="accordionExample">

        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne" style={myStyle} />
            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Analyze Your text
            </button>
            <div  id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div style={myStyle} className="accordion-body">
                <strong>Textutils gives you a way to analyze your text quickly and efficiently.
                Be it word count, character count </strong>
             </div>
            </div>
        </div>

        <div  className="accordion-item">
            <h2 style={myStyle} className="accordion-header" id="headingTwo">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div style={myStyle} className="accordion-body">
                <strong>Textutils is a free character counter tool that provides instant character count 
                    & word count statistics for a given text. 
                    Textutils reports the number of words and characters.
                    Thus it is suitable for writing text with word/ character limit.</strong> 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 style={myStyle} className="accordion-header" id="headingThree">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div style={myStyle} className="accordion-body">
                <strong>This word counter software works in any web browsers such as Chrome,
                     Firefox, Internet Explorer, Safari, Opera.
                      It suits to count characters in facebook, blog, books, excel document,
                      pdf document, essays, etc.</strong> 
            </div>
            </div>
        </div>
        </div>

    </div>
    
    
    </>
  )
}
