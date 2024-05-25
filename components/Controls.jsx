import './Controls.css'
// function Controls({startstop})

function Controls({
    startstop, reset, isRunning
}) {

    return (
        <>
            <section className="controls">

                <button className="reset" 
                onClick={reset} >
                Reset</button>


                <button onClick={startstop}    className={`start-stop ${isRunning ? 'red' : ''}`}>
                {isRunning ? 'Stop' : 'Start'}
                </button>
            </section>
        </>
    )
}

export default Controls
