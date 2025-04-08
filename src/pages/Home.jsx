import React from "react";
import PapularProducts from "../components/home/PapularProducts";
import TrendingProducts from "../components/home/TrendingProducts";
import FlashSaleProducts from "../components/home/TrendingProducts";
import CategoryPromotions from "../components/home/CategoryPromotions";
import promotionImage from "../assets/img/buy_fresh_&_organic_sea_food-preview.jpg";

function Home() {
    return (
      <div className="home-page">

		<section class="mb-10 sm:mb-20">
			<div class="container">
				<CategoryPromotions />
			</div>
		</section>

        <section className="mb-7 sm:mb-12">
          	<div className="container">
          		<div className="flex items-center justify-between gap-4 mb-5">
            		<h2 className="text-2xl sm:text-4xl font-bold capitalize">Most Popular</h2>
          		</div>
				<PapularProducts />
          	</div>
        </section>

		<section className="mb-10 sm:mb-20">
			<div className="container">
				<a href="/promotion/buy-fresh-organic-sea-food" className="w-full rounded-3xl">
					<img className="w-full rounded-3xl" src={promotionImage} alt="promotion" />
				</a>
		  </div>
		</section>

		<section class="sm:mb-10">
			<div class="container">
        		<h2 className="text-xl sm:text-4xl font-bold mt-10 mb-10">Trending Items</h2>
        		<TrendingProducts />
			</div>
		</section>

		<section className="sm:mb-10">
			<div className="container">
        		<div className="flex items-center justify-between gap-4 mb-5 sm:mb-7">
          			<h2 className="text-2xl sm:text-4xl font-bold capitalize">Flash Sale</h2>
          			<a href="/flash-sale" className="py-2 px-4 text-sm sm:py-3 sm:px-6 rounded-3xl capitalize sm:text-base font-semibold whitespace-nowrap bg-primary/5 text-primary transition-all duration-300 hover:bg-primary hover:text-white">View All</a>
          		</div>	
        		<FlashSaleProducts />
			</div>
		</section>

      </div>
    );
  };
  
  export default Home;