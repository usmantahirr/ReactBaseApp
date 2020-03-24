import React from 'react';
import { PageHeader, Row, Col } from 'antd';
import styled from 'styled-components';

import { COLORS } from '../../config';

const Header = styled(PageHeader)`
  background: ${COLORS.PRIMARY};

  span {
    color: ${COLORS.TEXT_LIGHT};
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

const AppTemplate = ({ title, back, children }) => {
  return (
    <>
      <Header title={title} onBack={back} />
      <Row>
        <Col span={24}>{children}</Col>
      </Row>
    </>
  );
};

export default AppTemplate;
