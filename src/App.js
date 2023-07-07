import './App.scss';

import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";

import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <h1>Home</h1>
        <Link to="/login">Login</Link>
      </div>
    ),
  },
  {
    path: "login",
    element: <Login />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;