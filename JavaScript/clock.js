function updatedatetime(){
    const time = document.getElementById('time')
    const date = document.getElementById('date')

    const now = new Date;
    const hours = now.getHours() % 12 || 12
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")
    // console.log(seconds)
    const ampm = now.getHours() >=12 ? "PM" : "AM"
    // console.log(ampm)
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
    const datestring = now.toLocaleDateString(undefined,options)
    time.textContent = `${hours}:${minutes}:${seconds} ${ampm}`
    date.textContent = datestring


}
setInterval(updatedatetime,1000)
updatedatetime()