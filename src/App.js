import { useEffect, useState } from 'react';

function Hello() {
  useEffect(() => {
    console.log('Hello component is created.');
    return () => console.log('Hello component is destroyed.');
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const handleClick = () => setShowing((curr) => !curr);
  return (
    <div>
      <button onClick={handleClick}>{showing ? 'Hide' : 'Show'}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
