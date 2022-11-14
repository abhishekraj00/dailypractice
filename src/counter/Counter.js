
//  let c = 0;


let useState = 0 ;

export default function Counter(){

        const [count,setCount]=useState(0)
        return (
            <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>
            </>
        )
}