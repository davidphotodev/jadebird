<template>
	<div>
		<div id="slider" class="jc-between">
			<div id="side-left" class="w-50 h-100 v-center">
				<div class="paddinglr-60 white-text">
					<h2>Smart Solution For Life Protection</h2>
					<p class="text-20">Jade Bird Europe has been established in the beautiful, technological hub of Barcelona to disrupt the status quo of the Fire Alarm market. From here, we design cutting-edge Commercial Fire Alarm & Detection equipment and solutions for our Customers in Europe, Middle East and Africa</p>
					<div class="margint-80">
						<button class="btn blue-text white"><strong>Contact Us</strong></button>
					</div>
				</div>
			</div>
			<div class="w-50 h-100">
				<img height="100%" width="100%" src="../assets/img/slider-right.png">
			</div>
		</div>
		<div>
			<div class="row first-box-leaders">
				<div class="col m6 reset">
					<div>
						<img height="220px" width="90%" src="../assets/img/bar-blue.png">
						<img class="img-alarm" width="350px" src="../assets/img/bar-alarm.png">
					</div>
				</div>
				<div class="col m5">
					<div>
						<p class="text-16"><strong class="grey-text text-darken-1">About Us</strong></p>
						<h4 class="grey-text text-darken-3"><strong>We are leaders in research</strong></h4>
						<p class="text-16 grey-text text-darken-3"><strong>We are leaders in research and our mission is the development, design and conception of quality products to ensure long durability</strong></p>
						<button class="btn blue white-text"><strong>See More</strong></button>
					</div>
				</div>
			</div>
			<div class="margintb-35 center-align">
				<i class="material-icons blue-text c-pointer">lens</i>
				<i class="material-icons grey-text text-lighten-2 c-pointer">lens</i>
			</div>
		</div>
		<div id="products">
			<div class="center-align">
				<h4>PRODUCTS</h4>
			</div>
			<div class="w-100 jc-around margint-20 marginb-10">
				<strong class="black-text c-pointer marginlr-20">View All Products</strong>
				<strong class="grey-text c-pointer marginlr-20">Fire Panels</strong>
				<strong class="grey-text c-pointer marginlr-20">Detectors</strong>
				<strong class="grey-text c-pointer marginlr-20">Manual Call Points</strong>
				<strong class="grey-text c-pointer marginlr-20">Modules</strong>
				<strong class="grey-text c-pointer marginlr-20">Notification</strong>
 				<strong class="grey-text c-pointer marginlr-20">Emergency Light</strong>
			</div>
			<div>
				<hooper :itemsToShow="4" :infiniteScroll="true">
				  <slide v-for="index in 5" :key="index">
				    <div class="carousel-product">
						<div class="center-align">
							<img src="../assets/img/product.png">
						</div>
						<div class="row grey lighten-3 paddingtb-10 paddinglr-15 margin-0">
							<div class="col s6">
								<p class="reset"><strong>JBE-2100</strong></p>
								<p class="reset">Manual push button</p>
								<p class="reset">Addressable</p>
							</div>
							<div class="col s6 v-center right-align">
								<div>
									<img class="c-pointer d-inline-block w-66 h-100" src="../assets/img/see.png">
									<img class="c-pointer d-inline-block w-34 h-100" src="../assets/img/download.png">
								</div>
							</div>
						</div>
					</div>
				  </slide>
				  <hooper-navigation slot="hooper-addons"></hooper-navigation>	  
				</hooper>

			</div>
			<div>
				<div class="center-align margint-70">
					<p class="text-20 marginb-20 grey-text text-darken-2"><strong>NEW PRODUCTS</strong></p>
					<h4><strong>NEW PRODUCTS</strong></h4>
				</div>
				<hooper :itemsToShow="3" :infiniteScroll="true">
					<slide v-for="index in 5" :key="index">
						<div class="center-align margint-70 d-flex jc-around">
							<div class="w-100 center-align">
								<div>
									<img width="93%" src="../assets/img/product-new.png">
								</div>
								<div class="paddingtb-10 h-center paddinglr-15 margin-0">
									<div class="w-85 paddingtb-10 white-text d-flex description-product">
										<div class="w-50 left-align paddingl-20">
											<p class="reset"><strong>JBE-2100</strong></p>
											<p class="reset">Manual push button</p>
											<p class="reset">Addressable</p>
										</div>
										<div class="w-50 v-center right-align">
											<div class="minus-bottom-10">
												<img class="c-pointer d-inline-block w-66 h-100" src="../assets/img/see2.png">
												<img class="c-pointer d-inline-block w-34 h-100" src="../assets/img/download.png">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</slide>
					<hooper-navigation slot="hooper-addons"></hooper-navigation>
				</hooper>
			</div>
		</div>

		<div id="contact" class="paddingtb-50 paddinglr-55 margint-40">
			<div class="row v-center">
				<div class="col m5">
					<div class="paddingl-20">
						<img width="300px" src="../assets/img/logo-white.png">
					</div>
					<div class="margint-40">
						<p class="text-35 white-text">Join us at <strong>SICUR 2020</strong></p>
					</div>
					<div class="paddingl-20 margint-40">
						<img width="300px" src="../assets/img/contact-box.png">
					</div>
					<div class="row margint-50">
						<div class="col m5 center-align">
							<img width="180px" src="../assets/img/sicur-logo.png">
						</div>
						<div class="col m7 borderl-red text-25 white-text paddingl-35">
							<p class="reset"><strong>25-28</strong></p>
							<p class="reset">February</p>
							<p class="reset"><strong>2020</strong></p>
							<p class="reset">Madrid</p>
						</div>
					</div>
				</div>
				<div class="col m7">
					<div class="white b-radius-10 padding-20">
						<div class="row">
							<div class="col m6">
								<div>
									<label for="name">Name</label>
									<input id="name" type="text">
								</div>
								<div>
									<label for="last_name">Last Name</label>
									<input id="last_name" type="text">
								</div>
								<div>
									<label for="company">Company</label>
									<input id="company" type="text">
								</div>
							</div>
							<div class="col m6">
								<div>
									<label for="Country">Country</label>
									<input id="Country" type="text">
								</div>
								<div>
									<label for="email">E-mail</label>
									<input id="email" type="text">
								</div>
								<div>
									<label for="position">Position</label>
									<input id="position" type="text">
								</div>
							</div>
						</div>
						<div class="margint-40">
							<div class="row">
								<div class="col m6 center-align">
									<p class="text-17">Accetp our <strong>Terms and Conditions</strong></p>
								</div>
								<div class="col m6">
									<button class="green-jadebird w-100 btn b-radius-7-5 white-text btn-large text-17">Request an Invitation!</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div>
			<div class="margintb-60 center-align">
				<h4><strong>PRODUCTS</strong></h4>
			</div>
			<div class="w-100 jc-around margint-20 marginb-10">
				<strong class="black-text c-pointer marginlr-20">View All Products</strong>
				<strong class="grey-text c-pointer marginlr-20">Fire Panels</strong>
				<strong class="grey-text c-pointer marginlr-20">Detectors</strong>
				<strong class="grey-text c-pointer marginlr-20">Manual Call Points</strong>
				<strong class="grey-text c-pointer marginlr-20">Modules</strong>
				<strong class="grey-text c-pointer marginlr-20">Notification</strong>
 				<strong class="grey-text c-pointer marginlr-20">Emergency Light</strong>
			</div>
			<div class="margintb-50">
				<div class="jc-between margintb-50" v-for="index in 2">
					<div class="w-50 v-center grey-text text-darken-3 paddinglr-25">
						<div class="d-inline-block w-50 center-align">
							<img class="border-grey padding-40" src="../assets/img/product.png">
						</div>
						<div class="d-inline-block w-50">
							<p class="text-18"><strong>JBE-2100</strong></p>
							<p><strong>Manual push button Addressable</strong></p>
							<p class="text-14">
								JBE-2100 es un Manual push button Addressable diseñado para operar en un lazo de dispositivos inteligentes de detección de incendios. Este Manual push button envía una señal de alarma a los paneles de incendio Draco de Jade Bird cuando se presiona el elemento rearmable frontal del puslador
							</p>
							<div class="row grey lighten-3 paddingtb-10 paddinglr-15 margin-0">
							<div class="col s6">
								<p class="reset"><strong>JBE-2100</strong></p>
								<p class="reset">Manual push button</p>
								<p class="reset">Addressable</p>
							</div>
							<div class="col s6 v-center right-align">
								<div>
									<img class="c-pointer d-inline-block w-66 h-100" src="../assets/img/see.png">
									<img class="c-pointer d-inline-block w-34 h-100" src="../assets/img/download.png">
								</div>
							</div>
						</div>
						</div>
					</div>
					<div class="w-50 v-center grey-text text-darken-3 paddinglr-25">
						<div class="d-inline-block w-50 center-align">
							<img class="border-grey padding-40" src="../assets/img/product.png">
						</div>
						<div class="d-inline-block w-50">
							<p class="text-18"><strong>JBE-2100</strong></p>
							<p><strong>Manual push button Addressable</strong></p>
							<p class="text-14">
								JBE-2100 es un Manual push button Addressable diseñado para operar en un lazo de dispositivos inteligentes de detección de incendios. Este Manual push button envía una señal de alarma a los paneles de incendio Draco de Jade Bird cuando se presiona el elemento rearmable frontal del puslador
							</p>
							<div class="row grey lighten-3 paddingtb-10 paddinglr-15 margin-0">
							<div class="col s6">
								<p class="reset"><strong>JBE-2100</strong></p>
								<p class="reset">Manual push button</p>
								<p class="reset">Addressable</p>
							</div>
							<div class="col s6 v-center right-align">
								<div>
									<img class="c-pointer d-inline-block w-66 h-100" src="../assets/img/see.png">
									<img class="c-pointer d-inline-block w-34 h-100" src="../assets/img/download.png">
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div>
			<div class="margintb-60 center-align">
				<h4><strong>NEWS & EVENTS</strong></h4>
			</div>
			<div>
				<div class="row">
					<div class="col m6 s12 padding-25 center-align">
						<div class="first-event padding-10">
							<img src="../assets/img/first-event.png">
							<div class="row v-center">
								<div class="col m9">
									<p class="left-align text-12">
										The Chinese multinational Jade Bird has chosen Barcelona for its first European headquarters. Dedicated to the production of fire alarms for hospitals, factories and shops, it has more than 2,000 workers and its headquarters in Beijing.
									</p>
								</div>
								<div class="col m3">
									<div class="d-inline-block">
										<button class="green-jadebird paddinglr-40 btn">Register</button>
									</div>
								</div>

							</div>
						</div>
					</div>
					<div class="col m6 s12 padding-25 center-align">
						<div class="second-event padding-10">
							<img src="../assets/img/second-event.png">
							<div class="row v-center">
								<div class="col m9">
									<p class="left-align text-12">
										The Chinese multinational Jade Bird has chosen Barcelona for its first European headquarters. Dedicated to the production of fire alarms for hospitals, factories and shops, it has more than 2,000 workers and its headquarters in Beijing.
									</p>
								</div>
								<div class="col m3">
									<div class="d-inline-block">
										<button class="blue paddinglr-40 btn">Register</button>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		
	</div>
</template>


<style lang="css" scoped>
	.hooper{
		height: auto !important;
	}
	#contact{
		background-image:linear-gradient(90deg, rgba(0,0,0,.7) 0%, rgba(10,128,170,.5) 52%, rgba(29,186,233,.5)), url(../assets/img/contact-bg.png);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	#products{
		margin: 40px 0;
	}
	#slider{
		height: 600px;
	}
	#side-left{
		background: rgb(10,82,138);
        background: linear-gradient(90deg, rgba(10,82,138,1) 0%, rgba(10,128,170,1) 52%, rgba(29,186,233,1) 100%);
	}
	.borderl-red{
		border-left: 1px solid red;
	}
	.border-grey{
		border: 1px solid #aaa;
		width: 87%;
		height: 100%;
	}
	.carousel-product{
		color: #5b5b5b;
		border: 1px solid #eee;
		margin: 0 10px;
	}
	.description-product{
		margin-top: -40px !important;
		background: rgb(10,82,138);
        background: linear-gradient(90deg, rgba(10,82,138,1) 0%, rgba(10,128,170,1) 52%, rgba(29,186,233,1) 100%);
        border-radius: 10px;
	}
	.first-box-leaders{
		margin: 60px 0 10rem 0;
	}
	.first-event img, .second-event img{
		border-radius: 5px;
		display: block;
		width: 95%;
	}
	
	
	.hooper-next, .hooper-prev{
		background-color: #6f6d6d45 !important;
	}
	.img-alarm{
		position: absolute;
		right: 54%;
	}
	.minus-bottom-10{
		margin-bottom: -10px;
	}
	.over-bg{

	}
</style>

<script>

	import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
	import 'hooper/dist/hooper.css';
	export default {

	  name: 'Home',
	  components: {
			Hooper,
    		Slide,
    		HooperNavigation
	  },
	  created(){
	  	this.$store.commit('SET_LAYOUT', 'Layout');
	  },
	  mounted(){
	  },
	  data() {
	    return {
	    	vueGlideClasses: {
	    		direction: {
				    ltr: 'glide--ltr',
				    rtl: 'glide--rtl'
				  },
				slider: 'glide--slider',
	    		carousel: 'glide--carousel',
	    		swipeable: 'glide--swipeable',
	    		activeNav: 'glide__bullet--active',
	    		activeSlide: 'glide__slide--active',
	    	},
	    	breakpoint: {
			  800: {
			    perView: 2
			  },
			  600: {
			  	perView: 1
			  }
			}
	    };
	  },
	};
</script>