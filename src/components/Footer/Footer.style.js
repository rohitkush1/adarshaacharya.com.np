import styled from 'styled-components';
import { StyledContainer } from '@src/@portfolio-ui';

export const FooterWrapper = styled(StyledContainer)`
  border-top: 1px solid ${p => p.theme.hrColor};
  color: ${p => p.theme.primaryText};
  padding: 2rem 0;
  text-align: center;

  [data-icon='GitHub'] svg {
    fill: ${p => p.theme.primaryBlack};
  }
`;
