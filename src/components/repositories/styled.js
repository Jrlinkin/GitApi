import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)``;

export const WrapperTabList = styled(TabList)`
    display: flex;
    gap: 10px;
    margin: 10px 0px ;

`;
WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    padding: 10px;
    cursor: pointer;
    background-color: aliceblue;
    border: 1px solid black;
    text-align: center;
    transition: .3s;
    border-radius: 20px;
    &:hover{
        background-color: black;
        color: white;
        transition: .3s;
    }
    &.is-selected{
        background-color: black;
        color: white;
    }
`;
WrapperTab.tabsRole = 'Tab';



export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    padding: 8px;
    width: 100%;
    /* background-color: black; */

    &.is-selected{
        display: block;
        width: 100%;
    /* background-color: black; */


    }
    
`;
WrapperTabPanel.tabsRole = 'TabPanel';

export const WarapperList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* background-color: aliceblue; */
    gap:5%;
`;



