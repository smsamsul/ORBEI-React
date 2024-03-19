import React from 'react';
import Container from '../Layout/Container';
import Heading from '../Layout/Heading';
import Product from '../Layout/Product';
import Flex from '../Layout/Flex';

const SpecialOffer = () => {
  return (
    <div>
      <Container>
        <Heading text="Special Offers" />
        <Flex className="flex flex-wrap justify-center lg:justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <Product src="assets/of1.png" bage={true} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <Product src="assets/of2.png" bage={false} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <Product src="assets/of3.png" bage={true} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <Product src="assets/of4.png" bage={false} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default SpecialOffer
