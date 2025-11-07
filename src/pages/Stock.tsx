import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, AlertTriangle, CheckCircle, Truck } from "lucide-react";

export default function Stock() {
  const stockItems = [
    { id: 1, producto: "Harina 000", cantidad: 45, minimo: 50, unidad: "kg", local: "Depósito Central", estado: "bajo" },
    { id: 2, producto: "Queso Mozzarella", cantidad: 120, minimo: 100, unidad: "kg", local: "Depósito Central", estado: "normal" },
    { id: 3, producto: "Tomate Triturado", cantidad: 15, minimo: 30, unidad: "latas", local: "Local Norte", estado: "critico" },
    { id: 4, producto: "Aceite de Oliva", cantidad: 80, minimo: 50, unidad: "litros", local: "Depósito Central", estado: "normal" },
    { id: 5, producto: "Pasta Seca", cantidad: 25, minimo: 40, unidad: "kg", local: "Local Este", estado: "bajo" },
    { id: 6, producto: "Lechuga", cantidad: 150, minimo: 100, unidad: "unidades", local: "Depósito Central", estado: "normal" },
  ];

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "critico":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Crítico</Badge>;
      case "bajo":
        return <Badge className="bg-warning/10 text-warning-foreground border-warning/20">Bajo</Badge>;
      default:
        return <Badge className="bg-success/10 text-success border-success/20">Normal</Badge>;
    }
  };

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case "critico":
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case "bajo":
        return <Package className="h-5 w-5 text-warning" />;
      default:
        return <CheckCircle className="h-5 w-5 text-success" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Control de Stock</h1>
        <p className="text-muted-foreground">Monitoreo de inventario por local y depósito central</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Productos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold text-foreground">156</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">En todos los locales</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Alertas Activas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span className="text-2xl font-bold text-foreground">7</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Requieren reposición</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Remitos Generados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-accent" />
              <span className="text-2xl font-bold text-foreground">3</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Pendientes de envío</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Inventario Detallado</CardTitle>
          <CardDescription>Estado actual del stock en todos los puntos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {stockItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-4">
                  {getEstadoIcon(item.estado)}
                  <div>
                    <p className="font-semibold text-foreground">{item.producto}</p>
                    <p className="text-sm text-muted-foreground">{item.local}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-medium text-foreground">
                      {item.cantidad} {item.unidad}
                    </p>
                    <p className="text-xs text-muted-foreground">Mínimo: {item.minimo}</p>
                  </div>
                  {getEstadoBadge(item.estado)}
                  {item.estado !== "normal" && (
                    <Button size="sm" variant="outline" className="ml-2">
                      Generar Remito
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
