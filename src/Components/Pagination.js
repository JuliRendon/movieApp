import {
  MdChevronLeft,
  MdOutlineFirstPage,
  MdOutlineLastPage,
  MdOutlineNavigateNext,
} from 'react-icons/md';
export default function Pagination({ setPage, currentPage, totalPages }) {
  let pages = [];
  for (let i = currentPage; i < currentPage + 10; i++) {
    if (i <= totalPages) {
      pages.push(i);
    }
  }
  return (
    <div className='w-9/12 h-8 flex flex-wrap gap-2 justify-center mb-2'>
      {currentPage > 1 ? (
        <>
          <div
            className='select-none cursor-pointer text-white font-bold w-6  h-6 bg-rojo flex justify-center align-middle items-center'
            onClick={() => {
              setPage({ value: `&page=1` });
            }}
          >
            <MdOutlineFirstPage className='text-xl' />
          </div>
          <div
            className='select-none cursor-pointer text-white font-bold w-6  h-6 bg-rojo flex justify-center align-middle items-center'
            onClick={() => {
              setPage({ value: `&page=${currentPage - 1}` });
            }}
          >
            <MdChevronLeft className='text-xl' />
          </div>
        </>
      ) : (
        ''
      )}
      {pages.map((page, i) => {
        if (i === 0) {
          return (
            <div
              onClick={() => {
                setPage({ value: `&page=${page}` });
              }}
              key={page}
              className='select-none cursor-pointer text-white font-bold px-1  h-6 bg-black p-2 flex justify-center align-middle items-center'
            >
              <p>{page}</p>
            </div>
          );
        } else {
          return (
            <div
              onClick={() => {
                setPage({ value: `&page=${page}` });
              }}
              key={page}
              className='select-none text-sm cursor-pointer text-white font-bold px-1  h-6 bg-rojo p-2 flex justify-center align-middle items-center'
            >
              <p>{page}</p>
            </div>
          );
        }
      })}
      {currentPage < totalPages ? (
        <>
          <div
            className='select-none cursor-pointer text-white font-bold w-6  h-6 bg-rojo flex justify-center align-middle items-center'
            onClick={() => {
              setPage({ value: `&page=${currentPage + 1}` });
            }}
          >
            <MdOutlineNavigateNext className='text-xl' />
          </div>
          <div
            className='select-none cursor-pointer text-white font-bold w-6  h-6 bg-rojo flex justify-center align-middle items-center'
            onClick={() => {
              setPage({ value: `&page=${totalPages}` });
            }}
          >
            <MdOutlineLastPage className='text-xl' />
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
