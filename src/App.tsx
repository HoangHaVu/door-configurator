import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConfiguratorPage from './pages/ConfiguratorPage';
import ResultPage from './pages/ResultPage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/configure/step/:stepId" element={<ConfiguratorPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
