function Product(props){

console.log(props)

//deconstructing 1
const {product} = props;
console.log(product) 

//deconstructing 2
const { id, name, img_url} = product

    return (

        <div className="product">
        <img src={img_url} alt="" />
        <div className="name" key = {id}>{name}</div>
           </div>
    )

}

export default Product;