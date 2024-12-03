import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";

import { Conditional } from "./Components/Condtional/Conditional";
import { AddTaskForm } from "./Components/props/AddTaskForm";
import { UseRef } from "./Components/Ref/UseRef";
import { Controlled } from "./Components/Controlled Components/Controlled";
import { UseEffect } from "./Components/UseEffect/UseEffect";
import { TemperatureConverter } from "./Components/StateLiftUp/TemperatureConverter";
import { List } from "./Components/Listrendering/List";
import EventHandling from "./Components/EventHandler/EventHandling";
import Composition from "./Components/Composition/Composition";
import LifecycleUseEffect from "./Components/LifeCycle/LifeCycleUseEffect";
import StateUpdateObject from "./Components/StateUpdate/StateUpdateObject";
import StateUpdateArray from "./Components/StateUpdateArray/StateUpdateArray";
import { ForwardRef } from "./Components/ForwardRef/ForwardRef";
import { ProductDetails } from "./pages/ProductDetails";
import Form from "./Components/CustomHook/Form";
import { TodoList } from "./Components/Usecallback/TodoList";
import "./App.css";
import { ThemeProvider } from "./Components/UseContext/ThemeContext";
import { ThemeSwitcher } from "./Components/UseContext/ThemeSwitcher";
import { FactorialCalculator } from "./Components/UseMemo/FactorialCalculator";


const Layout = () => {
  return (
    <div className="layout">
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/conditional"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Conditional
        </NavLink>
        <NavLink
          to="/add-task"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Add Task
        </NavLink>
        <NavLink
          to="/use-ref"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Use Ref
        </NavLink>
        <NavLink
          to="/controlled"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Controlled
        </NavLink>
        <NavLink
          to="/use-effect"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Use Effect
        </NavLink>
        <NavLink
          to="/temperature-converter"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Temperature
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          List
        </NavLink>
        <NavLink
          to="/event-handling"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Event Handling
        </NavLink>
        <NavLink
          to="/composition"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Composition
        </NavLink>
        <NavLink
          to="/lifecycle"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Lifecycle
        </NavLink>
        <NavLink
          to="/state-object"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          State Object
        </NavLink>
        <NavLink
          to="/state-array"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          State Array
        </NavLink>
        <NavLink
          to="/forward-ref"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Forward Ref
        </NavLink>
        <NavLink
          to="/customhook"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Custom Hook
        </NavLink>
        <NavLink
          to="/callback"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Use Callback
        </NavLink>
        <NavLink
          to="/usecontext"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Use Context
        </NavLink>
        <NavLink
          to="/usememo"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Use Memo
          </NavLink>
      </nav>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: ":id",
            element: <ProductDetails />,
          },
        ],
      },
      { path: "/contacts", element: <Contact /> },
      { path: "/conditional", element: <Conditional /> },
      { path: "/add-task", element: <AddTaskForm /> },
      { path: "/use-ref", element: <UseRef /> },
      { path: "/controlled", element: <Controlled /> },
      { path: "/use-effect", element: <UseEffect /> },
      { path: "/temperature-converter", element: <TemperatureConverter /> },
      { path: "/list", element: <List /> },
      { path: "/event-handling", element: <EventHandling /> },
      { path: "/composition", element: <Composition /> },
      { path: "/lifecycle", element: <LifecycleUseEffect /> },
      { path: "/state-object", element: <StateUpdateObject /> },
      { path: "/state-array", element: <StateUpdateArray /> },
      { path: "/forward-ref", element: <ForwardRef /> },
      { path: "/customhook", element: <Form /> },
      {path:"/callback",element:<TodoList/>},
      { path: "/usecontext", element: (
       <ThemeProvider>
          <ThemeSwitcher/>
       </ThemeProvider>
      ) },
      { path: "/usememo", element: <FactorialCalculator /> }
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
