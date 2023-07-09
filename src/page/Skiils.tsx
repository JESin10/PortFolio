import React, { useEffect, useState } from "react";

export default function Skiils() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/Skills")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);

  console.log(lists);
  return <div>Skiils</div>;
}
