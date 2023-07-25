import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/project/ProjectPage";
import NavLayout from "./layouts/NavLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={(
          <Navigate to="/en" replace />
        )} />
        <Route element={<NavLayout />}>
          <Route path=":lang" element={<HomePage />} />
          <Route path=":lang/project/:id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;