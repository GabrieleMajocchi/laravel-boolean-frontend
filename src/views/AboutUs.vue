
<template>
    <!-- JUMBO  -->
    <div class="container-fluid mb-5">
        <div class="row">
            <div class="col-12 jumbo">
                <div class="jumbo-txt-box d-flex flex-column align-items-center justify-content-center">
                    <h5>
                        About Us
                    </h5>
                    <h1 class="jumbo-title">
                        Cocktails for the Ready
                    </h1>
                </div>
            </div>
        </div>
    </div>

    <!-- Inspiration  -->
    <div class="container my-info-container mb-5">
        <div class="row d-flex align-items-center">
            <div class="col-6 my-info-txt p-5">
                <h5 class="mb-3">Change Forth</h5>
                <h1 class="mb-5 info-title">
                    Drink In Moments that Inspire
                </h1>
                <p>
                    Born of a landscape steeped in adventure, Forth was conceived in the mountains, lakes, rivers and
                    valleys that surround our home. In life, as in the wild, pioneering new paths is what compels us to
                    create quality spirit-based beverages that taste great and stay true in the moments that inspire us
                    to
                    charge forth.
                </p>
            </div>

            <div class="col-6">
                <img class="info-img"
                    src="https://drinkforth.com/wp-content/uploads/2022/10/who-we-are-body-photo-1-drink-forth-bend-oregon-768x1024.jpg"
                    alt="two girls having a drink while skiing">
            </div>
        </div>
    </div>

    <!-- CTA  -->

    <div class="container mb-5">
        <div class="row">
            <div class="col-12 cta-jumbo d-flex justify-content-center align-items-center">
                <div class="cta-card d-flex text-center justify-content-center align-items-center flex-column p-5">
                    <h5>
                        Elevate Your Experience
                    </h5>
                    <h1 class="mb-4">
                        Cocktails Transformed
                    </h1>
                    <p>
                        Our mission is to illuminate and transform how we think about cocktails by providing an array of
                        options ranging from full proof custom bar quality drinks for your next intimate gathering, to
                        refreshing, low ABV canned classics <a href="#">
                            ready for your next outing
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Where to find us  -->
    <div class="container my-info-container mb-5">
        <div class="row d-flex align-items-center">


            <div class="col-6">
                <img class="info-img" src="https://drinkforth.com/wp-content/uploads/2021/06/DSC01865-2.jpg"
                    alt="group of friends having a drink together">
            </div>
            <div class="col-6 my-info-txt p-5">
                <!-- <h5 class="mb-3">Change Forth</h5> -->
                <h1 class="mb-5 info-title">
                    where to find us
                </h1>
                <p>
                    Our products will be available for purchase from your local Oregon liquor store or <a href="#">
                        stop by your local
                        haunt for a visit
                    </a>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUs',
    components: {
    },
    data() {
        return {

            // links: [
            //	'gino',
            //	'ciao',
            //	]

        }
    },
    methods() {
    },
}		
</script>
<style scoped lang="scss">
// @use '../styles/partials/_variables.scss';
// @use '../styles/partials/_mixins.scss';
.jumbo {
    background-image: url(https://drinkforth.com/wp-content/uploads/2021/06/DSC03200-2.jpg);
    // background-color: aqua;
    background-position: center center;
    background-size: cover;
    height: 350px;

    .jumbo-txt-box {
        width: 100%;
        height: 100%;
        color: white;

        .jumbo-title {
            font-size: 4.5rem;
            font-weight: 700;
        }
    }

}

.my-info-container {
    max-width: 70%;

    .my-info-txt {
        text-align: center;

        h1 {
            font-size: 4rem;
            line-height: 4rem;
        }

        p {
            font-weight: 100;

        }
    }

    .info-img {
        // height: 500px;
        width: 100%;
    }
}

.cta-jumbo {
    height: 700px;
    background-image: url(https://drinkforth.com/wp-content/uploads/2021/06/DSC03219-2.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    .cta-card {
        background-color: aquamarine;
        width: 70%;
        // height: 60%;
        background-color: #eee7de;

        h1 {
            font-size: 4rem;
        }

        p {
            font-weight: 100;
        }
    }
}
</style> 

