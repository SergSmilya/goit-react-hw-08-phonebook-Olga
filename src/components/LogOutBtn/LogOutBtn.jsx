import { logOutUser } from 'Redux/Auth/AuthOperations';
import { useDispatch } from 'react-redux';

export default function LogOutBtn() {
  const dispatch = useDispatch();
  function onHandleClick() {
    dispatch(logOutUser());
  }
  return (
    <button type="submit" onClick={onHandleClick}>
      Log Out
    </button>
  );
}
