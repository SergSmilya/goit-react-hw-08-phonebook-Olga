import { logOutUser } from 'Redux/Auth/AuthOperations';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';

export default function UserMenu() {
  const dispatch = useDispatch();
  function onHandleClick() {
    dispatch(logOutUser());
  }
  return (
    <div>
      <p>mango@mail.com</p>
      <Button colorScheme="purple" type="submit" onClick={onHandleClick}>
        Log Out
      </Button>
    </div>
  );
}
