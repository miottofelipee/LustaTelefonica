class User{
    constructor(nome, telefonefix, telefonecel, foto, data, email, cep, cidade, insta, git){
        this.nome = nome;
        this.telefonefix = telefonefix;
        this.telefonecel = telefonecel;
        this.foto = foto;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.insta = insta;
        this.git = git;
        this.age = this.calculateAge();
        this.zodiacSign = this.getZodiacSign();
    }

    calculateAge() {
        let today = new Date();
        let birthdate = new Date(this.data);
        let age = today.getFullYear() - birthdate.getFullYear();
        let month = today.getMonth() - birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        console.log("Passou pelo calculateAge() da class User");
        return age;
    }

    getZodiacSign() {
        let birthdate = new Date(this.data);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
}

function comporUser(){
    let nome = document.getElementById("nome").value;
    let telefonefix = document.getElementById("telefonefix").value;
    let telefonecel = document.getElementById("telefonecel").value;
    let foto = document.getElementById("foto").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let insta = document.getElementById("insta").value;
    let git = document.getElementById("git").value;
    const user = new User(nome, telefonefix, telefonecel, foto, data, email, cep, cidade, insta, git);
    listadeUser.add(user);
    console.log(user);
    renderizarConteudo();
}

class bibliotecaUser{
    constructor(){
        this.bibliotecaUser = [];
    }

    add(parametro) {
        if (verificacaoInputs()) {
            envieMsg("Preecha todos os campos", "error")
        } else if (!isURLValida(parametro.foto)) {
        envieMsg("URL inválida", "erro")
        }else{
            this.bibliotecaUser.push(parametro);
            cleaerFields();
            envieMsg("Você foi cadastrado!", "sucesso")
        }
    }
}

function verificacaoInputs() {
    let nome = document.getElementById("nome").value;
    let telefonefix = document.getElementById("telefonefix").value;
    let telefonecel = document.getElementById("telefonecel").value;
    let foto = document.getElementById("foto").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let insta = document.getElementById("insta").value;
    let git = document.getElementById("git").value;

    if (nome == '' || telefonefix == '' || telefonecel == '' || foto == '' || data == '' || email == '' || cep == '' || cidade == '' || insta == '' || git == '') {
        envieMsg("Coloque os dados certos 😡", "error");
        return true;
    } else {
        console.log("Cadastrado na Lista")
        return false;
    }
}

function envieMsg(msg, tipo) {
    const msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    const msgParaTela = `
    <p class="${tipo}">${msg}</p>
    `
    msgDiv.innerHTML += msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3500);
}

const listadeUser = new bibliotecaUser();

function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
         return true; } else {  return false; 
       }
}

function dateinPTBR(date){
    return date.split('-').reverse().join('/')
}

function cleaerFields() {
    document.getElementById("nome").value = '';
    document.getElementById("telefonefix").value = '';
    document.getElementById("telefonecel").value = '';
    document.getElementById("foto").value = '';
    document.getElementById("data").value = '';
    document.getElementById("email").value = '';
    document.getElementById("cep").value = '';
    document.getElementById("cidade").value = '';
    document.getElementById("insta").value = '';
    document.getElementById("git").value = '';
}

function renderizarConteudo() {
    const listaHTML = document.getElementById('usuario');
    listaHTML.innerHTML = "";
    let arrayuser = listadeUser.bibliotecaUser;
    console.log(arrayuser);
    arrayuser.forEach(user => {
        const userdiv = `
            <div class='user-card'>
                <img id="imgtam" src="${user.foto}">
                <p>Numero Fixo:${formatedCellphone(user.telefonefix)}</p>
                <p>Celular:${formatedCellphone(user.telefonecel)}</p>
            </div>
       `;
        listaHTML.innerHTML += userdiv;
    });
}

function renderizarConteudoInfos() {
    const listaHTML = document.getElementById('usuario-infos');
    listaHTML.innerHTML = "";
    let arrayuser = listadeUser.bibliotecaUser;
    console.log(arrayuser);
    arrayuser.forEach(user => {
        const userdiv = `
            <div class='user-card-infos'>
                <img id="imgtam" src="${user.foto}">
                <p>Nome:${user.nome}</p>
                <p>Celular:${formatedCellphone(user.telefonecel)}</p>
                <p>Telefone:${formatedCellphone(user.telefonefix)}</p>
                <p>Data de nascimento:${dateinPTBR(user.data)}</p>
                <p>Idade:${user.age}</p>
                <p>Signo:${user.zodiacSign}</p>
                <p>Email:${user.email}</p>
                <p>CEP:${formatarCEP(user.cep)}</p>
                <p>Cidade:${user.cidade}</p>
                <p>Instagram:${user.insta}</p>
                <p>Github:${user.git}</p>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-instagram" style="color: #f551d1;"></i>
                <i class="fa-brands fa-whatsapp" style="color: #33e651;"></i>
            </div>
       `;
        listaHTML.innerHTML += userdiv;
    });
}

function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function formatarCEP(cep)
{var ceP = /^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/;if(ceP.test(cep))
{return cep.replace(ceP,"$1.$2-$3");}else{enviarMsg("CEP inválido!"); }return "";
}