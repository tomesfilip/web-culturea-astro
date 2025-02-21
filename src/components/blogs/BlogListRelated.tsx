import type { TBlogItem } from '../../lib/types/TBlogItem';
import { BlogListItem } from './BlogListItem';

interface Props {
  blogs: TBlogItem[];
}

export const BlogListRelated = ({ blogs }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {blogs.map((blog, index) => (
        <BlogListItem blog={blog} isOdd={index % 2 === 0} />
      ))}
    </div>
  );
};
