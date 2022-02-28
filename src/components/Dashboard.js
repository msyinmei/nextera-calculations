import React, { useState, useEffect } from "react";

const Dashboard = function () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://127.0.0.1:5103/calculations")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Dashboard">
            <div>
            <h1>Dashboard</h1>
            {items.map(item => (
                <div key={item.id}>
                    <div> "started" {item.started_at} </div>
                    <div> "cancelled" {item.cancelled_at} </div>
                </div>
            ))}
            </div>
        </div>
      );
    }
};

export default Dashboard;