import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [todo, changeTodo] = useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(

            (response)=>{
                changeTodo(response.data)

            }
        ).catch().finally()
    }



    useEffect(()=>{fetchData()},[])
    return (
        <div>



<Navbar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">USER ID</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Completed</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    todo.map(

                                        (value, index) => {
                                            return <tr>

                                                <td>{value.userId}</td>
                                                <td>{value.id}</td>
                                                <td>{value.title}</td>
                                                <td>{value.completed}</td>

                                            </tr>
                                        }

                                    )
                                }







                            </tbody>
                        </table>




                    </div>
                </div>

            </div>
        </div>


    )
}

export default ViewAll