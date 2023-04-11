    class ProductManager{
        #precioBaseDeGanancia = 0.15;
        constructor(){
            this.products = [];
        }

        getProducts = () => {
            return this.products;

            agregarProducsts = (title,description,price, thumbnail, code, stock )=>{
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
                    products.id = this.products [this.products.length-1].id+1;
                }
                this.products.push(evento)
            }
        }
    }

