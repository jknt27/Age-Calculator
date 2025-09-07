import React, { useEffect, useState } from 'react';
import moment from 'moment';
// Replace date below to update for future (YYYYMMDD).
let CUTOFFDATE = "20250831";


function CalculateCutoffAge(date, cutoff) {
  let bday = moment(date).utc();
  const cutoffDate = moment(cutoff, "YYYYMMDD").utc();
  const diff = Math.abs(cutoffDate - bday);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); 
  return age
}

function CalculateCurrentAge(date) {
  let bday = moment(date).utc();
  const todaysDate = moment().utc();
  const diff = Math.abs(todaysDate - bday);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); 
  return age;
}
  
function CalculateAge (bday, cutoff) {
    
  let age = CalculateCutoffAge(bday, cutoff);
  let currentAge = CalculateCurrentAge(bday);
  
  // Replace date below to remove confusion.
  const StudentAge = "Student is currently: " + currentAge + " yr";
  const CutoffAge = "Age by " + moment(cutoff).format('MMMM YYYY') + ": " + age + " yr";
    
  if (age <= 35 && age > 1) {
    if (age < 6) {
      return (
        <>
          <div className='d-flex pt-4'><p id='status' className="text-uppercase bg-danger fw-bold badge text-wrap">Em Underage</p></div>
          <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
          <p id="age" className="fw-bold">{CutoffAge}</p>
        </>
      )
    } 
    // AN
    if (age < 10) {
      if (age === 6) {
        return(
          <>
            <p id="AN" className="text-uppercase pt-4 text-success fw-bold">Au Nhi Cap 0</p>
            <p id='buyscarf' className="text-uppercase bg-danger fw-bold badge">Does Em need a scarf?</p>
            <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
            <p id="age" className="fw-bold">{CutoffAge}</p>
          </>
        )
      } else if (age === 7) {
        return(
          <>
            <p id="AN" className="text-uppercase pt-4 text-success fw-bold">Au Nhi Cap 1</p>
            <p id='buyscarf' className="text-uppercase bg-danger fw-bold badge">Does Em need a scarf?</p>
            <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
            <p id="age" className="fw-bold">{CutoffAge}</p>
          </>
        )
      } else if (age === 8) {
        return(
          <>
            <p id="AN" className="text-uppercase pt-4 text-success fw-bold">Au Nhi Cap 2</p>
            <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
            <p id="age" className="fw-bold">{CutoffAge}</p>
          </>
        )
      } else if (age === 9) {
        return(
          <>
            <p id="AN" className="text-uppercase pt-4 text-success fw-bold">Au Nhi Cap 3</p>
            <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
            <p id="age" className="fw-bold">{CutoffAge}</p>
          </>
        )
      } 
    }

    // TN
    if (age < 13) {
      if (age === 10) {
        return(
          <>
            <p id="TN" className="text-uppercase pt-4 text-primary fw-bold">Thieu Nhi Cap 1</p>
            <p id='buyscarf' className="text-uppercase bg-danger fw-bold badge">Does Em need a scarf?</p>
            <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
            <p id="age" className="fw-bold">{CutoffAge}</p>
          </>
        )
      } else if (age === 11) {
        return(
          <>
            <p id="TN" className="text-uppercase pt-4 text-primary fw-bold">Thieu Nhi Cap 2</p>
            <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
            <p id="age" className="fw-bold">{CutoffAge}</p>
          </>
        )
      } else if (age === 12) {
        return(
          <>
            <p id="TN" className="text-uppercase pt-4 text-primary fw-bold">Thieu Nhi Cap 3</p>
            <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
            <p id="age" className="fw-bold">{CutoffAge}</p>
          </>
        )
      } 
    }
    
    // NS 
    if (age < 16) {
      if (age === 13) {
        return(
          <>
            <p id="NS" className="text-uppercase pt-4 text-warning fw-bold">Nghia Si Cap 1</p>
            <p id='buyscarf' className="text-uppercase bg-danger fw-bold badge">Does Em need a scarf?</p>
            <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
            <p id="age" className="fw-bold">{CutoffAge}</p>
          </>
        )
      } else if (age === 14) {
        return(
          <>
            <p id="NS" className="text-uppercase pt-4 text-warning fw-bold">Nghia Si Cap 2</p>
            <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
            <p id="age" className="fw-bold">{CutoffAge}</p>
          </>
        )
      } else if (age === 15) {
        return(
          <>
            <p id="NS" className="text-uppercase pt-4 text-warning fw-bold">Nghia Si Cap 3</p>
            <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
            <p id="age" className="fw-bold">{CutoffAge}</p>
          </>
        )
      } 
    }

    // HS
    if (age < 18) {
      if (age === 16) {
        return(
          <>
            <p id="HS" className="text-uppercase pt-4 fw-bold">Hiep Si Cap 1</p>
            <p id='buyscarf' className="text-uppercase bg-danger fw-bold badge text-wrap">Does Em need a scarf? - Pre-pay, scarf given at Tinh Huan</p>
            <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
            <p id="age" className="fw-bold">{CutoffAge}</p>
          </>
        )
      } else if (age === 17) {
        return(
          <>
            <p id="HS" className="text-uppercase pt-4 fw-bold">Hiep Si Cap 2</p>
            <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
            <p id="age" className="fw-bold">{CutoffAge}</p>
          </>
        )
      } 
    } else {
      // HSTT
      return(
        <>
          <p id="HS" className="text-uppercase pt-4 text-danger fw-bold">Hiep Si Truong Thanh</p>
          <p id='buyscarf' className="text-uppercase bg-danger fw-bold badge">Needs a HSTT Scarf</p>
          <p id="currentage" className="pt-1 fw-bold">{StudentAge}</p>
          <p id="age" className="fw-bold">{CutoffAge}</p>
        </>
      )
    }
  }
}

export default function TNTT() {

  const[bday, setBday] = useState(moment().format('yyyy-MM-DD'));
  const[cutoff, setCutoff] = useState(moment(CUTOFFDATE).format('yyyy-MM-DD'));

  return (
    <div className="container mt-5 mx-3 w-auto tnttpage">
      <h1 className='pb-4'>Xaviê Cần Age Checker</h1>
      <form>
        <div> 
          <div>
            <h3 id="cutoff_date" className='pl-5'>Cut-Off Date</h3>
            <input type='date' id='cutoff_date' name='cutoff_date' defaultValue={cutoff} onChange={(cutoffday) => setCutoff(moment(cutoffday.target.value).format('yyyy-MM-DD'))} className='p-2'/>
          </div>
          <div className='pt-4'>
            <h3 id="birth_date" className='pl-5'>Birth Date</h3>
            <input type="date" id="birth_date" name="birth_date" defaultValue={bday} onChange={(bday) => setBday(moment(bday.target.value).format('yyyy-MM-DD'))} className='p-2'/>
          </div>
          {CalculateAge(bday, cutoff)}
        </div>
      </form>
    </div>
  )
}