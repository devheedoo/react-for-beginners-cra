import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const handleClick = () => setCounter((prev) => prev + 1);
  const handleChange = (event) => setKeyword(event.target.value);
  console.log('I run every time.');
  useEffect(() => console.log('I run only once'), []);
  useEffect(() => console.log('I run when "counter" changes.'), [counter]);
  useEffect(() => console.log('I run when "keyword" changes.'), [keyword]);
  useEffect(
    () => console.log('I run when "counter" and "keyword" changes.'),
    [counter, keyword]
  );
  return (
    <div>
      <input
        value={keyword}
        onChange={handleChange}
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={handleClick}>click me!</button>
    </div>
  );
}

export default App;
