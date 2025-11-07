import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Search, Star } from "lucide-react";

export default function Clientes() {
  const clientes = [
    { id: 1, nombre: "Juan Pérez", email: "juan@email.com", telefono: "11-2345-6789", compras: 45, total: "$54,200" },
    { id: 2, nombre: "María García", email: "maria@email.com", telefono: "11-3456-7890", compras: 32, total: "$38,950" },
    { id: 3, nombre: "Carlos López", email: "carlos@email.com", telefono: "11-4567-8901", compras: 28, total: "$32,100" },
    { id: 4, nombre: "Ana Martínez", email: "ana@email.com", telefono: "11-5678-9012", compras: 52, total: "$67,800" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Gestión de Clientes</h1>
        <p className="text-muted-foreground">Administra tu base de clientes y su historial</p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            Buscar Cliente
          </CardTitle>
          <CardDescription>Encuentra clientes por nombre, email o teléfono</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input placeholder="Buscar cliente..." className="flex-1" />
            <Button className="bg-gradient-primary hover:opacity-90">Buscar</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                Clientes Registrados
              </CardTitle>
              <CardDescription>Total de clientes activos: {clientes.length}</CardDescription>
            </div>
            <Button variant="outline">Agregar Cliente</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {clientes.map((cliente) => (
              <div
                key={cliente.id}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-foreground">{cliente.nombre}</p>
                    {cliente.compras > 40 && (
                      <Star className="h-4 w-4 text-warning fill-warning" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{cliente.email}</p>
                  <p className="text-sm text-muted-foreground">{cliente.telefono}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">{cliente.total}</p>
                  <p className="text-sm text-muted-foreground">{cliente.compras} compras</p>
                </div>
                <Button variant="outline" size="sm" className="ml-4">
                  Ver Historial
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
