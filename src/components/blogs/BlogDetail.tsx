import type { TBlogItem } from '../../lib/types/TBlogItem';

import parse from 'html-react-parser';

import '../../styles/blogItem.css';

interface Props {
  blog: TBlogItem;
}

export const BlogDetail = ({ blog }: Props) => {
  return (
    <div className="px-4 py-8 lg:py-16 mx-auto blog-body-text max-w-screen-lg">
      {parse(blog.body)}
    </div>
  );
};
