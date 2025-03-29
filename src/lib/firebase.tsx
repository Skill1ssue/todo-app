import { initializeApp, getApps } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import {
  connectDataConnectEmulator,
  getDataConnect,
} from "firebase/data-connect";
import { connectorConfig } from './dataconnect-generated/js/default-connector';
import { createContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCK6hzuDz3c8JnTVczP0W5TQ_lnDGL061k",
  authDomain: "todo-list-64035.firebaseapp.com",
  projectId: "todo-list-64035",
  storageBucket: "todo-list-64035.firebasestorage.app",
  messagingSenderId: "63674139960",
  appId: "1:63674139960:web:701dcdf948dd676a542dcd"
};

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(firebaseApp);
const dataconnect = getDataConnect(firebaseApp, connectorConfig);

if (process.env.NODE_ENV === "development") {
  connectDataConnectEmulator(dataconnect, "127.0.0.1", 9399, false);
  connectAuthEmulator(auth, "http://localhost:9099");
}

const AuthContext = createContext(auth);

function AuthProvider({ children }: { children: React.ReactNode }) {
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
