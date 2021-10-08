import { ThemeProvider } from "@material-ui/styles";
import { Route, Switch } from "react-router-dom";
import { LogIn, Register, Product } from "./pages";
// import { Admin, Resource, ListGuesser } from 'react-admin';
import { ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import CustomRoutes from "./CustomRoutes";
import AllCustomLayout from "./AllCustomLayout";
import { createTheme } from '@material-ui/core/styles'
import { CssBaseline } from "@material-ui/core";
+import PropTypes from "prop-types";
+import { ConnectedRouter } from 'connected-react-router';
+import { Switch, Route } from 'react-router-dom';
+import withContext from 'recompose/withContext';
+import { AuthContext, DataProviderContext, TranslationProvider, Resource, Notification } from 'react-admin';
+import AppBar from '@material-ui/core/AppBar';
+import Toolbar from '@material-ui/core/Toolbar';
+import Typography from '@material-ui/core/Typography';


/**
 * 최상단에 위치한 App.js에서 MUI(material ui)의 커스텀테마를 생성합니다
 * 리콘랩스만의 색깔(노랑)을 입힌 버튼, 인풋박스 등을 만들기 위함입니다
 */

const theme = createTheme({
  appFrame: {
    marginTop: '0px',
  },
  palette: {
    primary: {
      main: '#F7AD11',
      light: '#f5c662', // 이승민 임의의 밝은 색 (버튼 클릭시 퍼져나가는 물방울)
      dark: '#e39e0b', // 이승민 임의의 어두운 색 (버튼에 마우스 올릴 시)
      contrastText: "#FFF"
    },
    secondary: {
      main: '#edce8c', //appbar default  생상
    },
    action: {
      // active: '#FF0000', // 좌측 네비바 이모지 색상
      hover: '#FF0000', // 좌측 네비바에 마우스 올렸을 때,
    }
  },
})

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
  return (
    <>
+       <AuthContext.Provider value={authProvider}>
+       <DataProviderContext.Provider value={dataProvider}></DataProviderContext.Provider>  
      <CssBaseline>
      <ThemeProvider theme={theme}>

        {/* Admin 사용 코드 */}
        {/* <Admin
          customRoutes={CustomRoutes}
          // theme={theme}
          // layout={layout}
          layout={AllCustomLayout}
          loginPage={LogIn}
          dataProvider={dataProvider}
          >
          <Resource name="posts" list={ListGuesser} options={{label: "PlicAR : 쉽고 빠른 AR 커머스"}}/>
          <Resource name="users" list={ListGuesser} />
          <Resource name="library" list={ListGuesser} />
        </Admin> */}
+               <AppBar position="static" color="default">
+                   <Toolbar>
+                       <Typography variant="h6" color="inherit">
+                           My admin
+                       </Typography>
+                   </Toolbar>
+               </AppBar>
+               <ConnectedRouter history={history}>
+                   <Switch>
+                       <Route exact path="/" component={Dashboard} />
+                       <Route exact path="/posts" render={(routeProps) => <PostList hasCreate resource="posts" basePath={routeProps.match.url} {...routeProps} />} />
+                       <Route exact path="/posts/create" render={(routeProps) => <PostCreate resource="posts" basePath={routeProps.match.url} {...routeProps} />} />
+                       <Route exact path="/posts/:id" render={(routeProps) => <PostEdit hasShow resource="posts" basePath={routeProps.match.url} id={decodeURIComponent((routeProps.match).params.id)} {...routeProps} />} />
+                       <Route exact path="/posts/:id/show" render={(routeProps) => <PostShow hasEdit resource="posts" basePath={routeProps.match.url} id={decodeURIComponent((routeProps.match).params.id)} {...routeProps} />} />
+                       <Route exact path="/comments" render={(routeProps) => <CommentList hasCreate resource="comments" basePath={routeProps.match.url} {...routeProps} />} />
+                       <Route exact path="/comments/create" render={(routeProps) => <CommentCreate resource="comments" basePath={routeProps.match.url} {...routeProps} />} />
+                       <Route exact path="/comments/:id" render={(routeProps) => <CommentEdit resource="comments" basePath={routeProps.match.url} id={decodeURIComponent((routeProps.match).params.id)} {...routeProps} />} />
+                       <Route exact path="/users" render={(routeProps) => <UsersList hasCreate resource="users" basePath={routeProps.match.url} {...routeProps} />} />
+                       <Route exact path="/users/create" render={(routeProps) => <UsersCreate resource="users" basePath={routeProps.match.url} {...routeProps} />} />
+                       <Route exact path="/users/:id" render={(routeProps) => <UsersEdit resource="users" basePath={routeProps.match.url} id={decodeURIComponent((routeProps.match).params.id)} {...routeProps} />} />
+                   </Switch>
+               </ConnectedRouter>
+               <Notification />


      </ThemeProvider>
      </CssBaseline>

+       </DataProviderContext.Provider>
+       </AuthContext.Provider>


    </>
  );
};

//setup passport for auth
// dev https://plm-dev.aseeo.io:3003/plm#
// production https://plm.aseeo.io:3003/plm

// export default App;

+export default withContext(
  +   {
  +       authProvider: PropTypes.object,
  +   },
  +   () => ({ authProvider })
  +)(App);
