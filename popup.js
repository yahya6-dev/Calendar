//here we pick selected calendar

let updateCal = (selected) =>{
	let constructedString = `en-u-ca-${selected.trim()}`
	let cal = new Intl.DateTimeFormat(constructedString)
	let now = new Date()
	return cal.format(now)
}

let updateDisplay = (updatedDate)=>{
  let display =  document.getElementById("display")
  display.innerText = updatedDate
}

document.addEventListener("DOMContentLoaded",()=>{
	let select = document.getElementById("target")
	select.addEventListener("change", async (event)=>{
		let str = event.target.value
		let date
		if (str.trim() != '')
			date = await updateCal(str)
		else
			date = new Date().toDateTimeString()
		await updateDisplay(date)
	})

})