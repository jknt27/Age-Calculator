import React, { useEffect, useState } from 'react';


function CalculateCutoffRegOne(date) {
  let bday = new Date(date)
  // Replace date below to update for future (YYYY/MM/DD).
  // Cutoff for first registration day
  const cutoffDate = new Date("2023/08/31");
  const diff = Math.abs(cutoffDate - bday);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); 
  return age;
}

function CalculateCutoffFirstDay(date) {
    let bday = new Date(date)
    // Replace date below to update for future (YYYY/MM/DD).
    // Cutoff for first registration day
    const cutoffDate = new Date("2023/09/17");
    const diff = Math.abs(cutoffDate - bday);
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); 
    return age;
  }

function CalculateCurrentAge(date) {
  let bday = new Date(date)
  const todaysDate = new Date();
  const diff = Math.abs(todaysDate - bday);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); 
  return age
}

function CalculateDifference(date) {
    const bday = new Date(date);
    const birthmonth = bday.getMonth() + 1;
    const day = bday.getDate(); 
    const newbday = new Date(`2023/${birthmonth}/${day}`)
    // Replace date below to update for future (YYYY/MM/DD).
    // Cutoff for first registration day
    const adjustedbday = new Date(newbday);
    const cutoffDate = new Date("2023/09/17");
    const diff = Math.abs(adjustedbday - cutoffDate);
    return (diff / (1000 * 60 * 60 * 24)) + 1;
}
  
function CalculateAge (bday) {
    
  let cutoffRegOne = CalculateCutoffRegOne(bday);
  let cutoffFirstDay = CalculateCutoffFirstDay(bday);
  let currentAge = CalculateCurrentAge(bday);
  
  // Replace date below to remove confusion.
  const StudentAge = "Student is currently: " + currentAge + " yr";
  const CutoffAge = "Age by August 31, 2023: " + cutoffRegOne + " yr";
  const CutoffAgeFirstDay = "Age by September 17, 2023: " + cutoffFirstDay + " yr";
    
    if (cutoffRegOne <= 35 && cutoffRegOne > 1) {
        if (cutoffRegOne > 6) {
            return(
                <>
                    <div className='d-flex pt-4'>
                        <p id="eligible" className="text-uppercase fw-bold">Age Check: </p>
                        <p id='status' className="text-uppercase bg-success fw-bold badge text-wrap mx-2">Passed</p>
                    </div>
                    <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
                    <p id="age" className="fw-bold">{CutoffAge}</p>
                    <p id="cutoffage" className="fw-bold">{CutoffAgeFirstDay}</p>
                </>
            )
        } else if (cutoffRegOne === 6) {
            let difference = CalculateDifference(bday)
            return(
                <>
                    <div className='d-flex pt-4'>
                        <p id="eligible" className="text-uppercase fw-bold">Age Check: </p>
                        <p id='status' className="text-uppercase bg-warning fw-bold badge text-wrap mx-2">Check Age</p>
                    </div>
                    <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
                    <p id="age" className="fw-bold">{CutoffAge}</p>
                    <p id="cutoffage" className="fw-bold">{CutoffAgeFirstDay}</p>
                    <p id='diffday' className='text-danger fw-bold'>Difference (from start day): {difference}</p>
                </> 
            )
        } else {
            return(
                <>
                    <div className='d-flex pt-4'>
                        <p id="eligible" className="text-uppercase fw-bold">Age Check: </p>
                        <p id='status' className="text-uppercase bg-danger fw-bold badge text-wrap mx-2">Failed</p>
                    </div>
                    <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
                    <p id="age" className="fw-bold">{CutoffAge}</p>
                    <p id="cutoffage" className="fw-bold">{CutoffAgeFirstDay}</p>
                </>
            )
        }
    }
}

export default function FC() {

  const[bday, setBday] = useState(new Date());

  return (
    <div className="container mt-5 mx-3 w-auto tnttpage">
      <h1 className='pb-4'>FC Age Checker</h1>
      <form>
        <div> 
          <h3 id="birth_date" className='pl-5'>Birth Date</h3>
          <input type="date" id="birth_date" name="birth_date" defaultValue={new Date().toISOString().split('T')[0]} onChange={(bday) => setBday(new Date(bday.target.value))} className='p-2'/>
          {CalculateAge(bday)}
        </div>
      </form>
    </div>
  )
}