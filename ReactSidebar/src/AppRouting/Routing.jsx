import React, { lazy, Suspense } from "react";
import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Home = lazy(() => import(`../ui/Home`));
const MainSection = lazy(() => import(`../components/MianSection`));
const ExternalApi = lazy(() => import(`../ui/ExternalApi`));
const Movie = lazy(() => import(`../ui/Movie`));

const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <ClipLoader size={50} color={"#123abc"} loading={true} />
  </div>
);

const Routing = () => {
  const routes = createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<MainSection />} />
      <Route path="/ExternalApi" element={<ExternalApi />} />
      <Route path="/Movie" element={<Movie />} />
    </Route>
  );

  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routing;
