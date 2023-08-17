
const HEAD = (<div style={{
        width:'40px',
        height:'40px',
        borderRadius:'100%',
        border:'10px solid black',
        position:'absolute',
        top:'50px',
        right:'-25px'
    }}/>
)

const BODY = (<div style={{
        width:'10px',
        height:'100px',
        background:'black',
        position:'absolute',
        right:'0',
        top:'100px'
    }}/>
)

const RIGHTARM = (<div style={{
        width:'100px',
        height:'10px',
        background:'black',
        rotate:'-30deg',
        transformOrigin:'left bottum',
        position:'absolute',
        right:'-90px',
        top:'110px'
    }}/>
)

const RIGHTLEG = (<div style={{
        width:'100px',
        height:'10px',
        background:'black',
        rotate:'60deg',
        transformOrigin:'left bottum',
        position:'absolute',
        right:'-70px',
        top:'235px'
    }}/>
)

const LEFTARM = (<div style={{
        width:'100px',
        height:'10px',
        background:'black',
        rotate:'30deg',
        transformOrigin:'right bottum',
        position:'absolute',
        right:'0px',
        top:'110px'
    }}/>
)

const LEFTLEG = (
    <div style={{
        width:'100px',
        height:'10px',
        background:'black',
        rotate:'-60deg',
        transformOrigin:'right bottum',
        position:'absolute',
        right:'-20px',
        top:'235px'
    }}/>
)

const BODY_PARTS = [HEAD, BODY, RIGHTARM,LEFTARM,RIGHTLEG, RIGHTLEG, LEFTLEG]

type HangmanDrawingProps = {
    numberOfGueses?:number
}

export const HangmanDrawing = ({numberOfGueses}: HangmanDrawingProps) => {
    return(
        <div style={{position:'relative'}}>
            {BODY_PARTS.slice(0,numberOfGueses)}
            <div style={{
                width:'10px',
                height:'50px',
                background:'black',
                position:'absolute',
                top:'0',
                right:'0'
            }}/>
            <div style={{
                width:'150px',
                height:'10px',
                background:'black',
                marginLeft:'70px'
            }}/>
            <div style={{
                width:'10px',
                height:'400px',
                background:'black',
                marginLeft:'70px'
            }}/>
            <div style={{
                width:'150px',
                height:'10px',
                background:'black'
            }}/>
        </div>
    )
}