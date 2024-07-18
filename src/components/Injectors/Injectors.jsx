import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InjectorsAdd from "./InjectorsAdd";
import InjectorsTable from "./InjectorsTable";

export default function Injectors() {
  return (
    <div className="">
      <Tabs defaultValue="table_injectors">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="table_injectors">Injectores</TabsTrigger>
          <TabsTrigger value="add_injector">Agregar injectores</TabsTrigger>
        </TabsList>
        <TabsContent value="table_injectors">
          <InjectorsTable />
        </TabsContent>
        <TabsContent value="add_injector">
          <InjectorsAdd />
        </TabsContent>
      </Tabs>
    </div>
  );
}
