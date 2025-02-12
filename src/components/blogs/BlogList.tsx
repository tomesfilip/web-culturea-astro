import { useStore } from '@nanostores/react';

import { useFetchBlogList } from '../../hooks/useFetchBlogList';
import { useMonitorAuthUser } from '../../hooks/useMonitorAuthUser';
import { isCreateModalOpen } from '../../stores/createModalStore';
import type { TBlogItem } from '../../lib/types/TBlogItem';
import { logout } from '../../utils/logout';
import { Loader } from '../shared/Loader';
import { BlogListItem } from './BlogListItem';
import { ActionButton } from './admin/ActionButton';
import { CreateEditForm } from './admin/CreateEditForm';

export const BlogList = () => {
  const $isCreateModalOpen = useStore(isCreateModalOpen);

  const { loggedUser } = useMonitorAuthUser();
  const { data: blogs, isLoading } = useFetchBlogList();

  return (
    <div className="flex flex-col gap-y-6 items-center px-4 lg:px-0">
      {isLoading && <Loader />}
      {loggedUser && isCreateModalOpen.get() && <CreateEditForm />}
      {loggedUser && (
        <>
          <ActionButton onClick={() => isCreateModalOpen.set(true)}>
            Přidat blog
          </ActionButton>
          <ActionButton onClick={logout}>Odhlásit se</ActionButton>
        </>
      )}
      {!isLoading && (!blogs || blogs.length < 1) && (
        <p className="text-xl font-bold">Zatím nebyly přidány žádné články.</p>
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
