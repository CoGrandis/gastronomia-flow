import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, Search } from "lucide-react";
import { useState } from "react";

export default function Ventas() {
  const [ventasRecientes] = useState([
    { id: 1, producto: "Pizza Margherita", cantidad: 2, total: "$2,400", local: "Local Centro", fecha: "10:30" },
    { id: 2, producto: "Pasta Carbonara", cantidad: 1, total: "$1,800", local: "Local Norte", fecha: "10:15" },
    { id: 3, producto: "Ensalada César", cantidad: 3, total: "$2,700", local: "Local Sur", fecha: "09:45" },
    { id: 4, producto: "Hamburguesa Premium", cantidad: 1, total: "$1,500", local: "Local Este", fecha: "09:30" },
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Gestión de Ventas</h1>
        <p className="text-muted-foreground">Registra y consulta ventas de todos los locales</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-primary" />
              Registrar Nueva Venta
            </CardTitle>
            <CardDescription>Completa el formulario para registrar una venta</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="local">Local</Label>
              <Select>
                <SelectTrigger id="local">
                  <SelectValue placeholder="Selecciona un local" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="centro">Local Centro</SelectItem>
                  <SelectItem value="norte">Local Norte</SelectItem>
                  <SelectItem value="sur">Local Sur</SelectItem>
                  <SelectItem value="este">Local Este</SelectItem>
                  <SelectItem value="oeste">Local Oeste</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="producto">Producto</Label>
              <Select>
                <SelectTrigger id="producto">
                  <SelectValue placeholder="Selecciona un producto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pizza">Pizza Margherita</SelectItem>
                  <SelectItem value="pasta">Pasta Carbonara</SelectItem>
                  <SelectItem value="ensalada">Ensalada César</SelectItem>
                  <SelectItem value="hamburguesa">Hamburguesa Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cantidad">Cantidad</Label>
                <Input id="cantidad" type="number" placeholder="1" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="precio">Precio Unitario</Label>
                <Input id="precio" type="number" placeholder="1200" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="metodoPago">Método de Pago</Label>
              <Select>
                <SelectTrigger id="metodoPago">
                  <SelectValue placeholder="Selecciona método" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="efectivo">Efectivo</SelectItem>
                  <SelectItem value="tarjeta">Tarjeta</SelectItem>
                  <SelectItem value="transferencia">Transferencia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vendedor">Vendedor</Label>
              <Input id="vendedor" placeholder="Nombre del vendedor" />
            </div>

            <Button className="w-full bg-gradient-primary hover:opacity-90">
              Registrar Venta
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-accent" />
              Ventas Recientes
            </CardTitle>
            <CardDescription>Últimas ventas registradas hoy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {ventasRecientes.map((venta) => (
                <div
                  key={venta.id}
                  className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-foreground">{venta.producto}</p>
                      <p className="text-sm text-muted-foreground">{venta.local}</p>
                    </div>
                    <span className="text-sm font-medium text-success">{venta.total}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>Cantidad: {venta.cantidad}</span>
                    <span>{venta.fecha}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Ver Todas las Ventas
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
