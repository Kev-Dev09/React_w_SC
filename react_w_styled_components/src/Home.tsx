import React from 'react'
import styled from "styled-components";
import Featured from './Featured';
import SmWidget from './SmWidget';
import LgWidget from './LgWidget';

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
                <LgWidget />
            </HomeWidgets>
        </HomeContainer>
    )
}

export default Home;