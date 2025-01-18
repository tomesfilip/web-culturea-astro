import clsx from 'clsx';

export interface MenuLinkProps {
  url: string;
  title: string;
  currPath?: string;
}

export const MenuLink = ({ url, title, currPath }: MenuLinkProps) => {
  const isFotogalerie = currPath?.startsWith('/fotogalerie/');

  const shouldUnderline =
    currPath === '/' ||
    (currPath !== url && !(isFotogalerie && url.startsWith('/fotogalerie/')));

  return (
    <a
      href={url}
      className={clsx('text-lg lg:text-2xl', shouldUnderline && 'underline')}
    >
      {title}
    </a>
  );
};
