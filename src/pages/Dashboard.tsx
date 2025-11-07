import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Package, TrendingUp, AlertTriangle, MapPin, FileText } from "lucide-react";

export default function Dashboard() {
  const locales = [
    { id: 1, nombre: "Local Centro", ventas: "$45,230", stock: "Normal" },
    { id: 2, nombre: "Local Norte", ventas: "$38,920", stock: "Bajo" },
    { id: 3, nombre: "Local Sur", ventas: "$52,100", stock: "Normal" },
    { id: 4, nombre: "Local Este", ventas: "$41,780", stock: "Crítico" },
    { id: 5, nombre: "Local Oeste", ventas: "$39,450", stock: "Normal" },
  ];

  const remitos = [
    { id: 1, local: "Local Norte", productos: 12, estado: "Pendiente" },
    { id: 2, local: "Local Este", productos: 8, estado: "En Reparto" },
    { id: 3, local: "Local Centro", productos: 15, estado: "Entregado" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Resumen general del sistema</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Ventas del Día"
          value="$217,480"
          icon={DollarSign}
          description="+12.5% vs ayer"
          trend="up"
        />
        <StatCard
          title="Productos Vendidos"
          value="1,284"
          icon={Package}
          description="+8.2% vs ayer"
          trend="up"
        />
        <StatCard
          title="Alertas de Stock"
          value="7"
          icon={AlertTriangle}
          description="Requieren atención"
          trend="down"
        />
        <StatCard
          title="Remitos Pendientes"
          value="3"
          icon={FileText}
          description="Para distribución"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Estado de Locales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {locales.map((local) => (
                <div
                  key={local.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div>
                    <p className="font-medium text-foreground">{local.nombre}</p>
                    <p className="text-sm text-muted-foreground">Ventas: {local.ventas}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      local.stock === "Normal"
                        ? "bg-success/10 text-success"
                        : local.stock === "Bajo"
                        ? "bg-warning/10 text-warning-foreground"
                        : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    {local.stock}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              Remitos Recientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {remitos.map((remito) => (
                <div
                  key={remito.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div>
                    <p className="font-medium text-foreground">{remito.local}</p>
                    <p className="text-sm text-muted-foreground">
                      {remito.productos} productos
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      remito.estado === "Entregado"
                        ? "bg-success/10 text-success"
                        : remito.estado === "En Reparto"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {remito.estado}
                  </span>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-gradient-primary hover:opacity-90">
              Ver Todos los Remitos
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
