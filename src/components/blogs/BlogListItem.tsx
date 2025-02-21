import clsx from 'clsx';
import { useMonitorAuthUser } from '../../hooks/useMonitorAuthUser';
import type { TBlogItem } from '../../lib/types/TBlogItem';
import { Actions } from './admin/Actions';

type Props = {
  blog: TBlogItem;
  isOdd?: boolean;
};

export const BlogListItem = ({ blog, isOdd }: Props) => {
  const { loggedUser } = useMonitorAuthUser();

  return (
    <div className="space-y-4">
      <div className="flex flex-col max-w-[350px] group">
        <article className="cursor-pointer relative overflow-hidden">
          <img
            className="w-[350px] h-[350px] object-cover group-hover:scale-105 transition-transform ease-in-out duration-300"
            src={blog.bannerImage}
            alt={blog.title}
            width={300}
            height={300}
          />
          <h3
            className={clsx(
              'text-xl font-bold absolute bottom-0 w-full pb-6 pt-2 px-3 text-beige underline',
              isOdd ? 'bg-light-green' : 'bg-dark-brown',
            )}
          >
            {blog.title}
          </h3>
        </article>
      </div>
      {loggedUser && <Actions blogId={blog.id} />}
    </div>
  );
};
