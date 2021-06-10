import Link from "next/link";

const NavItem = ({
  url,
  text,
  open,
  index,
}: {
  url: string;
  text: string;
  open?: boolean;
  index?: number;
}) => {
  return (
    <Link href={url}>
      <a
        className={`transform transition-all hover:-translate-x-1 md:transform-none ${
          open
            ? `translate-y-0 opacity-100`
            : `-translate-y-5 md:translate-y-0 opacity-0 md:opacity-100`
        }`}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;
