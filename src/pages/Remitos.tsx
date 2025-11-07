import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Clock, Truck, CheckCircle2, MapPin } from "lucide-react";

export default function Remitos() {
  const remitos = [
    {
      id: "REM-001",
      local: "Local Norte",
      productos: [
        { nombre: "Tomate Triturado", cantidad: 15, unidad: "latas" },
        { nombre: "Harina 000", cantidad: 20, unidad: "kg" },
      ],
      estado: "pendiente",
      fecha: "2024-03-15",
      hora: "10:30",
    },
    {
      id: "REM-002",
      local: "Local Este",
      productos: [
        { nombre: "Pasta Seca", cantidad: 15, unidad: "kg" },
        { nombre: "Queso Mozzarella", cantidad: 10, unidad: "kg" },
      ],
      estado: "en_reparto",
      fecha: "2024-03-15",
      hora: "09:45",
    },
    {
      id: "REM-003",
      local: "Local Centro",
      productos: [
        { nombre: "Aceite de Oliva", cantidad: 10, unidad: "litros" },
        { nombre: "Lechuga", cantidad: 30, unidad: "unidades" },
      ],
      estado: "entregado",
      fecha: "2024-03-15",
      hora: "08:15",
    },
  ];

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "pendiente":
        return (
          <Badge className="bg-muted text-muted-foreground border-border">
            <Clock className="h-3 w-3 mr-1" />
            Pendiente
          </Badge>
        );
      case "en_reparto":
        return (
          <Badge className="bg-primary/10 text-primary border-primary/20">
            <Truck className="h-3 w-3 mr-1" />
            En Reparto
          </Badge>
        );
      case "entregado":
        return (
          <Badge className="bg-success/10 text-success border-success/20">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Entregado
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestión de Remitos</h1>
          <p className="text-muted-foreground">Control de distribución y entregas</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <MapPin className="h-4 w-4 mr-2" />
          Optimizar Rutas
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="text-2xl font-bold text-foreground">1</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">En Reparto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold text-foreground">1</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Entregados Hoy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <span className="text-2xl font-bold text-foreground">5</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {remitos.map((remito) => (
          <Card key={remito.id} className="shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-accent" />
                    {remito.id}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <MapPin className="h-3 w-3" />
                    {remito.local} • {remito.fecha} {remito.hora}
                  </CardDescription>
                </div>
                {getEstadoBadge(remito.estado)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Productos:</p>
                {remito.productos.map((producto, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-2 rounded bg-secondary/50"
                  >
                    <span className="text-sm text-foreground">{producto.nombre}</span>
                    <span className="text-sm text-muted-foreground">
                      {producto.cantidad} {producto.unidad}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                {remito.estado === "pendiente" && (
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90">
                    Iniciar Reparto
                  </Button>
                )}
                {remito.estado === "en_reparto" && (
                  <Button size="sm" variant="outline" className="flex-1">
                    Marcar como Entregado
                  </Button>
                )}
                <Button size="sm" variant="outline">
                  Imprimir
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
