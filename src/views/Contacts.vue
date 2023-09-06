<template>
    <div id="my_contacts-page">
        <div class="container">
            <div class="card-bg">
                <div class="card p-5">
                    <h1 class="p-3 text-center mb-5">Contacts</h1>
                    <p>If you want to contact us to make a reservation or for any other reason, you can do it in one of the
                        following ways:</p>
                    <ul>
                        <li>Telephone: <a href="tel:+39 0000000000" class="text-reset text-decoration-none"><strong>+39 000
                                    000 0000</strong></a></li>
                        <li>Email: <a href="mailto:booltails@gmail.com"
                                class="text-reset text-decoration-none"><strong>booltails@gmail.com</strong></a></li>
                        <li>Facebook Page: <a href="#" class="text-reset text-decoration-none"><strong>Booltails Cocktail
                                    Bar</strong></a></li>
                        <li>Instagram Profile: <a href="#"
                                class="text-reset text-decoration-none"><strong>booltails_cocktail_bar</strong></a></li>
                    </ul>
                    <p class="mb-5">We are always happy to receive your feedback, your requests and your reservations. We
                        will reply as soon as possible.</p>
                    <h2>Opening time</h2>
                    <p class="mb-5">Our bar is open <strong>every day from 18:00 to 02:00</strong>. You can come and visit
                        us in <strong>Via Roma, 12 in Milan</strong>. We have a large parking lot and a terrace overlooking
                        the city.</p>
                    <h2>Events</h2>
                    <p>We often organize musical, cultural and entertainment events in our bar. You can stay updated on our
                        initiatives by following us on our social channels or subscribing to our newsletter
                        <a href="#" class="text-reset text-decoration-none"><strong>here</strong></a>. If you
                        want to propose a collaboration or a special evening, do not hesitate
                        to <a href="#" class="text-reset text-decoration-none"><strong>contact us</strong></a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contacts'

}
</script>

<style lang="scss" scoped>
div#my_contacts-page {
    background-color: #161616;
    height: 100vh;
    overflow-y: hidden;

    div.container {
        padding: 3rem;

        div.card-bg {
            background-image: url(https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
            border-radius: 20px;
            background-size: 100%;
            background-position: center;
            transition: all .5s;

            &:hover {
                background-size: 110%;
            }

            div.card {
                background-color: rgba(0, 0, 0, 0.7);
                background-repeat: no-repeat;
                color: white;
                border-radius: 20px;

                h1,
                li strong,
                p a strong {
                    color: rgb(255, 218, 124);
                }
            }
        }
    }
}
</style>