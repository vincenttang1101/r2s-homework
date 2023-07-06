import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import LoginFeature from './features/LoginFeature';
import LoginPage from './features/LoginFeature/pages/Login';

function App() {
  return (
    <div className="App">
      <Link to="login">Login</Link>
      <Routes>
        <Route path="login" element={<LoginFeature />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="user-list" element={<Use/>}
      </Routes>
    </div>
  );
}

export default App;
