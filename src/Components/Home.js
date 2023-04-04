import React from "react";
import "../CSS/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/611Hit0i2SL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="489786520"
            title="Dell Latest Business Laptop Inspiron 16 7000 2-in-1 Laptop 16 inch FHD Touch-Screen 12th Gen Intel Evo i7-1260P 32G RAM 1TB Nvme SSD Thunderbolt Window 11 Pro"
            price={1499.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/619yMPQKI3L._AC_SX679_.jpg"
          />
          <Product
            id="25234511"
            title="Apple 2022 MacBook Air M2, 24GB RAM, 1TB Storage - Midnight (Z160000B7)"
            price={1999.96}
            rating={4}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/719C6bJv8jL._AC_SL1500_.jpg"
          />
          <Product
            id="4335441102"
            title="Apple 2023 MacBook Pro (16-inch, M2 Max chip with 12‑core CPU and 19‑core GPU, 32GB Unified Memory, 1TB SSD Storage) - Space Gray Z175000BP"
            price={3099.96}
            rating={4}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61fd2oCrvyL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49538078"
            title="KitchenAid KSM3311XAQ Artisan Mini Series Tilt-Head Stand Mixer, 3.5 quart, Aqua Sky Blue"
            price={299.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/8157Lc9KdpL._AC_SX679_.jpg"
          />

          <Product
            id="55238762"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="54398021"
            title="De'Longhi TrueBrew Drip Coffee Maker, Built in Grinder, Single Serve, 8 oz to 24 oz, Hot or Iced Coffee, Stainless, CAM51025MB
            Visit the De'Longhi Store"
            price={499.95}
            rating={4}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71m2WVGmhWL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="2203850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="10845930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="75229332"
            title="SAMSUNG 40-inch Class LED Smart FHD TV 1080P (UN40N5200AFXZA, 2019 Model)"
            price={449.98}
            rating={4}
            image="	https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/915Xj2rO8WL._AC_SX679_.jpg"
          />
          <Product
            id="22429500"
            title="GTEK 24 Inch 75Hz Frameless Computer Monitor, FHD 1080p LED Display, LCD Screen, HDMI VGA, Refresh Rate, VESA Mountable - F2407V"
            price={94.87}
            rating={4}
            image="https://m.media-amazon.com/images/I/91NWEmp82iL._AC_SL1500_.jpg"
          />
          <Product
            id="89064521"
            title="Sony 65 Inch 4K Ultra HD TV X95K Series: BRAVIA XR Mini LED Smart Google TV with Dolby Vision HDR and Exclusive Features for The Playstation® 5 XR65X95K- 2022 Model"
            price={1798.99}
            rating={4}
            image="	https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91GhUIw2YjL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="78561209"
            title="Ray-Ban RB4125 Cats 5000 Aviator Sunglasses"
            price={178.0}
            rating={5}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61m5FfClJ3L._AC_UX679_.jpg"
          />
          <Product
            id="99560527"
            title="	MUXXN Women's 1960s Vintage Cap Sleeve Pleated Rockabilly Cocktail A Line Swing Dresses"
            price={36.99}
            rating={4}
            image="	https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/614ThvIGYIL._AC_UY879_.jpg"
          />
          <Product
            id="66729338"
            title="Women’s Flannel Lined Denim Jacket | Detachable Hood | Zip Front and Side Pockets | 100% Cotton0"
            price={99.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Sr3vGJ0tL._AC_UL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
