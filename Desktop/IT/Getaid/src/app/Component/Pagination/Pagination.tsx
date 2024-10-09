import React from "react";

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const maxPageLinks = 10;
  const maxPageLinksHalf = Math.floor(maxPageLinks / 2);

  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > maxPageLinks) {
    if (currentPage <= maxPageLinksHalf) {
      endPage = maxPageLinks;
    } else if (currentPage >= totalPages - maxPageLinksHalf) {
      startPage = totalPages - maxPageLinks + 1;
    } else {
      startPage = currentPage - maxPageLinksHalf;
      endPage = currentPage + maxPageLinksHalf;
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 p-4">
      {/* Previous Page Button */}
      {currentPage > 1 && (
        <button
          className="btn btn-minimal px-3 py-1 text-sm md:text-base"
          onClick={handlePreviousPage}
          aria-label="Previous Page"
        >
          Previous
        </button>
      )}

      {/* Page Number Buttons */}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const page = startPage + index;
        return (
          <button
            key={page}
            className={`btn ${page === currentPage ? "btn-primary" : "btn-minimal"} px-3 py-1 text-sm md:text-base`}
            onClick={() => setCurrentPage(page)}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        );
      })}

      {/* Next Page Button */}
      {currentPage < totalPages && (
        <button
          className="btn btn-minimal px-3 py-1 text-sm md:text-base"
          onClick={handleNextPage}
          aria-label="Next Page"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;