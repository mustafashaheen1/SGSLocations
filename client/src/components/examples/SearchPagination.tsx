import SearchPagination from '../SearchPagination';
import { useState } from 'react';

export default function SearchPaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <div className="p-6">
      <SearchPagination
        currentPage={currentPage}
        totalPages={12}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
