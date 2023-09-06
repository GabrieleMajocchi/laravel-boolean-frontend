<template>
    <div class="container p-3">
        <div class="row d-flex justify-content-end">
            <div class="col-3">
                <select class="form-select" v-model="selectedFilter" aria-label="Default select example"
                    @change="$emit('mySelect', selectedFilter)">
                    <option selected>Select a drink type</option>
                    <option v-for="category in filteredCategories" :value="category">
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
            filteredCategories: [],
            selectedFilter: '',
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

                    this.categories.forEach(category => {
                        if (!this.filteredCategories.includes(category)) {
                            this.filteredCategories.push(category);
                        }
                        else {
                            console.log('categoria  ' + category + ' già in uso');
                        }
                    });
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        },

    },
    created() {
        this.getData();
    },

}
</script>

<style lang="scss" scoped></style>