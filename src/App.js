import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";
// import ProtectedRoute from "./protecteroute";

const Login = lazy(() => import("./page/login.tsx"));
const ForgotPassword = lazy(() => import("./page/passwordReset.tsx"));
const Dashboard = lazy(() => import("./page/dashboard.tsx"));
const KYCReview = lazy(() => import("./page/kycReview.tsx"));
const ReviewDocument = lazy(() => import("./page/reviewDocument.tsx"));
const Preview = lazy(() => import("./page/preview.tsx"));
const ReviewInvoice = lazy(() => import("./page/reviewInvoice.tsx"));
const Funding = lazy(() => import("./page/funding.tsx"));
const Milestone = lazy(() => import("./page/mileStone.tsx"));
const Profile = lazy(() => import("./page/profile.tsx"));

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
      <Route
        path="/invoice"
        element={
          <Suspense fallback={<h1>Loading</h1>}>
            <ReviewInvoice />
          </Suspense>
        }
      />{" "}
      <Route
        path="/funding"
        element={
          <Suspense fallback={<h1>Loading</h1>}>
            <Funding />
          </Suspense>
        }
      />{" "}
      <Route
        path="/milestone"
        element={
          <Suspense fallback={<h1>Loading</h1>}>
            <Milestone />
          </Suspense>
        }
      />
      <Route
        path="/profile"
        element={
          <Suspense fallback={<h1>Loading</h1>}>
            <Profile />
          </Suspense>
        }
      />
    </>
  )
);
export default router;
