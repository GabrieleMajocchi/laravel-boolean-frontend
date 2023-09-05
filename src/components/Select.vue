<template>
    <div class="container p-3">
        <div class="row d-flex justify-content-end">
            <div class="col-3">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select a drink type</option>
                    <option v-for="cocktail in cocktails" value="{{cocktail.category}}">{{
                        cocktail.category }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        cocktails: Array,
    },
    methods: {
        test() {
            console.log(this.cocktails);
        }
    },
    created() {
        this.test();
    }
}
</script>

<style lang="scss" scoped></style>