import React, { useState, useEffect } from 'react';
import Check from './Check';

function Hooks(props) {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("develop Branch ++ present feature branch push");
    document.title = `React Hooks count `+ count;
    
  });

  return (
    <div>
      <Check count={count}></Check>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Hooks;
