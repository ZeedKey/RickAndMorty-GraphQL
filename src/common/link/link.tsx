import NextLink from "next/link";

type LinkProps = {
  children?: React.ReactNode;
  href: string;
};

export const Link: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <NextLink passHref href={href}>
      {children}
    </NextLink>
  );
};
