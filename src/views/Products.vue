<template>
	<div>
		<div>
			<div class="bar-title left-align paddingtb-35 paddingl-60">
				<h4 class="white-text"><strong>PRODUCTS</strong></h4>
			</div>
			<div class="d-flex 1jc-content">
				<div class="w-25 center-align">
					<div class="w-70 d-inline-block left-align margint-30">
						<p class="grey-text"><strong>PRODUCT CATEGORY</strong></p>
						<ul class="collapsible">
							<li>
								<div class="collapsible-header"><i class="material-icons text-16">play_arrow</i><strong>All Products</strong></div>
								<div class="collapsible-body text-14 grey-text text-darken-1">
									<span class="option-menu">
										UL/ULC listed 1
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Cloud Data Center
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Home Fire Alarm
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Intelligent fire alarm system
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
								</div>
							</li>
							<li>
								<div class="collapsible-header"><i class="material-icons text-16">play_arrow</i><strong>Fire Panels</strong></div>
								<div class="collapsible-body text-14 grey-text text-darken-1">
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
								</div>
							</li>
							<li>
								<div class="collapsible-header"><i class="material-icons text-16">play_arrow</i><strong>Manual Call Point</strong></div>
								<div class="collapsible-body text-14 grey-text text-darken-1">
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
								</div>
							</li>
							<li>
								<div class="collapsible-header"><i class="material-icons text-16">play_arrow</i><strong>Modules</strong></div>
								<div class="collapsible-body text-14 grey-text text-darken-1">
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
								</div>
							</li>
							<li>
								<div class="collapsible-header"><i class="material-icons text-16">play_arrow</i><strong>Sirens</strong></div>
								<div class="collapsible-body text-14 grey-text text-darken-1">
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
								</div>
							</li>
							<li>
								<div class="collapsible-header"><i class="material-icons text-16">play_arrow</i><strong>Emergency Lights</strong></div>
								<div class="collapsible-body text-14 grey-text text-darken-1">
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
									<span class="option-menu">
										Option
										<i class="material-icons">keyboard_arrow_right</i>
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="w-75 grey lighten-5 all-center">
					<div class="w-95">
						<div class="controls-products right-align paddingtb-40 paddinglr-15">
							<div class="d-inline-block">
								<div class="blue-text d-flex w-100">
									<span class="v-center paddingr-20">
										<i class="material-icons small">keyboard_arrow_left</i>
										<strong class="l-height-1">Prev <br> Pag</strong>
									</span>
									<span v-for="index in 3" class="paddinglr-15 b-left-blue text-17">
										<strong>{{ index }}</strong>
									</span>
									<span class="v-center paddingl-20 b-left-blue">
										<strong class="l-height-1">Nex <br> Pag</strong>
										<i class="material-icons small">keyboard_arrow_right</i>
									</span>
								</div>
							</div>
						</div>
						<div class="marginb-50">
							<div v-for="index in 20" class="w-33 d-inline-block padding-15">
								<div class="carousel-product white">
									<div class="center-align">
										<img src="../assets/img/product.png">
									</div>
									<div class="row grey lighten-3 paddingtb-10 paddinglr-10 margin-0">
										<div class="col s5 reset">
											<p class="reset text-12"><strong>JBE-2100</strong></p>
											<p class="reset text-12">Pulsador Manual</p>
											<p class="reset text-12">Direccionable</p>
										</div>
										<div class="col s7 reset right-align">
											<div class="d-inline-block">
												<img class="c-pointer d-inline-block w-66 h-100" src="../assets/img/see.png">
												<img class="c-pointer d-inline-block w-34 h-100" src="../assets/img/download.png">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="margintb-60 right-align">
							<div class="d-inline-block">
								<div class="blue-text d-flex w-100">
									<span class="v-center paddingr-20">
										<i class="material-icons small">keyboard_arrow_left</i>
										<strong class="l-height-1">Prev <br> Pag</strong>
									</span>
									<span v-for="index in 3" class="paddinglr-15 b-left-blue text-17">
										<strong>{{ index }}</strong>
									</span>
									<span class="v-center paddingl-20 b-left-blue">
										<strong class="l-height-1">Nex <br> Pag</strong>
										<i class="material-icons small">keyboard_arrow_right</i>
									</span>
								</div>
							</div>
						</div>
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
	.carousel-product{
		color: #5b5b5b;
		
		border: 1px solid #f4f4f4;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}
	.collapsible{
		box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0.12), 0 0px 0px 0 rgba(0, 0, 0, 0.2) !important;
		border-left: 0 !important;
		border-right: 0 !important;
	}
	.collapsible-header{
		padding: 20px 0;
		color: #2196F3 !important;
		display: flex;
		align-items: center !important;
	}
	.collapsible-header i{
		margin-left: -30px !important;
	}
	.collapsible-body{
		padding: 1rem 5px;
	}
	.b-left-blue{
		border-left: 1px solid #2196F3 !important;
	}
	.option-menu{
		display: flex;
		justify-content: space-between;
		padding-top: 5px;
		padding-bottom: 5px;
	}
</style>

<script>
export default {

  name: 'Products',
  mounted(){
  	var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  },
  data() {
    return {

    };
  },
};
</script>

