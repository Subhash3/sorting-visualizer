import React from 'react';
import Visualizer from './components/Visualizer/Visualizer';
// import ArrayProvider from './contexts/arrayProvider';
// import BarColorsProvider from './contexts/barColorsProvider';
import BarsInfoProvider from './contexts/barsInfoProvider';

function App() {
  return (
    <BarsInfoProvider>
      <Visualizer />
    </BarsInfoProvider>
  );
}

export default App;
