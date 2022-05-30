import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import "./Countries.css";
import { useParams } from "react-router-dom";

const COUNTRIES_QUERY = gql`
  {
    countries {
      name
      currency
      capital
      languages {
        name
        native
      }
    }
  }
`;

function Countries() {
  const { data } = useQuery(COUNTRIES_QUERY);
  const param = useParams();
  const { val: Value } = param;

  const [item, setItem] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setItem(data.countries);
    }, 1);
  });
  console.log(item);
  return (
    <>
      <div>
        <a href="/">Back to previous page</a>
      </div>
      <div className="continent">
        <h3>Continnets - {Value}</h3>
        
      </div>
      <div className="countries-name">
        <ul className="head">
          <li>Name</li>
          <li>Currency</li>
          <li>Capital</li>
          <li>Languages</li>
        </ul>
      </div>
      <div className="list">
        {item.map((i: any) => {
          return (
            <ul className="item">
              <li>{i.name}</li>
              <li>{i.currency}</li>
              <li>{i.capital}</li>
              <li>{i.languages.map((a:any) => {
                return(
                  <li>{a.name},{a.native}</li>
                )
              })}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default Countries;
