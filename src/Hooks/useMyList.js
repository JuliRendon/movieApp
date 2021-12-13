import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../Context/SessionProvider';
import { getList } from '../services/getList';

/**
 * @name useMyLimport
 * @description Recupera un listado de las peliculas votadas por la sessióna ctiva
 * @returns Retorna dos estados, uno con un arreglod e peliculas y otro con tru o false del fetch
 */

export function useMyList() {
  const [myList, setMyList] = useState([]);
  const [loading, setLoading] = useState(false);
  const session = useContext(SessionContext);

  useEffect(() => {
    if (session.session !== '') {
      setLoading(true);
      getList().then((data) => {
        setMyList(data);
        setLoading(false);
      });
    }
  }, [session.session]);

  return { myList, loading };
}
