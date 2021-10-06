document.getElementsByID("contact-button").onclick = function (e) {
        let name = e.target.innerText.toLowerCase();
        alert("Hello");
        location.href = "contact.html";
        
      }