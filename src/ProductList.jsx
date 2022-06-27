import Product from "./components/Product";

function ProductList() {
    
    const products = [
   
        {
            "id": 1,
            "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/propulsion-gel.jpg",
            "name": "Propulsion gel"
        },
        {
            "id": 2,
            "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/weight-cube.jpg",
            "name": "Weight cube"
        },
        {   
            "id": 3,
            "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/friendly-cube.jpg",
            "name": "A friend"
        },
        {
            "id": 4,
            "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/portal-gun.jpg",
            "name": "Portal gun"
        },
        {
            "id": 5,
            "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/defense-robot.jpg",
            "name": "Home-defense robot"
        },
        {
            "id": 6,
            "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/cake.jpg",
            "name": "Cake (not a lie)"
        }
    ];
    
 return (

<div className="product-list">  

{products.map(product => {
    return <Product product={product} key={product.id}  />
})}
 </div>
 )
      {/* <Product
        name="Propulsion gel"
        url="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/propulsion-gel.jpg"
      />

      <Product
        name="Weight"
        url="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/weight-cube.jpg"
      />

      <Product
        name="A Friend"
        url="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/friendly-cube.jpg"
      />

      <Product
        name="Portal gun"
        url="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/portal-gun.jpg"
      />

      <Product
        name="Home-defense "
        url="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/defense-robot.jpg"
      />

      <Product
        name="Cake (not a lie)"
        url="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/cake.jpg"
      /> */}
    
 
}

export default ProductList;
