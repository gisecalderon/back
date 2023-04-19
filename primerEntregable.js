class ProductManager{
    #precioBaseDeGanancia = 0.15;
    
    constructor(){
        this.products = [];
    }
    getProducts = () => {
        return this.products;

    addProduct = function({title, description, price, thumbnail, code, stock }) {
        if(!title||description|| price|| thumbnail || code|| stock){
            console.log("incompleto");
            return null;
        }   
        const products ={
                title,
                description,
                price: precio* this.#preciosBaseDeGanancia,
                thumbnail: capacidad,
                code,
                stock,
            }
                if(this.products.length===0){
                    products.id = 1;
                }else { 
                    const lastProduct = this.products [this.products.length-1];
                    products.id = lastProduct.id + 1
                }
                this.products.push(product);
            }
            addTittle = (productId, userId)=>{
                const productIndex = this.products.findIndex(product=>product.id===productId);
                if(productIndex===1)
                    console.log("producto no encontrado");
                    return null;
            }   
                const productRegistered = this.products[productIndex].tittle.includes(userId);
                if(productRegistered){
                    console.log("Ya esta registrado el producto");
                    return null
                }
                this.products[productIndex].tittle.push(userId);
                console.log("producto agregado con exito");
        }
    }

const productManager = new ProductManager()

