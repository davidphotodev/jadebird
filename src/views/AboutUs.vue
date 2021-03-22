<template>
	<div>
		<div>
			<div class="bar-title left-align paddingtb-35 paddingl-60">
				<h4 class="white-text"><strong>ABOUT US</strong></h4>
			</div>
			<div class="row center-align margint-50">
				<div class="col m4 margint-50">
					<div>
						<img class="" src="../assets/img/bird.png" alt="">
					</div>
					<p class="blue-text text-20"><strong>Our Mission</strong></p>
					<div class="paddinglr-30">
						<p>
							Our mission is to provide you security, protecting your property from fire, adapting to your needs in the work or home, because all life matters to us. We develop state of the art integrated solutions for protecting lives and property from fire.
						</p>
					</div>
				</div>
				<div class="col m4">
					<div>
						<img class="" src="../assets/img/bird.png" alt="">
					</div>
					<p class="blue-text text-20"><strong>Our Vision</strong></p>
					<div class="paddinglr-30">
						<p>
							We aim to be Europe’s most reliable life safety integrated solutions supplier. Offering high quality specialized services that meets all your requirements thanks to our extensive experience. Keeping people safe is our first priority, and we can do it while protecting properties.
						</p>
					</div>
				</div>
				<div class="col m4 margint-50">
					<div>
						<img class="" src="../assets/img/bird.png" alt="">
					</div>
					<p class="blue-text text-20"><strong>Our Goals</strong></p>
					<div class="paddinglr-30">
						<p>
							Our goals Our goal is to make Jade Bird Europe our customer's preferred fire alarm system, delivering outstanding value, continuous innovation and exceptional customer experience.
						</p>
					</div>
				</div>
			</div>
			<div class="center-align">
				<h3><strong>Our Values</strong></h3>
				<img width="100%" src="../assets/img/aboutus.png" alt="">
			</div>
			<div class="bar-title left-align paddingtb-35 paddingl-60" style="margin-top: -30px;z-index:2;position:relative">
				<h4 class="white-text"><strong>TEAM</strong></h4>
			</div>
			<div class="margintb-20">
				<hooper :itemsToShow="4" :infiniteScroll="true">
					<slide v-for="(member, index) in team" :key="index">
						<div class="center-align margintb-60">
							<img :src="member.img">
							<div class="margint-20"><strong class="blue-text text-20">{{ member.name }}</strong></div>
							<div><span class="grey-text">{{ member.position }}</span></div>
						</div>
					</slide>
					<hooper-navigation slot="hooper-addons"></hooper-navigation>
				</hooper>
			</div>
			<div class="bar-title left-align paddingtb-35 paddingl-60" style="margin-top: -30px;z-index:2;position:relative">
				<h4 class="white-text"><strong>OUR CLIENT SAYS</strong></h4>
			</div>
			<div class="h-center margintb-35">
				<hooper :itemsToShow="4" :infiniteScroll="true">
					<slide>
						<div class="margin-30 grey lighten-4 center-align padding-30 b-radius-10">
							<div>
								<img src="../assets/img/client-1.png" alt="">
							</div>
							<p class="text-18"><strong>Jeff Smith</strong></p>
							<p class="text-14">Jade Bird has been established in the beatiful, technological hub of Barcelona to disrupt the status quo of the Fire Alarm market</p>
						</div>
					</slide>
					<slide>
						<div class="margin-30 grey lighten-4 center-align padding-30 b-radius-10">
							<div>
								<img src="../assets/img/client-2.png" alt="">
							</div>
							<p class="text-18"><strong>Carlos Villanueva</strong></p>
							<p class="text-14">Jade Bird has been established in the beatiful, technological hub of Barcelona to disrupt the status quo of the Fire Alarm market</p>
						</div>
					</slide>
					<slide>
						<div class="margin-30 grey lighten-4 center-align padding-30 b-radius-10">
							<div>
								<img src="../assets/img/client-3.png" alt="">
							</div>
							<p class="text-18"><strong>Enma Lancaster</strong></p>
							<p class="text-14">Jade Bird has been established in the beatiful, technological hub of Barcelona to disrupt the status quo of the Fire Alarm market</p>
						</div>
					</slide>
					<slide>
						<div class="margin-30 grey lighten-4 center-align padding-30 b-radius-10">
							<div>
								<img src="../assets/img/client-4.png" alt="">
							</div>
							<p class="text-18"><strong>Lidia Pinetta</strong></p>
							<p class="text-14">Jade Bird has been established in the beatiful, technological hub of Barcelona to disrupt the status quo of the Fire Alarm market</p>
						</div>
					</slide>
					<hooper-navigation slot="hooper-addons"></hooper-navigation>
				</hooper>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.bar-title{
		background-color: grey;
		background-image: url('../assets/img/bg-title-bar.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.hooper{
		height: auto !important;
	}
	.icon-team i {
		margin: 0 7px;
		color: grey;
	}
</style>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
export default {

  name: 'AboutUs',
  components: {
		Hooper,
		Slide,
		HooperNavigation
  },
  data() {
    return {
    	team: [
    		{
    			name: 'Blanca Palazón',
    			position: 'Comunications Manager',
    			img: require('@/assets/img/team-1.png'),
    		},
    		{
    			name: 'Brian J. Stumm',
    			position: 'VP General Manager',
    			img: require('@/assets/img/team-2.png'),
    		},
    		{
    			name: 'Dr. Héctor Ortiz Valencia',
    			position: 'Systems Engineering',
    			img: require('@/assets/img/team-3.png'),
    		},
    		{
    			name: 'José Manuel Bocanegra',
    			position: 'Systems Engineering',
    			img: require('@/assets/img/team-4.png'),
    		},
    		{
    			name: 'José Miguel Cabrera',
    			position: 'Certification Engineer',
    			img: require('@/assets/img/team-5.png'),
    		},
    		{
    			name: 'Li Qian Cao',
    			position: 'Office Manager',
    			img: require('@/assets/img/team-6.png'),
    		},
    		{
    			name: 'Manuel Madrid',
    			position: 'Technical Support',
    			img: require('@/assets/img/team-7.png'),
    		},
    		{
    			name: 'Santi Aguado',
    			position: 'Marketing Director',
    			img: require('@/assets/img/team-4.png'),
    		},
    	]
    };
  },
};
</script>

<style lang="css" scoped>
</style>
