import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter((prev) => prev + 1);
  console.log('rendered');
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleClick}>click me!</button>
    </div>
  );
}

export default App;
