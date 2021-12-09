import { useEffect, useState } from 'react';
import { getList } from '../services/getList';

export function useMyList() {
  const [myList, setMyList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getList().then((data) => {
      setMyList(data);
      setLoading(false);
    });
  }, []);

  return { myList, loading };
}
