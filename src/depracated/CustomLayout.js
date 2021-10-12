// in src/Layout.js
import { Layout } from 'react-admin';
import AllCustomLayout from './AllCustomLayout';
import CustomAppBar from './CustomAppBar';
import CustomMenu from './CustomMenu';
import CustomSideBar from './CustomSideBar';


/**
 * @deprecated CustomLayout.js는 사용하지 않습니다. AllCustomLayout.js 를 사용합니다
 */
export const layout = (props) => {
    <AllCustomLayout {...props}
        // menu={CustomMenu}
        // appBar={CustomAppBar}
        // sidebar={CustomSideBar}
    />
}