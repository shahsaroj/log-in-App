import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/**root routes */
const router = createBrowserRouter(
    [
        {
            path: '/',
            element:<div>Root Route</div>
        },
        {
            path: '/Register',
            element:<div>Register Route</div>
        },
    ]
)

export default function App() {
  return (
      <main>
          <RouterProvider router={router}></RouterProvider>
  </main>
  )
}
