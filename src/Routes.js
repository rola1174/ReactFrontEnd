/*import { Navigate, createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Login } from "./pages/auth/login/login";
import { Register } from "./pages/auth/register/register";
import { AdminHome } from "./pages/admin/home/admin-home";
import { ProfessorHome } from "./pages/Professor/home/professor-home";
import { Home } from "./pages/home/home";

export const routes = createBrowserRouter([
  {
    path: "", //localhost:3000
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      // Auth Routes
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      // Admin Routes
      {
        path: "/admin-home", // home page
        element: <AdminDashboard />,
      },

      // Professor Routes
      {
        path: "/employer-home",
        element: <ProfessorHome />,
      },

      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);
*/

/*import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { JobPage } from './pages/job_page/job_page';
import { DetailsPage } from "./pages/details_page/details_page";
import Login from "./pages/auth/login/login"; // Assuming Login is a default export
import { Register } from "./pages/auth/register/register";// Assuming Register is a named export
//import { AdminDashboard } from "./pages/admin/home/admin-dashboard"; // Assuming AdminDashboard is a named export
//import { ShowUser } from "./pages/admin/show-user/show-user"; // Assuming ShowUser is a default export
//import { UpdateUser } from "./pages/admin/update-user/update-user"; // Assuming UpdateUser is a default export
//import { AuthGuard } from "./pages/guards/auth.guard";
//himport Home from "./pages/home/home"; // Assuming Home is a default export
// import { EmployerDashboard } from "./pages/employer/employer-dashboard";


export const routes = createBrowserRouter([
  {
        path: "", // localhost:3000
        element: <App />,
        children: [
            {
                path: "", // localhost:3000
                element: <JobPage />
            },
            
            {
              path: "/", // localhost:3000/details/{id}
              element: <JobPage />
          },


            {
              path: "/details/:id", // localhost:3000/details/{id}
              element: <DetailsPage />
          },
          
            {
                path: "/login", // localhost:3000/login
                element: <Login />
            },
            {
              path: "/register", // localhost:3000/login
              element: < Register/>
          },

            
                {
                  path: "*",
                  element: <Navigate to={"/"} />,
                },
              ],
            },
          ]);*/




/*import React from "react";
import { createBrowserRouter,Navigate  } from "react-router-dom";
import { App } from "./App";
import { JobPage } from './pages/job_page/job_page';
import { DetailsPage } from "./pages/details_page/details_page";
import {Login} from "./pages/auth/login/login"; // Assuming Login is a default export
import { Register } from "./pages/auth/register/register"; // Assuming Register is a named export
//import Home from "./pages/home/home";  
import { AuthGuard } from "./pages/guards/auth.guard"; 
import { UpdateEmployer } from "./pages/admin/update-employer/update-employer";
import { ShowEmployer } from "./pages/admin/show-employer/show-employer";
import { AdminDashboard } from "./pages/admin/home/admin-dashboard";
import { JobSeekerDashboard } from "./pages/job-seeker/job-seeker-dashboard";

 
export const routes = createBrowserRouter([
{
path: "", //localhost:3000
element: <App />,
children: [
 
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
  path: "/update-employer",
  element: <UpdateEmployer />,
},
],
},
{
// Guard
element: <AuthGuard roles={[]} />,
children: [
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

{
// Guard
element: <AuthGuard roles={["job-seeker"]} />,
children: [
{
path: "/job-seeker-dashboard",
element: <JobSeekerDashboard />,
},
 
],
},
{
path: "*",
element: <Navigate to={"/"} />,
}
 
],
},
]);

export default routes;*/


import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from "./App";
import { JobPage } from "./pages/job_page/job_page";
import { DetailsPage } from "./pages/details_page/details_page";
import { Login } from "./pages/auth/login/login"; // Assuming Login is a default export
import { Register } from "./pages/auth/register/register"; // Assuming Register is a named export
//import Home from "./pages/home/home";
import { AuthGuard } from "./pages/guards/auth.guard";
import { UpdateEmployer } from "./pages/admin/update-employer/update-employer";
import { ShowEmployer } from "./pages/admin/show-employer/show-employer";
import { AdminDashboard } from "./pages/admin/home/admin-dashboard";
import { ApplyForm } from "./pages/job-seeker/ApplyForm";
import CommunicateWithEmployer from "./pages/job-seeker/communicateWithEmployer";
import { JobPostForm } from "./pages/employer/JobPostForm";
import { EmployerDashboard } from "./pages/employer/employer-dashboard";
import ChatApp from "./pages/communication/com";
import CreateEmployer from "./pages/admin/home/registerNewEmployer";
import AcceptJobPost from "./pages/admin/home/accept-jobPost/accept-jobPost";
import RejectJobPost from "./pages/admin/home/reject-jobPost/reject-jobPost";
export const routes = createBrowserRouter([
  {
    path: "", //localhost:3000
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
            path: "/communicate",
            element: <CommunicateWithEmployer />,
          },
        ],
      },

      // Guard for admins
      {
        //element: <AuthGuard roles={["Admin"]} />,
        element: <AuthGuard roles={[]} />, // Removing the guards for testing only
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
            path: "/update-employer",
            element: <UpdateEmployer />,
          },
          {
            path: "/registerNewEmployer",
            element: <CreateEmployer />,
          },
          {
            path:"/accept-jobPost",
            element: <AcceptJobPost />,
          },
          {
            path: "/reject-jobPost",
            element: <RejectJobPost />,
          },

        ],
      },

      {
        //element: <AuthGuard roles={["Employer"]} />,
        element: <AuthGuard roles={[]} />, // Removing the guards for testing only
        children: [
          {
            path: "/employer",
            element: < EmployerDashboard />,
          },
          {
            path: "/employer/create-job",
            element: < JobPostForm />,
          },
        ],
      },
      {
        // Guard
        //element: <AuthGuard roles={["Job Seeker"]} />,
        element: <AuthGuard roles={[]} />, // Removing the guards for testing only
        children: [
          {
            path: "/apply/:id",
            element: <ApplyForm />,
          },
          /*{
            path: "/job-seeker-dashboard/:jobId", // Add dynamic parameter for jobId
            element: <JobSeekerDashboard />,
          },*/
        ],
      },
      {
        element: <AuthGuard roles={[]} />, // Removing the guards for testing only
        children: [
          {
            path: "/communication",
            element: <ChatApp />,
          },
          /*{
            path: "/job-seeker-dashboard/:jobId", // Add dynamic parameter for jobId
            element: <JobSeekerDashboard />,
          },*/
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