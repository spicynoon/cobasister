import React, { useState } from 'react';
import Modal from './Modal';

interface ModalCommentProps {
  postId: number;
  onSubmit: (postId: number, content: string) => void;
  onClose: () => void;
}

const ModalComment: React.FC<ModalCommentProps> = ({
  postId,
  onSubmit,
  onClose,
}) => {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (comment.trim() !== '') {
      onSubmit(postId, comment);
      setComment('');
      onClose();
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className="p-4">
        <h2 className="font-bold mb-4">Tambah Komentar</h2>
        <textarea
          placeholder="Tulis komentar..."
          className="w-full border rounded-lg p-2 pl-4 mb-4 bg-gray-100 resize-none"
          value={comment}
          onChange={e => setComment(e.target.value)}
          rows={4}
        />
        <div className="flex justify-between">
          <button
            className="bg-gray-500 text-white p-2 rounded-full"
            onClick={onClose}
          >
            Batal
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded-full"
            onClick={handleSubmit}
          >
            Kirim
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComment;
