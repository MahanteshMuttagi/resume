import React from 'react';
import { Link } from 'react-router-dom';

const TextAsImageLink = () => {
  return (
    <Link to="/destination">
      <img src={require("./image/pi")} alt="image" />
      
    </Link>
  );
}

export default TextAsImageLink;
