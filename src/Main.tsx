import React, {
  FC,
  ReactNode
} from 'react';

interface PropTypes {
  children?: ReactNode;

}

const Main: FC<PropTypes> = (props: PropTypes) => {
  return (<>
    Simple boilerplate
  </>);
};

export default Main;
