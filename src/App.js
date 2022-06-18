
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignInPage from "./components/SignIn/SignInPage";
import RegisterPage from "./components/Register/RegisterPage";
import Root from "./Root";
import HomePage from "./components/HomePage";

function App() {

    return (
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={ <Root/> }>
                  <Route path={'auth'}>
                      <Route path={'login'} element={ <SignInPage/> }/>
                      <Route path={'register'} element={ <RegisterPage/> }/>
                  </Route>

                  <Route path={'home'} element={ <HomePage/> }>

                  </Route>
              </Route>

          </Routes>
      </BrowserRouter>
  );
}

export default App;
