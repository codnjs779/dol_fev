import React from 'react';
import data from '../useData.json'
import leaf from '../assets/remove_bg.jpg'
import styled, { ThemeContext, useTheme } from 'styled-components';
import { TextLabel } from './MainPage';
import heart from '../assets/heart.png'
const Ment = () => {
    const {greetingsMessage, fatherName, motherName} = data;
    const theme = useTheme(ThemeContext)
    function mentSplitFunction(ment){
        const lines = ment.split('/');
        
        const lineElements = lines.map((line, index) => (
            <TextLabel options={{size:theme.fontSize.mmd, color:theme.colorPalette.darkGray, padding:theme.fontSize.xxs}} key={index}>{line}</TextLabel> // 각 줄을 <div>로 감싸고 key 속성 추가
        ));
        return (
            <p>
                {lineElements}
            </p>
        );
    }

    return (
        <MentStyled>
            <div>
                <img className='leaf' src={leaf} alt='잎사귀'></img>
            </div>
            <div>{mentSplitFunction(greetingsMessage)}</div>
            <ParentsZoneStyled>
                <div>

                <NameLabel options={{size:theme.fontSize.base, color:theme.colorPalette.darkGray, space:theme.fontSize.xs}}>아빠</NameLabel>
                <NameLabel options={{size:theme.fontSize.lg, color:theme.colorPalette.darkGray,  space:theme.fontSize.sm}}>{fatherName}</NameLabel>
                </div>
                <div><img className='heart' src={heart} alt='img'></img></div>

                <div>
                <NameLabel className='mom' options={{size:theme.fontSize.base, color:theme.colorPalette.darkGray, space:theme.fontSize.xs}}>엄마</NameLabel>
                <NameLabel className='mom' options={{size:theme.fontSize.lg, color:theme.colorPalette.darkGray, space:theme.fontSize.sm}}>{motherName}</NameLabel>
                </div>
            </ParentsZoneStyled>
        </MentStyled>
    );
};

export default Ment;

const MentStyled = styled.div`
.leaf{
    width: 30px;
}
.heart{
    width: 28px;
}
max-height: 100vh;

`

const ParentsZoneStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 5rem 0;
`

const NameLabel = styled.span`
font-size: ${(props) => props.options.size};
${(props) => props.className === 'mom' ? 'margin-left' : 'margin-right'}: ${(props) => props.options.space};
color:${(props) => props.options.color};
`