import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './components/ui/provider.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Header from './Component/Header/Header.jsx'
import Section from './Component/Section/Section.jsx'


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,

    children: [
      {
        path: '/header',
        element: <Header/>
      },
      {
        path: '/section',
        element: <Section />
      }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
