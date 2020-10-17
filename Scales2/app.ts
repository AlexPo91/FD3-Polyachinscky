interface iScalaible {
    getScale(): number;
    getName(): string;
}
class Scales {
    product: iScalaible[] = []

    add(_product: iScalaible): void {
        this.product.push(_product)
    }
    getSumScale(): number {
        let productSumScale: number = 0
        this.product.forEach((el:iScalaible) =>
            productSumScale += el.getScale()
        )
        return productSumScale
    }
    getNameList(): string[] {
        let productNameList: Array<string> = []
        this.product.forEach((el:iScalaible) => productNameList.push(el.getName()))
        return productNameList
    }
}


class Apple implements iScalaible {
    scale: number
    name: string
    constructor(name: string, scale: number) {
        this.scale = scale
        this.name = name
    }
    getScale(): number {
        return this.scale
    }
    getName(): string {
        return this.name
    }
}

class Tomato implements iScalaible {
    scale: number
    name: string
    constructor(name: string, scale: number) {
        this.scale = scale
        this.name = name
    }
    getScale(): number {
        return this.scale
    }
    getName(): string {
        return this.name
    }
}

let apple1:Apple = new Apple('apple1', 5)
let apple2:Apple = new Apple('apple2', 6)

let tomato1:Tomato = new Tomato('tomato1', 7)
let tomato2:Tomato = new Tomato('tomato2', 8)

let scales = new Scales

scales.add(apple1)
scales.add(apple2)
scales.add(tomato1)
scales.add(tomato2)

console.log(`Result getNameList: ${scales.getNameList()}`)
console.log(`Result getSumScale: ${scales.getSumScale()}`)