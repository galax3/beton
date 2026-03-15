import { useState, useEffect } from 'react'
import {
  Menu, X, Phone, Mail, MapPin, ChevronDown,
  Shield, FlaskConical, HardHat, Building2, CheckCircle2,
  Award, ClipboardCheck, Microscope, Hammer, Layers,
  ArrowRight, Clock
} from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#ueber-uns', label: 'Über uns' },
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#zertifizierungen', label: 'Zertifizierungen' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  return (
    <div className="min-h-screen bg-white text-concrete-800">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-lg ${
                scrolled ? 'bg-steel-800' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                BP
              </div>
              <div>
                <span className={`font-bold text-lg tracking-tight block leading-tight ${
                  scrolled ? 'text-concrete-900' : 'text-white'
                }`}>Betonprüfstelle</span>
                <span className={`text-xs tracking-widest uppercase ${
                  scrolled ? 'text-steel-700' : 'text-white/80'
                }`}>Dortmund GmbH</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-steel-600 ${
                    scrolled ? 'text-concrete-700' : 'text-white/90 hover:text-white'
                  }`}>
                  {link.label}
                </a>
              ))}
              <a href="tel:+49231821063"
                className={`flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all ${
                  scrolled
                    ? 'bg-steel-800 text-white hover:bg-steel-900'
                    : 'bg-white text-steel-900 hover:bg-white/90'
                }`}>
                <Phone size={15} />
                0231 - 82 10 63
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-concrete-800' : 'text-white'}`}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-concrete-100 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <a key={link.href} href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-concrete-700 hover:bg-concrete-50 rounded-lg font-medium">
                  {link.label}
                </a>
              ))}
              <a href="tel:+49231821063"
                className="flex items-center gap-2 px-4 py-3 mt-2 bg-steel-800 text-white rounded-lg font-semibold justify-center">
                <Phone size={16} />
                0231 - 82 10 63
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-concrete-950 via-concrete-900 to-steel-950" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Diagonal accent */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-steel-800/20 transform skew-x-[-12deg] translate-x-20 hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-steel-400" />
              <span className="text-steel-300 text-sm font-semibold tracking-widest uppercase">
                Anerkannte Überwachungsstelle
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Qualitätssicherung
              <br />
              <span className="text-steel-400">im Betonbau</span>
            </h1>

            <p className="text-lg sm:text-xl text-concrete-300 max-w-2xl mb-10 leading-relaxed">
              Ihr zuverlässiger Partner für Betonprüfung, Eigenüberwachung und
              Betonüberwachung. Akkreditiert, zertifiziert und mit jahrelanger
              Erfahrung im Raum Dortmund und darüber hinaus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#leistungen"
                className="inline-flex items-center justify-center gap-2 bg-steel-600 hover:bg-steel-700 text-white font-semibold px-8 py-4 rounded-lg transition-all text-lg">
                Unsere Leistungen
                <ArrowRight size={20} />
              </a>
              <a href="#kontakt"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/25 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-lg transition-all text-lg">
                Kontakt aufnehmen
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-16 pt-8 border-t border-white/10">
              {[
                { icon: Shield, text: 'Akkreditiert' },
                { icon: Award, text: 'Zertifiziert' },
                { icon: ClipboardCheck, text: 'Eigenüberwachung' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-concrete-300">
                  <Icon size={20} className="text-steel-400" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#ueber-uns"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce">
          <ChevronDown size={32} />
        </a>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-steel-500" />
                <span className="text-steel-600 text-sm font-semibold tracking-widest uppercase">
                  Über uns
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-concrete-900 mb-6">
                Anerkannte Überwachungsstelle für Betonherstellung und Betonverarbeitung
              </h2>

              <p className="text-concrete-600 text-lg leading-relaxed mb-6">
                Die Betonprüfstelle Dortmund GmbH ist Ihre kompetente und anerkannte
                Überwachungsstelle für Betonherstellung und Betonverarbeitung. Mit unserem
                umfassenden Betonprüflabor bieten wir Ihnen die gesamte Bandbreite an
                Prüfleistungen für Frisch- und Festbeton sowie Gesteinskörnungen.
              </p>

              <p className="text-concrete-600 text-lg leading-relaxed mb-8">
                Unter der Leitung von Thilo Neuradt, M.Sc. und Peter Neuradt stehen wir
                für höchste Qualitätsstandards und zuverlässige Ergebnisse. Unsere langjährige
                Erfahrung und fachliche Kompetenz machen uns zum vertrauenswürdigen Partner
                im Betonbau.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { number: 'ÜK II/III', label: 'Baustellenüberwachung' },
                  { number: 'DIN EN', label: 'Normgerechte Prüfungen' },
                  { number: 'DAkkS', label: 'Akkreditierte Stelle' },
                  { number: '100%', label: 'Qualitätsanspruch' },
                ].map(item => (
                  <div key={item.label} className="bg-concrete-50 rounded-xl p-5">
                    <div className="text-2xl font-bold text-steel-800">{item.number}</div>
                    <div className="text-sm text-concrete-500 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-concrete-100 to-concrete-200 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <Building2 size={64} className="text-concrete-400 mx-auto mb-4" />
                  <p className="text-concrete-500 font-medium">Bild: Betonprüfstelle Dortmund</p>
                  <p className="text-concrete-400 text-sm mt-1">Laborgebäude & Prüfeinrichtungen</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-steel-800 text-white p-6 rounded-xl shadow-xl hidden lg:block">
                <div className="text-3xl font-bold">BPS</div>
                <div className="text-steel-200 text-sm">Dortmund</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="py-24 bg-concrete-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-12 bg-steel-500" />
              <span className="text-steel-600 text-sm font-semibold tracking-widest uppercase">
                Leistungen
              </span>
              <div className="h-px w-12 bg-steel-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-concrete-900 mb-4">
              Umfassende Betonprüfung & Überwachung
            </h2>
            <p className="text-concrete-500 text-lg max-w-2xl mx-auto">
              Von der Frischbetonprüfung bis zur zerstörungsfreien Prüfung –
              wir bieten das komplette Leistungsspektrum.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: FlaskConical,
                title: 'Frischbetonprüfung',
                items: [
                  'Eignungsprüfungen',
                  'Konsistenzbestimmung',
                  'Rohdichtebestimmung',
                  'Luftporengehalt',
                ],
              },
              {
                icon: Hammer,
                title: 'Festbetonprüfung',
                items: [
                  'Druckfestigkeitsprüfung (DIN EN 12390)',
                  'Wassereindringtiefe',
                  'Dichte & Wasserundurchlässigkeit',
                  'Bohrkernentnahme',
                ],
              },
              {
                icon: Microscope,
                title: 'Zerstörungsfreie Prüfung',
                items: [
                  'Rückprallhammer-Prüfung',
                  'Haftzugprüfung',
                  'Betondeckungsmessung',
                  'Bewehrungsortung',
                ],
              },
              {
                icon: Layers,
                title: 'Gesteinskörnungen',
                items: [
                  'Feuchtigkeitsgehalt',
                  'Sieblinien',
                  'Schüttdichte & Kornrohdichte',
                  'Organische Bestandteile',
                ],
              },
              {
                icon: HardHat,
                title: 'Baustellenüberwachung',
                subtitle: 'ÜK II/III',
                items: [
                  'Überwachungsklasse 2 und 3',
                  'Betonverarbeitung vor Ort',
                  'Qualitätskontrolle Baustelle',
                  'Dokumentation & Berichtswesen',
                ],
              },
              {
                icon: Building2,
                title: 'Werksüberwachung',
                items: [
                  'Eigenüberwachung Betonwerke',
                  'Überwachung der Betonherstellung',
                  'Qualitätssicherung Produktion',
                  'Regelmäßige Kontrollen',
                ],
              },
            ].map(service => (
              <div key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-concrete-100 group">
                <div className="w-14 h-14 bg-steel-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-steel-100 transition-colors">
                  <service.icon size={28} className="text-steel-700" />
                </div>
                <h3 className="text-xl font-bold text-concrete-900 mb-1">{service.title}</h3>
                {service.subtitle && (
                  <span className="inline-block text-xs font-semibold text-steel-600 bg-steel-50 px-2 py-0.5 rounded mb-3">
                    {service.subtitle}
                  </span>
                )}
                <ul className="mt-4 space-y-2">
                  {service.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-concrete-600">
                      <CheckCircle2 size={16} className="text-steel-500 mt-0.5 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Carbonation extra note */}
          <div className="bg-white rounded-2xl p-8 border border-concrete-100 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-steel-800 rounded-2xl flex items-center justify-center shrink-0">
                <ClipboardCheck size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-concrete-900 mb-2">
                  Zusätzliche Spezialprüfungen
                </h3>
                <p className="text-concrete-600">
                  Wir führen darüber hinaus Karbonatisierungstiefenmessungen,
                  Betondeckungsmessungen und Bewehrungsortungen durch. Sprechen Sie
                  uns an – wir beraten Sie gerne zu Ihrem spezifischen Prüfbedarf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zertifizierungen */}
      <section id="zertifizierungen" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-12 bg-steel-500" />
              <span className="text-steel-600 text-sm font-semibold tracking-widest uppercase">
                Qualität & Vertrauen
              </span>
              <div className="h-px w-12 bg-steel-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-concrete-900 mb-4">
              Akkreditiert & Zertifiziert
            </h2>
            <p className="text-concrete-500 text-lg max-w-2xl mx-auto">
              Unsere Akkreditierungen und Zertifizierungen stehen für höchste
              Qualitätsstandards und normgerechte Prüfverfahren.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Anerkannte Überwachungsstelle',
                description: 'Offizielle Anerkennung als Überwachungsstelle für Betonherstellung und Betonverarbeitung.',
              },
              {
                icon: Award,
                title: 'DIN EN Normkonformität',
                description: 'Alle Prüfungen nach aktuellen DIN EN Normen, insbesondere DIN EN 12390 für Festbetonprüfungen.',
              },
              {
                icon: ClipboardCheck,
                title: 'Eigenüberwachung',
                description: 'Zertifizierte Durchführung der Eigenüberwachung für Betonwerke und -hersteller.',
              },
              {
                icon: HardHat,
                title: 'ÜK II/III Zulassung',
                description: 'Zugelassen für die Betonüberwachung der Überwachungsklassen 2 und 3 auf Baustellen.',
              },
              {
                icon: Microscope,
                title: 'Akkreditiertes Labor',
                description: 'Vollständig ausgestattetes und akkreditiertes Betonprüflabor mit modernster Technik.',
              },
              {
                icon: CheckCircle2,
                title: 'Qualitätsmanagement',
                description: 'Kontinuierliche Qualitätssicherung durch systematisches Qualitätsmanagement.',
              },
            ].map(cert => (
              <div key={cert.title}
                className="text-center p-8 rounded-2xl border border-concrete-100 hover:border-steel-200 transition-colors group">
                <div className="w-16 h-16 bg-steel-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-steel-100 transition-colors">
                  <cert.icon size={32} className="text-steel-700" />
                </div>
                <h3 className="text-lg font-bold text-concrete-900 mb-2">{cert.title}</h3>
                <p className="text-concrete-500 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-steel-900 via-steel-800 to-concrete-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Betonprüfung nach höchsten Standards
          </h2>
          <p className="text-steel-200 text-lg mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine individuelle Beratung.
            Wir unterstützen Sie bei allen Fragen rund um Betonqualität und -prüfung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+49231821063"
              className="inline-flex items-center justify-center gap-2 bg-white text-steel-900 font-semibold px-8 py-4 rounded-lg hover:bg-concrete-50 transition-colors text-lg">
              <Phone size={20} />
              Jetzt anrufen
            </a>
            <a href="mailto:info@bps-do.de"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:border-white/60 transition-colors text-lg">
              <Mail size={20} />
              E-Mail senden
            </a>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-24 bg-concrete-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-steel-500" />
                <span className="text-steel-600 text-sm font-semibold tracking-widest uppercase">
                  Kontakt
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-concrete-900 mb-6">
                Sprechen Sie uns an
              </h2>

              <p className="text-concrete-600 text-lg mb-10 leading-relaxed">
                Ob Betonprüfung, Baustellenüberwachung oder beratende Tätigkeit –
                wir sind für Sie da. Kontaktieren Sie uns für ein unverbindliches
                Gespräch.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-steel-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-steel-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-concrete-900">Adresse</h4>
                    <p className="text-concrete-600">Auf dem Brümmer 5<br />44149 Dortmund</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-steel-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-steel-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-concrete-900">Telefon & Fax</h4>
                    <p className="text-concrete-600">
                      Tel: <a href="tel:+49231821063" className="hover:text-steel-600 transition-colors">0231 - 82 10 63</a>
                      <br />
                      Fax: 0231 - 88 71 1
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-steel-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-steel-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-concrete-900">E-Mail</h4>
                    <p className="text-concrete-600">
                      <a href="mailto:info@bps-do.de" className="hover:text-steel-600 transition-colors">info@bps-do.de</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-steel-100 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-steel-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-concrete-900">Geschäftsführung</h4>
                    <p className="text-concrete-600">Thilo Neuradt, M.Sc.<br />Peter Neuradt</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative">
              <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-concrete-200 rounded-2xl flex items-center justify-center overflow-hidden">
                <iframe
                  title="Standort Betonprüfstelle Dortmund"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5!2d7.4!3d51.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzAwLjAiTiA3wrAyNCcwMC4wIkU!5e0!3m2!1sde!2sde!4v1!5m2!1sde!2sde"
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="relative z-10 text-center p-8">
                  <MapPin size={48} className="text-concrete-400 mx-auto mb-3" />
                  <p className="text-concrete-500 font-medium">Google Maps</p>
                  <p className="text-concrete-400 text-sm">Auf dem Brümmer 5, 44149 Dortmund</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-concrete-950 text-concrete-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-steel-800 rounded-lg flex items-center justify-center font-bold text-white text-lg">
                  BP
                </div>
                <div>
                  <span className="font-bold text-white text-lg block leading-tight">Betonprüfstelle</span>
                  <span className="text-xs tracking-widest uppercase text-concrete-500">Dortmund GmbH</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-sm">
                Anerkannte Überwachungsstelle für Betonherstellung und
                Betonverarbeitung mit umfassendem Betonprüflabor.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#impressum" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
              </ul>
              <div className="mt-6 text-sm">
                <p>AG Dortmund</p>
                <p>HRB 29659</p>
                <p>USt-IdNr: DE316786286</p>
              </div>
            </div>
          </div>

          <div className="border-t border-concrete-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Betonprüfstelle Dortmund GmbH. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
