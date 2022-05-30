import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import "./Continents.css";
import { useNavigate } from "react-router-dom";

const CONTINENTS_QUERY = gql`
  {
    continents {
      name
      code
    }
  }
`;


function Continents() {
  const  {data}  = useQuery(CONTINENTS_QUERY);
  const [val, setVal] = useState("Africa");

  //const result = Object.keys(data);
  
  const [item, setItem] = useState([])
  

  useEffect(() =>{
    setTimeout(() => {
      setItem(data.continents)
      
    },1)
  })
  
  console.log(item);
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/country/${val}`);
  };

  

  console.log(val);

  return (
    <div className="container">
      <h4 style={{marginTop: "2rem"}}>Select the Continent!</h4>
      <form onSubmit={onSubmit}>
        <select placeholder="select the continent" value={val} onChange={(e) => setVal(e.target.value)}>
          {
            item.map((i: any) => {
              return(
                <option >{i.name  }</option>
              )
            })
          }
          
          
        </select>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Continents;
