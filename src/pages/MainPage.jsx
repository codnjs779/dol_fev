import React from 'react';
import "aos/dist/aos.css";
import data from '../useData.json'
import styled, { ThemeContext, useTheme } from 'styled-components'
import photo from '../assets/girl_1.png'
import { SplitLine } from '../common/SplitLIne';

const MainPage = () => {
    const theme = useTheme(ThemeContext)
    const {babyPhoto, babyFullName, firstGreeting, eventDetails} = data;
    
    return (
        <MainPageStyled theme={theme}>
            <TextLabel options={{size:theme.fontSize.xxlg, color:theme.colorPalette.darkGray, padding:theme.fontSize.xxlg}}>{babyFullName} 첫 돌</TextLabel>
            <TextLabel options={{size:theme.fontSize.base, color:theme.colorPalette.lightGray, padding:theme.fontSize.base}}>1st Birthday</TextLabel>
            <div className='imgbox'><img className='babyimg'src={photo} alt='babyface'/></div>
            <Pharap>
            <TextLabel options={{size:theme.fontSize.base, color:theme.colorPalette.darkGray, }}>{firstGreeting.firstMent_1}</TextLabel>
            <TextLabel options={{size:theme.fontSize.base, color:theme.colorPalette.darkGray, padding:theme.fontSize.xxs}}>{firstGreeting.firstMent_2}</TextLabel>
            </Pharap>
            
            <Pharap>
            <TextLabel options={{size:theme.fontSize.md, color:theme.colorPalette.darkGray,}}>{eventDetails.location}</TextLabel>
            <TextLabel options={{size:theme.fontSize.md, color:theme.colorPalette.darkGray, padding:theme.fontSize.xxs}}>{eventDetails.plan}</TextLabel>
            </Pharap>
            <SplitLine color={theme.colorPalette.whiteGray}/>
        </MainPageStyled>
    );
};

export default MainPage;

const MainPageStyled = styled.div`
max-height: 100vh;// velog 글 참고해서 수정 
.imgbox{
        margin-top: 4rem;
}
.babyimg{
width:370px;
}
`

const Pharap = styled.p`
margin-top: 2rem;
`
export const TextLabel = styled.div`
font-size:${(props) => props.options.size};
color:${(props) => props.options.color};
padding-top: ${(props) => props.options.padding};
/* margin-bottom: ; */
`