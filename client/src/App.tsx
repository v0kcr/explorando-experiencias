import { useState, type FormEvent, type ReactNode } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  Send,
  Star,
  Users,
  X,
  Youtube,
} from "lucide-react";

const logoPath = "/manus-storage/pasted_file_MZKs2j_image_306672dd.png";

const photos = {
  machu: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1600&q=85",
  mountain: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
  lake: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
  desert: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85",
  event: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
  community: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",
  city: "https://images.unsplash.com/photo-1470214304380-aadaedcfff1b?auto=format&fit=crop&w=1200&q=85",
};

const services = [
  { icon: "✦", title: "Viajes para solteros", text: "Conecta, explora y colecciona historias en destinos que se viven mejor en buena compañía.", href: "/servicios/viajes-solteros", photo: photos.mountain, label: "Conexión real" },
  { icon: "◌", title: "Eventos corporativos", text: "Experiencias que inspiran equipos, celebran logros y dejan una huella que se comenta.", href: "/servicios/eventos-corporativos", photo: photos.event, label: "Equipos que conectan" },
  { icon: "↗", title: "Otros servicios", text: "Diseñamos escapadas, celebraciones y experiencias a medida para cada ocasión.", href: "/servicios/otros", photo: photos.desert, label: "A tu medida" },
];

const destinations = [
  { title: "Cusco & Valle Sagrado", subtitle: "Historia que se siente", price: "Desde S/ 1,890", days: "5 días / 4 noches", photo: photos.machu },
  { title: "Paracas & Huacachina", subtitle: "Desierto, mar y aventura", price: "Desde S/ 890", days: "3 días / 2 noches", photo: photos.desert },
  { title: "Huaraz: Laguna 69", subtitle: "Respira la cordillera", price: "Desde S/ 760", days: "3 días / 2 noches", photo: photos.lake },
];

const blogPosts = [
  { category: "Viajes", date: "12 SEP 2024", title: "Cómo viajar solo sin sentirte solo", excerpt: "Pequeñas decisiones que transforman un viaje en una colección de conexiones.", photo: photos.mountain },
  { category: "Bienestar", date: "28 AGO 2024", title: "El arte de conversar con desconocidos", excerpt: "Habilidades sociales para abrir la puerta a nuevas historias.", photo: photos.community },
  { category: "Destinos", date: "06 AGO 2024", title: "5 razones para volver a Cusco", excerpt: "Hay lugares que no se visitan una sola vez. Esta es nuestra lista.", photo: photos.machu },
  { category: "Equipos", date: "22 JUL 2024", title: "Team building que sí funciona", excerpt: "Más propósito, menos dinámicas forzadas: diseñar experiencias memorables.", photo: photos.event },
  { category: "Inspiración", date: "04 JUL 2024", title: "Viajar también es una forma de escucharte", excerpt: "Lo que aparece cuando bajas el ruido y cambias de paisaje.", photo: photos.lake },
  { category: "Comunidad", date: "19 JUN 2024", title: "La comunidad que se encuentra en el camino", excerpt: "Historias del Club de Solteros Perú en movimiento.", photo: photos.city },
];

const testimonials = [
  { quote: "Llegué sin conocer a nadie y volví con un grupo de amigos que todavía se reúne cada mes.", name: "Andrea Salazar", role: "Viaje a Cusco · 2024", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" },
  { quote: "El equipo volvió distinto. Más conectado, con conversaciones que siguieron mucho después del evento.", name: "Miguel Torres", role: "People Lead, Nómada Tech", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" },
  { quote: "Cada detalle se sintió cuidado. No fue un tour, fue una experiencia que todavía contamos.", name: "Carla Mendoza", role: "Viaje a Paracas · 2024", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" },
];

function App() {
  return <Switch>
    <Route path="/"><HomePage /></Route>
    <Route path="/quienes-somos"><AboutPage /></Route>
    <Route path="/servicios"><ServicesPage /></Route>
    <Route path="/servicios/viajes-solteros"><SoloTripsPage /></Route>
    <Route path="/servicios/eventos-corporativos"><CorporatePage /></Route>
    <Route path="/servicios/otros"><OtherServicesPage /></Route>
    <Route path="/comunidad/club-solteros"><ClubPage /></Route>
    <Route path="/comunidad/blog"><BlogPage /></Route>
    <Route path="/comunidad/ebook"><EbookPage /></Route>
    <Route path="/productos"><ProductsPage /></Route>
    <Route path="/testimonios"><TestimonialsPage /></Route>
    <Route path="/contacto"><ContactPage /></Route>
    <Route path="/privacy-policy"><PrivacyPage /></Route>
    <Route><HomePage /></Route>
  </Switch>;
}

function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const closeMenu = () => setMenuOpen(false);
  const isActive = (href: string) => location === href;
  return <div className="app-shell">
    <div className="announcement" style={{ backgroundColor: "#cf6e6e" }}><div className="container announcement-inner"><span>✦ Vive Perú de una forma distinta</span><span>Diseñamos momentos que se quedan.</span><a href="https://wa.me/51999999999" target="_blank" rel="noreferrer" style={{ color: "#225d3f" }}>Escríbenos por WhatsApp <ArrowRight size={13} /></a></div></div>
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="logo-link" onClick={closeMenu}><img src={logoPath} alt="Explorando Experiencias" /><span>Explorando<br /><b>Experiencias</b></span></Link>
        <button className="mobile-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menú" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <Link className={isActive("/") ? "active" : ""} href="/" onClick={closeMenu}>Inicio</Link>
          <Link className={isActive("/quienes-somos") ? "active" : ""} href="/quienes-somos" onClick={closeMenu}>Quiénes Somos</Link>
          <NavDropdown label="Servicios" items={[['Viajes para Solteros','/servicios/viajes-solteros'],['Eventos Corporativos','/servicios/eventos-corporativos'],['Otros Servicios','/servicios/otros']]} closeMenu={closeMenu} />
          <NavDropdown label="Comunidad" items={[['Club de Solteros Perú','/comunidad/club-solteros'],['Blog','/comunidad/blog'],['Ebook Habilidades Sociales','/comunidad/ebook']]} closeMenu={closeMenu} />
          <Link href="/productos" onClick={closeMenu}>Productos</Link>
          <Link href="/testimonios" onClick={closeMenu}>Testimonios</Link>
          <Link href="/contacto" onClick={closeMenu}>Contacto</Link>
          <a className="nav-cta" href="https://wa.me/51999999999" target="_blank" rel="noreferrer">Reserva tu experiencia <ArrowRight size={15} /></a>
        </nav>
      </div>
    </header>
    {children}
    <Footer />
    <a className="whatsapp-float" href="https://wa.me/51999999999" target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><MessageCircle size={23} /><span>¡Hablemos!</span></a>
  </div>;
}

function NavDropdown({ label, items, closeMenu }: { label: string; items: string[][]; closeMenu: () => void }) {
  return <div className="nav-dropdown"><button>{label} <ChevronDown size={14} /></button><div className="dropdown-menu">{items.map(([name, href]) => <Link key={href} href={href} onClick={closeMenu}>{name}<ChevronRight size={14} /></Link>)}</div></div>;
}

function SectionHeading({ eyebrow, title, text, centered = false }: { eyebrow: string; title: ReactNode; text?: string; centered?: boolean }) {
  return <div className={`section-heading ${centered ? "centered" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "outline" | "light" }) {
  return <Link className={`button ${variant}`} href={href}>{children}<ArrowRight size={16} /></Link>;
}

function ImageCard({ photo, title, label, href }: { photo: string; title: string; label: string; href: string }) {
  return <Link href={href} className="image-card" style={{ backgroundImage: `linear-gradient(180deg, transparent 25%, rgba(16,24,18,.86) 100%), url(${photo})` }}><span className="card-label">{label}</span><div><h3>{title}</h3><span className="card-arrow"><ArrowUpRightIcon /></span></div></Link>;
}
function ArrowUpRightIcon() { return <ArrowRight size={17} />; }

function HomePage() {
  return <Layout><main>
    <section className="home-hero"><div className="hero-backdrop" /><div className="container hero-content"><div className="hero-copy"><span className="eyebrow light">Viajes · Eventos · Comunidad</span><h1>El mundo se ve<br /><em style={{ color: "#cf6e6e" }}>mejor acompañado.</em></h1><p>Diseñamos experiencias que despiertan tus sentidos, conectan personas y convierten cada destino en una historia para contar.</p><div className="hero-actions"><ButtonLink href="/servicios/viajes-solteros">Reserva tu experiencia</ButtonLink><Link className="play-link" href="/quienes-somos"><span className="play-circle"><Play size={14} fill="currentColor" /></span> Conoce nuestra historia</Link></div></div><div className="hero-stamp" style={{ borderColor: "#bd2f2d", borderRadius: "500px", borderWidth: "10px", backgroundColor: "#cf6e6e" }}><span style={{ color: "#bd2f2d", fontSize: "12px", fontWeight: 900 }}>PERÚ</span><b style={{ color: "#ffffff" }}>↗</b><small style={{ color: "#fafafa" }}>Experiencias<br />con intención</small></div></div><div className="hero-bottom container"><span>Explorando Experiencias · Lima / Perú</span><span>Scroll para descubrir <ArrowRight size={14} /></span></div></section>
    <section className="intro-section container"><div className="intro-aside"><span className="section-index">01</span><div className="line" /></div><div className="intro-body"><SectionHeading eyebrow="Lo que hacemos" title={<>No organizamos viajes.<br /><em>Diseñamos recuerdos.</em></>} text="Somos una empresa peruana que cree en el poder de vivir algo nuevo junto a las personas correctas. Curamos cada detalle para que tú solo tengas que disfrutar el momento." /><ButtonLink href="/quienes-somos" variant="outline">Conócenos mejor</ButtonLink></div><div className="intro-note"><span>01 / 03</span><p>Del primer mensaje<br />a la última foto.</p></div></section>
    <section className="services-home section-soft"><div className="container"><SectionHeading eyebrow="Elige cómo quieres explorar" title={<>Una experiencia para<br /><em>cada forma de vivir.</em></>} /><div className="card-grid">{services.map((service) => <ImageCard key={service.href} photo={service.photo} title={service.title} label={service.label} href={service.href} />)}</div><div className="center-link"><Link href="/servicios">Ver todos nuestros servicios <ArrowRight size={16} /></Link></div></div></section>
    <section className="featured-testimonial container"><div className="quote-mark">“</div><div><span className="eyebrow">Historias que inspiran</span><blockquote>“El viaje empezó en el aeropuerto, pero la amistad se quedó para siempre.”</blockquote><div className="quote-author"><img src={testimonials[0].photo} alt={testimonials[0].name} /><span><b>{testimonials[0].name}</b><small>{testimonials[0].role}</small></span></div></div><Link href="/testimonios" className="round-arrow"><ArrowRight size={20} /></Link></section>
    <section className="club-banner"><div className="container club-inner"><div className="club-copy"><span className="eyebrow light">Comunidad EE</span><h2>Tu próxima aventura<br /><em>empieza con un hola.</em></h2><p>El Club de Solteros Perú reúne a personas que quieren viajar, conocer y vivir más. Sin poses, con curiosidad.</p><ButtonLink href="/comunidad/club-solteros" variant="light">Conoce el club</ButtonLink></div><div className="club-photo" style={{ backgroundImage: `url(${photos.community})` }}><span>+ 350<br /><small>personas<br />conectadas</small></span></div></div></section>
    <section className="blog-preview container"><div className="split-heading"><SectionHeading eyebrow="Desde nuestro blog" title={<>Ideas para vivir<br /><em>más historias.</em></>} /><Link href="/comunidad/blog" className="under-link">Ver todos los artículos <ArrowRight size={16} /></Link></div><div className="blog-grid">{blogPosts.slice(0, 3).map((post) => <BlogCard post={post} key={post.title} />)}</div></section>
    <CtaStrip />
  </main></Layout>;
}

function AboutPage() {
  return <Layout><main><PageHero eyebrow="Quiénes somos" title={<>Viajamos para<br /><em>conectar.</em></>} text="Explorando Experiencias nació de una pregunta simple: ¿qué pasaría si cada viaje dejara algo más que fotos?" photo={photos.mountain} />
    <section className="story-section container two-col"><div className="story-image tall-image" style={{ backgroundImage: `url(${photos.machu})` }}><span>Desde 2018<br /><b>Perú, con intención.</b></span></div><div className="story-copy"><span className="eyebrow">Nuestra historia</span><h2>Empezamos con una<br /><em>mochila y una idea.</em></h2><p>Explorando Experiencias nació en Lima, con el deseo de hacer los viajes más humanos. No queríamos vender paquetes: queríamos crear espacios donde las personas pudieran sentirse curiosas, libres y acompañadas.</p><p>Hoy diseñamos viajes, eventos y comunidades con el mismo cuidado con el que elegiríamos una experiencia para nuestros propios amigos.</p><div className="signature">EE<span>✦</span></div></div></section>
    <section className="values-section section-soft"><div className="container"><SectionHeading eyebrow="Lo que nos mueve" title={<>Nuestra brújula<br /><em>tiene tres puntos.</em></>} /><div className="values-grid"><Value icon="01" title="Curiosidad" text="Mirar de nuevo. Preguntar más. Dejar espacio para la sorpresa." /><Value icon="02" title="Conexión" text="Creemos que los mejores destinos son las personas que conoces en el camino." /><Value icon="03" title="Cuidado" text="Cada detalle cuenta cuando quieres que alguien se sienta bienvenido." /></div></div></section>
    <section className="team-section container"><SectionHeading eyebrow="El equipo detrás" title={<>Personas que hacen<br /><em>que suceda.</em></>} /><div className="team-grid"><Team name="Luz María" role="Fundadora & directora de experiencias" photo="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" /><Team name="Diego" role="Curador de destinos" photo="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" /><Team name="Camila" role="Comunidad & eventos" photo="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=600&q=80" /></div></section><CtaStrip /></main></Layout>;
}

function ServicesPage() {
  return <Layout><main><PageHero eyebrow="Servicios" title={<>Tu próxima historia<br /><em>empieza aquí.</em></>} text="Desde un fin de semana en el desierto hasta un evento que transforma equipos: tú imaginas el momento, nosotros lo hacemos posible." photo={photos.desert} /><section className="service-list container">{services.map((service, index) => <article className="service-row" key={service.href}><div className="service-number">0{index + 1}</div><div className="service-row-photo" style={{ backgroundImage: `url(${service.photo})` }} /><div className="service-row-copy"><span className="eyebrow">{service.label}</span><h2>{service.title}</h2><p>{service.text}</p><ButtonLink href={service.href} variant="outline">Explorar servicio</ButtonLink></div></article>)}</section><CtaStrip /></main></Layout>;
}

function SoloTripsPage() {
  return <Layout><main><PageHero eyebrow="Viajes para solteros" title={<>Viaja solo.<br /><em>Llega acompañado.</em></>} text="Grupos pequeños, destinos inolvidables y la libertad de ser tú mismo desde el primer kilómetro." photo={photos.lake} /><section className="container destination-section"><SectionHeading eyebrow="Destinos que esperan" title={<>Elige tu<br /><em>próxima historia.</em></>} /><div className="destination-grid">{destinations.map((destination) => <DestinationCard key={destination.title} destination={destination} />)}</div></section><section className="itinerary-section section-soft"><div className="container two-col"><div><span className="eyebrow">Cómo se vive</span><h2>Un itinerario que<br /><em>deja espacio.</em></h2><p>Planificamos lo importante y dejamos que el destino haga lo suyo. Con acompañamiento local, grupos de máximo 16 personas y momentos que no aparecen en el programa.</p><div className="check-list"><span><Check size={16} /> Traslados y hospedaje seleccionados</span><span><Check size={16} /> Guía anfitrión durante todo el viaje</span><span><Check size={16} /> Actividades para conectar sin presión</span></div></div><div className="mini-timeline"><Timeline day="Día 01" title="Llegar con curiosidad" text="Recibimiento, cena de bienvenida y primeras historias." /><Timeline day="Día 02" title="Explorar sin prisa" text="Una ruta con vistas, sabores y sorpresas." /><Timeline day="Día 03" title="Llevarte algo más" text="Despedida, fotos y un grupo que recién empieza." /></div></div></section><section className="form-section container"><div className="form-intro"><span className="eyebrow">Reserva tu lugar</span><h2>¿Listo para<br /><em>conocer el camino?</em></h2><p>Déjanos tus datos y te enviaremos el próximo calendario, disponibilidad y detalles del viaje.</p></div><DemoForm button="Quiero información" /></section></main></Layout>;
}

function CorporatePage() {
  return <Layout><main><PageHero eyebrow="Eventos corporativos" title={<>Equipos que<br /><em>se sienten equipo.</em></>} text="Creamos experiencias corporativas con propósito: para celebrar, alinear, agradecer y volver a mirarse distinto." photo={photos.event} /><section className="container corporate-types"><SectionHeading eyebrow="Lo que podemos crear" title={<>El formato cambia.<br /><em>La conexión queda.</em></>} /><div className="type-grid"><TypeCard number="01" title="Team building" text="Actividades que convierten compañeros en aliados." /><TypeCard number="02" title="Retiros de liderazgo" text="Espacios para pensar mejor y decidir juntos." /><TypeCard number="03" title="Celebraciones" text="Momentos que hacen visible todo lo que lograron." /></div></section><section className="gallery-section section-soft"><div className="container"><div className="gallery-heading"><SectionHeading eyebrow="Una mirada al detrás" title={<>Así se ve cuando<br /><em>el equipo conecta.</em></>} /><span className="gallery-note">Fotos de experiencias reales<br />y momentos espontáneos.</span></div><div className="masonry-gallery"><div style={{ backgroundImage: `url(${photos.event})` }} /><div style={{ backgroundImage: `url(${photos.community})` }} /><div style={{ backgroundImage: `url(${photos.mountain})` }} /><div style={{ backgroundImage: `url(${photos.lake})` }} /></div></div></section><section className="form-section container"><div className="form-intro"><span className="eyebrow">Hablemos de tu equipo</span><h2>Diseñemos algo<br /><em>que recuerden.</em></h2><p>Cuéntanos el objetivo, el tamaño del grupo y la fecha tentativa. Te responderemos con una propuesta inicial.</p></div><DemoForm button="Solicitar cotización" corporate /></section></main></Layout>;
}

function OtherServicesPage() {
  const extras = ["Escapadas personalizadas", "Celebraciones privadas", "Experiencias gastronómicas", "Actividades de aventura", "Traslados y logística", "Acompañamiento para grupos"];
  return <Layout><main><PageHero eyebrow="Otros servicios" title={<>Si tienes una idea,<br /><em>la aterrizamos.</em></>} text="Hay momentos que no caben en un paquete. Diseñamos experiencias a medida para personas, grupos y marcas." photo={photos.city} /><section className="container extras-section"><SectionHeading eyebrow="Más formas de explorar" title={<>Lo que imaginas,<br /><em>en movimiento.</em></>} /><div className="extras-list">{extras.map((extra, index) => <div className="extra-item" key={extra}><span>0{index + 1}</span><h3>{extra}</h3><ArrowRight size={18} /></div>)}</div></section><CtaStrip /></main></Layout>;
}

function ClubPage() {
  return <Layout><main><PageHero eyebrow="Club de Solteros Perú" title={<>Más que un club.<br /><em>Tu gente.</em></>} text="Una comunidad para quienes quieren viajar, conocer personas interesantes y decirle sí a los planes que antes postergaban." photo={photos.community} /><section className="container club-benefits"><SectionHeading eyebrow="Ser parte se siente así" title={<>Un lugar para<br /><em>llegar siendo tú.</em></>} /><div className="benefit-grid"><Value icon="✦" title="Planes con intención" text="Encuentros, viajes y actividades pensadas para conversar y conectar." /><Value icon="◎" title="Gente compatible" text="Una comunidad diversa, curiosa y abierta a nuevas historias." /><Value icon="↗" title="Más momentos" text="Porque la vida también se construye con los planes que sí aceptas." /></div></section><section className="events-section section-soft"><div className="container"><SectionHeading eyebrow="Próximos encuentros" title={<>¿Dónde nos<br /><em>vemos?</em></>} /><div className="event-list"><EventItem date="21" month="SEP" title="Picnic & conexiones" place="Parque El Olivar · Lima" tag="Cupos disponibles" /><EventItem date="05" month="OCT" title="Atardecer en Paracas" place="Full day · 24 personas" tag="Últimos 6 cupos" /><EventItem date="19" month="OCT" title="Noche de trivias" place="Barranco · Lima" tag="Próximamente" /></div></div></section><section className="form-section container"><div className="form-intro"><span className="eyebrow">Únete a la comunidad</span><h2>Tu próximo plan<br /><em>puede empezar hoy.</em></h2><p>Déjanos tu email y te avisaremos de los próximos encuentros del Club.</p></div><DemoForm button="Quiero unirme" /></section></main></Layout>;
}

function BlogPage() {
  return <Layout><main><PageHero eyebrow="Blog" title={<>Ideas para<br /><em>vivir más.</em></>} text="Historias, herramientas e inspiración para viajar con curiosidad y volver con algo nuevo." photo={photos.lake} /><section className="container blog-page"><div className="category-tabs"><span className="selected">Todos</span><span>Viajes</span><span>Bienestar</span><span>Comunidad</span><span>Equipos</span></div><div className="blog-grid full">{blogPosts.map((post) => <BlogCard post={post} key={post.title} />)}</div></section></main></Layout>;
}

function EbookPage() {
  return <Layout><main><section className="ebook-hero"><div className="container ebook-inner"><div className="ebook-copy"><span className="eyebrow">Guía gratuita · 48 páginas</span><h1>Conversar también<br /><em>es viajar.</em></h1><p>Descarga el ebook de habilidades sociales para sentirte más cómodo iniciando conversaciones, conociendo gente y ocupando tu lugar en cualquier espacio.</p><div className="ebook-points"><span><Check size={16} /> 7 herramientas sencillas</span><span><Check size={16} /> Ejercicios para practicar</span><span><Check size={16} /> Escrito en Perú, para ti</span></div></div><div className="ebook-cover"><div className="cover-label">EXPLORANDO<br /><b>EXPERIENCIAS</b></div><div className="cover-art">✦<br /><span>◡</span></div><small>HABILIDADES<br />SOCIALES</small></div></div></section><section className="ebook-form-section container"><div><span className="eyebrow">Descarga tu copia</span><h2>Un pequeño paso<br /><em>hacia más conexiones.</em></h2></div><DemoForm button="Descargar ebook" ebook /></section></main></Layout>;
}

function ProductsPage() {
  const products = [{ name: "Kit viajero EE", desc: "Libreta, tote bag y stickers para llevar tu próxima historia contigo.", price: "S/ 79", photo: photos.mountain }, { name: "Gift card experiencia", desc: "Regala un momento que no termina en una caja.", price: "Desde S/ 150", photo: photos.machu }, { name: "Ebook Habilidades Sociales", desc: "La guía digital para conversar con más confianza.", price: "Gratis", photo: photos.community }];
  return <Layout><main><PageHero eyebrow="Productos" title={<>Llévate un pedacito<br /><em>de la experiencia.</em></>} text="Pequeños objetos, grandes intenciones. Diseñados para regalar, recordar y volver a salir." photo={photos.machu} /><section className="container products-section"><div className="products-grid">{products.map((product) => <article className="product-card" key={product.name}><div className="product-photo" style={{ backgroundImage: `url(${product.photo})` }} /><div className="product-body"><span className="product-tag">Explorando Experiencias</span><h3>{product.name}</h3><p>{product.desc}</p><div><strong>{product.price}</strong><button>Ver detalle <ArrowRight size={15} /></button></div></div></article>)}</div></section></main></Layout>;
}

function TestimonialsPage() {
  return <Layout><main><PageHero eyebrow="Testimonios" title={<>Lo que queda<br /><em>después del viaje.</em></>} text="No hay mejor forma de contarlo que con las voces de quienes ya vivieron una experiencia con nosotros." photo={photos.community} /><section className="container testimonials-page"><div className="testimonial-grid">{testimonials.map((testimonial) => <article className="testimonial-card" key={testimonial.name}><div className="stars">{[1,2,3,4,5].map((star) => <Star key={star} size={16} fill="currentColor" />)}</div><blockquote>“{testimonial.quote}”</blockquote><div className="testimonial-author"><img src={testimonial.photo} alt={testimonial.name} /><span><b>{testimonial.name}</b><small>{testimonial.role}</small></span></div></article>)}</div></section><section className="marquee-section"><div>VIAJAR · CONECTAR · RECORDAR · VIAJAR · CONECTAR · RECORDAR ·</div></section><CtaStrip /></main></Layout>;
}

function ContactPage() {
  return <Layout><main><PageHero eyebrow="Contacto" title={<>Hagamos espacio<br /><em>para lo nuevo.</em></>} text="Una pregunta, una idea o una fecha que quieres reservar. Estamos al otro lado." photo={photos.city} /><section className="container contact-page"><div className="contact-details"><span className="eyebrow">Hablemos</span><h2>El próximo gran<br /><em>plan empieza aquí.</em></h2><div className="contact-info"><div><MapPin size={18} /><span>Lima, Perú<br /><small>Atendemos de lunes a viernes</small></span></div><div><MessageCircle size={18} /><span>+51 999 999 999<br /><small>WhatsApp · respuesta rápida</small></span></div><div><Send size={18} /><span>hola@explorandoexperiencias.pe<br /><small>Cuéntanos tu idea</small></span></div></div></div><DemoForm button="Enviar mensaje" /></section><section className="map-placeholder"><div className="container"><div className="map-card"><div className="map-pin"><MapPin size={25} /></div><div><span>Lima, Perú</span><small>Donde empiezan las historias</small></div></div></div></section></main></Layout>;
}

function PrivacyPage() {
  return <Layout><main><PageHero eyebrow="Información legal" title={<>Privacy<br /><em>Policy.</em></>} text="Tu confianza importa. Aquí explicamos de forma clara cómo cuidamos la información que compartes con nosotros." photo={photos.lake} /><section className="container legal-page"><p className="legal-updated">Última actualización: septiembre de 2024</p><h2>Política de privacidad</h2><p>En Explorando Experiencias respetamos tu privacidad y nos comprometemos a proteger los datos personales que nos brindas a través de este sitio web, formularios y canales de contacto.</p><h3>1. Información que recopilamos</h3><p>Podemos solicitar tu nombre, correo electrónico, teléfono y preferencias de viaje cuando llenas un formulario, solicitas información o participas en una actividad.</p><h3>2. Para qué usamos tus datos</h3><p>Usamos esta información para responder tus consultas, coordinar reservas, enviarte novedades cuando lo autorizas y mejorar nuestras experiencias. No vendemos ni alquilamos tus datos personales.</p><h3>3. Cookies y navegación</h3><p>Este sitio puede utilizar cookies técnicas para mejorar la navegación. Puedes configurar tu navegador para rechazarlas, aunque algunas funciones podrían verse afectadas.</p><h3>4. Tus derechos</h3><p>Puedes solicitar acceso, actualización o eliminación de tus datos escribiendo a hola@explorandoexperiencias.pe. Responderemos dentro de los plazos establecidos por la normativa peruana aplicable.</p><h3>5. Contacto</h3><p>Si tienes preguntas sobre esta política, escríbenos. Queremos que entiendas y tengas control sobre la información que compartes.</p></section></main></Layout>;
}

function PageHero({ eyebrow, title, text, photo }: { eyebrow: string; title: ReactNode; text: string; photo: string }) {
  return <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(16,29,20,.93) 0%, rgba(16,29,20,.74) 46%, rgba(16,29,20,.18) 100%), url(${photo})` }}><div className="container page-hero-inner"><span className="eyebrow light">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div><div className="page-hero-meta container"><span>Explorando Experiencias · Perú</span><span>01 — 13</span></div></section>;
}

function Value({ icon, title, text }: { icon: string; title: string; text: string }) { return <div className="value-card"><span className="value-icon">{icon}</span><h3>{title}</h3><p>{text}</p></div>; }
function Team({ name, role, photo }: { name: string; role: string; photo: string }) { return <div className="team-card"><div className="team-photo" style={{ backgroundImage: `url(${photo})` }} /><span className="team-name">{name}</span><span className="team-role">{role}</span></div>; }
function BlogCard({ post }: { post: typeof blogPosts[number] }) { return <Link href="/comunidad/blog" className="blog-card"><div className="blog-photo" style={{ backgroundImage: `url(${post.photo})` }}><span>{post.category}</span></div><div className="blog-body"><small>{post.date}</small><h3>{post.title}</h3><p>{post.excerpt}</p><span className="read-more">Leer artículo <ArrowRight size={15} /></span></div></Link>; }
function DestinationCard({ destination }: { destination: typeof destinations[number] }) { return <article className="destination-card"><div className="destination-photo" style={{ backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(14,24,18,.9)), url(${destination.photo})` }}><span>{destination.days}</span></div><div className="destination-body"><span className="eyebrow">{destination.subtitle}</span><h3>{destination.title}</h3><div><strong>{destination.price}</strong><Link href="/contacto"><ArrowRight size={17} /></Link></div></div></article>; }
function Timeline({ day, title, text }: { day: string; title: string; text: string }) { return <div className="timeline-row"><span>{day}</span><div><h3>{title}</h3><p>{text}</p></div></div>; }
function TypeCard({ number, title, text }: { number: string; title: string; text: string }) { return <div className="type-card"><span>{number}</span><h3>{title}</h3><p>{text}</p><ArrowRight size={17} /></div>; }
function EventItem({ date, month, title, place, tag }: { date: string; month: string; title: string; place: string; tag: string }) { return <div className="event-item"><div className="event-date"><b>{date}</b><span>{month}</span></div><div><h3>{title}</h3><p>{place}</p></div><span className="event-tag">{tag}</span><ArrowRight size={18} /></div>; }

function DemoForm({ button, corporate = false, ebook = false }: { button: string; corporate?: boolean; ebook?: boolean }) {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  if (sent) return <div className="success-state"><div><Check size={22} /></div><h3>¡Listo! Recibimos tus datos.</h3><p>Esta demo simula el envío. En una implementación real, aquí conectaríamos tu formulario con WordPress.</p><button onClick={() => setSent(false)}>Enviar otra respuesta</button></div>;
  return <form className="demo-form" onSubmit={submit}><label>Nombre completo<input required placeholder="Tu nombre" /></label>{!ebook && <label>{corporate ? "Empresa" : "Teléfono"}<input required placeholder={corporate ? "Nombre de tu empresa" : "+51 999 999 999"} /></label>}<label>Email<input type="email" required placeholder="tu@email.com" /></label>{corporate && <label>Cuéntanos un poco más<textarea required placeholder="Número de personas, fecha tentativa, objetivo..." rows={3} /></label>}{!ebook && !corporate && <label>¿Qué destino te interesa?<select defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Cusco & Valle Sagrado</option><option>Paracas & Huacachina</option><option>Huaraz: Laguna 69</option><option>Aún no lo sé</option></select></label>}<button className="button primary" type="submit">{button} <ArrowRight size={16} /></button><small>Al enviar aceptas nuestra <Link href="/privacy-policy">política de privacidad</Link>.</small></form>;
}
function CtaStrip() { return <section className="cta-strip"><div className="container cta-inner"><div><span className="eyebrow light">Tu siguiente historia</span><h2>¿A dónde te<br /><em>llevamos?</em></h2></div><ButtonLink href="/contacto" variant="light">Hablemos</ButtonLink></div></section>; }

function Footer() {
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><Link href="/" className="logo-link"><img src={logoPath} alt="Explorando Experiencias" /><span>Explorando<br /><b>Experiencias</b></span></Link><p>Viajes, eventos y comunidad para vivir Perú de una forma distinta.</p><div className="socials"><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={17} /></a><a href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook size={17} /></a><a href="https://youtube.com" target="_blank" rel="noreferrer"><Youtube size={17} /></a></div></div><div className="footer-col"><b>Explora</b><Link href="/quienes-somos">Quiénes Somos</Link><Link href="/servicios">Servicios</Link><Link href="/productos">Productos</Link><Link href="/testimonios">Testimonios</Link></div><div className="footer-col"><b>Comunidad</b><Link href="/comunidad/club-solteros">Club de Solteros</Link><Link href="/comunidad/blog">Blog</Link><Link href="/comunidad/ebook">Ebook gratuito</Link><Link href="/contacto">Contacto</Link></div><div className="footer-col footer-contact"><b>Conversemos</b><a href="mailto:hola@explorandoexperiencias.pe">hola@explorandoexperiencias.pe</a><a href="https://wa.me/51999999999" target="_blank" rel="noreferrer">+51 999 999 999</a><span>Lima, Perú</span></div></div><div className="container footer-bottom"><span>© 2024 Explorando Experiencias</span><Link href="/privacy-policy">Privacy Policy</Link><span>Hecho para vivir más.</span></div></footer>;
}

export default App;
