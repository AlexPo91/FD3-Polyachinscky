
interface IStorageEngine {
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}

class Scales<StorageEngine extends IStorageEngine> {
    storage: StorageEngine
    constructor(_storage: StorageEngine){
        this.storage = _storage
    }
    addItem(item:Product):void{
        this.storage.addItem(item)
    }
    getSumScale():number{
        let productSumScale:number=0
        let index:number=this.storage.getCount()
        for(let i = 0; i < index; i++){
            productSumScale += this.storage.getItem(i).getScale()
        }
        return productSumScale
    }
    getNameList():string[]{
        let productNameList:Array<string>=[]
        let index:number=this.storage.getCount()
        for(let i = 0; i < index; i++){
            productNameList.push(this.storage.getItem(i).getName())
        }
        return productNameList
    }
}

class Product {
    constructor(private name:string, private scale:number){}
    public getScale():number{
        return this.scale
    }
    public getName():string{
        return this.name
    }
}

class ScalesStorageEngineArray implements IStorageEngine{
    storage:Array<Product>=[]
    addItem(item:Product):void{
        this.storage.push(item)
    }
    getItem(index:number):Product{
        return this.storage[index]
    }
    getCount():number{
        return this.storage.length
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine{
    getStorageLS():Array<Product>{
        return JSON.parse(localStorage.getItem('products'))
    }
    addItem(item:Product):void{
        if(!localStorage.length){
            localStorage.setItem('products', JSON.stringify([]))
        } 
        let storage:Array<Product> = this.getStorageLS()
        storage.push(item)
        localStorage.setItem('products', JSON.stringify(storage))
    }
    getItem(index:number):Product{
        let storage:Array<Product> = this.getStorageLS()
        let product:any=storage[index]
        return new Product(product.name, product.scale)
    }
    getCount():number{
        let storage:Array<Product> = this.getStorageLS()
        return storage.length
    }
}

let apple1 = new Product('apple1', 5)
let apple2 = new Product('apple2', 6)
let tomato1 = new Product('tomato1', 7)
let tomato2 = new Product('tomato2', 8)

let storageArray = new ScalesStorageEngineArray()
storageArray.addItem(apple1)
storageArray.addItem(apple2)
storageArray.addItem(tomato1)
storageArray.addItem(tomato2)
let scaleStorageArray = new Scales(storageArray)


localStorage.removeItem('products')

let storageLS = new ScalesStorageEngineLocalStorage()
storageLS.addItem(apple1)
storageLS.addItem(apple2)
storageLS.addItem(tomato1)
storageLS.addItem(tomato2)
let scaleStorageLS = new Scales(storageLS)




console.log(`Result getNameList in storage Array: ${scaleStorageArray.getNameList()}`)
console.log(`Result getSumScale in storage Array: ${scaleStorageArray.getSumScale()}`)

console.log(`Result getNameList in storage LS: ${scaleStorageLS.getNameList()}`)
console.log(`Result getSumScale in storage LS: ${scaleStorageLS.getSumScale()}`)
