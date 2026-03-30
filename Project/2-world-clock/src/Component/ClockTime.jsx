function ClockTime(){
    let t = new Date();
    return <p>Now the time is :: <span class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">{t.toLocaleTimeString()}</span> and Date :: <span class="shadow p-3 mb-5 bg-body-tertiary rounded">{t.toLocaleDateString()}</span></p>
}

export default ClockTime;