import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, Eye, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

const data = [
  {
    id: "m5gr84i9",
    numero: 1,
    cod_inyector: "12P23",
    fecha_creado: Date.now(),
    status: "Aprobado",
    nombre_cliente: "Francisco Perez Ugalde ",
  },
  {
    id: "3u1reuv4",
    numero: 2,
    cod_inyector: "45K67",
    fecha_creado: Date.now(),
    status: "Aprobado",
    nombre_cliente: "Gonzalo Depilato",
  },
  {
    id: "derv1ws0",
    numero: 3,
    cod_inyector: "89F45",
    fecha_creado: Date.now(),
    status: "Desaprobado",
    nombre_cliente: "Matias Rossi",
  },
  {
    id: "5kma53ae",
    numero: 4,
    cod_inyector: "97U26",
    fecha_creado: Date.now(),
    status: "Aprobado",
    nombre_cliente: "Luciano Espinoza",
  },
  {
    id: "bhqecj4p",
    numero: 5,
    cod_inyector: "17A35",
    fecha_creado: Date.now(),
    status: "Desaprobado",
    nombre_cliente: "Franco Cacheda",
  },
  {
    id: "derv1ws0",
    numero: 3,
    cod_inyector: "89F45",
    fecha_creado: Date.now(),
    status: "Desaprobado",
    nombre_cliente: "Matias Rossi",
  },
  {
    id: "5kma53ae",
    numero: 4,
    cod_inyector: "97U26",
    fecha_creado: Date.now(),
    status: "Aprobado",
    nombre_cliente: "Luciano Espinoza",
  },
  {
    id: "bhqecj4p",
    numero: 5,
    cod_inyector: "17A35",
    fecha_creado: Date.now(),
    status: "Desaprobado",
    nombre_cliente: "Franco Cacheda",
  },
  {
    id: "derv1ws0",
    numero: 3,
    cod_inyector: "89F45",
    fecha_creado: Date.now(),
    status: "Desaprobado",
    nombre_cliente: "Matias Rossi",
  },
  {
    id: "5kma53ae",
    numero: 4,
    cod_inyector: "97U26",
    fecha_creado: Date.now(),
    status: "Aprobado",
    nombre_cliente: "Luciano Espinoza",
  },
  {
    id: "bhqecj4p",
    numero: 5,
    cod_inyector: "17A35",
    fecha_creado: Date.now(),
    status: "Desaprobado",
    nombre_cliente: "Franco Cacheda",
  },
  {
    id: "derv1ws0",
    numero: 3,
    cod_inyector: "89F45",
    fecha_creado: Date.now(),
    status: "Desaprobado",
    nombre_cliente: "Matias Rossi",
  },
  {
    id: "5kma53ae",
    numero: 4,
    cod_inyector: "97U26",
    fecha_creado: Date.now(),
    status: "Aprobado",
    nombre_cliente: "Luciano Espinoza",
  },
  {
    id: "bhqecj4p",
    numero: 5,
    cod_inyector: "17A35",
    fecha_creado: Date.now(),
    status: "Desaprobado",
    nombre_cliente: "Franco Cacheda",
  },
  {
    id: "derv1ws0",
    numero: 3,
    cod_inyector: "89F45",
    fecha_creado: Date.now(),
    status: "Desaprobado",
    nombre_cliente: "Matias Rossi",
  },
  {
    id: "5kma53ae",
    numero: 4,
    cod_inyector: "97U26",
    fecha_creado: Date.now(),
    status: "Aprobado",
    nombre_cliente: "Luciano Espinoza",
  },
  {
    id: "bhqecj4p",
    numero: 5,
    cod_inyector: "17A35",
    fecha_creado: Date.now(),
    status: "Desaprobado",
    nombre_cliente: "Franco Cacheda",
  },
];

const columns = [
  {
    accessorKey: "numero",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          N°
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="uppercase">{row.getValue("numero")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Estado
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      let status = row.getValue("status");

      return (
        <div>
          <Badge className="uppercase" variant={`${status == "Desaprobado" ? "destructive" : "secondary"}`}>
            {status}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "cod_inyector",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Codigo Inyector
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="uppercase">{row.getValue("cod_inyector")}</div>,
  },
  {
    accessorKey: "fecha_creado",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Fecha Creado
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("fecha_creado");
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        /*         hour: "2-digit",
        minute: "2-digit", */
      };

      const formatted = new Date(date).toLocaleString("es-ES", options);

      return <div className="uppercase">{formatted}</div>;
    },
  },
  {
    accessorKey: "nombre_cliente",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Nombre Cliente
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="uppercase">{row.getValue("nombre_cliente")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="flex flex-row justify-center">
          <Link to={`/history/${data.id}`}>
            <Button variant="ghost" className="flex justify-center items-center px-3">
              <Eye className=" h-5 w-5 " />
            </Button>
          </Link>
          <Button variant="ghost" onClick={() => alert("borrar")} className="flex justify-center items-center px-3">
            <Trash className=" h-5 w-5 text-red-800" />
          </Button>
        </div>
      );
    },
  },
];

export default function HistoryTable() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,

    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Buscar prueba..."
          value={table.getColumn("cod_inyector")?.getFilterValue() ?? ""}
          onChange={(event) => table.getColumn("cod_inyector")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Sin resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
