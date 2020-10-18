var Scales = /** @class */ (function () {
    function Scales(_storage) {
        this.storage = _storage;
    }
    Scales.prototype.addItem = function (item) {
        this.storage.addItem(item);
    };
    Scales.prototype.getSumScale = function () {
        var productSumScale = 0;
        var index = this.storage.getCount();
        for (var i = 0; i < index; i++) {
            productSumScale += this.storage.getItem(i).getScale();
        }
        return productSumScale;
    };
    Scales.prototype.getNameList = function () {
        var productNameList = [];
        var index = this.storage.getCount();
        for (var i = 0; i < index; i++) {
            productNameList.push(this.storage.getItem(i).getName());
        }
        return productNameList;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(name, scale) {
        this.name = name;
        this.scale = scale;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.storage = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.storage.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.storage[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.storage.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
    }
    ScalesStorageEngineLocalStorage.prototype.getStorageLS = function () {
        return JSON.parse(localStorage.getItem('products'));
    };
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        if (!localStorage.length) {
            localStorage.setItem('products', JSON.stringify([]));
        }
        var storage = this.getStorageLS();
        storage.push(item);
        localStorage.setItem('products', JSON.stringify(storage));
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var storage = this.getStorageLS();
        // let product:any=storage[index]
        return new Product(storage[index].name, storage[index].scale);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var storage = this.getStorageLS();
        return storage.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var apple1 = new Product('apple1', 5);
var apple2 = new Product('apple2', 6);
var tomato1 = new Product('tomato1', 7);
var tomato2 = new Product('tomato2', 8);
var storageArray = new ScalesStorageEngineArray();
storageArray.addItem(apple1);
storageArray.addItem(apple2);
storageArray.addItem(tomato1);
storageArray.addItem(tomato2);
var scaleStorageArray = new Scales(storageArray);
localStorage.removeItem('products');
var storageLS = new ScalesStorageEngineLocalStorage();
storageLS.addItem(apple1);
storageLS.addItem(apple2);
storageLS.addItem(tomato1);
storageLS.addItem(tomato2);
var scaleStorageLS = new Scales(storageLS);
console.log("Result getNameList in storage Array: " + scaleStorageArray.getNameList());
console.log("Result getSumScale in storage Array: " + scaleStorageArray.getSumScale());
console.log("Result getNameList in storage LS: " + scaleStorageLS.getNameList());
console.log("Result getSumScale in storage LS: " + scaleStorageLS.getSumScale());
//# sourceMappingURL=app.js.map