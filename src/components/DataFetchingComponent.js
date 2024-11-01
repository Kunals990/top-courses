import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const DataFetchingComponent = (props) => {
  const { api } = props;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(api)
      .then((response) => {
        console.log("Response data:", response.data); // Log to inspect the structure
        setData(response.data.data); // Access the "data" property in the response
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [api]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* <h1>Fetched Courses</h1> */}
      {props.getData(data)}
      {/* {Object.keys(data).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {data[category].map((course) => (
              <li key={course.id}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <img src={course.image.url} alt={course.image.alt} />
              </li>
            ))}
          </ul>
        </div>
      ))} */}
    </div>
  );
};

DataFetchingComponent.propTypes = {
  api: PropTypes.string.isRequired,
};

export default DataFetchingComponent;
