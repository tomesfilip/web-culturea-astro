import parse from 'html-react-parser';

import '../../styles/blogItem.css';
import { Section } from '../shared/Section';
import { BlogListRelated } from './BlogListRelated';
import type { TBlogItem } from '../../lib/types/TBlogItem';
import { selectedBlogStore } from '../../stores/selectedBlogStore';

interface Props {
  blog: TBlogItem;
  relatedBlogs: TBlogItem[];
}

export const BlogDetail = ({ blog, relatedBlogs }: Props) => {
  return (
    <Section id="blog-detail" noPXDesktop noPXMobile noPYDesktop noPYMobile>
      <div>
        <div className="relative w-full max-w-[1600px] h-[400px] lg:h-[800px] overflow-hidden mx-auto">
          {blog && (
            <>
              <h1 className="absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl lg:text-7xl font-bold text-beige">
                {blog.title}
              </h1>
              <div className="size-full z-[1] absolute pointer-events-none bg-black/40"></div>
              <img
                className="size-full object-cover object-center"
                src={blog.bannerImage}
                alt={blog.title}
                width={1600}
                height={800}
              />
            </>
          )}
        </div>
        <div className="px-4 py-8 lg:py-16 mx-auto blog-body-text max-w-screen-lg">
          {blog && parse(blog.body)}
        </div>
      </div>

      <div className="px-4 py-8 mx-auto max-w-screen-lg flex flex-col items-center md">
        <div className="flex flex-col gap-y-12 items-center">
          <div className="flex flex-col items-center lg:items-start gap-y-3">
            <h2 className="text-2xl lg:text-3xl">Mohlo by Vás zajímat:</h2>
            <BlogListRelated blogs={relatedBlogs} />
          </div>
          <button
            onClick={() => selectedBlogStore.set(null)}
            className="px-12 py-5 bg-light-brown text-beige shadow-md font-semibold text-lg lg:text-2xl rounded-[70px] block w-fit mx-auto"
          >
            Další články
          </button>
        </div>
      </div>
    </Section>
  );
};
