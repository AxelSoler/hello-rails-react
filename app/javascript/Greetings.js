import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getGreeting } from './redux/greetingReducer';

const Greetings = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector(state => state);
  useEffect(() => {  
    dispatch(getGreeting());
    }, []);
  return (
  <div>
    <h1>{greeting}</h1>
  </div>
  );
}

export default Greetings;