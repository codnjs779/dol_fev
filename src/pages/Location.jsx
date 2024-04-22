import React,{useEffect, useState} from 'react';
import data from "../useData.json"
import styled, { ThemeContext, useTheme } from 'styled-components';
import { DayStyled } from './Calendar';
import { DayLabel } from './Calendar';
import { useSwiper } from 'swiper/react';
import tmap from "../assets/tmap.png"
import navermap from "../assets/navermap.png"
import { SplitLine } from '../common/SplitLIne';
import { TextLabel } from './MainPage';

const { kakao } = window;

const Location = () => {

    const {eventDetails, spot} = data
    const theme = useTheme(ThemeContext);

    useEffect(() => {

        const container = document.getElementById('map');
        const mapData = new kakao.maps.LatLng(spot.pickerX,spot.pickerY)
        const options = {
            center:mapData,
            level:3,
            draggable: false,
        }
        const marker = new kakao.maps.Marker({
            position:mapData
        })
        const map = new kakao.maps.Map(container, options);
        marker.setMap(map)
    },[])


    function checkMobile(){
 
        var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
     
        if ( varUA.indexOf('android') > -1) {
            //안드로이드
            return "android";
        } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
            //IOS
            return "ios";
        } else {
            //아이폰, 안드로이드 외
            return alert('모바일기기로 접근해주세요');
        }
        
    }


  const naverMapInfo = {mapCompany:'네이버지도', dlat:spot.naverX, dlng:spot.naverY}
  const naverSchema = `nmap://navigation?dlat=${naverMapInfo.dlat}&dlng=${naverMapInfo.dlng}&appname=${eventDetails.shareUrl}`;

  const [naverConfirm, setNaverConfirm] = useState(false);

function openNaverMapApp(url) {
    var clickedAt = +new Date();
    window.location.href = url;

    setTimeout(function() {
        if (+new Date() - clickedAt < 2000) {
            var deviceType = checkMobile(); 
            var confirmMessage = '앱 설치페이지로 이동할까요?';
            if (deviceType === 'android') { 
                if (window.confirm(confirmMessage)) {
                    window.location.href = `intent://actionPath?parameter=value&appname=${eventDetails.shareUrl}/#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;end`;
                }
            } else if (deviceType === 'ios') {
                if (window.confirm(confirmMessage)) {
                    window.location.href = 'http://itunes.apple.com/app/id311867728?mt=8';
                }
            } else {
                alert('모바일기기로 접근해주세요'); // 기기 타입을 판별할 수 없을 때의 처리
            }
        }
        naverConfirm && window.close();
    }, 1500);
}


const tmapInfo = {mapCompany:'T맵', lng:spot.tmapX, lat:spot.tmapY} 
const tmapSchema = `tmap://route?rGoName=${encodeURIComponent('서울시청')}&rGoX=(${tmapInfo.lng})&rGoY=(${tmapInfo.lat})`;



function findTmap(url){

  var clickedAt = +new Date();
  window.location.href = url;

    setTimeout(function() {
        if (+new Date() - clickedAt < 2000) {
            var deviceType = checkMobile(); 
          if(deviceType === 'android') {
            alert('앱 설치페이지로 이동합니다')
            deviceType(false)
            window.location.href = "https://play.google.com/store/apps/details?id=com.skt.tmap.ku"
          } else if(deviceType === 'ios') {
            alert('앱 설치페이지로 이동합니다')
            window.location.href = 'http://itunes.apple.com/app/id431589174';
          }else{
            return;
          }
        }
    }, 1500);

  
}



    return (
        <LocationStyled options={{color:theme.colorPalette.bgGray}}>
            <div className='location'>
            <DayStyled options={{color:theme.colorPalette.whiteGray, space:theme.fontSize.base, width:'80%'}} />
          <DayLabel options={{size:theme.fontSize.lg, color:theme.colorPalette.darkGray, padding:theme.fontSize.xs}}>오시는길</DayLabel>
          <DayStyled  options={{color:theme.colorPalette.whiteGray, space:theme.fontSize.base, width:'80%'}} />
            
            </div>

            <div>
            <div id="map" style={{ width: '100%', height: '400px' }}></div>
            <MapIconContainer options={{color:theme.colorPalette.whiteGray}}>
                <div className='innerContainer' onClick={() => openNaverMapApp(naverSchema)}>
                    <img src={navermap} alt='네이버지도'/>
                    <div>네이버지도</div> 
                </div>

                <div className='innerContainer' onClick={() => findTmap(tmapSchema)}>
                    <img src={tmap} alt='티맵'/>
                    <div>티맵</div>
                </div>
            </MapIconContainer>
            <hr/>
            </div>

            <PublicTrans>
                <div>
                <TextLabel options={{size:theme.fontSize.md, color:theme.colorPalette.black, padding:theme.fontSize.base}}><b>지하철</b></TextLabel>
                 <div className='trns'>{eventDetails.howToSubway}</div>
                </div>

                <div>
                <TextLabel options={{size:theme.fontSize.md, color:theme.colorPalette.black, padding:theme.fontSize.base}}><b>버스</b></TextLabel>
                    <div className='trns'>{eventDetails.howToSubway}</div>
                </div>
            </PublicTrans>
      
   
            <LocationText options={{size: theme.fontSize.md, color:theme.colorPalette.darkGray}}>
                <div>{eventDetails.plan}</div>
                <div>{eventDetails.location}</div>
             </LocationText>
        </LocationStyled>
    );
};

export default Location;

const LocationStyled = styled.div`
.location{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
}

#map{
    margin-top: 4rem;
    width: 100%;
    height: 400px;
}
`

const MapIconContainer = styled.div`
    display: flex;
    .innerContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        text-align: center;
    }
    img{
        width: 100px;
    }
`

const PublicTrans = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 3rem;
    .trns {
        padding:10px;
    }
`

const LocationText = styled.div`
font-size: ${(props) => props.options.size};
margin-bottom: 3rem;
color:${(props) => props.options.color}
`