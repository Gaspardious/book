import book from '../../../schemas/book';
import chapter from '../../../schemas/chapter';
import comment from '../../../schemas/comment';
import blockContent from '../../../schemas/blockContent';

export const schema = {
  types: [book, chapter, comment, blockContent],
};