import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { CirclePlus, GalleryVerticalEnd, TestTubeDiagonal, Moon, Sun } from "lucide-react";
import logoRound from "../assets/indiesel_logo_round.svg";

export default function Sidebar() {
  const { setTheme, theme } = useTheme();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className=" inset-y-0 left-0 z-10 h-full w-16 flex flex-col border-r bg-background">
      <TooltipProvider delayDuration={300}>
        <nav className="flex flex-col items-center gap-4 px-2 py-5 ">
          <div className="w-full flex justify-center items-center ">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/">
                  <img
                    className={`w-40 filter hover:drop-shadow-custom ${isActive("/") ? "drop-shadow-custom" : ""}`}
                    src={logoRound}
                    alt="indiesel logo"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>
          </div>
          <Separator />
          <div className="flex flex-col gap-4 w-full items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/newtest"
                  className={`flex h-12 w-12 items-center justify-center rounded-lg text-muted-foreground ${
                    isActive("/newtest") ? "text-primary-foreground bg-primary " : ""
                  }`}
                >
                  <Button
                    className={`justify-start h-12 w-12 ${
                      isActive("/newtest") ? "hover:bg-primary- hover:text-accent" : ""
                    }`}
                    variant="ghost"
                  >
                    <CirclePlus className="h-5 w-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Nueva Prueba</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/history"
                  className={`flex h-12 w-12 items-center justify-center rounded-lg text-muted-foreground ${
                    isActive("/history") ? "text-primary-foreground bg-primary " : ""
                  }`}
                >
                  <Button
                    className={`justify-start h-12 w-12 ${
                      isActive("/history") ? "hover:bg-primary- hover:text-accent" : ""
                    }`}
                    variant="ghost"
                  >
                    <GalleryVerticalEnd className="h-5 w-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Historial de pruebas</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/injectors"
                  className={`flex h-12 w-12 items-center justify-center rounded-lg text-muted-foreground  ${
                    isActive("/injectors") ? "text-primary-foreground bg-primary " : "text-muted-foreground"
                  }`}
                >
                  <Button
                    className={`justify-start h-12 w-12 ${
                      isActive("/injectors") ? "hover:bg-primary- hover:text-accent" : ""
                    }`}
                    variant="ghost"
                  >
                    <TestTubeDiagonal className="h-5 w-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Inyectores</TooltipContent>
            </Tooltip>
          </div>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-2 px-2 py-2">
          <Separator />
          <Button
            className="flex justify-start p-3"
            variant="ghost"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </TooltipProvider>
    </aside>
  );
}
