import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface SearchPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

export default function SearchPagination({
  currentPage,
  totalPages,
  onPageChange,
  isLoading = false,
}: SearchPaginationProps) {
  const maxVisiblePages = 7;

  const getPageNumbers = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];
    const leftSiblings = 1;
    const rightSiblings = 1;

    const showLeftEllipsis = currentPage > leftSiblings + 2;
    const showRightEllipsis = currentPage < totalPages - rightSiblings - 1;

    if (!showLeftEllipsis && showRightEllipsis) {
      const leftPages = 5;
      for (let i = 1; i <= leftPages; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages);
    } else if (showLeftEllipsis && !showRightEllipsis) {
      pages.push(1);
      pages.push('...');
      const rightPages = 5;
      for (let i = totalPages - rightPages + 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (showLeftEllipsis && showRightEllipsis) {
      pages.push(1);
      pages.push('...');
      for (let i = currentPage - leftSiblings; i <= currentPage + rightSiblings; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages);
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* First Page */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1 || isLoading}
        data-testid="button-first-page"
      >
        <ChevronsLeft className="h-4 w-4" />
      </Button>

      {/* Previous Page */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
        data-testid="button-prev-page"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Page Numbers */}
      <div className="hidden sm:flex items-center gap-2">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className="px-2 text-muted-foreground">
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <Button
              key={pageNum}
              variant={isActive ? 'default' : 'outline'}
              size="icon"
              onClick={() => onPageChange(pageNum)}
              disabled={isLoading}
              data-testid={`button-page-${pageNum}`}
              className={isActive ? 'bg-primary text-primary-foreground' : ''}
            >
              {pageNum}
            </Button>
          );
        })}
      </div>

      {/* Mobile Page Indicator */}
      <div className="sm:hidden px-4 py-2 text-sm font-medium">
        {currentPage} of {totalPages}
      </div>

      {/* Next Page */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isLoading}
        data-testid="button-next-page"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Last Page */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages || isLoading}
        data-testid="button-last-page"
      >
        <ChevronsRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
