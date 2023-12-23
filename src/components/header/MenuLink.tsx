import type { TMenuLink } from '../../types/TMenuLink';

type Props = {
  menuItem: TMenuLink;
  onClick: () => void;
};

export const MenuLink = ({ menuItem, onClick }: Props) => {
  return (
    <li onClick={onClick}>
      <a href={menuItem.url} className="text-[19px] font-headline">
        {menuItem.title}
      </a>
    </li>
  );
};
