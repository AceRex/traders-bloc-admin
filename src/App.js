import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";
// import ProtectedRoute from "./protecteroute";

const Login = lazy(() => import("./page/login.tsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/login"
        element={
          <Suspense fallback={<h1>Loading</h1>}>
            <Login />
          </Suspense>
        }
      />
    </>
  )
);
export default router;
