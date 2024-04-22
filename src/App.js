import './App.css';
import Slide from 'react-awesome-reveal'
import { Fade } from 'react-awesome-reveal';
import MainPage from './pages/MainPage';
import Ment from './pages/Ment';
import CalendarBox from './pages/Calendar';
import Gallery from './pages/Gallery';
import Location from './pages/Location';
import Account from './pages/Account';
import { ThemeProvider } from 'styled-components';
import { fontSetting } from './common/fontSetting';
function App() {

  return (
    <ThemeProvider theme={fontSetting}>
        <div className="page">
        <MainPage/>
        <Ment/>
        <CalendarBox/> 
        <Gallery/>
        <Location/>
        <Account/>
        </div>
    </ThemeProvider>

  );
}

export default App;
