import React from 'react';
import Visualizer from './components/Visualizer/Visualizer';
// import ArrayProvider from './contexts/arrayProvider';
// import BarColorsProvider from './contexts/barColorsProvider';
import BarsInfoProvider from './contexts/barsInfoProvider';
import SortingStatusProvider, { useSortingStatus } from './contexts/sortingStatusProvier';

import './App.css'

function App() {
  return (
    <SortingStatusProvider>
      <BarsInfoProvider>
        <AppWrapper />
      </BarsInfoProvider>
    </SortingStatusProvider>
  );
}

function AppWrapper() {
  const { sortingStatus } = useSortingStatus()

  return (
    <div className={`app ${sortingStatus ? "inactive" : ""}`}>
      <Visualizer />
    </div>
  )

}

export default App;
