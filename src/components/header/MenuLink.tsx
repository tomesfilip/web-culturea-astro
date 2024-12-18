export interface MenuLinkProps {
  url: string;
  title: string;
}

export const MenuLink = ({ url, title }: MenuLinkProps) => {
  return (
    <a href={url} className="text-2xl">
      {title}
    </a>
  );
};
