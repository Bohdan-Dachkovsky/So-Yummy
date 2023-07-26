import { Oval } from 'react-loader-spinner';

import { LoaderContainer } from './Loader.styled';
import { COLOR } from 'constants';

const Loader = () => {
  return (
    <LoaderContainer>
      <Oval
        height={60}
        width={60}
        color={green}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={black}
        strokeWidth={4}
        strokeWidthSecondary={2}
      />
    </LoaderContainer>
  );
};

export default Loader;
