import { useFetchBlogList } from '../../hooks/useFetchBlogList';
import type { TBlogItem } from '../../types/TBlogItem';
import { Loader } from '../shared/Loader';
import { BlogListItem } from './BlogListItem';

export const BlogList = () => {
  const { data: blogs, isLoading } = useFetchBlogList();

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (!blogs || blogs.length < 1) && (
        <p className="text-xl font-bold">Zatím nebyly přidány žádné blogy.</p>
      )}
      {blogs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {blogs.map((blog: TBlogItem) => (
            <BlogListItem key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </>
  );
};
