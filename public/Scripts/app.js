/*Adrian Posadas
301220353
02/04/2022
app.js
*/
//IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event) =>{
                if(!confirm("Are you sure"))
                {
                    event.preventDefault();
                    window.location.assign('/contacts-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();