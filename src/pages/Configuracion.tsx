import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, MapPin, Users, Package, Bell } from "lucide-react";

export default function Configuracion() {
  const configSections = [
    {
      icon: MapPin,
      title: "Gestión de Locales",
      description: "Administra los locales y el depósito central",
      action: "Configurar Locales",
    },
    {
      icon: Package,
      title: "Productos y Precios",
      description: "Gestiona el catálogo de productos y precios",
      action: "Gestionar Productos",
    },
    {
      icon: Users,
      title: "Usuarios y Roles",
      description: "Control de accesos y permisos del sistema",
      action: "Administrar Usuarios",
    },
    {
      icon: Bell,
      title: "Alertas y Notificaciones",
      description: "Configura alertas de stock y notificaciones",
      action: "Configurar Alertas",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Configuración</h1>
        <p className="text-muted-foreground">Administra los parámetros del sistema</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {configSections.map((section, index) => (
          <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <section.icon className="h-5 w-5 text-primary" />
                {section.title}
              </CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                {section.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-accent" />
            Parámetros del Sistema
          </CardTitle>
          <CardDescription>Configuración general del sistema de gestión</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
              <div>
                <p className="font-medium text-foreground">Nivel mínimo de stock</p>
                <p className="text-sm text-muted-foreground">Umbral para generar alertas</p>
              </div>
              <Button variant="outline" size="sm">Editar</Button>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
              <div>
                <p className="font-medium text-foreground">Zonas de distribución</p>
                <p className="text-sm text-muted-foreground">Áreas y horarios de reparto</p>
              </div>
              <Button variant="outline" size="sm">Editar</Button>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
              <div>
                <p className="font-medium text-foreground">Integración con facturación</p>
                <p className="text-sm text-muted-foreground">Conexión con sistema de facturas</p>
              </div>
              <Button variant="outline" size="sm">Configurar</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
