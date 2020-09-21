import React from 'react';
import PageTemplate from 'components/Common/PageTemplate/PageTemplate';
import RandomSeatsContainer from 'containers/RandomSeatsContaier/RandomSeatsContainer';

const MainPage = () => {
  return (
    <PageTemplate>
      <RandomSeatsContainer />
    </PageTemplate>
  );
};

export default MainPage;
