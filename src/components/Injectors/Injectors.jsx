import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InjectorsTable from "./InjectorsTable";

export default function Injectors() {
  return (
    <div className="flex flex-col w-11/12">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 pb-4 max-sm:grid-cols-2 ">
        <Card className="p-3 sm:col-span-2 md:col-span-4 max-sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-left mb-4">Injectores</CardTitle>
          </CardHeader>
          <CardContent>
            <InjectorsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
