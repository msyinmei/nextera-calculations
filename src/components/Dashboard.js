import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';

const DashboardContainer = styled.div({ 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flexstart',
});

const DashboardRow = styled.div({
    display: 'flex',
    flexDirection: 'row',
})

const RowItem = styled.div({
    display: 'flex',
    padding: '32px',
    margin: '10px',
    backgroundColor: '#CCFFFF',
    borderRadius: '4px',
    fontSize: '12px'
})

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
        <DashboardContainer>
          <h1>Dashboard</h1>
            {items.map(item => (
                <DashboardRow  key={item.id}>
                  <RowItem> "time started" {item.started_at} </RowItem>
                  <RowItem> "time cancelled" {item.cancelled_at} </RowItem>
                </DashboardRow>
            ))};
        </DashboardContainer>
      );
    }
};

export default Dashboard;