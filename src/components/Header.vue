<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <div class="container-fluid px-0">
            <img src="../images/icon.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top ms-2">
            <router-link class="navbar-brand cs_logo ps-3" :to="{ name: links[0].name }">Booltails</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mb-lg-0 list d-flex justify-content-end">
                    <li class="nav-item" v-for="link in links">
                        <router-link class="nav-link text-decoration-none fw-semibold" :to="{ name: link.name }">{{
                            link.link
                        }}</router-link>
                    </li>
                </ul>
            </div>
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
.list {
    width: 100%;

    .nav-item {
        padding-left: 1rem;
        padding-right: 1rem;
        position: relative;


        &:after {
            content: '';
            position: absolute;
            background-color: white;
            bottom: 0;
            top: 98%;
            left: 0;
            right: 100%;
            transition: right 1s;
        }

        &:hover {
            transition: right;

            &:after {
                right: 0;
            }
        }
    }


}

.cs_logo {
    color: rgb(255, 218, 124);
    transition: all .5s;

    &:hover {
        color: #cdd1d4;
    }
}
</style>