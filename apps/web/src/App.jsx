import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AnalysisPage from "./pages/AnalysisPage";

import UploadPage from "./pages/UploadPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<UploadPage />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
  path="/analysis"
  element={<AnalysisPage />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;