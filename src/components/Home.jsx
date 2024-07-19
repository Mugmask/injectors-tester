import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import HistoryTable from "./History/HistoryTable";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 h-auto">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 ">
        <Card className="p-2 sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-left mb-4">Pruebas</CardTitle>
            <CardDescription className="leading-relaxed text-left">
              Inicia una prueba de rendimiento para tus inyectores y analiza su eficiencia en cada etapa.
            </CardDescription>
          </CardHeader>
          <CardFooter className="mt-4">
            <Link to="/newtest" className={`${buttonVariants()} w-full`}>
              Iniciar prueba
            </Link>
          </CardFooter>
        </Card>
        <Card className="p-2 sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-left mb-4">Injectores</CardTitle>
            <CardDescription className="leading-relaxed text-left">
              Genera un nuevo inyector para agregar a tu base de datos y realizar pruebas de rendimiento.
            </CardDescription>
          </CardHeader>
          <CardFooter className="mt-4">
            <Link to="/injectors" className={`${buttonVariants()} w-full`}>
              Generar injector
            </Link>
          </CardFooter>
        </Card>
      </div>
      {/* TODO: cambiar esta tabla por el componente de historyTable*/}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 pb-4 max-sm:grid-cols-2">
        <Card className="p-3 sm:col-span-2 md:col-span-4 max-sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-left mb-4">Historial de pruebas</CardTitle>
          </CardHeader>
          <CardContent>
            <HistoryTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
