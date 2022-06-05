import React from 'react';
import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {Link, Outlet} from "react-router-dom";

function App() {
    const auth = getAuth();
    const showLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const logout = () => {
        auth.signOut()
            .then(console.log)
    }

    return (
        <div className="App">
            <h1>Notes App</h1>
            <header className="App-header">
                <button onClick={showLogin}>Login</button>
                <button onClick={logout}>Logout</button>
                <Link to='a'>A</Link>
                <Link to='b'>B</Link>
            </header>

            <Outlet />
        </div>
    );
}

export default App;
