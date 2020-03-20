import React from 'react';
import styled from 'styled-components';
import AntLoader from 'react-loader-spinner';
import { COLORS } from '../../config';

const LoadingComponent = styled(AntLoader)`
  display: flex;
  justify-content: center;
`;

const Loader = () => <LoadingComponent color={COLORS.LOADER} width={100} height={100} type="MutatingDots" />;

export default Loader;
