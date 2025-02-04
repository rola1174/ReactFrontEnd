import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from "./App";
import { JobPage } from "./pages/job_page/job_page";
import { DetailsPage } from "./pages/details_page/details_page";
import { Login } from "./pages/auth/login/login"; // Assuming Login is a default export
import { Register } from "./pages/auth/register/register"; // Assuming Register is a named export
import { AuthGuard } from "./pages/guards/auth.guard";
import { UpdateEmployer } from "./pages/admin/update-employer/update-employer";
import { ShowEmployer } from "./pages/admin/show-employer/show-employer";
import { AdminDashboard } from "./pages/admin/home/admin-dashboard";
import { ApplyForm } from "./pages/job-seeker/ApplyForm";
import { JobPostForm } from "./pages/employer/JobPostForm";
import EmployerDashboard from "./pages/employer/employer-dashboard";
import CreateEmployer from "./pages/admin/home/registerNewEmployer";
import AcceptJob from "./pages/admin/home/accept-jobPost/accept-jobPost";
import RejectJob from "./pages/admin/home/reject-jobPost/reject-jobPost";
import ChatApp from "./pages/communication/ChatApp";

export const routes = createBrowserRouter([
  {
    path: "", // localhost:3000
    element: <App />,
    children: [
      {
        path: "/",
        element: <JobPage />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
      },
      {
        path: "/communication",
        element: <ChatApp />,
      },
      {
        // Guard
        element: <AuthGuard roles={[]} />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/",
            element: <JobPage />,
          },
          {
            path: "/details/:id",
            element: <DetailsPage />,
          },
        ],
      },
      // Guard for admins
      {
        element: <AuthGuard roles={["Admin"]} />,
        children: [
          {
            path: "/admin-home", // home page
            element: <AdminDashboard />,
          },
          {
            path: "/show-employer/:id",
            element: <ShowEmployer />,
          },
          {
            path: "/update-employer/:id",
            element: <UpdateEmployer />,
          },
          {
            path: "/registerNewEmployer",
            element: <CreateEmployer />,
          },
          {
            path: "/accept-jobPost",
            element: <AcceptJob />,
          },
          {
            path: "/reject-jobPost",
            element: <RejectJob />,
          },
        ],
      },
      {
        element: <AuthGuard roles={["Employer"]} />,
        children: [
          {
            path: "/employer",
            element: <EmployerDashboard />,
          },
          {
            path: "/employer/create-job",
            element: <JobPostForm />,
          },
        ],
      },
      {
        element: <AuthGuard roles={["Job Seeker"]} />,
        children: [
          {
            path: "/apply/:id",
            element: <ApplyForm />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);

export default routes;
