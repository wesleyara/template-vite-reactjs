import React from 'react';

function App() {
  const [teste, setTeste] = React.useState(0);

  React.useEffect(() => {
    console.log(teste);
  }, []);

  return <h1>Oi</h1>;
}

export default App;
