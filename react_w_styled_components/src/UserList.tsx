import React from 'react'
import styled, { css } from "styled-components";
import { dummyUsers } from "./dummyData"
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";
import { Button } from '@material-ui/core';
import LgWidget from './LgWidget';

const LgWidgetContainer = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`
const LgWidgetTitle = styled.h3`
    font-size: 22px;
    font-weight: 600;
`
const LgWidgetTable = styled.table`
    width: 100%;
    border-spacing: 20px;
`
const LgWidgetTh = styled.th`
    text-align: left;
`

const LightTd = styled.td`
    font-weight: 300;
`

const sharedStyle = css`
    margin-right: 5px;
    font-size: 20px !important;
`

const CheckIcon = styled(CheckBox)`
    ${sharedStyle}
`

const UnCheckIcon = styled(CheckBoxOutlineBlank)`
    ${sharedStyle}
`

const HomeContainer = styled.div`
    flex: 5;
`

const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`

const Avatar = styled.img`
    width: 50%;
    height: 50%;
    cursor: pointer;
`
const UserList = () => {
    return (
        <HomeContainer>
            <HomeWidgets>
                <LgWidgetContainer>
                    <LgWidgetTable>
                        <tr>
                            <LgWidgetContainer>
                            <LgWidgetTable>
                                    <tr>
                                        <LightTd>
                                            <Avatar src='./public/img/black-cat.jpg' alt="avatar" />
                                        </LightTd>
                                        <LightTd>
                                        <tr>
                                                <LgWidgetTitle>#:</LgWidgetTitle>
                                                <LgWidgetTh>{dummyUsers[0].id}</LgWidgetTh>
                                            </tr>
                                            <tr>
                                                <LgWidgetTitle>Name:</LgWidgetTitle>
                                                <LgWidgetTh>{dummyUsers[0].username}</LgWidgetTh>
                                            </tr>
                                            <tr>
                                                <LgWidgetTitle>Rank:</LgWidgetTitle>
                                                <LgWidgetTh>{dummyUsers[0].rank}</LgWidgetTh>
                                            </tr>
                                    </LightTd>
                                </tr>
                                </LgWidgetTable>
                            </LgWidgetContainer>
                        </tr>
                    </LgWidgetTable>
                    <LgWidget />
                    <LgWidget />
                </LgWidgetContainer>
            </HomeWidgets>
        </HomeContainer>
    )
}

export default UserList