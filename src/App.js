import './App.css';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false)
  const animation = useSpring(
    {
      to: { opacity: 1 },
      reset: true,
      reverse: flip,
      delay: 200,
      onRest: () => set(!flip),
      from: { opacity: 0 }
    }
  );
  return (
    <div className="App">
      <animated.h1 style={animation}>This is animated text</animated.h1>
    </div>
  );
}

export default App;
