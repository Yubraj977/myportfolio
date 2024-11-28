
"use client";
import { useState } from "react";
import { Pagination } from "flowbite-react";

const Mypagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const page=2;
  const onPageChange = () => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
    <Pagination currentPage={4} totalPages={100} onPageChange={onPageChange} className="flex"/>
  </div>
  )
}

export default Mypagination
