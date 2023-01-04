import { useEffect, useState } from 'react';
import React from 'react'
import Table from "../../component/table/table";
import { TabView, TabPanel } from 'primereact/tabview';
import axios from "axios";

function TableOne() {

    const [posts, setPosts] = useState([])
    const [tabTwo, setTabTwo] = useState(false)
    const [tabTwoPost, setTabTwoPost] = useState([])

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) =>
             setTabTwoPost(res.data));
    }, [tabTwo]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then((res) =>{
             setPosts(res.data)
            });
    }, []);

    const tableOneColumns = [
        {field: `id`, header: 'ID',filterMatchMode: 'equals'},
        {field: 'userId', header: 'UserId', },
        {field: 'title', header: 'Title', },
        {field: 'completed', header: 'Status', },
    ]


    const tableTwoColumns = [
        {field: `id`, header: 'ID', sortable: true,  filterMatchMode: 'equals'},
        {field: 'name', header: 'Name', sortable: true, },
        {field: 'username', header: 'Username', sortable: true, },
        {field: 'email', header: 'Email', sortable: true, },
        {field: 'address.street', header: 'Street', sortable: true, },
        {field: 'address.zipcode', header: 'zipcode', sortable: true, },
     
    ]



    return (
        <div className='p-4 '>
            <TabView className='p-4 bg-white border-round'>
                <TabPanel header="Todos" >
                    <Table columns={tableOneColumns} pagination={true} posts={posts} filter={true}/>
                </TabPanel>
                <TabPanel header="Users"  onClick={()=>{setTabTwo(true)}}>
                    <Table columns={tableTwoColumns} posts={tabTwoPost} refresh={true}/>
                </TabPanel>
            </TabView>
        </div>
    )
}

export default TableOne