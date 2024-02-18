import React, { useCallback, useState } from 'react';
import Input from '../Input';
import Modal from '../Modal';
import useSignupModal from '@/hooks/useSignupModal';
import useLoginModal from '@/hooks/useLoginModal';

const SignupModal = () => {
  const signupModal = useSignupModal();
  const loginModal = useLoginModal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      signupModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [signupModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={signupModal.isOpen}
      title="Create an account"
      actionLabel="Sign up"
      onClose={signupModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default SignupModal;
