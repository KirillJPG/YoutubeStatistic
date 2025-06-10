import "./style/_variables.module.scss"
import { RouteProvider } from './providers/BaseRouting/ui/RouteProvider';
import { ApiProvider } from './providers/QueryClient';
import "./style/baseStyle.css"
import { Layout } from './providers/Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Layout>
          <RouteProvider/>
        </Layout>
      </BrowserRouter>
    </ApiProvider>
  );
}

export default App;
