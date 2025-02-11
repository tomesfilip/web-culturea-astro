import { useMonitorAuthUser } from '../../hooks/useMonitorAuthUser';
import type { TBlogItem } from '../../lib/types/TBlogItem';
import { Actions } from './admin/Actions';

type Props = {
  blog: TBlogItem;
};

export const BlogListItem = ({ blog }: Props) => {
  const { loggedUser } = useMonitorAuthUser();

  return (
    <a className="flex flex-col max-w-[350px] group" href={`/blog/${blog.id}`}>
      <article className="cursor-pointer relative overflow-hidden">
        <img
          className="w-[350px] h-[350px] object-cover group-hover:scale-105 transition-transform ease-in-out duration-300"
          src={blog.bannerImage}
          alt={blog.title}
          width={300}
          height={300}
        />
        <h3 className="text-xl font-bold absolute bottom-0 w-full pb-6 pt-2 px-3 text-beige underline group-odd:bg-light-green group-even:bg-dark-brown">
          {blog.title}
        </h3>
      </article>
      {loggedUser && <Actions blogId={blog.id} />}
    </a>
  );
};
