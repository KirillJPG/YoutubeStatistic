import React from 'react';
import './style/index.css';
import { RouteProvider } from './providers/BaseRouting/ui/RouteProvider';
import { ApiProvider } from './providers/QueryClient';
function App() {
  return (
    <ApiProvider>
      <RouteProvider/>
    </ApiProvider>
  );
}

export default App;
