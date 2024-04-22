import React from 'react';
import data from "../useData.json"
import 'react-calendar/dist/Calendar.css';
import styled, { ThemeContext, useTheme } from 'styled-components';
import moment from 'moment'
import { StyledCalendar } from './CalendarStyle';


const CalendarBox = () => {
    const day = data.eventDetails.day
    const theme = useTheme(ThemeContext)

    return (
        <CalendarStyled>
          <DayStyled options={{color:theme.colorPalette.whiteGray, space:theme.fontSize.base, width:'68%'}} />
          <DayLabel options={{size:theme.fontSize.lg, color:theme.colorPalette.darkGray, padding:theme.fontSize.xs}}>{day}</DayLabel>
          <DayStyled  options={{color:theme.colorPalette.whiteGray, space:theme.fontSize.base, width:'68%'}} />
          
            <StyledCalendar
            value={day}
            formatDay={(locale, date) => moment(date).format("D")} // 일 제거 숫자만 보이게
          formatYear={(locale, date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
          formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
          calendarType="gregory" // 일요일 부터 시작
            />
        </CalendarStyled>
    );
};

export default CalendarBox;

const CalendarStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
.react-calendar {
  width: 74%;
  border-radius: 10px;
  background-color: #00ff0000;
  margin-top: 30px;
    border: none;
    line-height: 2.2em;
}

.react-calendar__month-view {
    font-size: 1.2em;
    abbr {
      color: #434343
    }
  }
.react-calendar__navigation{
    display: none;
}
abbr {
    text-decoration: none;
    font-size: 1.2em;

}
.react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: red
  }

.react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color:lightpink;
    border-radius: 50%;
    font-weight: bold;
  }
`

export const DayStyled = styled.div`
width: ${(props) => props.options.width};
border-top: 0.5px solid ${(props) => props.options.color};
border-bottom: 0.5px solid black ${(props) => props.options.color};
color:${(props) => props.options.color};
`

export const DayLabel = styled.div`
font-size:${(props) => props.options.size};
color:${(props) => props.options.color};
padding: ${(props) => props.options.padding};
`