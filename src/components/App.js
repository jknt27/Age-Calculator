import React from "react";
import Pikaday from "pikaday";

function calculateAge(date) {
    console.log(date)
    const now = new Date();
    const diff = Math.abs(now - date );
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
    return age
}

var picker = new Pikaday({ 
  field: document.getElementById('birth_date') ,
  yearRange:[1900,2020],
  onSelect: function(date) {
  let age = calculateAge(date);
  document.getElementById('age').innerHTML = "age: "+age ;
  }                        
});

function Calendar() {
    return(
        <div>
            <form>
                <div> <label htmlFor="birth_date">Birth Date: </label>
                    <input type="date" id="birth_date" name="birth_date" defaultValue={Date()}/>
                </div>
                <CalcAge bday={document.getElementById("birth_date").value} />
            </form>
        </div>
    )
}

function CalcAge(bday) {
    // var bday = document.getElementById("birth_date").value;
    console.log('birth_date')
    if (document.getElementById("birth_date").value != null) {
        return (
            <div id="age" style={{marginTop: '2 em'}}> Age: 
                {/* <span r-calc={String(calculateAge('birth_date'))}></span> */}
                {calculateAge(bday)}
            </div>
        )
    }
}

export default function App() {
    
    return (
        <div className="container mt-5">
            <Calendar />
            {/* <CalcAge /> */}
        </div>
    )
}