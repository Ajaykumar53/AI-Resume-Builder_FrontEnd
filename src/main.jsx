import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import SignInPage from "./Pages/SignInPage.jsx";
import UserDashBoardPage from "./Pages/UserDashBoardPage.jsx";
import Home from "./DashBoard/Home.jsx";
import ATSScore from "./DashBoard/ATS Score.jsx";
import { Provider } from "react-redux";
import appStore from "./store/app.js";
import ProtectedRoute from "./Pages/Authorization.jsx";
import TemplatesPage from "./Pages/TempatesPage.jsx";
import EditResumePage from "./Pages/EditResumePage.jsx";
import ATSScoreLandingPage from "./Pages/ATSScorePage.jsx";
import AboutUs from "./Pages/AboutUsPage.jsx";
import PageNotFound from "./components/PageNotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/ats-score", element: <ATSScoreLandingPage /> },
      { path: "/about-us", element: <AboutUs /> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  { path: "/sign-up", element: <SignUpPage /> },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <UserDashBoardPage />
      </ProtectedRoute>
    ),
    children: [
      { path: "/user", element: <Home /> },
      { path: "ats-score", element: <ATSScore /> },
      { path: "edit-resume", element: <EditResumePage /> },
      { path: "templates", element: <TemplatesPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
