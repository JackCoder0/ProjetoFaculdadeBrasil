// Função do Botão "Voltar ao Topo"

const btn = document.getElementById("btnTop")

btn.addEventListener("click", function () {
    window.scrollTo(0, 0)
})

document.addEventListener('scroll', ocultar)

function ocultar() {
    if (window.scrollY > 10) {
        btn.style.display = "flex"
    }
    else {
        btn.style.display = "none"
    }
}

ocultar()

// Funçao da Barra de Pesquisa

// Mapeamento de regiões e estados
const regionStateMap = {
    "sul": "./sul.html",
    "sudeste": "./sudeste.html",
    "centro oeste": "./centrooeste.html",
    "norte": "./norte.html",
    "nordeste": "./nordeste.html",
    "distrito federal": "./centrooeste.html#df",
    "acre": "./norte.html#ac",
    "amapa": "./norte.html#ap",
    "amazonas": "./norte.html#am",
    "para": "./norte.html#pa",
    "rondonia": "./norte.html#ro",
    "roraima": "./norte.html#rr",
    "tocantins": "./norte.html#to",
    "alagoas": "./nordeste.html#al",
    "bahia": "./nordeste.html#ba",
    "ceara": "./nordeste.html#ce",
    "maranhao": "./nordeste.html#ma",
    "paraiba": "./nordeste.html#pb",
    "pernambuco": "./nordeste.html#pe",
    "piaui": "./nordeste.html#pi",
    "rio grande do norte": "./nordeste.html#rn",
    "sergipe": "./nordeste.html#se",
    "parana": "./sul.html#pr",
    "rio grande do sul": "./sul.html#rs",
    "santa catarina": "./sul.html#sc",
    "sao paulo": "./sudeste.html#sp",
    "rio de janeiro": "./sudeste.html#rj",
    "minas gerais": "./sudeste.html#mg",
    "espirito santo": "./sudeste.html#es",
    "goias": "./centrooeste.html#go",
    "mato grosso": "./centrooeste.html#mt",
    "mato grosso do sul": "./centrooeste.html#ms",
    "brasilia": "./centrooeste.html#df",

};

// Função para remover acentos de uma string
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para redirecionar
function redirectToPage() {
    const inputText = removeAccents(document.getElementById("searchInput").value.toLowerCase());
    if (regionStateMap[inputText]) {
        window.location.href = regionStateMap[inputText];
    } else {
        alert("Região ou estado não encontrado.");
    }
}

// Lidar com o clique no botão
document.getElementById("searchButton").addEventListener("click", redirectToPage);

// Lidar com a tecla "Enter" pressionada
document.getElementById("searchInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        redirectToPage();
    }
});

// Função do Mapa Interativo

const description = document.querySelector(".tooltip");

document.querySelectorAll('path').forEach((el) => {

    el.addEventListener('mouseover', (event) => {
        event.target.classList.add("enabled");
        description.classList.add("active");
        description.innerHTML = event.target.id;
    });

    el.addEventListener("mouseout", () => {
        description.classList.remove("active");
    });

    el.addEventListener("click", (event) => {
        // Pega a sigla do estado selecionado
        const estadoSelecionado = event.target.id;
        // Verifica se o estado selecionado tem uma página associada
        const estadoURLs = {
            "BR-SP": "./sudeste.html#sp",
            "BR-RS": "./sul.html#rs",
            "BR-PR": "./sul.html#pr",
            "BR-SC": "./sul.html#sc",
            "BR-RJ": "./sudeste.html#rj",
            "BR-ES": "./sudeste.html#es",
            "BR-MG": "./sudeste.html#mg",
            "BR-DF": "./centrooeste.html#df",
            "BR-MS": "./centrooeste.html#ms",
            "BR-GO": "./centrooeste.html#go",
            "BR-MT": "./centrooeste.html#mt",
            "BR-BA": "./nordeste.html#ba",
            "BR-SE": "./nordeste.html#se",
            "BR-AL": "./nordeste.html#al",
            "BR-PE": "./nordeste.html#pe",
            "BR-PB": "./nordeste.html#pb",
            "BR-RN": "./nordeste.html#rn",
            "BR-CE": "./nordeste.html#ce",
            "BR-PI": "./nordeste.html#pi",
            "BR-MA": "./nordeste.html#ma",
            "BR-TO": "./norte.html#to",
            "BR-PA": "./norte.html#pa",
            "BR-AP": "./norte.html#ap",
            "BR-AM": "./norte.html#am",
            "BR-RO": "./norte.html#ro",
            "BR-AC": "./norte.html#ac",


            // Adicione entradas para outros estados, se necessário
        };

        if (estadoURLs[estadoSelecionado]) {
            // Constrói o URL da página HTML
            const urlEstado = estadoURLs[estadoSelecionado];
            // Redireciona para a página HTML do estado selecionado
            window.location.href = urlEstado;
        } else {
            alert("Página não encontrada para este estado.");
        }
    });
});

document.onmousemove = function (e) {
    description.style.left = e.pageX + "px";
    description.style.top = (e.pageY - 70) + "px";
};

// Função do Slide Automatico

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 5) {
        counter = 1;
    }
}, 5000);

// Menu Mobile

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})