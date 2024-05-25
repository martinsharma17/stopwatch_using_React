import './Display.css'

function Display({time}) {

    function formatTime(timeInSecs){
        const hours = Math.floor(timeInSecs/3600);
        const minutes = Math.floor((timeInSecs % 3600)/60);
        const seconds = Math.floor(timeInSecs % 60);

        return{
            hours,
            minutes,
            seconds
        }
    }

    return (
        <>
            <section className="display">

                <div className="hours">
                    <span className="Number">
                    {String(formatTime(time).hours).padStart(2,"0")}
                    :</span>
                    <label>Hours</label>
                </div>

                <div className="minutes">
                    <span className="Number">
                    {String(formatTime(time).minutes).padStart(2,"0")}:</span>
                    <label>minutes</label>
                </div>

                <div className="secondd">
                    <span className="Number">  {String(formatTime(time).seconds).padStart(2,"0")}:</span>
                    <label>seconds</label>
                </div>

            </section>
        </>
    )
}

export default Display
