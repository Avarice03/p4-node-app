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

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "recipes", element: <Recipes /> },
        { path: "/recipe/:id", element: <RecipePage /> },
        { path: "/recipe/:id/edit", element: <RecipeForm />},
        { path: "/recipe/add", element: <RecipeForm />},
        { path: "timer", element: <Timer /> },
        { path: "about-this-app", element: <About /> },
        { path: "contact-me", element: <Contact /> },
        { path: "login", element: <Login /> },
      ],
    },
  ]);
  return (
    <UserProvider>
      <RecipeProvider>
        <RouterProvider router={router} />
      </RecipeProvider>
    </UserProvider>
  );
}

export default App;
