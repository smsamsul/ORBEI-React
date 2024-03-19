import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import Container from './Container';
import Pragrapp from './Pragrapp';


// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 
    31, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 
    3, 4, 5, 6, 7, 8, 9, 10, 11,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 
    ];

function Items({ currentItems }) {
  return (
    <>
    
  
      {currentItems &&
        currentItems.map((item) => (
            <div className=' w-full md:w-[32%]'>
            <Product src="assets/p1.png" bage={true}/>
             

            </div>
          
         
        ))}
    </>
  );
}

const Paginate = ({ itemsPerPage }) => {

  const [itemOffset, setItemOffset] = useState(0);
  const [itemseleted, setItemslected] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
    <Container>
    <div className='md:flex md:flex-wrap md:justify-between'>
      <Items currentItems={currentItems} />

    </div>
      <ReactPaginate
        breakLabel="..."
        breakClassName="mt-2.5"
        marginPagesDisplayed={2}
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        pageClassName="inline-block border border-solid 
        border-[#f0f0f0] py-2 px-3.5 font-Dm font-normal text-sm "
        previousClassName="hidden"
        nextClassName="hidden"
        nextLinkClassName="page-link"
        containerClassName="flex flex-wrap gap-x-3.5 gap-y-3 md:gap-y-0 mt-12"
        activeClassName="inline-block border border-solid 
        border-[#f0f0f0] py-2 px-3.5 font-Dm font-normal text-sm bg-black text-white"

      />
      <p className="font-Dm font-normal text-sm text-[#767676]
       md:absolute md:bottom-0 md:right-0 mt-2.5 md:mt-0" >Products from {itemOffset} to {itemOffset + itemsPerPage} of {items.length}</p>

      
    </Container>
    
  
    </>
  );
}

export default Paginate
