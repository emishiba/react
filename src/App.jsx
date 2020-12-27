import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInfoAction } from './reducks/users/actions';

function App() {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state);
  console.log(selector);

  return (
    <div className="App">
      <button onClick={() => dispatch(userInfoAction({ name: 'ぬぬ' }))}>
        click
      </button>
      <button>じゅじゅ</button>
    </div>
  );
}

export default App;
