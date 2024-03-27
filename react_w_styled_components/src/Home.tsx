import { useState, useEffect } from "react";
import styled from "styled-components";
import WorkingTable from './datatable/table';

const HomeContainer = styled.div`
    flex: 4;
`

const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`

const Home = () => {
    const [tableData, setTableData] = useState([{}] as any)
    const [isLoading, setLoading] = useState(true);
    let tmp : any = [{}];
    useEffect(() => {

        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                tmp = [{}] as any;
                let tmp1 = {} as any;
                for (let i = 0; i < data.users.length; i++) {
                    tmp1.id = data.users[i].id;
                    tmp1.firstname = data.users[i].firstName;
                    tmp1.lastname = data.users[i].lastName;
                    tmp.push(tmp1);
                    tmp1 = {} as any;
                };
                tmp = tmp.slice(1);
                tmp1.id = 67563422;
                tmp1.firstname = "Őllé";
                tmp1.lastname = "Kévín";
                tmp.push(tmp1);
                tmp1 = {} as any;
                console.log(tableData)
                setTableData(tmp);
                console.log(tableData)
                setLoading(false);
            })
    });
    if(isLoading){
        return <h1>Data is Still is still Loading</h1>
    }

    const data = ["ID","FirstName", "LastName"];
    return (
        <HomeContainer>
            <HomeWidgets>
                {tableData.length > 0 ?  <WorkingTable rows={tableData} headerData={data} /> : <h1>Hello</h1>}
            </HomeWidgets>
        </HomeContainer>
    )
}

export default Home;