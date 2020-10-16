var Scales = /** @class */ (function () {
    function Scales() {
        this.product = [];
    }
    Scales.prototype.add = function (_product) {
        this.product.push(_product);
    };
    Scales.prototype.getSumScale = function () {
        var productSumScale = 0;
        this.product.forEach(function (el) {
            return productSumScale += el.getScale();
        });
        return productSumScale;
    };
    Scales.prototype.getNameList = function () {
        var productNameList = [];
        this.product.forEach(function (el) { return productNameList.push(el.getName()); });
        return productNameList;
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(name, scale) {
        this.scale = scale;
        this.name = name;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(name, scale) {
        this.scale = scale;
        this.name = name;
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var apple1 = new Apple('apple1', 5);
var apple2 = new Apple('apple2', 6);
var tomato1 = new Tomato('tomato1', 7);
var tomato2 = new Tomato('tomato2', 8);
var scales = new Scales;
scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);
console.log("Result getNameList: " + scales.getNameList());
console.log("Result getSumScale: " + scales.getSumScale());
//# sourceMappingURL=app.js.map