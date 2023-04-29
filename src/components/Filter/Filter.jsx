import { filterValue } from 'Redux/Filter/FilterSelectors';
import { changeFilter } from '../../Redux/Filter/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(filterValue);

  return (
    <>
      <label>
        Return contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </>
  );
}
