// in src/Layout.js
import { Layout } from 'react-admin';
import AllCustomLayout from './AllCustomLayout';
import CustomAppBar from './CustomAppBar';
import CustomMenu from './CustomMenu';
import CustomSideBar from './CustomSideBar';



export const layout = (props) => {
    <AllCustomLayout {...props}
        menu={CustomMenu}
        appBar={CustomAppBar}
        sidebar={CustomSideBar}
    />
}