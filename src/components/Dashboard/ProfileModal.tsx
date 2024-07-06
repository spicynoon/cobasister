import React from 'react';
import Modal from './Modal';
import { FaUserCircle } from 'react-icons/fa';

interface ProfileModalProps {
  username: string;
  postCount: number;
  friendsCount: number;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  username,
  postCount,
  friendsCount,
  onClose,
}) => {
  return (
    <Modal onClose={onClose}>
      <div className="p-4 flex flex-col items-center">
        <FaUserCircle size={64} className="text-gray-400 mb-4" />
        <h2 className="font-bold text-lg">{username}</h2>
        <p className="text-gray-600">Jumlah Post: {postCount}</p>
        <p className="text-gray-600">Jumlah Teman: {friendsCount}</p>
      </div>
    </Modal>
  );
};

export default ProfileModal;
