import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    /*     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-grow ">
          <div className="flex-grow p-4 overflow-auto bg-muted/40 flex justify-center h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </ThemeProvider> */
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          {/* Contenido dinámico */}
          <div className="flex-grow p-4 overflow-auto bg-muted/40 flex justify-center">
            <Outlet />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
