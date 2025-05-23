import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import GlobalStyle from './GlobalStyle';
import Inicial from './Paginas/Inicial/Index';
import CreateACont from './Paginas/CreateACont/Index';
import { UserFormLogInProvider } from './Context/UserFormLogIn'; 
import { UserFormCreateProvider } from './Context/UserFormCreateLogIn';
import RecoverPassword from './Paginas/RecoverPassword/Index';
import CheckEmail from './Paginas/CheckEmail/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicial />,
  },  
  {
    path: "createacont",
    element: <CreateACont />,
  },
  {
    path: "passwordhelp",
    element: <RecoverPassword />,
  },
  {
    path: "Resetpassword",
    element: <RecoverPassword />,
  },
  {
    path: "checkemail",
    element: <CheckEmail />,
  },

]);

const AppProviders = ({ children }) => (
  <UserFormLogInProvider>
    <UserFormCreateProvider>
      {children}
    </UserFormCreateProvider>
  </UserFormLogInProvider>
);


function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
      <GlobalStyle />
    </AppProviders>
  );
}

export default App;

