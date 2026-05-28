import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

/* =========================
   ADMIN
========================= */

import Login from "./website/pages/Login";

import AdminLayout from "./admin/layouts/AdminLayout";

import Dashboard from "./admin/pages/Dashboard";
import Projects from "./admin/pages/Projects";
import Sites from "./admin/pages/Sites";
import Customers from "./admin/pages/Customers";
import SolarPlants from "./admin/pages/SolarPlants";
import Monitoring from "./admin/pages/Monitoring";
import GISMaps from "./admin/pages/GISMaps";
import Reports from "./admin/pages/Reports";
import Documents from "./admin/pages/Documents";
import Settings from "./admin/pages/Settings";

/* =========================
   WEBSITE
========================= */

import WebsiteLayout from "./website/layouts/WebsiteLayout";

import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Services from "./website/pages/Services";
import ProjectsGallery from "./website/pages/ProjectsGallery";
import Contact from "./website/pages/Contact";
import GetQuote from "./website/pages/GetQuote";
import EmiCalculator from "./website/pages/EmiCalculator";
import Reviews from "./website/pages/Reviews";

/* =========================
   PORTAL
========================= */

import PortalLayout from "./portal/layouts/PortalLayout";

import CustomerDashboard from "./portal/pages/CustomerDashboard";
import MyProjects from "./portal/pages/MyProjects";
import MyReports from "./portal/pages/MyReports";
import PortalMonitoring from "./portal/pages/Monitoring";
import MyDocuments from "./portal/pages/MyDocuments";
import Billing from "./portal/pages/Billing";
import Profile from "./portal/pages/Profile";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* ====================================
             WEBSITE ROUTES
        ==================================== */}

        <Route
          path="/"
          element={<WebsiteLayout />}
        >

        <Route
  path="login"
  element={<Login />}
/>

          <Route
            index
            element={<Home />}
          />

          <Route
            path="about"
            element={<About />}
          />

          <Route
            path="services"
            element={<Services />}
          />

          <Route
            path="projects-gallery"
            element={<ProjectsGallery />}
          />

          <Route
            path="contact"
            element={<Contact />}
          />

          <Route
            path="get-quote"
            element={<GetQuote />}
          />

          <Route
            path="emi-calculator"
            element={<EmiCalculator />}
          />

          <Route
            path="reviews"
            element={<Reviews />}
          />

        </Route>

        {/* ====================================
             ADMIN ROUTES
        ==================================== */}

        <Route
          path="/admin"
          element={<AdminLayout />}
        >

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="projects"
            element={<Projects />}
          />

          <Route
            path="sites"
            element={<Sites />}
          />

          <Route
            path="customers"
            element={<Customers />}
          />

          <Route
            path="solarplants"
            element={<SolarPlants />}
          />

          <Route
            path="monitoring"
            element={<Monitoring />}
          />

          <Route
            path="gismaps"
            element={<GISMaps />}
          />

          <Route
            path="reports"
            element={<Reports />}
          />

          <Route
            path="documents"
            element={<Documents />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />

        </Route>

        {/* ====================================
             CUSTOMER PORTAL ROUTES
        ==================================== */}

        <Route
          path="/portal"
          element={<PortalLayout />}
        >

          <Route
            index
            element={<CustomerDashboard />}
          />

          <Route
            path="my-projects"
            element={<MyProjects />}
          />

          <Route
            path="my-reports"
            element={<MyReports />}
          />

          <Route
            path="monitoring"
            element={<PortalMonitoring />}
          />

          <Route
            path="my-documents"
            element={<MyDocuments />}
          />

          <Route
            path="billing"
            element={<Billing />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

        </Route>

        {/* ====================================
             INVALID ROUTE
        ==================================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
            />
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;