import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import { Backdrop } from './Backdrop';
import { Actions } from './admin/Actions';

type Props = {
  blog: BlogTypes;
  handleClose: () => void;
};

const appear = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1
  },
  exit: {
    '100vh',
    opacity: 0,
  },
};

export const BlogDetailModal = ({ blog, handleClose }: Props) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="flex flex-col items-center z-20 bg-white rounded-lg p-4 md:p-8 w-11/12 md:w-4/5 lg:w-3/5 h-[90vh] md:h-[85vh] lg:h-[80vh]"
        onClick={(e) => e.stopPropagation()}
        variants={appear}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalHeader closeModal={handleClose} />
        <div className="overflow-y-scroll mt-2 max-w-full break-words">
          <h3 className="text-center lg:text-left">{blog.title}</h3>
          <img
            className="mt-2 mb-3 w-[300px] h-[300px] rounded-lg object-cover mx-auto sm:mx-0"
            src={blog.bannerImage}
            alt={blog.title}
            width={300}
            height={300}
          />
          <div className="blog-body-text">{parse(blog.body)}</div>
        </div>
        {loggedUser && <Actions blogId={blog.id} />}
      </motion.div>
    </Backdrop>
  );
};