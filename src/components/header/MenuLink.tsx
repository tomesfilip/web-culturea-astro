import clsx from 'clsx';

export interface MenuLinkProps {
  url: string;
  title: string;
  currPath?: string;
}

export const MenuLink = ({ url, title, currPath }: MenuLinkProps) => {
  // Check if the current path starts with the url or matches the url exactly
  const isActive = currPath?.startsWith(url) || currPath === url;

  // If the link is not the current page, apply underline
  const shouldUnderline = !isActive;

  return (
    <a
      href={url}
      className={clsx('text-lg lg:text-2xl', shouldUnderline && 'underline')}
    >
      {title}
    </a>
  );
};
