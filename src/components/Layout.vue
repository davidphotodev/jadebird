<template>
	<div class="w-100 flex-center">
		<div class="max-w-1800 w-100">
			<div class="grey lighten-5">
				<div id="header" class="paddinglr-40 jc-between white-text">
					<div>
						<p><strong>NEXT EVENT</strong> | Marketing conferences that should be on your radar <button class="green-jadebird border-0 white-text b-radius-5 paddingtb-5 paddinglr-55 marginl-25">Register</button></p>
					</div>
					<div class="v-center">
						<span>English</span><i class="material-icons">arrow_drop_down</i>
						<span class="marginl-25">Sign In</span>
					</div>
				</div>
				<div class="paddingtb-15 jc-between">
					<div class="w-80 paddingl-60">
						<img @click="$router.push({name: 'Home'})" src="../assets/img/logo_1.png" alt="logo" class="c-pointer">
					</div>
					<!--
						<div class="w-50 v-center">
							<div class="w-70 d-inline-block marginr-15">
								<input class="txt-header z-depth-1 browser-default" placeholder="Search..." type="text">
							</div>
							<i class="material-icons marginlr-10">tune</i>
							<i class="material-icons marginlr-10">lens</i>
							<i class="material-icons marginlr-10">shopping_cart</i>
						</div>
					 -->
				</div>
				<div class="w-50 jc-around margint-20 paddingb-10">
					<strong @click="$router.push({name: 'AboutUs'})" class="grey-text c-pointer marginlr-20 marginl-40">ABOUT US</strong>
					<strong @click="$router.push({name: 'Products'})" class="grey-text c-pointer marginlr-20">PRODUCTS</strong>
					<strong @click="$router.push({name: 'NewsEvent'})" class="grey-text c-pointer marginlr-20">NEW & EVENTS</strong>
					<strong @click="$router.push({name: 'Contact'})" class="grey-text c-pointer marginlr-20">CONTACT</strong>
				</div>
			</div>


			<router-view></router-view>


			<div class="grey lighten-3 center-align paddingtb-25">
				<div class="row reset">
					<div class="col m4 s12 row v-center reset">
						<div class="col s6 right-align">
							<a target="_blank" href="https://www.google.com/maps/place/Carrer+de+Tarragona,+157,+08014+Barcelona,+Espa%C3%B1a/@41.3783509,2.1431437,17.5z/data=!4m5!3m4!1s0x12a49881d644158b:0x986d617917df60f7!8m2!3d41.3783651!4d2.144801"><img src="../assets/img/location.png"></a>
						</div>
						<div class="col s6 left-align">
							<p class="reset"><strong>Carrer de Tarragona, 157</strong></p>
							<p class="reset"><strong>08014 Barcelona, Spain</strong></p>
						</div>
					</div>
					<div class="col m4 s12 row v-center reset">
						<div class="col s6 right-align">
							<img src="../assets/img/phone.png">
						</div>
						<div class="col s6 left-align">
							<p><strong>+34 936 403 414</strong></p>
						</div>
					</div>
					<div class="col m4 s12 row v-center reset">
						<div class="col s6 right-align">
							<a href="mailto:info@jadebird.eu.com"><img src="../assets/img/mail.png"></a>
						</div>
						<div class="col s6 left-align">
							<p><strong>info@jadebird.eu.com</strong></p>
						</div>
					</div>
				</div>
			</div>

			<div class="paddingtb-55 center-align">
				<img src="../assets/img/logo_1.png" alt="logo">
			</div>

			<div class="paddingtb-20 all-center footer-menu">
				<div class="jc-around w-80">	
					<p>About Us</p>
					<p>Products</p>
					<p>News & Events</p>
					<p>Contact</p>
				</div>
			</div>
		</div>
	</div>
</template>


<style lang="css" scoped>
	#header{
		background: rgb(8,116,154);
        background: linear-gradient(90deg, rgba(8,116,154,1) 0%, rgba(10,128,170,1) 32%, rgba(29,186,233,1) 100%);
	}
	.footer-menu p:first-child{
		border-left: none;
	}
	.footer-menu p{
		cursor: pointer;
		border-left: 3px solid #aaa;
		color: #a0a0a0;
		font-weight: bold;
		font-size: 19px;
		text-transform: uppercase;
		padding: 0 58px;
	}
	.txt-header{
		border-radius: 25px;
		padding: 7.5px 20px;
		border: 1px solid #aaa;
		width: 100%;
	}
	.txt-header::placeholder{
		color: grey !important;
	}
</style>

<script>
	export default {

	  name: 'Layout',
	  created(){
	  	console.log("Hola");
	  },
	  data() {
	    return {

	    };
	  },
	};
</script>