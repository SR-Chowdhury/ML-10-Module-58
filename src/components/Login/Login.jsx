import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/Firebase.init';

const Login = () => {

    const [user, setUser] = useState(null);

    // console.log(app);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLoginBtn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                console.log(loggedInUser);
            })
            .catch(error => console.log('error: ', error.message))
    };

    const handleLogout = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null);
            })
            .catch(err => console.log(err))
    }

    const handleGithubLoginBtn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
            })
            .catch(err => console.log('error: ', err.message))
    }

    return (
        <div>
            {
                user
                    ?   <button onClick={handleLogout}>Log Out</button>
                    :   <div>
                            <button style={{marginRight: '10px'}} onClick={handleGoogleLoginBtn}>Google Login</button>
                            <button onClick={handleGithubLoginBtn}>Github Login</button>
                        </div>
            }


            {
                user &&
                <div>
                    <h3>User Info</h3>
                    <h5>{user.displayName}</h5>
                    <h6>{user.email}</h6>
                    <div>
                        <img src={user.photoURL} alt="" />
                    </div>

                </div>
            }

        </div>
    );
};

export default Login;