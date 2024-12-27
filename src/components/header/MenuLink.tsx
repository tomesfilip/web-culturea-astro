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
      className={clsx(
        'text-2xl hover:underline',
        currPath === url && 'underline',
      )}
    >
      {title}
    </a>
  );
};
