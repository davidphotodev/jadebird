<template>
	<div>
		<div class="center-align margintb-50">
			<h4><strong>NEWS & EVENT</strong></h4>
			<p class="grey-text">ALL OUR NEWS AND EVENTS</p>
		</div>

		<div class="row" v-for="index in 5" :key="index">
			<div class="col s4" v-for="index in 3" :key="index">
				<div class="event padding-10">
					<img src="../assets/img/first-event.png">
					<div class="row v-center">
						<div class="col m7">
							<p class="left-align text-12">
								La multinacional China Jade Bird ha escogido Barcelona para su primera sede
							</p>
						</div>
						<div class="col m5">
							<div class="d-inline-block">
								<button @click="$router.push({name: 'Event'})" class="green-jadebird paddinglr-40 btn">Register</button>
							</div>
						</div>
					</div>
					<div class="event-icons">
						<img src="../assets/img/facebook-icon.png">
						<img src="../assets/img/twitter-icon.png">
						<img src="../assets/img/linkedin-icon.png">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.event > img{
		width: 95%;
		border-radius: 4px;
	}
	.event-icons img{
		margin: 0 5px;
	}
</style>