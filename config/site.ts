export type SiteConfig = typeof siteConfig;

export const routes_navbar = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Sobre nosotros",
    href: "/about-us",
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
