import React from 'react';
import styled from 'styled-components';


export const SplitLine = styled.div`
    width: 80%; /* 선의 가로 길이 조절 */
    height: 0.7px; /* 선의 높이(두께) 조절 */
    background-color: ${(props) => props.color}; /* 선의 색상 설정 */
    margin:3rem auto 3rem auto;
    border-radius: 15px;


`