import React from "react";
import "./App.css";
function App() {
    return (
        <>

            <h2>CLOTHES</h2>
            <div class="gellery">
                <div class="content"></div>
                <img src="./pics/image1.jpeg"  alt="shirt"/>
                <h3>combo tshirt</h3>
                <p></p>
                <h6>Rs.299</h6>

                <button class="buy" onclick="buyNow()">Add to cart</button>
            </div>

            <div class="gellery">
                <div class="content"></div>
                <img src="./pics/image2.jpeg"  alt="shirt"/>
                <h3>tshirt</h3>
                <p></p>
                <h6>Rs.299</h6>

                <button class="buy" onclick="buyNow()">Add to cart</button>
            </div>

            <div class="gellery">
                <div class="content"></div>
                <img src="./pics/image3.jpeg"  alt="shirt"/>
                <h3>crop top</h3>
                <p></p>
                <h6>Rs.299</h6>

                <button class="buy" onclick="buyNow()">Add to cart</button>
            </div>

            <div class="gellery">
                <div class="content"></div>
                <img src="./pics/image4.jpeg"  alt="shirt"/>
                <h3>jeans</h3>
                <p></p>
                <h6>Rs.299</h6>

                <button class="buy" onclick="buyNow()">Add to cart</button>
            </div>

            <div class="gellery">
                <div class="content"></div>
                <img src="./pics/image5.jpeg"  alt="shirt"/>
                <h3>kurta</h3>
                <p></p>
                <h6>Rs.299</h6>

                <button class="buy" onclick="buyNow()">Add to cart</button>
            </div>

            <div class="gellery">
                <div class="content"></div>
                <img src="./pics/image6.jpeg"  alt="shirt"/>
                <h3>kurta</h3>
                <p></p>
                <h6>Rs.299</h6>

                <button class="buy" onclick="buyNow()">Add to cart</button>
            </div>

            <div class="gellery">
                <div class="content"></div>
                <img src="./pics/image7.jpeg"  alt="shirt"/>
                <h3>KURTA</h3>
                <p></p>
                <h6>Rs.299</h6>

                <button class="buy" onclick="buyNow()">Add to cart</button>
            </div>

            <div class="gellery">
                <div class="content"></div>
                <img src="./pics/image8.jpeg"  alt="shirt"/>
                <h3>kurta</h3>
                <p></p>
                <h6>Rs.299</h6>

                <button class="buy" onclick="buyNow()">Add to cart</button>
            </div>


        </>
    );
}
export default App;



// import React from "react";
// import data from './components/back/data/data';
// import Header from "./components/front/Header/Header";
// import Routes from "./components/front/Routes/Routes";

// import { BrowserRouter as Router } from "react-router-dom";

// const App=()=>{
//     const {productItems}=data;
//     return(
//        <div>
//         <h1>hiii</h1>
//          <Router>
//             <h1>hiii</h1>
//             <Header/>
//             <Routes productItems={productItems}/>
//         </Router>
//        </div>
//     )

// }
// export default App;
