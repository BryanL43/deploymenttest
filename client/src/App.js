import { useEffect } from 'react';
import logo from './logo.svg';

function App() {
  useEffect(() => {
    const getUser = async() => {
      const res = await fetch("http://localhost:2000/api/user/me");
      console.log(res);
    }
    getUser();
  }, []);

  return (
    <div className="App">
      <p className="text-red-400 sm:text-green-500 md:text-blue-500 xl:text-cyan-500">HALLO WORLD!</p>
    </div>
  );
}

export default App;
