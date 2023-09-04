<template>
    <nav>
        <div class="container">
            <ul class="d-flex align-items-center list-unstyled gap-5 justify-content-end m-0">
                <li v-for="link in links">
                    <router-link class="text-decoration-none text-uppercase fw-semibold" :to="{ name: link.name }">{{
                        link.link
                    }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    'name': 'Homepage',
                    'link': 'Home'
                },
                {
                    'name': 'AboutUs',
                    'link': 'About'
                },
                {
                    'name': 'Contact',
                    'link': 'Contacts'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
    padding: 1rem 0;
    background-color: gray;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

    a {
        transition: all .3s ease;
        color: black;
        padding: 1rem;

        &:hover {
            color: darkgray;
            background-color: rgba($color: #000000, $alpha: 0.3);
        }
    }


}
</style>