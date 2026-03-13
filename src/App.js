
import './App.css';
import './styles/global.css';
import './styles/theme.css';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;
