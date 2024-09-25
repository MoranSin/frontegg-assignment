import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FronteggProvider } from '@frontegg/react'

const contextOptions = {
  baseUrl: 'https://app-p3e54ugcnn5v.frontegg.com',
  clientId: '5869d144-1bdd-4695-bae1-30d1bf63b764', 
  appId:'5f09e639-20bf-420e-a74d-a4f5360f970e'
};

const authOptions = {
  keepSessionAlive: true 
 };

createRoot(document.getElementById('root')).render(
  <FronteggProvider 
  contextOptions={contextOptions} 
  hostedLoginBox={true}
  authOptions={authOptions}>
    <App />
  </FronteggProvider>
)
