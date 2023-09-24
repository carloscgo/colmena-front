
'use client';

import { useState } from "react";

interface ReturnProps {
  currentPage: number,
  pageSize: number,
  onPageChange: Function,
};

const usePagination = (defaultPage = 1): ReturnProps => {
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const pageSize = 10;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return { currentPage, pageSize, onPageChange };
};

export default usePagination;

