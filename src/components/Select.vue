<template>
    <div class="container p-3">
        <div class="row d-flex justify-content-end">
            <div class="col-3">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select a drink type</option>
                    <option v-for="category in categories" value="{{category}}" @click="$emit('mySelect', category)">
                        {{ category }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/categories',
            categories: [],
        }
    },
    props: {
        cocktails: Array,
    },

    methods: {

        getData(apiUrl = this.apiUrl) {
            axios.get(apiUrl)
                .then((response) => {
                    console.log(response)

                    this.categories = response.data;
                    this.categories = removeDuplicates(categories);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        },
    },
    created() {
        this.getData();
    }
}
</script>

<style lang="scss" scoped></style>