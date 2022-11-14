import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

export default function ToDoList() {

    const [data, setData] = useState([]);
    const getDataRef = useRef();

    const getDataAdd = () => {

        setData([getDataRef.current.value, ...data]);

        getDataRef.current.value = "";
    }

    const taskDelete = (e)=>{

      let k =  data.filter((el)=> el === e.taget.value)
      console.log(k)
       setData([k]);

    }

    return (
        <div>

            <section>
                <label>Task input : <input ref={getDataRef} /></label>
                <button onClick={getDataAdd}>ADD</button><br /><br />
            </section>

            <section>
                <div>Display Task</div>
                <ol>
                    {
                        data.map((e,i)=> {
                            return (
                                <>
                                    <li id={i}>{e}  <button onClick={(e)=>taskDelete(e)}>Delete Task</button></li>
                                    
                                </>
                            )
                        })
                    }
                </ol>
            </section>

        </div>
    )
}
