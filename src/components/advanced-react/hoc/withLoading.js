import React, { useEffect, useState } from "react";

function withLoading(Component) {
  return (props) => {
    const [dog, setDog] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch("https://api.publicapis.org/entries");
        const data = await response.json();
        console.log(data);
        setDog(data);
      }
      fetchData();
    }, []);
    if (!dog || dog.length === 0) {
      return <div>Loading...</div>;
    }
    return <Component data={dog} {...props}></Component>;
  };
}
export default withLoading;
