import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage.jsx"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage.jsx"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
