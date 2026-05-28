import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Auth0Provider} from "@auth0/auth0-react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider domain="dev-aobwut2vrr1ttska.us.auth0.com" clientId="syWVGJQ6K3MWVz78iiuvKl5V8OFPvbJG" authorizationParams={{redirect_uri: window.location.origin}}>
    <App />
    </Auth0Provider>
  </StrictMode>,
)
