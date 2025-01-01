import clsx from 'clsx';

export interface MenuLinkProps {
  url: string;
  title: string;
  currPath?: string;
}

export const MenuLink = ({ url, title, currPath }: MenuLinkProps) => {
  return (
    <a
      href={url}
      className={clsx('text-lg lg:text-2xl', currPath !== url && 'underline')}
    >
      {title}
    </a>
  );
};
