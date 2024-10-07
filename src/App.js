import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import KYCReview from "./page/kycReview.tsx";
import ReviewDocument from "./page/reviewDocument.tsx";
import Preview from "./page/preview.tsx";
// import ProtectedRoute from "./protecteroute";

const Login = lazy(() => import("./page/login.tsx"));
const ForgotPassword = lazy(() => import("./page/passwordReset.tsx"));
const Dashboard = lazy(() => import("./page/dashboard.tsx"));

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
      <Route
        path="/forgot-password"
        element={
          <Suspense fallback={<h1>Loading</h1>}>
            <ForgotPassword />
          </Suspense>
        }
      />
      <Route
        path="/"
        element={
          <Suspense fallback={<h1>Loading</h1>}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="/kyc"
        element={
          <Suspense fallback={<h1>Loading</h1>}>
            <KYCReview />
          </Suspense>
        }
      />
      <Route
        path="/review_document"
        element={
          <Suspense fallback={<h1>Loading</h1>}>
            <ReviewDocument />
          </Suspense>
        }
      />
      <Route
        path="/preview"
        element={
          <Suspense fallback={<h1>Loading</h1>}>
            <Preview />
          </Suspense>
        }
      />
    </>
  )
);
export default router;
