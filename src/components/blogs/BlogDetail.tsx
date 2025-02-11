import type { TBlogItem } from '../../lib/types/TBlogItem';

import parse from 'html-react-parser';

interface Props {
  blog: TBlogItem;
}

export const BlogDetail = ({ blog }: Props) => {
  return <div className="blog-body-text pr-4">{parse(blog.body)}</div>;
};
