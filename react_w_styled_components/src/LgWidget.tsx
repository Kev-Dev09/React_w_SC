import React from 'react'
import styled, { css } from "styled-components";
import { dummyUsers } from "./dummyData"
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";
import { Button } from '@material-ui/core';

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

const LgWidget = () => {
    return (
        <LgWidgetContainer>
            <LgWidgetTitle>Users</LgWidgetTitle>
            <LgWidgetTable>
                <tr>
                    <LgWidgetTh>#</LgWidgetTh>
                    <LgWidgetTh>Name</LgWidgetTh>
                    <LgWidgetTh>Rank</LgWidgetTh>
                    <LgWidgetTh>On a project</LgWidgetTh>
                </tr>
                {dummyUsers && dummyUsers.map(item => (
                    <tr style={{ cursor: 'pointer' }}>
                        <LightTd>{item.id}</LightTd>
                        <LightTd>{item.username}</LightTd>
                        <LightTd>{item.rank}</LightTd>
                        <LightTd>{ (item.id%2==0 ? <CheckIcon /> : <UnCheckIcon/>)}</LightTd>
                    </tr>
                ))}
            </LgWidgetTable>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button>Prev</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>Next</Button>
            </div>
        </LgWidgetContainer>
    )
}

export default LgWidget