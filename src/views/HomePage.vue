<template>
    <article>
        <Select :cocktails="cocktails" />
        <div class=" container-fluid wrapper">
            <div class="row justify-content-center py-4">
                <SingleCocktail v-for=" cocktail  in  cocktails " :cocktail="cocktail" />
            </div>
        </div>
    </article>
</template>

<script>
import SingleCocktail from "../components/SingleCocktail.vue";
import axios from "axios";
import Select from "../components/Select.vue"
export default {
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/cocktails',
            cocktails: [],
        }
    },
    methods: {
        getData() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.cocktails = response.data.data;
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
        SingleCocktail,
        Select
    }
}
</script>

<style lang="scss" scoped>
article {
    /* Created with https://www.css-gradient.com */
    background: #161616;
}

.wrapper {
    max-width: 1500px;
    margin: 0 auto;
}
</style>