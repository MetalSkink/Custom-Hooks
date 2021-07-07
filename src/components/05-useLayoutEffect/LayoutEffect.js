import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  //   const { author, quote } = !!data && data[0];
  const { quote } = !loading && data[0];

  const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
      console.table(pTag.current.getBoundingClientRect()); 
      setBoxSize(pTag.current.getBoundingClientRect()); 

  }, [quote])
  //console.log(loading);
//   console.log(author, quote);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr></hr>

      
          <blockquote className="blockquote text-end">
            <p ref={pTag}>{quote}</p>
          </blockquote>

          <pre>
            { JSON.stringify(boxSize, null, 3)}
          </pre>

          <button className="btn btn-outline-primary" onClick={()=>increment()}>
            Siguiente quote
          </button>
    </div>
  );
};
