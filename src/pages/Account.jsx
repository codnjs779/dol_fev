import React, {useEffect, useState} from 'react';
import data from '../useData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faLink} from '@fortawesome/free-solid-svg-icons'
import styled, { ThemeContext, useTheme } from 'styled-components';
import heart from '../assets/heart.png'
import { TextLabel } from './MainPage';
import { SplitLine } from '../common/SplitLIne';
import { Tooltip } from '../common/Tooltip';
import Clipboard from 'react-clipboard.js';


const {Kakao} = window;
const Account = () => {
    const {fatherName, motherName, fatherPhone, motherPhone, fatherBank, motherBank} = data

    
    const theme = useTheme(ThemeContext)
    function doCallFunc(who) {
        if(who === 'father'){
            window.location.href=`tel:${fatherPhone}`
        } else {
            window.location.href=`tel:${motherPhone}`
        }
    }

    const [faState, setFaState] = useState(false);
    const [urlState, setUrlState] = useState(false);

      const realUrl = 'http://localhost:3000/'
      const resultUrl = window.location.href;

      useEffect(()=>{
    	// init 해주기 전에 clean up 을 해준다.
        Kakao.cleanup();
        // 자신의 js 키를 넣어준다.
        Kakao.init('85538a39d02d97b8547b23e55e9cf326');
        // 잘 적용되면 true 를 뱉는다.
        console.log(Kakao.isInitialized());
    },[]);


      const shareKakao = () => {
        Kakao.Share.sendCustom({
            templateId: 106717,
            templateArgs: {
              title: '제목 영역입니다.',
              description: '설명 영역입니다.',
            },
        });
      };
        
      function handleClipboardCopy(state) {
        setFaState(state);
        setTimeout(() => {
          setFaState(false);
        }, 1000);
      }
      
      function  urlCopyFunc(state) {
        setUrlState(state);
        setTimeout(() => {
            setUrlState(false);
        }, 1000);
      }
    return (
        <AccountStyled>
            <div>
            <TextLabel options={{size:theme.fontSize.lg, color:theme.colorPalette.darkGray, padding:theme.fontSize.xxlg}}>
            <div >
                <img src={heart} className='heart' alt='하트'/>
            </div>
                마음 전하실 곳
                </TextLabel>
                <TextLabel options={{size:theme.fontSize.base, color:theme.colorPalette.lightGray, padding:theme.fontSize.xs}}>
                    " 축하의 마음 감사합니다 "
                </TextLabel>
                <div className='box'>
                    <Clipboard
                        data-clipboard-text={fatherBank}    
                        onClick={() => handleClipboardCopy(true)}
                        className='clipboard'
                    >
                    
                    아빠 계좌번호
                    
                    </Clipboard>
                    <Clipboard
                        className='clipboard'
                        data-clipboard-text={motherBank}    
                        onClick={() => handleClipboardCopy(true)}
                    >
                   
                    엄마 계좌번호
                    
                    </Clipboard>

                    <Tooltip option={{state:faState, margin:'150px'}}>복사완료!</Tooltip>
                </div>

            </div>
            <br/>
            <SplitLine color={theme.colorPalette.whiteGray}/>
            <div>
                <ParentsCallBack options={{size:theme.fontSize.md, color:theme.colorPalette.mainColor, mColor:theme.colorPalette.lightPink}}>
                <div className='inner'>
                    <div className='innerName'>
                        <div className='fatherName'>아빠 &nbsp;&nbsp;</div>
                        <div><b>{fatherName}</b></div> 
                    </div>
                    <div>
                        <div onClick={() => doCallFunc('father')}>
                        <FontAwesomeIcon icon={faPhone} />
                        </div>
                    </div>
                </div>
                <div className='inner'>
                    <div className='innerName'>
                        <div className='motherName'>엄마 &nbsp;&nbsp;</div>
                        <div><b>{motherName}</b></div> {/* 변수를 사용하여 엄마의 이름을 출력합니다. */}
                    </div>
                    <div>
                        <div onClick={() => doCallFunc('father')}>
                        <FontAwesomeIcon icon={faPhone} />
                        </div>
                    </div>
                </div>
                </ParentsCallBack>
            </div>

            <ShareBtnBottom>
          
            <div className='box' id="kakaotalk-sharing-btn" onClick={shareKakao}>
            <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
                alt="카카오톡 공유 보내기 버튼" width={'30px'}/>
            
                <div className='kaka'>카카오톡</div>
                <div>공유하기</div>
            </div>
            <div>
            </div>

            <Clipboard
            className='copyIcon'
                data-clipboard-text={realUrl}    
                onClick={() => urlCopyFunc(true)}>
           <Tooltip option={{state:urlState, margin:'5%'}} >복사완료!</Tooltip>

            <div className='box'>
            <div className='shareIcon'>
                <div><FontAwesomeIcon icon={faLink}/></div>
            </div>
            <div>URL</div>
            <div>복사하기</div>
            </div>
            </Clipboard>
            </ShareBtnBottom>

      </AccountStyled>
    );
};

export default Account;

const AccountStyled = styled.div`
background-color: #d7d7d75e;
.heart{
    width: 25px;
    margin-bottom: 2rem;
}
.clipboard{
width: 150px;
font-family: 'GangwonEdu_OTFBoldA', sans-serif;
font-size: 1rem;
color:black;
height: 50px;
background-color: #9797975e;
text-align: center;
align-content: center;
border-radius: 30px;
margin-bottom: 2rem;
border: 0px;
}
.box{
    width: 100%;
    display: flex;
    justify-content: space-evenly; 
    align-items: center; 
    margin-top: 4rem;
    color: black;
    
}
`

const ParentsCallBack = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;

    .inner {
        display: flex;
        justify-content: space-between;
       margin:0 3rem 2rem;
       .fatherName{
        color:${(props) => props.options.color};
       }
       .motherName {
        color:${(props) => props.options.mColor};

       }
        .innerName{
            display: flex;
            font-size: ${(props) => props.options.size};
        }
    }
`
const ShareBtnBottom = styled.div`
display: flex;
width: 80%;

.kaka{
    padding-top: 5px;
}
.box{
    display: flex;
    flex-direction: column;
    margin: 70px 20px 100px 20px;
}
.shareIcon{
        width: 40px;
        height: 40px;
        align-content: center;
        text-align: center;
    }
.copyIcon{
    border: none;
    background: none;
    font-size: 0.9rem;
    font-family: 'GangwonEdu_OTFBoldA', sans-serif;

}
`