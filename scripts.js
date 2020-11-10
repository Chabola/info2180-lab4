window.onload = function() {
    let btn = document.querySelector('.btn');
    let text = document.querySelector('#text');
    let h3 = document.getElementsByTagName("h3")[0];
    let h4 = document.getElementsByTagName("h4")[0];
    let p = document.getElementsByTagName("p")[0];
    let result = document.getElementsByClassName("result")[0];
    btn.addEventListener('click', function(element) {
        element.preventDefault();
        fetch("superheroes.php?query="+text.value)
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                var res = data.split("|");
                if (text.value == res[1]) {
                    h3.textContent= res[2];
                    h4.textContent= res[1];
                    p.textContent= res[3];
                    result.innerText="";
                } else if (text.value == res[2]) {
                    h3.textContent= res[2];
                    h4.textContent= res[1];
                    p.textContent= res[3];
                    result.innerText="";
                }else if (text.value.length == 0) {
                    h3.textContent= "";
                    h4.textContent= "";
                    p.textContent= "";
                    result.innerHTML= data;
                }
                else if (text.value.length != 0){
                    h3.textContent= "";
                    h4.textContent= "";
                    p.textContent= "";
                    var txt = "SUPERHERO NOT FOUND";
                    txt = txt.fontcolor("red");
                    result.innerHTML= txt;

                }
                
            })
            .catch(error => console.log('There was an error: ' + error));
        
    });
}
