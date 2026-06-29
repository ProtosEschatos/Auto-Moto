import { useState, useEffect, useRef } from "react";

const T = {
  hr: {
    nav_s:"Usluge", nav_a:"O nama", nav_v:"Prodaja", nav_r:"Najam", nav_b:"Blog", nav_c:"Kontakt",
    hero_tag:"Servis · Otkup · Prodaja · Uvoz · Prijevoz · EU/HR",
    h_t1:"Zagreb", h_t2:"MOTO", h_t3:"Centar",
    hero_sub:"Vaš specijalist za motocikle u srcu Hrvatske. Servisiramo, kupujemo, uvozimo i prevozimo — diljem EU.",
    hero_cta1:"Zakažite termin →", hero_cta2:"Naše usluge",
    hs1:"Godina iskustva", hs2:"Servisiranih mota", hs3:"EU pokrivenost",
    s_ey:"Što radimo", s_ti:"Naše usluge", s_su:"Od prve dijagnostike do isporuke na vaša vrata — sve na jednom mjestu.",
    sv1n:"Servis motocikala", sv1d:"Kompletno mehaničko i električno održavanje svih marki i kubikaza. Radimo ono što drugi ne znaju.", sv1t:"Sve marke",
    sv2n:"Otkup motocikala", sv2d:"Otkupljujemo rabljene motocikle iz HR i EU. Gotovinska isplata odmah, bez skrivenih odbitaka.", sv2t:"Gotovina odmah",
    sv3n:"Prodaja motocikala", sv3d:"Pažljivo odabran stok rabljenih i novih motocikala. Svako vozilo prolazi tehnički pregled.", sv3t:"Tehnički pregled",
    sv4n:"Uvoz iz EU", sv4d:"Pronalazimo i uvozimo motocikle prema vašoj narudžbi iz Njemačke, Austrije, Italije i cijele EU.", sv4t:"EU dostava",
    sv5n:"Prijevoz motocikala", sv5d:"Sigurni prijevoz specijaliziranim transporterom diljem HR i EU. Osigurano, pouzdano, na vrijeme.", sv5t:"HR & EU",
    sv6n:"Registracija & papiri", sv6d:"Pomoć pri registraciji uvezenih vozila, homologaciji i svim carinskim procedurama u RH.", sv6t:"Kompletna usluga",
    ab_ey:"Tko smo", ab_ti:"Strast prema dvotočkašima",
    ab_p1:"Auto-Moto Zagreb osnovan je s jednim ciljem — biti servis kojemu možete vjerovati. Počeli smo u maloj garaži u Dubravi, a danas smo prepoznatljivo ime u HR i EU moto zajednici.",
    ab_p2:"Sve naše usluge — od servisa do uvoza — obavljamo s istom pažnjom: brzo, pošteno, bez iznenađenja na računu.",
    ab_l1:"Certificirani tehničari s iskustvom 10+ godina",
    ab_l2:"Originalni i OEM dijelovi, transparentno naručeni",
    ab_l3:"Pisana garancija na sve servisne radove",
    ab_l4:"Besplatan prijevoz vozila u radijusu 20 km",
    ab_l5:"Komunikacija na HR, EN i DE jeziku",
    ab_cta:"Kontaktirajte nas →", ab_cta2:"Pogledaj stok",
    pd_ey:"Gdje radimo", pd_ti:"Pokrivamo EU", pd_su:"Uvoz, prijevoz i otkup dostupni su u svim EU zemljama. Servis i prodaja u Zagrebu.",
    cc_hr:"Servis, prodaja, otkup", cc_de:"Uvoz, prijevoz", cc_at:"Uvoz, prijevoz",
    cc_it:"Uvoz, prijevoz", cc_si:"Uvoz, prijevoz", cc_fr:"Uvoz, prijevoz",
    cc_nl:"Uvoz, prijevoz", cc_eu:"Po dogovoru",
    vh_ey:"Naš stok", vh_ti:"Vozila na prodaju", vh_all:"Upitaj za ostala vozila →",
    vb_used:"Rabljeno", vb_imp:"Uvoz DE", veh_inc:"Uključen PDV · Garancija 6 mj.",
    bl_ey:"Savjeti i vijesti", bl_ti:"Moto blog", bl_all:"Svi članci →",
    bc_srv:"Servis", bc_imp:"Uvoz", bc_tip:"Savjet", b_read:"Pročitaj više →",
    b1t:"Kada promijeniti ulje na motociklu?", b1e:"Pravilna izmjena ulja ključna je za dugovječnost motora. Koji su znakovi da je krajnje vrijeme?",
    b2t:"Uvoz motocikla iz Njemačke: troškovi i procedure", b2e:"Detaljni vodič od pronalaska vozila do registracije u RH. Što plaćate i kako izbjeći iznenađenja.",
    b3t:"Priprema mota za sezonu: 10-točkasti checklist", b3e:"Motocikl je stajao cijelu zimu. Što točno treba provjeriti prije prvog izlaska.",
    ct_ey:"Kontakt", ct_ti:"Stupite u kontakt", ct_su:"Dostupni smo na tri jezika. Odgovaramo unutar 2h radnim danom.",
    ci_ad:"Adresa", ci_ph:"Telefon", ci_em:"Email", ci_wh:"Radno vrijeme", ci_wv:"Pon–Pet 08–18 · Sub 08–13",
    map_l:"Slavonska avenija 52, Zagreb", map_btn:"Otvori Google Maps →",
    cf_nm:"Ime i prezime", cf_nmp:"Ivan Horvat", cf_ph2:"Telefon",
    cf_sv:"Usluga", cs0:"Odaberi uslugu…", cs1:"Servis motocikla", cs2:"Otkup motocikla",
    cs3:"Prodaja / Upit", cs4:"Uvoz iz EU", cs5:"Prijevoz", cs6:"Registracija",
    cf_mg:"Poruka", cf_mgp:"Opišite vaš upit ili problem s vozilom…", cf_sb:"Pošalji →",
    fd_d:"Vaš partner za motocikle u Zagrebu i cijeloj EU. Servis, otkup, prodaja, uvoz i prijevoz — od 2013. godine.",
    fh_s:"Usluge", fh_c:"Tvrtka", fh_f:"Pratite nas",
    fb_r:"Sva prava pridržana.", fb_l:"Politika privatnosti · Uvjeti korištenja",
    toast_ok:"Upit poslan! Javimo se uskoro. 🏍️",
    rn_ey:"Kratkoročni i dugoročni najam", rn_ti:"Najam motocikala",
    rn_su:"Iznajmite motocikl na dan, tjedan ili sezonu. Fleksibilni uvjeti, osigurano vozilo, bez skrivenih troškova.",
    rn_cta:"Upitajte za najam →",
    rn_badge1:"Osigurano", rn_badge2:"Sve uključeno", rn_badge3:"HR & EU",
    rn1n:"Dnevni najam", rn1d:"Idealno za vikend izlete ili jednodnevna putovanja. Vozilo preuzimate u Zagrebu, vraćate dogovoreno.", rn1p:"od 45 € / dan",
    rn2n:"Tjedni najam", rn2d:"Planirate turneju? Tjedni najam s fleksibilnom rutom po HR i EU. Uključena asistencija na putu.", rn2p:"od 260 € / tjedan",
    rn3n:"Sezonski najam", rn3d:"Dugoročni najam za cijelu sezonu. Fiksna niska cijena, servis i registracija u paketu.", rn3p:"od 800 € / sez.",
    rn4n:"Moped / Skuter", rn4d:"Kompaktan i ekonomičan — idealan za gradsku vožnju i kraće izlete. Vozačka B kategorija.", rn4p:"od 25 € / dan",
    ab_yr:"godina iskustva"
  },
  de: {
    nav_s:"Leistungen", nav_a:"Über uns", nav_v:"Verkauf", nav_r:"Verleih", nav_b:"Blog", nav_c:"Kontakt",
    hero_tag:"Service · Ankauf · Verkauf · Import · Transport · EU/HR",
    h_t1:"Zagreb", h_t2:"MOTO", h_t3:"Zentrum",
    hero_sub:"Ihr Motorrad-Spezialist im Herzen Kroatiens. Wir warten, kaufen, importieren und transportieren — durch die gesamte EU.",
    hero_cta1:"Termin buchen →", hero_cta2:"Unsere Leistungen",
    hs1:"Jahre Erfahrung", hs2:"Gewartete Motorräder", hs3:"EU-Abdeckung",
    s_ey:"Was wir tun", s_ti:"Unsere Leistungen", s_su:"Von der ersten Diagnose bis zur Fahrzeuglieferung — alles aus einer Hand.",
    sv1n:"Motorradservice", sv1d:"Vollständige mechanische und elektrische Wartung aller Marken und Hubraumklassen.", sv1t:"Alle Marken",
    sv2n:"Motorradankauf", sv2d:"Wir kaufen gebrauchte Motorräder aus HR und EU. Sofortige Barzahlung, keine versteckten Abzüge.", sv2t:"Sofort bar",
    sv3n:"Motorradverkauf", sv3d:"Sorgfältig ausgewählter Gebrauchtwagenbestand. Jedes Fahrzeug durchläuft unsere technische Prüfung.", sv3t:"TÜV geprüft",
    sv4n:"EU-Import", sv4d:"Wir finden und importieren Motorräder nach Ihrer Bestellung aus Deutschland, Österreich, Italien und der gesamten EU.", sv4t:"EU-Lieferung",
    sv5n:"Motorrадtransport", sv5d:"Sicherer Transport mit Spezialtransporter durch HR und EU. Versichert, zuverlässig, pünktlich.", sv5t:"HR & EU",
    sv6n:"Zulassung & Bürokratie", sv6d:"Hilfe bei der Zulassung importierter Fahrzeuge und allen Zollverfahren in der Republik Kroatien.", sv6t:"Komplettservice",
    ab_ey:"Wer wir sind", ab_ti:"Leidenschaft für Zweiräder",
    ab_p1:"Auto-Moto Zagreb wurde mit einem Ziel gegründet — ein Servicebetrieb zu sein, dem man vertrauen kann. Wir begannen in einer kleinen Garage und sind heute ein bekannter Name in der HR- und EU-Motogemeinschaft.",
    ab_p2:"Alle unsere Leistungen führen wir mit der gleichen Sorgfalt durch: schnell, fair, ohne Überraschungen auf der Rechnung.",
    ab_l1:"Zertifizierte Techniker mit 10+ Jahren Erfahrung",
    ab_l2:"Original- und OEM-Teile, transparent bestellt",
    ab_l3:"Schriftliche Garantie auf alle Servicearbeiten",
    ab_l4:"Kostenloser Fahrzeugtransport im Umkreis von 20 km",
    ab_l5:"Kommunikation auf HR, EN und DE",
    ab_cta:"Kontaktieren Sie uns →", ab_cta2:"Bestand ansehen",
    pd_ey:"Wo wir tätig sind", pd_ti:"EU-Abdeckung", pd_su:"Import, Transport und Ankauf in allen EU-Ländern. Service und Verkauf in Zagreb.",
    cc_hr:"Service, Verkauf, Ankauf", cc_de:"Import, Transport", cc_at:"Import, Transport",
    cc_it:"Import, Transport", cc_si:"Import, Transport", cc_fr:"Import, Transport",
    cc_nl:"Import, Transport", cc_eu:"Nach Vereinbarung",
    vh_ey:"Unser Bestand", vh_ti:"Fahrzeuge zum Verkauf", vh_all:"Andere Fahrzeuge anfragen →",
    vb_used:"Gebraucht", vb_imp:"Import DE", veh_inc:"inkl. MwSt. · 6 Mon. Garantie",
    bl_ey:"Tipps & Neuigkeiten", bl_ti:"Moto-Blog", bl_all:"Alle Artikel →",
    bc_srv:"Service", bc_imp:"Import", bc_tip:"Tipp", b_read:"Weiterlesen →",
    b1t:"Wann Öl beim Motorrad wechseln?", b1e:"Ein ordnungsgemäßer Ölwechsel ist entscheidend für die Langlebigkeit des Motors. Wann ist es Zeit?",
    b2t:"Motorrad aus Deutschland importieren: Kosten & Verfahren", b2e:"Detaillierter Leitfaden vom Fahrzeug finden bis zur Zulassung in HR.",
    b3t:"Motorrad fit für die Saison: 10-Punkte-Checkliste", b3e:"Das Motorrad stand den ganzen Winter. Was genau vor der ersten Ausfahrt zu prüfen ist.",
    ct_ey:"Kontakt", ct_ti:"Nehmen Sie Kontakt auf", ct_su:"Wir sind in drei Sprachen erreichbar. Antwort innerhalb von 2h an Werktagen.",
    ci_ad:"Adresse", ci_ph:"Telefon", ci_em:"E-Mail", ci_wh:"Öffnungszeiten", ci_wv:"Mo–Fr 08–18 · Sa 08–13",
    map_l:"Slavonska avenija 52, Zagreb", map_btn:"Google Maps öffnen →",
    cf_nm:"Vor- und Nachname", cf_nmp:"Max Mustermann", cf_ph2:"Telefon",
    cf_sv:"Leistung", cs0:"Leistung wählen…", cs1:"Motorradservice", cs2:"Motorradankauf",
    cs3:"Verkauf / Anfrage", cs4:"EU-Import", cs5:"Transport", cs6:"Zulassung",
    cf_mg:"Nachricht", cf_mgp:"Beschreiben Sie Ihre Anfrage oder das Problem mit dem Fahrzeug…", cf_sb:"Absenden →",
    fd_d:"Ihr Partner für Motorräder in Zagreb und der gesamten EU. Service, Ankauf, Verkauf, Import und Transport — seit 2013.",
    fh_s:"Leistungen", fh_c:"Unternehmen", fh_f:"Folgen Sie uns",
    fb_r:"Alle Rechte vorbehalten.", fb_l:"Datenschutz · Nutzungsbedingungen",
    toast_ok:"Anfrage gesendet! Wir melden uns bald. 🏍️",
    rn_ey:"Kurz- und Langzeitmiete", rn_ti:"Motorradverleih",
    rn_su:"Mieten Sie ein Motorrad für einen Tag, eine Woche oder eine ganze Saison. Flexible Konditionen, versichert, ohne versteckte Kosten.",
    rn_cta:"Mietanfrage stellen →",
    rn_badge1:"Versichert", rn_badge2:"Alles inklusive", rn_badge3:"HR & EU",
    rn1n:"Tagesmiete", rn1d:"Ideal für Wochenendtouren oder Tagesausflüge. Fahrzeugübernahme in Zagreb, Rückgabe nach Vereinbarung.", rn1p:"ab 45 € / Tag",
    rn2n:"Wochenmiete", rn2d:"Planen Sie eine Tour? Wochenmiete mit flexibler Route durch HR und EU. Pannenhilfe inklusive.", rn2p:"ab 260 € / Woche",
    rn3n:"Saisonmiete", rn3d:"Langzeitmiete für die gesamte Saison. Fester Niedrigpreis, Service und Zulassung im Paket.", rn3p:"ab 800 € / Saison",
    rn4n:"Moped / Roller", rn4d:"Kompakt und wirtschaftlich — ideal für die Stadtfahrt und kurze Ausflüge. Führerschein Klasse B.", rn4p:"ab 25 € / Tag",
    ab_yr:"Jahre Erfahrung"
  },
  en: {
    nav_s:"Services", nav_a:"About", nav_v:"For Sale", nav_r:"Rental", nav_b:"Blog", nav_c:"Contact",
    hero_tag:"Service · Purchase · Sales · Import · Transport · EU/HR",
    h_t1:"Zagreb", h_t2:"MOTO", h_t3:"Centre",
    hero_sub:"Your motorcycle specialist in the heart of Croatia. We service, buy, import and transport — across the EU.",
    hero_cta1:"Book an appointment →", hero_cta2:"Our services",
    hs1:"Years of experience", hs2:"Motorcycles serviced", hs3:"EU coverage",
    s_ey:"What we do", s_ti:"Our Services", s_su:"From the first diagnosis to delivery at your door — everything in one place.",
    sv1n:"Motorcycle service", sv1d:"Full mechanical and electrical maintenance of all brands and engine sizes. We do what others can't.", sv1t:"All brands",
    sv2n:"Motorcycle purchase", sv2d:"We buy used motorcycles from HR and EU. Cash payment immediately, no hidden deductions.", sv2t:"Cash on the spot",
    sv3n:"Motorcycle sales", sv3d:"Carefully selected stock of used and new motorcycles. Every vehicle passes our technical inspection.", sv3t:"Tech inspected",
    sv4n:"EU import", sv4d:"We find and import motorcycles to your order from Germany, Austria, Italy and the entire EU.", sv4t:"EU delivery",
    sv5n:"Motorcycle transport", sv5d:"Safe transport with specialised transporter across HR and EU. Insured, reliable, on time.", sv5t:"HR & EU",
    sv6n:"Registration & paperwork", sv6d:"Help with registration of imported vehicles, homologation and all customs procedures in Croatia.", sv6t:"Full service",
    ab_ey:"Who we are", ab_ti:"Driven by two wheels",
    ab_p1:"Auto-Moto Zagreb was founded with one goal — to be a workshop you can truly trust. We started in a small garage in Dubrava and are now a recognised name in the HR and EU moto community.",
    ab_p2:"All our services — from servicing to importing — are carried out with the same care: fast, fair, no surprises on the invoice.",
    ab_l1:"Certified technicians with 10+ years of experience",
    ab_l2:"Original and OEM parts, transparently sourced",
    ab_l3:"Written warranty on all service work",
    ab_l4:"Free vehicle pickup within 20 km radius",
    ab_l5:"Communication in HR, EN and DE",
    ab_cta:"Contact us →", ab_cta2:"View stock",
    pd_ey:"Where we operate", pd_ti:"EU Coverage", pd_su:"Import, transport and purchase across all EU countries. Service and sales in Zagreb.",
    cc_hr:"Service, sales, purchase", cc_de:"Import, transport", cc_at:"Import, transport",
    cc_it:"Import, transport", cc_si:"Import, transport", cc_fr:"Import, transport",
    cc_nl:"Import, transport", cc_eu:"By arrangement",
    vh_ey:"Our stock", vh_ti:"Vehicles for Sale", vh_all:"Ask about other vehicles →",
    vb_used:"Used", vb_imp:"Import DE", veh_inc:"VAT included · 6 mo. warranty",
    bl_ey:"Tips & news", bl_ti:"Moto Blog", bl_all:"All articles →",
    bc_srv:"Service", bc_imp:"Import", bc_tip:"Tip", b_read:"Read more →",
    b1t:"When to change motorcycle oil? Everything you need to know", b1e:"Proper oil changes are key to engine longevity. We reveal the signs it's time and what it costs.",
    b2t:"Importing a motorcycle from Germany: costs & procedures", b2e:"A detailed guide from finding the vehicle to registration in Croatia. What you pay and how to avoid surprises.",
    b3t:"Getting your motorcycle ready for the season: 10-point checklist", b3e:"The bike sat all winter. Here's exactly what to check before your first ride out.",
    ct_ey:"Contact", ct_ti:"Get in touch", ct_su:"Available in three languages. We respond within 2h on business days.",
    ci_ad:"Address", ci_ph:"Phone", ci_em:"Email", ci_wh:"Working hours", ci_wv:"Mon–Fri 08–18 · Sat 08–13",
    map_l:"Slavonska avenija 52, Zagreb", map_btn:"Open Google Maps →",
    cf_nm:"Full name", cf_nmp:"John Smith", cf_ph2:"Phone",
    cf_sv:"Service", cs0:"Select a service…", cs1:"Motorcycle service", cs2:"Motorcycle purchase",
    cs3:"Sales / Enquiry", cs4:"EU import", cs5:"Transport", cs6:"Registration",
    cf_mg:"Message", cf_mgp:"Describe your enquiry or the issue with your vehicle…", cf_sb:"Send →",
    fd_d:"Your partner for motorcycles in Zagreb and the entire EU. Service, purchase, sales, import and transport — since 2013.",
    fh_s:"Services", fh_c:"Company", fh_f:"Follow us",
    fb_r:"All rights reserved.", fb_l:"Privacy Policy · Terms of Use",
    toast_ok:"Request sent! We'll be in touch soon. 🏍️",
    rn_ey:"Short & long-term rental", rn_ti:"Motorcycle Rental",
    rn_su:"Rent a motorcycle for a day, a week or an entire season. Flexible terms, fully insured, no hidden fees.",
    rn_cta:"Request a rental →",
    rn_badge1:"Insured", rn_badge2:"All inclusive", rn_badge3:"HR & EU",
    rn1n:"Daily rental", rn1d:"Perfect for weekend rides or day trips. Pick up in Zagreb, return by arrangement.", rn1p:"from €45 / day",
    rn2n:"Weekly rental", rn2d:"Planning a road trip? Weekly rental with flexible route across HR and EU. Roadside assistance included.", rn2p:"from €260 / week",
    rn3n:"Season rental", rn3d:"Long-term rental for the whole riding season. Fixed low price, service and registration bundled in.", rn3p:"from €800 / season",
    rn4n:"Moped / Scooter", rn4d:"Compact and economical — great for city riding and short trips. Category B licence required.", rn4p:"from €25 / day",
    ab_yr:"years of experience"
  }
};

const SERVICES = [
  { icon:"🔧", k:"sv1" },
  { icon:"💰", k:"sv2" },
  { icon:"🏍️", k:"sv3" },
  { icon:"🌍", k:"sv4" },
  { icon:"🚛", k:"sv5" },
  { icon:"📋", k:"sv6" },
];

const COUNTRIES = [
  { flag:"🇭🇷", name:"Hrvatska / Croatia / Kroatien", k:"cc_hr" },
  { flag:"🇩🇪", name:"Njemačka / Germany / Deutschland", k:"cc_de" },
  { flag:"🇦🇹", name:"Austrija / Austria / Österreich", k:"cc_at" },
  { flag:"🇮🇹", name:"Italija / Italy / Italien", k:"cc_it" },
  { flag:"🇸🇮", name:"Slovenija / Slovenia / Slowenien", k:"cc_si" },
  { flag:"🇫🇷", name:"Francuska / France / Frankreich", k:"cc_fr" },
  { flag:"🇳🇱", name:"Nizozemska / Netherlands / Niederlande", k:"cc_nl" },
  { flag:"🇪🇺", name:"Ostala EU / Other EU / Sonstige EU", k:"cc_eu" },
];

const VEHICLES = [
  { make:"Honda", model:"CB 650R", year:2021, hp:68, km:"14.200", price:"8.900 €", badgeK:"vb_used", badgeColor:"#E8400C", icon:"🏍️" },
  { make:"Kawasaki", model:"Z 900", year:2022, hp:125, km:"8.600", price:"10.400 €", badgeK:"vb_imp", badgeColor:"#1a7a3a", icon:"🏍️" },
  { make:"Yamaha", model:"MT-07", year:2020, hp:73, km:"22.000", price:"7.200 €", badgeK:"vb_used", badgeColor:"#E8400C", icon:"🛵" },
];

const RENTALS = [
  { icon:"🏍️", k:"rn1", color:"#E8400C" },
  { icon:"🗺️", k:"rn2", color:"#1a7a3a" },
  { icon:"📅", k:"rn3", color:"#1a5fa8" },
  { icon:"🛵", k:"rn4", color:"#7a3a8a" },
];

const POSTS = [
  { icon:"🔧", catK:"bc_srv", dateHR:"12. lipnja 2025.", dateDE:"12. Juni 2025", dateEN:"12 June 2025", k:"b1" },
  { icon:"🌍", catK:"bc_imp", dateHR:"28. svibnja 2025.", dateDE:"28. Mai 2025", dateEN:"28 May 2025", k:"b2" },
  { icon:"❄️", catK:"bc_tip", dateHR:"3. travnja 2025.", dateDE:"3. April 2025", dateEN:"3 April 2025", k:"b3" },
];

export default function AutoMotoZagreb() {
  const [lang, setLang] = useState("hr");
  const [dark, setDark] = useState(true);
  const [scroll, setScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState(false);
  const [form, setForm] = useState({ name:"", phone:"", email:"", service:"", message:"" });

  const t = T[lang];

  useEffect(() => {
    const onScroll = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setScroll(Math.min(pct * 100, 100));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
    setMenuOpen(false);
  };

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3500);
  };

  const FIRE = "#E8400C";

  const css = {
    "--fire": FIRE,
    "--bg": dark ? "#0e0e0e" : "#f0ede8",
    "--bg2": dark ? "#141414" : "#e8e4de",
    "--bg3": dark ? "#1c1c1e" : "#ddd9d3",
    "--card": dark ? "#1e1e20" : "#ffffff",
    "--surface": dark ? "#222224" : "#f5f3f0",
    "--border": dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)",
    "--border-fire": dark ? "rgba(232,64,12,0.25)" : "rgba(232,64,12,0.2)",
    "--text": dark ? "#F5F5F0" : "#111111",
    "--muted": dark ? "#888" : "#666",
    "--subtle": dark ? "#555" : "#aaa",
    "--nav": dark ? "rgba(14,14,14,0.93)" : "rgba(240,237,232,0.93)",
  };

  const s = {
    root: { fontFamily:"'Inter',sans-serif", background:"var(--bg)", color:"var(--text)", minHeight:"100vh", position:"relative", transition:"background .3s, color .3s", ...css },
    prog: { position:"fixed", top:0, left:0, height:3, width:`${scroll}%`, background:`linear-gradient(90deg,${FIRE},#ff7043)`, zIndex:9999, boxShadow:`0 0 10px rgba(232,64,12,.6)`, transition:"width .1s" },

    // NAV
    nav: { position:"sticky", top:0, zIndex:1000, background:"var(--nav)", backdropFilter:"blur(14px)", WebkitBackdropFilter:"blur(14px)", borderBottom:"1px solid var(--border)", padding:"0 5%", height:62, display:"flex", alignItems:"center", justifyContent:"space-between", transition:"background .3s" },
    logoMark: { width:32, height:32, background:FIRE, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, flexShrink:0 },
    logoText: { fontFamily:"'Barlow Condensed',sans-serif", fontSize:19, fontWeight:900, letterSpacing:2, color:"var(--text)" },

    // HERO
    hero: { minHeight:"100vh", display:"flex", alignItems:"center", padding:"62px 5% 0", position:"relative", overflow:"hidden", background:"var(--bg)" },
    heroInner: { maxWidth:1100, margin:"0 auto", width:"100%", padding:"72px 0", position:"relative", zIndex:1 },
    heroTag: { display:"inline-flex", alignItems:"center", gap:8, background:`rgba(232,64,12,0.12)`, border:`1px solid rgba(232,64,12,0.3)`, borderRadius:3, padding:"5px 14px", fontSize:11, fontWeight:700, color:FIRE, letterSpacing:1.5, textTransform:"uppercase", marginBottom:20 },
    h1: { fontFamily:"'Barlow Condensed',sans-serif", fontSize:"clamp(64px,10vw,120px)", fontWeight:900, lineHeight:.92, letterSpacing:-1, textTransform:"uppercase", marginBottom:24 },
    heroBg: { position:"absolute", right:"-8%", top:"50%", transform:"translateY(-50%)", width:"min(640px,85vw)", height:"min(640px,85vw)", borderRadius:"50%", border:`2px solid rgba(232,64,12,0.2)`, opacity:.4, animation:"spin 20s linear infinite", pointerEvents:"none" },
    heroStat: { padding:"18px 20px", borderRight:"1px solid var(--border)", textAlign:"center", flex:1 },
    statN: { fontFamily:"'Barlow Condensed',sans-serif", fontSize:34, fontWeight:900, color:FIRE, lineHeight:1 },
    statL: { fontSize:10, color:"var(--muted)", textTransform:"uppercase", letterSpacing:.8, marginTop:4 },

    // SECTION
    section: (bg) => ({ padding:"88px 5%", background:`var(${bg})` }),
    inner: { maxWidth:1100, margin:"0 auto" },
    eyebrow: { fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", color:FIRE, marginBottom:10, display:"block" },
    secTitle: { fontFamily:"'Barlow Condensed',sans-serif", fontSize:"clamp(38px,5vw,60px)", fontWeight:900, textTransform:"uppercase", letterSpacing:1, lineHeight:1, marginBottom:12 },
    secSub: { fontSize:14, color:"var(--muted)", maxWidth:500, lineHeight:1.75, marginBottom:48 },

    // CARDS
    srvCard: { background:"var(--card)", borderTop:"3px solid transparent", padding:"28px 24px", cursor:"default", transition:"all .2s" },
    icon: { fontSize:28, marginBottom:16, display:"block" },
    cardName: { fontFamily:"'Barlow Condensed',sans-serif", fontSize:20, fontWeight:800, textTransform:"uppercase", marginBottom:8 },
    cardDesc: { fontSize:13, color:"var(--muted)", lineHeight:1.65 },
    tag: { display:"inline-block", marginTop:12, fontSize:10, fontWeight:700, letterSpacing:1, color:FIRE, textTransform:"uppercase", border:`1px solid rgba(232,64,12,0.3)`, borderRadius:3, padding:"3px 8px" },

    // BUTTONS
    btnFire: { background:FIRE, color:"#fff", border:"none", padding:"12px 24px", fontFamily:"Inter,sans-serif", fontSize:13, fontWeight:700, borderRadius:4, cursor:"pointer", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:7, boxShadow:`0 4px 20px rgba(232,64,12,.3)`, transition:"all .2s", letterSpacing:.3 },
    btnGhost: { background:"none", color:"var(--text)", border:"1px solid var(--border)", padding:"12px 24px", fontFamily:"Inter,sans-serif", fontSize:13, fontWeight:600, borderRadius:4, cursor:"pointer", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:7, transition:"all .2s" },
    langBtn: (active) => ({ background: active ? FIRE : "none", color: active ? "#fff" : "var(--muted)", border:`1px solid ${active ? FIRE : "var(--border)"}`, padding:"5px 11px", borderRadius:4, fontSize:11, fontWeight:700, cursor:"pointer", letterSpacing:1, transition:"all .2s" }),
    themeBtn: { width:34, height:34, borderRadius:"50%", border:"1px solid var(--border)", background:"var(--surface)", color:"var(--text)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:15, transition:"all .2s" },

    // FORM
    input: { background:"var(--card)", border:"1px solid var(--border)", borderRadius:5, padding:"11px 14px", fontFamily:"Inter,sans-serif", fontSize:13, color:"var(--text)", outline:"none", width:"100%", transition:"border .2s" },
    label: { fontSize:11, fontWeight:700, color:"var(--muted)", textTransform:"uppercase", letterSpacing:.5, marginBottom:5, display:"block" },

    // TOAST
    toast: { position:"fixed", bottom:24, right:24, background:"var(--card)", border:`1px solid rgba(232,64,12,0.4)`, borderLeft:`3px solid ${FIRE}`, borderRadius:6, padding:"14px 20px", fontSize:13, fontWeight:600, color:"var(--text)", zIndex:9998, transition:"transform .3s, opacity .3s", transform: toast ? "none" : "translateX(120%)", opacity: toast ? 1 : 0, maxWidth:280 },
  };

  const navLinks = [
    { k:"nav_s", id:"usluge" },
    { k:"nav_a", id:"o-nama" },
    { k:"nav_v", id:"prodaja" },
    { k:"nav_r", id:"najam" },
    { k:"nav_b", id:"blog" },
    { k:"nav_c", id:"kontakt" },
  ];

  return (
    <div style={s.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
        @keyframes spin { to { transform: translateY(-50%) rotate(360deg); } }
        @keyframes spinSpokes { to { transform: translateY(-50%) rotate(360deg); } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes floatBadge { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        a { color: inherit; }
        .srv-card-hover:hover { border-top-color: #E8400C !important; background: var(--surface) !important; }
        .veh-card-hover:hover { border-color: rgba(232,64,12,0.4) !important; transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,.25); }
        .blog-card-hover:hover { border-color: rgba(232,64,12,0.35) !important; transform: translateY(-3px); }
        .country-card-hover:hover { border-color: rgba(232,64,12,0.4) !important; transform: translateY(-2px); }
        .rent-card-hover:hover { border-color: rgba(232,64,12,0.4) !important; transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,.2); }
        .btn-fire-hover:hover { background: #ff4f20 !important; transform: translateY(-1px); box-shadow: 0 6px 28px rgba(232,64,12,.5) !important; }
        .nav-link-a { color: var(--muted); text-decoration: none; font-size: 12px; font-weight: 600; letter-spacing: .7px; text-transform: uppercase; transition: color .2s; padding: 4px 0; }
        .nav-link-a:hover { color: #E8400C; }
        input:focus, textarea:focus, select:focus { border-color: #E8400C !important; box-shadow: 0 0 0 3px rgba(232,64,12,.1) !important; outline: none; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: #E8400C; border-radius: 3px; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mob-hamburger { display: flex !important; }
          .hero-inner-mob { padding: 48px 0 40px !important; }
          .hero-h1-mob { font-size: clamp(52px,15vw,80px) !important; }
          .hero-stats-mob { flex-direction: column !important; max-width: 100% !important; }
          .hero-stat-mob { border-right: none !important; border-bottom: 1px solid var(--border); flex: auto !important; }
          .hero-stat-mob:last-child { border-bottom: none !important; }
          .grid-2col-mob { grid-template-columns: 1fr !important; gap: 32px !important; }
          .grid-contact-mob { grid-template-columns: 1fr !important; gap: 32px !important; }
          .section-mob { padding: 56px 5% !important; }
          .footer-mob { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
          .footer-mob > div:first-child { grid-column: 1 / -1; }
          .contact-form-grid-mob { grid-template-columns: 1fr !important; }
          .about-visual-mob { display: none; }
          .rent-grid-mob { grid-template-columns: 1fr !important; }
          .nav-lang-mob { gap: 4px !important; }
          .nav-lang-mob button { padding: 4px 7px !important; font-size: 10px !important; }
          .hero-tag-mob { font-size: 9px !important; letter-spacing: 0.8px !important; padding: 4px 10px !important; }
          .hero-flags-mob { gap: 6px !important; margin-top: 24px !important; padding-top: 20px !important; }
          .hero-sub-mob { font-size: 14px !important; }
          .hero-cta-mob { flex-direction: column !important; gap: 10px !important; }
          .hero-cta-mob a { width: 100% !important; justify-content: center !important; text-align: center !important; }
          .prodaja-header-mob { flex-direction: column !important; align-items: flex-start !important; }
          .blog-header-mob { flex-direction: column !important; align-items: flex-start !important; }
          .about-btns-mob { flex-direction: column !important; gap: 10px !important; }
          .about-btns-mob a { width: 100% !important; justify-content: center !important; }
          .rent-header-mob { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
        }
        @media (min-width: 769px) {
          .mob-hamburger { display: none !important; }
        }
      `}</style>

      {/* PROGRESS */}
      <div style={s.prog} />

      {/* NAV */}
      <nav style={s.nav}>
        <div style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer" }} onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>
          <div style={s.logoMark}>🏍️</div>
          <span style={s.logoText}>AUTO-<span style={{ color:FIRE }}>MOTO</span></span>
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:22 }} className="desktop-nav">
          {navLinks.map(l => (
            <a key={l.id} className="nav-link-a" href={`#${l.id}`} onClick={e => { e.preventDefault(); scrollTo(l.id); }}>{t[l.k]}</a>
          ))}
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:8 }} className="nav-lang-mob">
          {["hr","de","en"].map(l => (
            <button key={l} style={s.langBtn(lang===l)} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
          ))}
          <button style={s.themeBtn} onClick={() => setDark(!dark)}>{dark ? "🌙" : "☀️"}</button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="mob-hamburger" style={{ ...s.themeBtn, flexDirection:"column", gap:4, borderRadius:4 }}>
            <span style={{ display:"block", width:16, height:2, background:"var(--text)", borderRadius:1, transition:"all .2s", transform: menuOpen ? "rotate(45deg) translate(3px,3px)" : "none" }} />
            <span style={{ display:"block", width:16, height:2, background:"var(--text)", borderRadius:1, transition:"all .2s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display:"block", width:16, height:2, background:"var(--text)", borderRadius:1, transition:"all .2s", transform: menuOpen ? "rotate(-45deg) translate(3px,-3px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{ position:"sticky", top:62, zIndex:999, background:"var(--nav)", backdropFilter:"blur(14px)", borderBottom:"1px solid var(--border)", padding:"20px 5%", display:"flex", flexDirection:"column", gap:14 }}>
          {navLinks.map(l => (
            <a key={l.id} className="nav-link-a" style={{ fontSize:15, padding:"8px 0", borderBottom:"1px solid var(--border)" }} href={`#${l.id}`} onClick={e => { e.preventDefault(); scrollTo(l.id); }}>{t[l.k]}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hero" style={s.hero}>
        {/* Spinning wheel background */}
        <div style={s.heroBg}>
          <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", animation:"spinSpokes 20s linear infinite" }} viewBox="0 0 640 640" fill="none">
            {[0,45,90,135,180,225,270,315].map(deg => (
              <line key={deg} x1="320" y1="320" x2={320+310*Math.cos(deg*Math.PI/180)} y2={320+310*Math.sin(deg*Math.PI/180)} stroke="rgba(232,64,12,0.35)" strokeWidth="1.5"/>
            ))}
            <circle cx="320" cy="320" r="310" stroke="rgba(232,64,12,0.25)" strokeWidth="2"/>
            <circle cx="320" cy="320" r="240" stroke="rgba(232,64,12,0.1)" strokeWidth="1"/>
            <circle cx="320" cy="320" r="55" stroke="rgba(232,64,12,0.4)" strokeWidth="2.5" fill="rgba(232,64,12,0.04)"/>
          </svg>
        </div>

        <div style={s.heroInner} className="hero-inner-mob">
          <div style={s.heroTag} className="hero-tag-mob">
            <span style={{ width:6, height:6, borderRadius:"50%", background:FIRE, animation:"blink 1.4s infinite", display:"inline-block" }} />
            {t.hero_tag}
          </div>

          <h1 style={s.h1} className="hero-h1-mob">
            {t.h_t1}<br/>
            <span style={{ color:FIRE }}>{t.h_t2}</span><br/>
            {t.h_t3}
          </h1>

          <p style={{ fontSize:15, color:"var(--muted)", maxWidth:460, lineHeight:1.75, marginBottom:32 }} className="hero-sub-mob">{t.hero_sub}</p>

          <div style={{ display:"flex", gap:12, flexWrap:"wrap" }} className="hero-cta-mob">
            <a href="#kontakt" className="btn-fire-hover" style={s.btnFire} onClick={e => { e.preventDefault(); scrollTo("kontakt"); }}>{t.hero_cta1}</a>
            <a href="#usluge" style={s.btnGhost} onClick={e => { e.preventDefault(); scrollTo("usluge"); }}>{t.hero_cta2}</a>
          </div>

          {/* EU flags */}
          <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap", marginTop:36, paddingTop:32, borderTop:"1px solid var(--border)" }} className="hero-flags-mob">
            {[["🇭🇷","hr"],["🇩🇪","de"],["🇦🇹","at"],["🇸🇮","si"],["🇮🇹","it"],["🇫🇷","fr"],["🇳🇱","nl"]].map(([flag,code],i) => (
              <span key={code} style={{ display:"flex", alignItems:"center", gap:5, fontSize:12, color:"var(--muted)", fontWeight:600 }}>
                {i > 0 && <span style={{ color:"var(--subtle)", fontSize:10 }}>·</span>}
                {flag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display:"flex", border:"1px solid var(--border)", borderRadius:6, overflow:"hidden", marginTop:44, maxWidth:520 }} className="hero-stats-mob">
            {[["12+","hs1"],["800+","hs2"],["EU","hs3"]].map(([n,k],i) => (
              <div key={k} style={{ ...s.heroStat, borderRight: i<2 ? "1px solid var(--border)" : "none" }} className="hero-stat-mob">
                <div style={s.statN}>{n}</div>
                <div style={s.statL}>{t[k]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USLUGE */}
      <section id="usluge" style={s.section("--bg2")} className="section-mob">
        <div style={s.inner}>
          <span style={s.eyebrow}>{t.s_ey}</span>
          <h2 style={s.secTitle}>{t.s_ti}</h2>
          <p style={s.secSub}>{t.s_su}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:1, background:"var(--border)", border:"1px solid var(--border)", borderRadius:8, overflow:"hidden" }}>
            {SERVICES.map(({ icon, k }) => (
              <div key={k} className="srv-card-hover" style={s.srvCard}>
                <span style={s.icon}>{icon}</span>
                <div style={s.cardName}>{t[k+"n"]}</div>
                <div style={s.cardDesc}>{t[k+"d"]}</div>
                <span style={s.tag}>{t[k+"t"]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O NAMA */}
      <section id="o-nama" style={s.section("--bg")} className="section-mob">
        <div style={s.inner}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }} className="grid-2col-mob">
            {/* Visual */}
            <div style={{ position:"relative" }} className="about-visual-mob">
              <div style={{ background:"var(--bg3)", border:"1px solid var(--border)", borderRadius:10, aspectRatio:"4/3", display:"flex", alignItems:"center", justifyContent:"center", fontSize:88, position:"relative", overflow:"hidden" }}>
                <span style={{ position:"relative", zIndex:1 }}>🏍️</span>
                <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse at 70% 30%, rgba(232,64,12,.08), transparent 60%)` }}/>
              </div>
              <div style={{ position:"absolute", bottom:-14, right:-14, width:108, height:108, background:FIRE, borderRadius:6, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", animation:"floatBadge 3s ease-in-out infinite" }}>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:40, fontWeight:900, color:"#fff", lineHeight:1 }}>12</div>
                <div style={{ fontSize:9, fontWeight:700, color:"rgba(255,255,255,.75)", textAlign:"center", textTransform:"uppercase", letterSpacing:.5, marginTop:2 }}>{t.ab_yr}</div>
              </div>
            </div>

            <div>
              <span style={s.eyebrow}>{t.ab_ey}</span>
              <h2 style={s.secTitle}>{t.ab_ti}</h2>
              <p style={{ fontSize:14, color:"var(--muted)", lineHeight:1.75, marginBottom:12 }}>{t.ab_p1}</p>
              <p style={{ fontSize:14, color:"var(--muted)", lineHeight:1.75, marginBottom:24 }}>{t.ab_p2}</p>
              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:9 }}>
                {["ab_l1","ab_l2","ab_l3","ab_l4","ab_l5"].map(k => (
                  <li key={k} style={{ display:"flex", gap:10, fontSize:13, color:"var(--muted)", alignItems:"flex-start" }}>
                    <span style={{ color:FIRE, fontSize:12, flexShrink:0, marginTop:2 }}>▸</span>
                    {t[k]}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop:28, display:"flex", gap:12, flexWrap:"wrap" }} className="about-btns-mob">
                <a href="#kontakt" className="btn-fire-hover" style={s.btnFire} onClick={e => { e.preventDefault(); scrollTo("kontakt"); }}>{t.ab_cta}</a>
                <a href="#prodaja" style={s.btnGhost} onClick={e => { e.preventDefault(); scrollTo("prodaja"); }}>{t.ab_cta2}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EU POKRIVENOST */}
      <section id="podrucje" style={s.section("--bg2")} className="section-mob">
        <div style={s.inner}>
          <span style={s.eyebrow}>{t.pd_ey}</span>
          <h2 style={s.secTitle}>{t.pd_ti}</h2>
          <p style={s.secSub}>{t.pd_su}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))", gap:14 }}>
            {COUNTRIES.map(({ flag, name, k }) => (
              <div key={k} className="country-card-hover" style={{ background:"var(--card)", border:"1px solid var(--border)", borderRadius:6, padding:"22px 16px", textAlign:"center", transition:"all .2s", cursor:"default" }}>
                <div style={{ fontSize:30, marginBottom:8 }}>{flag}</div>
                <div style={{ fontWeight:700, fontSize:12 }}>{name}</div>
                <div style={{ fontSize:11, color:"var(--muted)", marginTop:4 }}>{t[k]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODAJA */}
      <section id="prodaja" style={s.section("--bg")} className="section-mob">
        <div style={s.inner}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:16, marginBottom:44 }} className="prodaja-header-mob">
            <div>
              <span style={s.eyebrow}>{t.vh_ey}</span>
              <h2 style={{ ...s.secTitle, marginBottom:0 }}>{t.vh_ti}</h2>
            </div>
            <a href="#kontakt" style={s.btnGhost} onClick={e => { e.preventDefault(); scrollTo("kontakt"); }}>{t.vh_all}</a>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:18 }}>
            {VEHICLES.map(v => (
              <div key={v.model} className="veh-card-hover" style={{ background:"var(--card)", border:"1px solid var(--border)", borderRadius:8, overflow:"hidden", transition:"all .25s", cursor:"pointer" }}>
                <div style={{ height:170, background:"var(--bg3)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:56, position:"relative" }}>
                  {v.icon}
                  <div style={{ position:"absolute", top:10, left:10, background:v.badgeColor, color:"#fff", fontSize:10, fontWeight:700, letterSpacing:1, padding:"3px 8px", borderRadius:3, textTransform:"uppercase" }}>{t[v.badgeK]}</div>
                </div>
                <div style={{ padding:20 }}>
                  <div style={{ fontSize:11, color:"var(--muted)", fontWeight:600, letterSpacing:.7, textTransform:"uppercase" }}>{v.make}</div>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:24, fontWeight:800, textTransform:"uppercase", margin:"4px 0 10px" }}>{v.model}</div>
                  <div style={{ display:"flex", gap:12, marginBottom:14, flexWrap:"wrap" }}>
                    {[["📅",v.year],["⚡",`${v.hp} KS`],["🛣️",`${v.km} km`]].map(([icon,val]) => (
                      <span key={val} style={{ fontSize:11, color:"var(--muted)", display:"flex", alignItems:"center", gap:4 }}>{icon} {val}</span>
                    ))}
                  </div>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:28, fontWeight:900, color:FIRE }}>{v.price}</div>
                  <div style={{ fontSize:11, color:"var(--muted)", marginTop:3 }}>{t.veh_inc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAJAM */}
      <section id="najam" style={s.section("--bg2")} className="section-mob">
        <div style={s.inner}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:16, marginBottom:44 }} className="rent-header-mob">
            <div>
              <span style={s.eyebrow}>{t.rn_ey}</span>
              <h2 style={{ ...s.secTitle, marginBottom:8 }}>{t.rn_ti}</h2>
              <p style={{ ...s.secSub, marginBottom:0 }}>{t.rn_su}</p>
            </div>
            <a href="#kontakt" className="btn-fire-hover" style={s.btnFire} onClick={e => { e.preventDefault(); scrollTo("kontakt"); }}>{t.rn_cta}</a>
          </div>

          {/* Badges */}
          <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:32 }}>
            {["rn_badge1","rn_badge2","rn_badge3"].map(k => (
              <span key={k} style={{ display:"inline-flex", alignItems:"center", gap:6, background:`rgba(232,64,12,0.1)`, border:`1px solid rgba(232,64,12,0.25)`, borderRadius:3, padding:"5px 12px", fontSize:11, fontWeight:700, color:FIRE, letterSpacing:1, textTransform:"uppercase" }}>
                <span style={{ width:5, height:5, borderRadius:"50%", background:FIRE, display:"inline-block" }} />
                {t[k]}
              </span>
            ))}
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:18 }} className="rent-grid-mob">
            {RENTALS.map(({ icon, k, color }) => (
              <div key={k} className="rent-card-hover" style={{ background:"var(--card)", border:"1px solid var(--border)", borderRadius:8, overflow:"hidden", transition:"all .25s", cursor:"default" }}>
                <div style={{ height:10, background:color, width:"100%" }} />
                <div style={{ padding:"24px 24px 28px" }}>
                  <div style={{ fontSize:36, marginBottom:14 }}>{icon}</div>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:22, fontWeight:800, textTransform:"uppercase", marginBottom:8 }}>{t[k+"n"]}</div>
                  <div style={{ fontSize:13, color:"var(--muted)", lineHeight:1.65, marginBottom:18 }}>{t[k+"d"]}</div>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:8 }}>
                    <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:26, fontWeight:900, color }}>{t[k+"p"]}</div>
                    <a href="#kontakt" style={{ ...s.btnGhost, fontSize:11, padding:"7px 14px" }} onClick={e => { e.preventDefault(); scrollTo("kontakt"); }}>{lang==="hr" ? "Upitaj →" : lang==="de" ? "Anfrage →" : "Enquire →"}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" style={s.section("--bg")} className="section-mob">
        <div style={s.inner}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:16, marginBottom:44 }} className="blog-header-mob">
            <div>
              <span style={s.eyebrow}>{t.bl_ey}</span>
              <h2 style={{ ...s.secTitle, marginBottom:0 }}>{t.bl_ti}</h2>
            </div>
            <a href="#blog" style={s.btnGhost}>{t.bl_all}</a>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:18 }}>
            {POSTS.map(p => (
              <div key={p.k} className="blog-card-hover" style={{ background:"var(--card)", border:"1px solid var(--border)", borderRadius:8, overflow:"hidden", transition:"all .25s", cursor:"pointer" }}>
                <div style={{ height:150, background:"var(--bg3)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:46, position:"relative" }}>
                  {p.icon}
                  <div style={{ position:"absolute", top:10, left:10, background:"var(--surface)", border:"1px solid var(--border)", color:FIRE, fontSize:10, fontWeight:700, letterSpacing:1, padding:"3px 8px", borderRadius:3, textTransform:"uppercase" }}>{t[p.catK]}</div>
                </div>
                <div style={{ padding:20 }}>
                  <div style={{ fontSize:11, color:"var(--subtle)", marginBottom:8 }}>
                    {lang==="hr" ? p.dateHR : lang==="de" ? p.dateDE : p.dateEN}
                  </div>
                  <div style={{ fontWeight:700, fontSize:14, lineHeight:1.45, marginBottom:8 }}>{t[p.k+"t"]}</div>
                  <div style={{ fontSize:12, color:"var(--muted)", lineHeight:1.65, marginBottom:14 }}>{t[p.k+"e"]}</div>
                  <a href="#blog" style={{ fontSize:12, fontWeight:700, color:FIRE, textDecoration:"none", letterSpacing:.4 }}>{t.b_read}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" style={s.section("--bg")} className="section-mob">
        <div style={s.inner}>
          <span style={s.eyebrow}>{t.ct_ey}</span>
          <h2 style={s.secTitle}>{t.ct_ti}</h2>
          <p style={s.secSub}>{t.ct_su}</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:56 }} className="grid-contact-mob">
            {/* INFO + MAP */}
            <div>
              <div style={{ display:"flex", flexDirection:"column", gap:14, marginBottom:24 }}>
                {[["📍","ci_ad","Slavonska avenija 52, 10000 Zagreb"],["📞","ci_ph","+385 91 234 5678"],["✉️","ci_em","info@auto-moto-zagreb.hr"],["⏰","ci_wh","ci_wv"]].map(([icon,labelK,val]) => (
                  <div key={labelK} style={{ display:"flex", gap:14, alignItems:"flex-start", background:"var(--card)", border:"1px solid var(--border)", borderRadius:6, padding:"16px" }}>
                    <div style={{ fontSize:20, flexShrink:0 }}>{icon}</div>
                    <div>
                      <div style={{ fontSize:10, textTransform:"uppercase", letterSpacing:1, color:FIRE, fontWeight:700 }}>{t[labelK]}</div>
                      <div style={{ fontSize:14, color:"var(--text)", marginTop:3, fontWeight:500 }}>{val === "ci_wv" ? t.ci_wv : val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* MAP */}
              <div style={{ background:"var(--card)", border:"1px solid var(--border)", borderRadius:6, height:200, display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", inset:0, backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 27px,var(--border) 27px,var(--border) 28px),repeating-linear-gradient(90deg,transparent,transparent 27px,var(--border) 27px,var(--border) 28px)" }} />
                <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>
                  <div style={{ fontSize:32, marginBottom:8 }}>📍</div>
                  <div style={{ fontSize:12, color:"var(--muted)", marginBottom:14 }}>{t.map_l}</div>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-fire-hover" style={{ ...s.btnFire, fontSize:12, padding:"9px 18px" }}>{t.map_btn}</a>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }} className="contact-form-grid-mob">
                <div>
                  <label style={s.label}>{t.cf_nm}</label>
                  <input style={s.input} type="text" placeholder={t.cf_nmp} value={form.name} onChange={e => setForm({...form,name:e.target.value})} />
                </div>
                <div>
                  <label style={s.label}>{t.cf_ph2}</label>
                  <input style={s.input} type="tel" placeholder="+385 91 ..." value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} />
                </div>
              </div>
              <div>
                <label style={s.label}>{t.ci_em}</label>
                <input style={s.input} type="email" placeholder="mail@example.com" value={form.email} onChange={e => setForm({...form,email:e.target.value})} />
              </div>
              <div>
                <label style={s.label}>{t.cf_sv}</label>
                <select style={s.input} value={form.service} onChange={e => setForm({...form,service:e.target.value})}>
                  {["cs0","cs1","cs2","cs3","cs4","cs5","cs6","cs7"].map(k => <option key={k} value={k===`cs0`?"":k}>{t[k] || (k==="cs7" ? (lang==="hr"?"Najam motocikla":lang==="de"?"Motorradmiete":"Motorcycle rental") : k)}</option>)}
                </select>
              </div>
              <div>
                <label style={s.label}>{t.cf_mg}</label>
                <textarea style={{ ...s.input, minHeight:110, resize:"vertical" }} placeholder={t.cf_mgp} value={form.message} onChange={e => setForm({...form,message:e.target.value})} />
              </div>
              <button className="btn-fire-hover" style={{ ...s.btnFire, width:"100%", justifyContent:"center" }} onClick={showToast}>{t.cf_sb}</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:"var(--bg3)", borderTop:"1px solid var(--border)", padding:"44px 5%" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:40 }} className="footer-mob">
          <div>
            <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:20, fontWeight:900, letterSpacing:2, marginBottom:10 }}>
              AUTO-<span style={{ color:FIRE }}>MOTO</span> <span style={{ fontSize:13, fontWeight:400, color:"var(--muted)", letterSpacing:0 }}>Zagreb</span>
            </div>
            <p style={{ fontSize:13, color:"var(--muted)", lineHeight:1.7 }}>{t.fd_d}</p>
          </div>
          {[
            { hk:"fh_s", links:[["usluge","fl_s1"],["usluge","fl_s2"],["usluge","fl_s3"],["usluge","fl_s4"],["usluge","fl_s5"]] },
            { hk:"fh_c", links:[["o-nama","fc_a"],["prodaja","fc_v"],["blog","fc_b"],["kontakt","fc_c"]] },
            { hk:"fh_f", links:[["#","Facebook"],["#","Instagram"],["#","YouTube"]] },
          ].map(col => (
            <div key={col.hk}>
              <div style={{ fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:1.5, color:FIRE, marginBottom:14 }}>{t[col.hk]}</div>
              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:9 }}>
                {col.links.map(([id,k]) => (
                  <li key={k}><a href={id.startsWith("#") ? id : `#${id}`} style={{ fontSize:13, color:"var(--muted)", textDecoration:"none", transition:"color .2s" }} onMouseEnter={e => e.target.style.color=FIRE} onMouseLeave={e => e.target.style.color="var(--muted)"}>{t[k] || k}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ maxWidth:1100, margin:"28px auto 0", paddingTop:24, borderTop:"1px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:12, color:"var(--subtle)", flexWrap:"wrap", gap:8 }}>
          <span>© 2025 Auto-Moto Zagreb. {t.fb_r}</span>
          <span>{t.fb_l}</span>
        </div>
      </footer>

      {/* TOAST */}
      <div style={s.toast}>{t.toast_ok}</div>
    </div>
  );
}
