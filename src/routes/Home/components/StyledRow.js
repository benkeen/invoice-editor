/**
 * Styles a row in the invoice table. Moved to a general component so it can consistently style both the header and
 * body rows (which are in different files). This is a bit klutzy: better to style each individually - but it's
 * simple & practical for this situation.
 */
import styled from 'styled-components';


const StyledRow = styled.div`
  margin: 0;
  &.header-row {
    border-bottom: 2px solid #999999;
    > div {
      font-weight: bold;
    }
  }
  &>div {
    padding: 2px 0;
  }
  select {
    margin-left: 4px;
    height: 26px;
  }
  .price-field input {
    width: 100%;
  }
  .total-field span, .delete-item span {
    display: inline-block;
    margin: 2px 0 0 4px;
  }
`;

export default StyledRow;
