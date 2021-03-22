<template>
	<div>
		<div>
			<div class="bar-title left-align paddingtb-35 paddingl-60">
				<h4 class="white-text"><strong>CONTACT</strong></h4>
			</div>
			<div class="paddingt-45 paddingl-50">
				<p class="text-17">
					<strong>Contact us anything related to our company or our services. <br> We'll do our best to get back to you as soon as possible </strong>
				</p>
			</div>
			<div class="row">
				<div class="col m8">
					<div class="padding-35">
						<div class="bg-form b-radius-10 padding-40 paddingtb-50">
							<div class="row">
								<div class="col m6">
									<div>
										<label class="white-text text-16" for="name"><strong>NAME</strong></label>
										<input id="name" type="text">
									</div>
									<div>
										<label class="white-text text-16" for="last_name"><strong>PHONE</strong></label>
										<input id="last_name" type="text">
									</div>									
								</div>
								<div class="col m6">
									<div>
										<label class="white-text text-16" for="Country"><strong>COMPANY</strong></label>
										<input id="Country" type="text">
									</div>
									<div>
										<label class="white-text text-16" for="email"><strong>E-MAIL</strong></label>
										<input id="email" type="text">
									</div>
								</div>
							</div>
							<div>
								<p class="white-text"><strong>MESSAGE</strong></p>
								<textarea placeholder="Write your question here" class="white txt-message b-radius-7-5" name="" id="" cols="30" rows="10"></textarea>
							</div>
							<div class="margint-40">
								<div>
									<div class="center-align">
										<p class="text-17 white-text">Accetp our <strong>Terms and Conditions</strong></p>
										<button class="green-jadebird w-50 btn b-radius-7-5 white-text btn-large text-17"><strong>Send Message</strong></button>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div class="col m4">
					<div class="grey-text text-darken-1 paddingtb-30 text-17">
						<span class="d-block"><strong>Carrer de Tarragona, 157</strong></span>
						<span class="d-block"><strong><i class="material-icons text-15">location_on</i> 08014 - Barcelona</strong></span>
						<span class="d-block"><strong>Spain</strong></span>
						<span class="d-block"><strong><i class="material-icons text-15">phone</i> +34 936 403 414</strong></span>
						<span class="d-block"><strong><i class="material-icons text-15">mail</i> info@jadebird.eu.com</strong></span>
						
						<a target="_blank" href="https://www.google.com/maps/place/Carrer+de+Tarragona,+157,+08014+Barcelona,+Espa%C3%B1a/@41.3783509,2.1431437,17.5z/data=!4m5!3m4!1s0x12a49881d644158b:0x986d617917df60f7!8m2!3d41.3783651!4d2.144801"><span class="d-block grey-text text-darken-1"><strong><i class="material-icons text-15">location_on</i> Google Maps</strong></span></a>
					</div>
				</div>
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
	.bg-form{
		background: rgb(8,116,154);
        background: linear-gradient(165deg, rgba(8,116,154,1) 0%, rgba(10,128,170,1) 32%, rgba(29,186,233,1) 100%);
	}
	.txt-message{
		height: 350px;
		padding: 20px;
	}
	.txt-message::placeholder{
		color: black !important;
	}
</style>

<script>
export default {

  name: 'Contact',

  data() {
    return {

    };
  },
};
</script>
