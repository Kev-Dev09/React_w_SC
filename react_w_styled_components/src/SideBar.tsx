import React from 'react'
import { LineStyle, List, FlightTakeoff, Folder, PermIdentity} from "@material-ui/icons";
import styled, { css } from "styled-components";

const SidebarContainer = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 50px;
`
const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
`
const SidebarMenu = styled.div`
    margin-bottom: 10px;
`
const SidebarTitle = styled.h3`
    font-size: 13px;
    color: rgb(187, 186, 186);
`
const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;
`
const SidebarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
&:hover {
        background-color: rgb(240, 240, 255);
    }
`
const sharedStyle = css`
    margin-right: 5px;
    font-size: 20px !important;
`
const HomeIcon = styled(LineStyle)`
    ${sharedStyle}
`
const ListIcon = styled(List)`
    ${sharedStyle}
`
const MissionIcon = styled(FlightTakeoff)`
    ${sharedStyle}
`
const WeaponIcon = styled(Folder)`
    ${sharedStyle}
`
const MyPermIdentity = styled(PermIdentity)`
    ${sharedStyle}
`

const SideBar = () => {
    return (
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarTitle>Dashboard</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                            <HomeIcon />
                            Home
                        </SidebarListItem>
                        <SidebarListItem>
                            <ListIcon />
                            List
                        </SidebarListItem>
                        <SidebarListItem>
                            <MissionIcon />
                            Page 1
                        </SidebarListItem>
                        <SidebarListItem>
                            <WeaponIcon />
                            Page 2
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Administration</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                            <MyPermIdentity />
                            Users
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default SideBar