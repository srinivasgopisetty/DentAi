import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />

        <Toaster
            position="top-right"
            toastOptions={{
                duration: 3000,
                style: {
                    borderRadius: "12px",
                    background: "#ffffff",
                    color: "#0f172a",
                    fontWeight: "500",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                },
                success: {
                    iconTheme: {
                        primary: "#16a34a",
                        secondary: "#ffffff",
                    },
                },
                error: {
                    iconTheme: {
                        primary: "#dc2626",
                        secondary: "#ffffff",
                    },
                },
            }}
        />
    </StrictMode>
);