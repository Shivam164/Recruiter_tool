import React, { useEffect, useState } from 'react'
import { Row, RowHeader } from './Row'
import { getAllCandidates } from '../shared/api';

function Table() {

  const [allCandidates, setAllCandidates] = useState([]);
  const [error, setError] = useState(null);

  const fetchAndUpdateCandidatesData = async () => {
    try{
      const { candidates } = await getAllCandidates();
      console.log(candidates);
      setAllCandidates(candidates);
    }catch(err){
      setError(err);
    }
  }

  useEffect(() => {
    fetchAndUpdateCandidatesData();
  },[]);

  return (
    <div>
        <RowHeader/>
        {allCandidates?.map(singleCandidate => (
          <Row
            Name = {singleCandidate.Name}
            Email = {singleCandidate.Email}
            Phone = {singleCandidate.Phone}
            ReactJS = {singleCandidate.ReactJS}
            NodeJS = {singleCandidate.NodeJS}
            Score = {singleCandidate.Score}
            Current_Status = {singleCandidate.Current_Status}
            Expected_Salary = {singleCandidate.Expected_Salary}
            UpdateTable = {fetchAndUpdateCandidatesData}
            ApplicantID={singleCandidate.ApplicantID}
          />
        ))}
    </div>
  )
}

export default Table