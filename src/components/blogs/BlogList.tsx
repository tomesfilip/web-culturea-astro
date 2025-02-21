import { useStore } from '@nanostores/react';

import { useMonitorAuthUser } from '../../hooks/useMonitorAuthUser';
import { isCreateModalOpen } from '../../stores/createModalStore';
import type { TBlogItem } from '../../lib/types/TBlogItem';
import { logout } from '../../utils/logout';
import { BlogListItem } from './BlogListItem';
import { ActionButton } from './admin/ActionButton';
import { CreateEditForm } from './admin/CreateEditForm';
import { useFetchBlogList } from '../../hooks/useFetchBlogList';
import { LoadingSpinner } from '../shared/LoadingSpinner';
import { BlogDetail } from './BlogDetail';
import { selectedBlogStore } from '../../stores/selectedBlogStore';

export const BlogList = () => {
  const $isCreateModalOpen = useStore(isCreateModalOpen);
  const selectedBlog = useStore(selectedBlogStore);

  const { loggedUser } = useMonitorAuthUser();

  const { data: blogs, isLoading } = useFetchBlogList();
  const relatedBlogs = blogs
    .filter((blog) => blog.id !== selectedBlog?.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col gap-y-6 items-center px-4 lg:px-0">
      {isLoading && <LoadingSpinner />}
      {loggedUser && isCreateModalOpen.get() && <CreateEditForm />}
      {loggedUser && (
        <>
          <ActionButton onClick={() => isCreateModalOpen.set(true)}>
            Přidat blog
          </ActionButton>
          <ActionButton onClick={logout}>Odhlásit se</ActionButton>
        </>
      )}
      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} relatedBlogs={relatedBlogs} />
      ) : (
        blogs &&
        blogs.length > 0 && (
          <>
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-8 text-center">
              Články
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {blogs.map((blog: TBlogItem, index: number) => (
                <BlogListItem
                  key={blog.id}
                  blog={blog}
                  isOdd={index % 2 === 0}
                />
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
};
