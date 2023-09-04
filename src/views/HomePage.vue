<template>
    <article>
        <div class="container-fluid wrapper">
            <div class="row">
                <SingleCocktail v-for="cocktail in cocktails" :cocktail="cocktail" />
            </div>
        </div>
    </article>
</template>

<script>
import SingleCocktail from "./components/SingleCocktail.vue"
export default {
    data() {
        return {
            apiUrl: '',
            cocktails: [],
        }
    },
    methods: {
        getData() {
            axios.get(/*inserire url */)
                .then(function (response) {

                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    },
    created() {
        this.getData();
    },
    components: {
        SingleCocktail
    }
}
</script>

<style lang="scss" scoped>
article {
    /* Created with https://www.css-gradient.com */
    background: #161616;
}

.wrapper {
    margin: 10vh
}
</style>