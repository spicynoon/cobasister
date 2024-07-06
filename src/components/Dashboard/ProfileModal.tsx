import React from 'react';
import Modal from './Modal';
import { FaUserCircle } from 'react-icons/fa';

interface ProfileModalProps {
  username: string;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ username, onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className="p-4 flex flex-col items-center">
        <FaUserCircle size={64} className="text-gray-400 mb-4" />
        <h2 className="font-bold text-lg">{username}</h2>
      </div>
    </Modal>
  );
};

export default ProfileModal;
