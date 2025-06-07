import React from 'react';
import "./style/_variables.module.scss"
import { RouteProvider } from './providers/BaseRouting/ui/RouteProvider';
import { ApiProvider } from './providers/QueryClient';
import "./style/baseStyle.css"

function App() {
  return (
    <ApiProvider>
      <RouteProvider/>
    </ApiProvider>
  );
}

export default App;
