import { ThemeProvider } from "@material-ui/styles";
import { Route, Switch } from "react-router-dom";
import { LogIn, Register, Product } from "./pages";
import { Admin, Resource, ListGuesser } from 'react-admin';
// import { ListGuesser } from 'react-admin'; // no admin
import jsonServerProvider from 'ra-data-json-server';
import CustomRoutes from "./CustomRoutes";
import AllCustomLayout from "./AllCustomLayout";
import { createTheme } from '@material-ui/core/styles'
import { CssBaseline } from "@material-ui/core";
// 색상
import { reconlabsPrimaryYellow, reconlabsMellowYellow } from './cssVariables'

/**
 * 최상단에 위치한 App.js에서 MUI(material ui)의 커스텀테마를 생성합니다
 * 리콘랩스만의 색깔(노랑)을 입힌 버튼, 인풋박스 등을 만들기 위함입니다
 * ripple은 아직 어떻게 하는지 모르겠습니다.
 */


const theme = createTheme({
  palette: {
    primary: {
      main: reconlabsPrimaryYellow,
      light: '#f5c662', // 이승민 임의의 밝은 색)
      dark: '#e39e0b', // 이승민 임의의 어두운 색 (버튼에 마우스 올릴 시)
    },
    secondary: {
      // main: '#edce8c', //appbar default  생상
      main: '#ff0000', //appbar default  생상
    },
    action: {
      // 여기는 theme이라서, 모든 것이 다 바뀐다. 
      // active: '#FF00ff', // 좌측 네비바 이모지 색상
      hover: reconlabsMellowYellow, // 마우스 올렸을 때
      selected: '#FEF8EC', // 선택이 되었을 떄,
      hoverOpacity: 0.54,
      focus: "red"
    }
  },
  sidebar: {
    width: 350, // The default value is 240 -> 적용이 안되고있따
    closedWidth: 0 // The default value is 55
  },
})

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
  return (
    <>
      <CssBaseline>
      <ThemeProvider theme={theme}>

        {/* Admin 사용 코드 */}
        <Admin
          customRoutes={CustomRoutes}
          theme={theme}
          // layout={layout}
          layout={AllCustomLayout}
          loginPage={LogIn}
          dataProvider={dataProvider}
          >

          {/* 메뉴들의 CSS는 CustomMenu.js 에서 처리 */}
          <Resource name="posts" list={ListGuesser} />
          <Resource name="users" list={ListGuesser} />
          <Resource name="library" list={ListGuesser} />
        </Admin>
      </ThemeProvider>
      </CssBaseline>
    </>
  );
};

//setup passport for auth
// dev https://plm-dev.aseeo.io:3003/plm#
// production https://plm.aseeo.io:3003/plm

export default App;
