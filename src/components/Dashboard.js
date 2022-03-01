import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';

const DashboardContainer = styled.div({ 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flexstart',
  backgroundColor: '#DCDCDC'
});

const DashboardRow = styled.div({
  display: 'grid',
  border: 'black',
  gridTemplateRows: 'minmax(30px,auto)',
  gridTemplateColumns: '200px 200px 100px 50px 50px 50px 300px 100px',

});

const RowItem = styled.div({
  display: 'flex',
  margin: '2px',
  backgroundColor: '#FFFFFF',
  borderRadius: '4px',
})

const Dashboard = function () {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()

  useEffect(() => {

    const runCalculations = () => {
      const calculations = fetch("http://127.0.0.1:5103/calculations");
      calculations
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
    };

    const interval = setInterval(runCalculations, 1000);

    return () => {
      clearInterval(interval)
    };

  }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const columnNames = ["Started At", "Cancelled At", "% Completed", "bar", "baz", "foo", "value", "values/sec"];
      // const sortedItems = items.sort((a,b) => b.started_at - a.started_at);
      const sortedItems = items;

      return (
        <DashboardContainer>
          <h1>Dashboard</h1>
              <DashboardRow>
              {columnNames.map(name => (
                  <RowItem>{name}</RowItem>
              ))}
              </DashboardRow>

            {sortedItems.map(item => (
                <DashboardRow  key={item.id}>
                  <RowItem> {item.started_at} </RowItem>
                  <RowItem> {item.cancelled_at} </RowItem>
                  <RowItem> {item.fraction_complete}</RowItem> 
                  <RowItem> {item.bar}</RowItem>
                  <RowItem> {item.baz}</RowItem> 
                  <RowItem> {item.foo}</RowItem> 
                  <RowItem> {item.value}</RowItem>
                  <RowItem> {item.values_per_second}</RowItem> 
                </DashboardRow>
            ))}
        </DashboardContainer>
      );
    }
};

export default Dashboard;