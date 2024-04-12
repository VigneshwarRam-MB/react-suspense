import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const UserList = lazy(() => import("./pages/UserList"));
const User = lazy(() => import("./pages/User"));

const App = () => {
    return (
        <Suspense fallback= {<Loader/>}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<UserList/>}/>
                    <Route exact path="/user/:id" element={<User/>}/>
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default App

