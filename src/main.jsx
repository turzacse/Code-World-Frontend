import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Pages/Home.jsx';
import IctChapter1 from './Pages/IctChapter1.jsx';
import ICT from './Pages/Chapter1/ICT.jsx';
import Global from './Pages/Chapter1/Global.jsx';
import ICTChapter3 from './Pages/ICTChapter3.jsx';
import Chapter4 from './Pages/Chapter4/Chapter4.jsx';
import CodeEditor from './Pages/Chapter4/CodeEditor.jsx';
// import Global from './Pages/Chapter1/Global.jsx'; // Import other chapter components
// import Teleconferencing from './Pages/Chapter1/Teleconferencing.jsx';
// import VirtualReality from './Pages/Chapter1/VirtualReality.jsx';
// import AI from './Pages/Chapter1/AI.jsx';
// import Cryosurgery from './Pages/Chapter1/Cryosurgery.jsx';
// import Biometrics from './Pages/Chapter1/Biometrics.jsx';
// import Bioinformatics from './Pages/Chapter1/Bioinformatics.jsx';
// import GeneticEngineering from './Pages/Chapter1/GeneticEngineering.jsx';
// import Nanotechnology from './Pages/Chapter1/Nanotechnology.jsx';
// import Roles from './Pages/Chapter1/Roles.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/ict1',
        element: <IctChapter1 />,
      },
      {
        path: '/ict1/ict',
        element: <ICT/>
      },
      {
        path: '/ict1/global',
        element: <Global/>
      },
      {
        path: '/Chapter-3',
        element: <ICTChapter3/>
      },
      {
        path: '/Chapter-4',
        element: <Chapter4/>
      },
      {
        path: '/Chapter-4/code-editor',
        element: <CodeEditor/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
