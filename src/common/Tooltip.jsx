import styled from "styled-components";


export const Tooltip = styled.div`
  position: absolute;
  margin-top: ${(props) => props.option.margin};
  width: 100px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 6px;
  display: ${(props) => props.option.state ? 'block' : 'none'};

  /* &::after {
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(0, 0, 0, 0.8);
    content: '';
    position: absolute;
    top: -10px;
    left: 40px;
  } */
`;

