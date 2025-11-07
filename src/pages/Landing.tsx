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
    <div className="min-h-screen bg-gradient-to-br from-background via-green-soft/5 to-green-medium/5">
      {/* Hero Section */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 animate-fade-in-left">
            <ShoppingCart className="h-8 w-8 text-primary animate-float" />
            <span className="text-2xl font-bold text-foreground">GastroManager</span>
          </div>
          <div className="flex gap-4 animate-fade-in-right">
            <Button variant="ghost" asChild className="hover:scale-105 transition-transform duration-200">
              <Link to="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild className="shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
              <Link to="/register">Comenzar Gratis</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <section className="container mx-auto px-4 py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-50 rounded-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Sistema Integral de Gestión
            <span className="block text-primary-light mt-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>para tu Franquicia Gastronómica</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Controla ventas, stock y distribución de todos tus locales desde una sola plataforma. 
            Adiós a los talonarios, bienvenida la eficiencia.
          </p>
          <div className="flex gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" asChild className="shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 bg-primary-light hover:bg-primary-light/90">
              <Link to="/register">Comenzar Ahora</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-light text-primary-light hover:bg-primary-light/10 hover:scale-105 transition-all duration-300">
              <Link to="/login">Ver Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">
          Todo lo que necesitas en un solo lugar
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border bg-gradient-card hover:shadow-soft transition-all duration-500 hover:scale-105 hover:border-primary-light/30 rounded-2xl group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-xl bg-green-soft/20 flex items-center justify-center group-hover:bg-primary-light/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary-light group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary-light transition-colors duration-300">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-green-soft/10 via-muted/30 to-green-medium/10 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary-light rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-glow rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">
            Beneficios para tu negocio
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-xl bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-soft animate-fade-in-left group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="h-6 w-6 text-success shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary-light/20 via-green-medium/10 to-green-glow/20 border-primary-light/30 shadow-glow rounded-3xl overflow-hidden animate-scale-in">
          <CardContent className="pt-12 pb-12 relative">
            <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
            <div className="relative z-10">
              <TrendingUp className="h-16 w-16 text-primary-light mx-auto mb-6 animate-float" />
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                ¿Listo para modernizar tu franquicia?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Únete a las franquicias que ya optimizaron su operación con GastroManager
              </p>
              <Button size="lg" asChild className="shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-110 bg-primary-light hover:bg-primary-light/90">
                <Link to="/register">Comenzar Gratis Ahora</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary-light/20 bg-gradient-to-br from-card/80 to-green-soft/5 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in">
            <ShoppingCart className="h-6 w-6 text-primary-light" />
            <span className="text-xl font-bold text-foreground">GastroManager</span>
          </div>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            © 2025 GastroManager. Sistema de gestión para franquicias gastronómicas.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
