
const cssStyle = {};

const tt = new Date();
const daytime = tt.getHours();

let message = 'Good Morning';
cssStyle.color = "green";

if(daytime > 12 && daytime <=18){
    message = 'Good AfterNoon';
    cssStyle.color = "Red";
    
}else if(daytime > 18 && daytime <=24){
    message = 'Good Night';
    cssStyle.color = "Yellow";
    
}


export default function Greeting(){
    return(
        <>
            <h2>Hello<h1 id="message" style={cssStyle}>{message}</h1></h2>
        </>
    )
}