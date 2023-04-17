/**
 *                                       INITIAL INSTALLATION
 * -----------------------------------------------------------------------------------------------------
 * 1. Create a React Router Project
 * 2. Visit: console.firebase.google.com
 * 3. Create a project (Skip Google Analytics)
 * 4. Register App (create config)
 * 5. install firebase: npm install firebase
 * 6. Add config file to your project
 * 7. Danger: Do not publish firebase config file through pushing into github.
 * 
 *                                             INTEGRATION
 * -----------------------------------------------------------------------------------------------------
 * 8. Visit: Docs > Authentication > Web > Get Started
 * 9. export app from Firbese.init.js (firebase config) file
 * 10. import {getAuth} from 'firebase/auth' at the top 
 * 11. create 'const auth = getAuth(app)'
 * 
 *                                           PROVIDER SETUP
 * -----------------------------------------------------------------------------------------------------
 * -----Authenticate Using Google with JavaScript----
 * 12. import GoogleAuthProvider and create a new GoogleAuthProvider
 * 13. Build > Authentication > Sign in method: Add Provider (like google, facebook etc)
 *     > Enable > Project support email> Save
 * 14. Build > Authentication > Settings > Authorized domain > Add domain 127.0.0.1 (it's mean localhost) 
 * 
 * 
 */