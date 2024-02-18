import { create } from 'zustand';

interface ISignupModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSignupModal = create<ISignupModalStore>((set) => {
  return {
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  };
});

export default useSignupModal;
