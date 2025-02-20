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

export const BlogList = () => {
  const $isCreateModalOpen = useStore(isCreateModalOpen);

  const { loggedUser } = useMonitorAuthUser();

  const { data: blogs, isLoading, error } = useFetchBlogList();

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
      {blogs && blogs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {blogs.map((blog: TBlogItem, index: number) => (
            <BlogListItem key={blog.id} blog={blog} isOdd={index % 2 === 0} />
          ))}
        </div>
      )}
    </div>
  );
};
