export type SiteConfig = typeof siteConfig;

export const routes_navbar = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Destinos",
    href: "/docs",
  },
  {
    label: "Negocios",
    href: "/pricing",
  },
  {
    label: "Sobre nosotros",
    href: "/blog",
  },
  {
    label: "Contacto",
    href: "/about",
  },
];

export const siteConfig = {
  name: "SU-TURISMO",
  description: "Turismo de suma paz a tu alcance.",
  navItems: routes_navbar,
  navMenuItems: routes_navbar,
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
