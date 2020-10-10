
class Scales {
    product:Array<Product>=[]
    productNameList:Array<string>=[]
    productSumScale:number=0

    add(_product:Product):void{
        this.product.push(_product)
    }
    getSumScale():number{
        this.product.forEach(el=> 
            this.productSumScale += el.getScale()
            )
        return this.productSumScale
    }
    getNameList():string[]{
        this.product.forEach(el=>this.productNameList.push(el.getName()))
        return this.productNameList
    }
}

class Product {
    scale:number
    name:string
    getScale():number{
        return this.scale
    }
    getName():string{
        return this.name
    }
}

class Apple extends Product{
    
    constructor(name:string, scale:number){
        super()
        this.scale = scale
        this.name = name
    }
}
class Tomato extends Product{
    
    constructor(name:string, scale:number){
        super()
        this.scale = scale
        this.name = name
    }
}

let apple1 = new Apple('apple1', 5)
let apple2 = new Apple('apple2', 6)

let tomato1 = new Tomato('tomato1', 7)
let tomato2 = new Tomato('tomato2', 8)




let scales = new Scales

scales.add(apple1)
scales.add(apple2)
scales.add(tomato1)
scales.add(tomato2)
console.log(`Result getNameList: ${scales.getNameList()}`)
console.log(`Result getSumScale: ${scales.getSumScale()}`)