import { changeFilter } from '../../Redux/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  return (
    <>
      <label>
        Return contacts by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </>
  );
}
