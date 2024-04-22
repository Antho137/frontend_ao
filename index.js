const infraestructuras = [
    {
        name: "Salas de Aula Teóricas",
        input1: "<input type='number' min='0' aria-valuemin='0' disabled />",
        input2: "<input type='number' min='0' aria-valuemin='0' disabled />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' />"
    },
    {
        name: "Salas de Informática",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Laboratórios de Automação",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Laboratórios de Biologia",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Laboratórios de CAD",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Laboratórios de CNC",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Laboratórios de Electrónica",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Laboratórios de Energias Renováveis",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Laboratórios de Física",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Laboratórios de Frio e Climatização",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Laboratórios de Instalações Eléctricas",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Laboratórios de Máquinas Eléctricas",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Laboratórios de Metalomecânica",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Laboratórios de Química",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Laboratórios de Telecomunicações",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Oficinas de Construções Mecânicas",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Oficinas de Máquinas e Motores",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' value='1' aria-valuemin='0' disabled />"
    },
    {
        name: "Oficinas de Soldadura",
        input1: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input2: "<input type='number' min='0' aria-valuemin='0' value='1' />",
        input3: "<input type='number' min='0' aria-valuemin='0' value='1' disabled />"
    }
];

let table = "<table>";
table += "<tr><th>Designação</th><th>Funcionais</th><th>Não Funcionais</th><th>Número total</th></tr>";

function getData() {
    let functionalidade = document.getElementById('functionalidade');
    infraestructuras.map(infras => {
        table += "<tr>"
        table += "<td>" + infras.name + "</td>" +
        "<td>" + infras.input1 + "</td>" +
        "<td>" + infras.input2 + "</td>" +
        "<td>" + infras.input3 + "</td>";
        table += "</tr>";
    });
    functionalidade.innerHTML += table;
}

getData();