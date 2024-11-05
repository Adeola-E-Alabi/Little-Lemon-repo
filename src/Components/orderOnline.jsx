import React, { useEffect, useReducer, useState } from 'react';

    const reducer = (state, action) => {
      switch (action.type) {
        case 'INITIALIZE':
          return action.payload;
        default:
          return state;
      }
    };

const OrderOnline = () => {

      const [initialData, setInitialData] = useState(null);
      const [loading, setLoading] = useState(true); // Track loading status
    
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://randomuser.me/api/`);
            const data = await response.json();
            setInitialData(data);
            setLoading(false); // Data is loaded
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        }
    
        fetchData();
      }, []);
    
      // Initialize useReducer only after initialData is loaded
      const [state, dispatch] = useReducer(
        reducer,
        initialData,
        (data) => data // Lazy initializer to directly use initialData once loaded
      );
    
      // Dispatch action to update state once initialData is set
      useEffect(() => {
        if (initialData) {
          dispatch({ type: 'INITIALIZE', payload: initialData });
        }
      }, [initialData]);
    
      return (
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <pre>{JSON.stringify(state, null, 2)}</pre>
          )}
        </div>
      );
    }
    

export default OrderOnline