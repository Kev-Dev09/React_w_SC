import React from 'react'
import styled from "styled-components";
import LgWidget from './LgWidget';
import Table from "./datatable/table";
import { dummyTableData } from './dummyData';

const HomeContainer = styled.div`
    flex: 4;
`

const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`

const Home = () => {
    return (
        <HomeContainer>
            <HomeWidgets>
                <Table rows = {dummyTableData}/>
            </HomeWidgets>
        </HomeContainer>
    )
}

export default Home;