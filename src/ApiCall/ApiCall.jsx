import axios from 'axios';
import React, { useState } from 'react'

export default function ApiCall() {

    const [apiData, setData] = useState([]);

    const dataApi = () => {


        // axios.get("https://run.mocky.io/v3/839c61dd-d31f-4809-8c71-53becb1fa62a")

        //     .then((res) =>{
        //         setData([...(res)])
        //         console.log(res.data)

        //     }     
        //     )

        let data = fetch("https://run.mocky.io/v3/839c61dd-d31f-4809-8c71-53becb1fa62a")

        .then((e)=>{
            return e.json();
        }).then((res)=>{
 
            console.log(res[0].name)
            setData([...res])

        })
    }


    return (
        <div>

            <button onClick={()=>dataApi( )}> data call</button>

            {
                apiData.map(e => {
                    return (
                        <>
                            <p>{e.name}</p>
                            <p>{e.price}</p>
                            <p>{e.color}</p>
                        </>
                    )

                })
            }

        </div>
    )
}
