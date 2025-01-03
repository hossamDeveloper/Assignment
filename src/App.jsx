import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Layout from "./Pages/Layout"
import Payment from "./Pages/Payment/Payment"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/payment",
          element: <Payment />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
