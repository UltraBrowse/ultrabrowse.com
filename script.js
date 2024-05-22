document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('learn-more').addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('about').offsetTop,
            behavior: 'smooth'
        });
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        xhr = new XMLHttpRequest();
		var url = "https://cors.rare1k.workers.dev/?https://messages.ifukkedyour.mom/send";
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function () {
    			if (xhr.readyState === 4 && xhr.status === 200) {
        			//var json = JSON.parse(xhr.responseText);
        			//console.log(json.email + ", " + json.password);
    			}
		};
		var data = JSON.stringify({
			"name" : name,
            "email" : email,
            "message" : message
		});
		xhr.send(data);
        alert('Thank you for your message. We will get back to you soon!');
        document.getElementById('contact-form').reset();
    });
});
