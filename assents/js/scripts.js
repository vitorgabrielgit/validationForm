// validation  form

var dadosNames = [];
let skip = document.getElementById('skip').addEventListener('click', function() {

    let barLoad = document.getElementById('barLoad');

            setTimeout(() => {
                barLoad.style.width = '100%';
                setTimeout(() => {
                    window.location.href = "index.html";
                },500)
            }, 500)

})
let btnSend = document.getElementById('btnSend').addEventListener('click', function() {

        let formName = document.getElementById('formName').value;
        let formEmail = document.getElementById('formEmail').value;
        let formPassword = document.getElementById('formPassword').value;
        let formMsgPositivo = document.getElementById('formMsgPositivo').value;

        let errorLogin = document.getElementById('errorLogin');

         if(!formName || !formEmail || !formPassword || !formMsgPositivo)
        {

            if((errorLogin.style.color) == 'var(--color-red)')
            {

                errorLogin.style.animation = '.2s pulse';


                setTimeout(() => {
                    errorLogin.style.animation = 'none';
                }, 200 );
            };

            errorLogin.style.visibility = 'visible';
            errorLogin.style.color = 'var(--color-red)'
        }else
        {

            let barLoad = document.getElementById('barLoad');

            setTimeout(() => {
                barLoad.style.width = '100%';
                setTimeout(() => {
                    window.location.href = "index.html";
                },500)
            }, 1000)

            // push
            dadosNames.push(formName)

            errorLogin.style.visibility = 'visible';
            errorLogin.style.color = 'lightgreen'
            errorLogin.innerText = 'Cadastro concluido !';
        };


});
