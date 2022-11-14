


let d =new Date();
let date = d.toLocaleDateString();
let time = d.toLocaleTimeString();


export default function DateAndTime(){
    return (

        <>
            <h1>{date}</h1>
            <h1>{time}</h1>
        </>

    )
}