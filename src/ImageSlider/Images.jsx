import React, { useState } from 'react'
import ImagesData from './ImagesData'
import "./img.css";

export default function Images() {

    const [img,setImgae] = useState(ImageData[0].url);

    function fun(e){

        setImgae(e.target.src);

    }

    return (
        <div className='main'>
            <section>
                <div className='largeImg'>
                    <img className='selected' src={img}/>
                </div>
            </section>
            <section>
                <div className='imgList'>
                    {
                        ImageData.map((e) => {
                            return (
                                <>
                                    <img key={e.id} className="images" src={e.url} onMouseMove={(e)=>fun(e)} />
                                </>
                            )
                        })
                    }
                </div>
            </section>


        </div>
    )
}
