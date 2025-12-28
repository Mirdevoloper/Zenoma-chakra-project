import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './components/ui/provider.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Header from './Component/Header/Header.jsx'
import Section from './Component/Section/Section.jsx'
import Secondsection from './Component/Secondsection/Secondsection.jsx'
import Thirdsection from './Component/Thirdsection/Thirdsection.jsx'
import { Forthsection } from './Component/forthsection/Forthsection.jsx'
import Fifthsection from './Component/Fifthsection/Fifthsection.jsx'
import Sixsection from './Component/Sixsection/Sixsection.jsx'
import Navbar from './Component/Navbar/Navbar.jsx'


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    

  },

  
    
  
     { 
        path: '/navbar',
        element: <Navbar />
      },

      {
        path: '/header',
        element: <Header/>
      },
      {
        path: '/section',
        element: <Section />
      },
      {
        path: '/secondsection',
        element: <Secondsection />
      },
      {
        path: '/thirdsection ',
        element: <Thirdsection />
      },
      {
        path: '/forthsection',
        element: <Forthsection />
      },
      {
        path: '/ fifthsection',
        element: <Fifthsection />
      },
      {
        path: '/sixsection',
        element: <Sixsection />
      }

    
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
