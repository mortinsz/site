
function changeActive(){
	document.getElementById("home").classList.add('inactive');
	document.getElementById("about").classList.add('active');
	document.getElementById("about").classList.remove('inactive');
}

const buttons = Array.from(document.querySelectorAll('.knopka_a'));

buttons.forEach (btn =>{
	
	btn.onclick = changeActive;
})

function sendBook(){
	document.getElementById("book_form").classList.add('inactive');
	document.getElementById("book_send").classList.remove('inactive');
	document.getElementById("book_send").classList.add('active');
}
	
	const send = Array.from(document.querySelectorAll('.bookButton'));
	
	send.forEach (btnB =>{
		btnB.onclick = sendBook;
	})
	
