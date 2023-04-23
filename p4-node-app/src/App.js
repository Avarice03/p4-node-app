import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Timer from "./components/pages/Timer";
import Recipes from "./components/pages/Recipes";
import MainLayout from "./components/pages/MainLayout";
import { RecipeProvider } from "./components/providers/RecipeProvider";
import { UserProvider } from "./components/providers/User";
import RecipePage from "./components/pages/RecipePage";
import RecipeForm from "./components/pages/RecipeForm";
import Signup from "./components/pages/Signup";
import Account from "./components/pages/Account";
import { UserDetailsProvider } from "./components/providers/UserDetailsProvider";
import RouteGuard from "./components/HOC/RouteGuard";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "recipes", element: <Recipes /> },
        { path: "recipe/:id", element: <RecipePage /> },
        {
          path: "/recipe/:id/edit-recipe",
          element: (
              <RecipeForm />
          ),
        },
        {
          path: "/recipe/add-recipe",
          element: (
            <RouteGuard>
              <RecipeForm />
            </RouteGuard>
          ),
        },
        { path: "timer", element: <Timer /> },
        { path: "about-this-app", element: <About /> },
        { path: "contact-me", element: <Contact /> },
        {
          path: "account",
          element: (
            <RouteGuard>
              <Account />
            </RouteGuard>
          ),
        },
        { path: "signup", element: <Signup /> },
        { path: "login", element: <Login /> },
      ],
    },
  ]);
  return (
    <UserProvider>
      <UserDetailsProvider>
        <RecipeProvider>
          <RouterProvider router={router} />
        </RecipeProvider>
      </UserDetailsProvider>
    </UserProvider>
  );
}

export default App;

// References: Some recipes are from allrecipes.com
