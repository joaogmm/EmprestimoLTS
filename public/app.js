

var database = firebase.database();

function adicionar() {
    var txtEmprestimoNumero = document.getElementById("txtEmprestimoNumero").value;
    var txtIsbn = document.getElementById("txtIsbn").value;
    var txtRa = document.getElementById("txtRa").value;
    var txtDataEm = document.getElementById("txtDataEm").value;
    var txtDataDe = document.getElementById("txtDataDe").value;
    var submitBtn = document.getElementById("submitBtn").value;

    var ref = database.ref('Emprestimos')

    var data = {
        id: txtEmprestimoNumero,
        isbn: txtIsbn,
        ra: txtRa,
        dataemprestimo: txtDataEm,
        datadevolucao: txtDataDe
    }
    ref.push(data);
}

function excluir() {
    var txtEmprestimoNumero = document.getElementById("txtEmprestimoNumero").value;
    var txtIsbn = document.getElementById("txtIsbn").value;
    var txtRa = document.getElementById("txtRa").value;
    var txtDataEm = document.getElementById("txtDataEm").value;
    var txtDataDe = document.getElementById("txtDataDe").value;
    var submitBtn = document.getElementById("submitBtn").value;

    var ref = database.ref('Emprestimos')

    var data = {
        id: null,
        isbn: null,
        ra: null,
        dataemprestimo: null,
        datadevolucao: null
    }
    ref.push(data);
}