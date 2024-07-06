import React, { useState } from 'react';
import { FaUserCircle, FaPaperPlane } from 'react-icons/fa';
import Modal from './Modal';

interface ThoughtFieldProps {
  onSubmit: (title: string, content: string) => void;
}

const ThoughtField: React.FC<ThoughtFieldProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePostSubmit = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      onSubmit(title, content);
      setTitle('');
      setContent('');
      setModalOpen(false);
    }
  };

  return (
    <>
      <div
        className="bg-white p-4 rounded shadow flex items-center space-x-4 mb-4"
        onClick={() => setModalOpen(true)}
      >
        <FaUserCircle size={32} className="text-gray-400" />
        <input
          type="text"
          placeholder="Ingin bertanya atau membagikan pemikiran?"
          className="flex-1 border rounded-full p-2 pl-4 bg-gray-100"
          readOnly
        />
      </div>
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <FaUserCircle size={32} className="text-gray-400 mr-2" />
              <h2 className="font-bold">Berbagi Pemikiran</h2>
            </div>
            <input
              type="text"
              placeholder="Judul"
              className="w-full border rounded-lg p-2 pl-4 mb-4 bg-gray-100"
              value={title}
              onChange={handleTitleChange}
            />
            <textarea
              placeholder="Tulis sesuatu..."
              className="w-full border rounded-lg p-2 pl-4 mb-4 bg-gray-100 resize-none"
              value={content}
              onChange={handlePostChange}
              rows={4}
            />
            <div className="flex justify-between">
              <button
                className="bg-gray-500 text-white p-2 rounded-full"
                onClick={() => setModalOpen(false)}
              >
                Batal
              </button>
              <button
                className="bg-blue-500 text-white p-2 rounded-full"
                onClick={handlePostSubmit}
              >
                Bagikan
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ThoughtField;
