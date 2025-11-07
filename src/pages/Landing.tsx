import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Package, 
  FileText, 
  Users, 
  TrendingUp, 
  MapPin,
  CheckCircle2,
  BarChart3
} from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Gestión de Ventas",
      description: "Registra y controla todas las ventas de tus locales en tiempo real"
    },
    {
      icon: Package,
      title: "Control de Stock",
      description: "Monitoreo inteligente de inventario con alertas automáticas"
    },
    {
      icon: FileText,
      title: "Remitos Automáticos",
      description: "Genera remitos al instante cuando detecta falta de stock"
    },
    {
      icon: MapPin,
      title: "Rutas Optimizadas",
      description: "Algoritmo que optimiza las rutas de distribución"
    },
    {
      icon: Users,
      title: "Gestión de Clientes",
      description: "Historial completo de compras y datos de clientes"
    },
    {
      icon: BarChart3,
      title: "Reportes y Analytics",
      description: "Visualiza el rendimiento de cada local en tiempo real"
    }
  ];

  const benefits = [
    "Elimina talonarios físicos y papeles",
    "Centraliza toda la información",
    "Optimiza la logística entre locales",
    "Alertas automáticas de stock bajo",
    "Reportes en tiempo real",
    "Gestión multi-local simplificada"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Hero Section */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">GastroManager</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Comenzar Gratis</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          Sistema Integral de Gestión
          <span className="block text-primary mt-2">para tu Franquicia Gastronómica</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Controla ventas, stock y distribución de todos tus locales desde una sola plataforma. 
          Adiós a los talonarios, bienvenida la eficiencia.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/register">Comenzar Ahora</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/login">Ver Demo</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Todo lo que necesitas en un solo lugar
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Beneficios para tu negocio
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-success shrink-0 mt-1" />
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="pt-12 pb-12">
            <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              ¿Listo para modernizar tu franquicia?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Únete a las franquicias que ya optimizaron su operación con GastroManager
            </p>
            <Button size="lg" asChild>
              <Link to="/register">Comenzar Gratis Ahora</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 GastroManager. Sistema de gestión para franquicias gastronómicas.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
