import React from 'react';
import Visualizer from './components/Visualizer/Visualizer';
import ArrayProvider from './contexts/arrayProvider';

function App() {
  return (
    <ArrayProvider>
      <Visualizer />
    </ArrayProvider>
  );
}

export default App;
