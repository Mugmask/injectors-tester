import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  cod_injector: z.string().min(2, {
    message: "Codigo Inyector es obligatorio.",
  }),
  brand_injector: z.string().min(2, {
    message: "Codigo Inyector es obligatorio.",
  }),
  car_model: z.string().min(2, {
    message: "Codigo Inyector es obligatorio.",
  }),
});

const stagesForms = [
  {
    name: "Datos Generales",
    inputs: [
      { id: "cod_injector", name: "Codigo Inyector" },
      { id: "brand_injector", name: "Marca Inyector" },
      { id: "car_model", name: "Modelo Vehiculo" },
    ],
  },
  {
    name: "Plena Carga",
    inputs: [
      { id: "plenaCarga_rpmBanco", name: "RPM Banco" },
      { id: "plenaCarga_anchoPulso", name: "Ancho Pulso" },
      { id: "plenaCarga_frecuencia", name: "Frecuencia" },
      { id: "plenaCarga_presionRiel", name: "Presion Riel" },
      { id: "plenaCarga_caudalEntregadoMin", name: "Caudal Entregado Min" },
      { id: "plenaCarga_caudalEntregadoMax", name: "Caudal Entregado Max" },
      { id: "plenaCarga_caudalRetornadoMin", name: "Caudal Retornado Min" },
      { id: "plenaCarga_caudalRetornadoMax", name: "Caudal Retornado Max" },
    ],
  },
  {
    name: "Carga Parcial",
    inputs: [
      { id: "cargaParcial_rpmBanco", name: "RPM Banco" },
      { id: "cargaParcial_anchoPulso", name: "Ancho Pulso" },
      { id: "cargaParcial_frecuencia", name: "Frecuencia" },
      { id: "cargaParcial_presionRiel", name: "Presion Riel" },
      { id: "cargaParcial_caudalEntregadoMin", name: "Caudal Entregado Min" },
      { id: "cargaParcial_caudalEntregadoMax", name: "Caudal Entregado Max" },
      { id: "cargaParcial_caudalRetornadoMin", name: "Caudal Retornado Min" },
      { id: "cargaParcial_caudalRetornadoMax", name: "Caudal Retornado Max" },
    ],
  },
  {
    name: "Ralenti",
    inputs: [
      { id: "ralenti_rpmBanco", name: "RPM Banco" },
      { id: "ralenti_anchoPulso", name: "Ancho Pulso" },
      { id: "ralenti_frecuencia", name: "Frecuencia" },
      { id: "ralenti_presionRiel", name: "Presion Riel" },
      { id: "ralenti_caudalEntregadoMin", name: "Caudal Entregado Min" },
      { id: "ralenti_caudalEntregadoMax", name: "Caudal Entregado Max" },
      { id: "ralenti_caudalRetornadoMin", name: "Caudal Retornado Min" },
      { id: "ralenti_caudalRetornadoMax", name: "Caudal Retornado Max" },
    ],
  },
  {
    name: "Pre-Inyección",
    inputs: [
      { id: "preInyeccion_rpmBanco", name: "RPM Banco" },
      { id: "preInyeccion_anchoPulso", name: "Ancho Pulso" },
      { id: "preInyeccion_frecuencia", name: "Frecuencia" },
      { id: "preInyeccion_presionRiel", name: "Presion Riel" },
      { id: "preInyeccion_caudalEntregadoMin", name: "Caudal Entregado Min" },
      { id: "preInyeccion_caudalEntregadoMax", name: "Caudal Entregado Max" },
      { id: "preInyeccion_caudalRetornadoMin", name: "Caudal Retornado Min" },
      { id: "preInyeccion_caudalRetornadoMax", name: "Caudal Retornado Max" },
    ],
  },
  {
    name: "Estanqueidad",
    inputs: [
      { id: "estanqueidad_rpmBanco", name: "RPM Banco" },
      { id: "estanqueidad_anchoPulso", name: "Ancho Pulso" },
      { id: "estanqueidad_frecuencia", name: "Frecuencia" },
      { id: "estanqueidad_presionRiel", name: "Presion Riel" },
      { id: "estanqueidad_caudalEntregadoMin", name: "Caudal Entregado Min" },
      { id: "estanqueidad_caudalEntregadoMax", name: "Caudal Entregado Max" },
      { id: "estanqueidad_caudalRetornadoMin", name: "Caudal Retornado Min" },
      { id: "estanqueidad_caudalRetornadoMax", name: "Caudal Retornado Max" },
    ],
  },
];

export default function InjectorsAdd() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cod_injector: "",
      brand_injector: "",
      car_model: "",
      plenaCarga_rpmBanco: "",
      plenaCarga_anchoPulso: "",
      plenaCarga_frecuencia: "",
      plenaCarga_presionRiel: "",
      plenaCarga_caudalEntregadoMin: "",
      plenaCarga_caudalEntregadoMax: "",
      plenaCarga_caudalRetornadoMin: "",
      plenaCarga_caudalRetornadoMax: "",
      cargaParcial_rpmBanco: "",
      cargaParcial_anchoPulso: "",
      cargaParcial_frecuencia: "",
      cargaParcial_presionRiel: "",
      cargaParcial_caudalEntregadoMin: "",
      cargaParcial_caudalEntregadoMax: "",
      cargaParcial_caudalRetornadoMin: "",
      cargaParcial_caudalRetornadoMax: "",
      ralenti_rpmBanco: "",
      ralenti_anchoPulso: "",
      ralenti_frecuencia: "",
      ralenti_presionRiel: "",
      ralenti_caudalEntregadoMin: "",
      ralenti_caudalEntregadoMax: "",
      ralenti_caudalRetornadoMin: "",
      ralenti_caudalRetornadoMax: "",
      preInyeccion_rpmBanco: "",
      preInyeccion_anchoPulso: "",
      preInyeccion_frecuencia: "",
      preInyeccion_presionRiel: "",
      preInyeccion_caudalEntregadoMin: "",
      preInyeccion_caudalEntregadoMax: "",
      preInyeccion_caudalRetornadoMin: "",
      preInyeccion_caudalRetornadoMax: "",
      estanqueidad_rpmBanco: "",
      estanqueidad_anchoPulso: "",
      estanqueidad_frecuencia: "",
      estanqueidad_presionRiel: "",
      estanqueidad_caudalEntregadoMin: "",
      estanqueidad_caudalEntregadoMax: "",
      estanqueidad_caudalRetornadoMin: "",
      estanqueidad_caudalRetornadoMax: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="flex flex-col w-full">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 pb-4 max-sm:grid-cols-2 ">
        <Card className="p-3 sm:col-span-2 md:col-span-4 max-sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-left mb-4">Agregar Injector</CardTitle>
            <CardDescription className="leading-relaxed text-left">
              Complete todos los campos para poder generar un injector
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Carousel
              className="w-full max-w-screen-2xl"
              opts={{
                align: "start",
                loop: false,
                watchDrag: false,
              }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" id="myform">
                  <CarouselContent>
                    {stagesForms.map((stage, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card>
                            <CardHeader className="items-center gap-3">
                              <CardTitle>{stage.name}</CardTitle>
                              <Separator className=" w-2/3" />
                            </CardHeader>
                            <CardContent className="flex aspect-square items-center justify-center p-6  overflow-y-auto">
                              <div className="h-full w-full">
                                {stage.inputs.map((input) => (
                                  <FormField
                                    key={input.id}
                                    control={form.control}
                                    name={input.id}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>{input.name}</FormLabel>
                                        <FormControl>
                                          <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </form>
              </Form>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
          <CardFooter>
            <Button type="submit" form="myform">
              Crear Injector
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
