import { useState, useEffect } from "react";
import styled from "styled-components";
import LgWidget from './LgWidget';
import Table from "./customtable/table";
import WorkingTable from './datatable/table';
import { Data } from './datatable/types'
import { render } from "react-dom";

const HomeContainer = styled.div`
    flex: 4;
`

const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`

const Home = () => {
    const [tableData, setTableData] = useState([{}] as Data)
    const [isLoading, setLoading] = useState(true);
    let tmp = [{}] as Data;
    useEffect(() => {

        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                tmp = [{}] as Data;
                let tmp1 = {} as Data;
                for (let i = 0; i < data.users.length; i++) {
                    tmp1.id = data.users[i].id;
                    tmp1.firstname = data.users[i].firstName;
                    tmp1.lastname = data.users[i].lastName;
                    tmp.push(tmp1);
                    tmp1 = {} as Data;
                };
                tmp = tmp.slice(1);
                setTableData(tmp);
                setLoading(false);
            }, [])
    },);
    if(isLoading){
        return <h1>Data is Still is still Loading</h1>
    }
    return (
        <HomeContainer>
            <HomeWidgets>
                {tableData.length > 0 ?  <WorkingTable rows={tableData} /> : <h1>Hello</h1>}
            </HomeWidgets>
        </HomeContainer>
    )
}

export default Home;