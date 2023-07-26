import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "src/pages/HomePage";
import ProjectPage from "src/pages/project/ProjectPage";
import NavLayout from "src/layouts/NavLayout";
import SitesPage from "src/pages/sites/SitesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={(
          <Navigate to="/en" replace />
        )} />
        <Route element={<NavLayout />}>
          <Route path=":lang" element={<HomePage />} loader={() => {
            return 'not-main'
          }} />
          <Route path=":lang/project/:id" element={<ProjectPage />} />
          <Route path=":lang/sites" element={<SitesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;