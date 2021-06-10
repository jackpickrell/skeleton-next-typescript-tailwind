import NavItem from "../components/navItem";
import Dropdown from "../components/dropdown";

const links = [
  { url: `/`, text: "Home" },
  { url: `/about`, text: "About" },
  {
    text: "Services",
    subItems: [
      { url: `/services/design`, text: "Design" },
      { url: `/services/development`, text: "Development" },
      { url: `/services/branding`, text: "Branding" },
    ],
  },
  { url: `/contact`, text: "Contact" },
];

const Menu = ({ open }) => {
  return (
    <>
      <MobileNav links={links} open={open} />
      <DesktopNav links={links} />
    </>
  );
};

export default Menu;

const mobileNavStyles = (open: boolean) =>
  `md:hidden fixed inset-0 overflow-scroll bg-white bg-opacity-70 text-4xl text-right py-24 backdrop-blur-sm backdrop-filter transition-opacity ${
    open ? `opacity-100` : `opacity-0 delay-100 pointer-events-none`
  }`;

const desktopNavStyles = `hidden md:flex space-x-5 text-lg text-blueGray-700`;

const MobileNav = ({ open, links }) => {
  return (
    <nav className={mobileNavStyles(open)}>
      <div className="container flex flex-col space-y-4">
        {links.map(
          (
            {
              url,
              text,
              subItems,
            }: { url: string; text: string; subItems: [] },
            index: number
          ) => (
            <>
              {subItems ? (
                <Dropdown
                  key={text}
                  subItems={subItems}
                  text={text}
                  open={open}
                  index={index}
                />
              ) : (
                <NavItem
                  key={url}
                  url={url}
                  text={text}
                  open={open}
                  index={index}
                />
              )}
            </>
          )
        )}
      </div>
    </nav>
  );
};

const DesktopNav = ({ links }) => {
  return (
    <nav className={desktopNavStyles}>
      {links.map(({ url, text, subItems }) => {
        return (
          <>
            {subItems ? (
              <Dropdown key={text} subItems={subItems} text={text} />
            ) : (
              <NavItem key={url} url={url} text={text} />
            )}
          </>
        );
      })}
    </nav>
  );
};
