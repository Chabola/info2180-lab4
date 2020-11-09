window.addEventListener('load', function() {
    let btn = document.querySelector('.btn');

    btn.addEventListener('click', function(element) {
        element.preventDefault();

        fetch("superheroes.php")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
               alert(data);
            })
            .catch(error => console.log('There was an error: ' + error));
    });
});