"use strict";
exports.__esModule = true;
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.showPessoa = function () {
        console.log("Nome:".concat(this.nome));
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
