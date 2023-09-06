<template>
    <article>
        <Select :cocktails="cocktails" @mySelect="getCocktailsFromSelect" />
        <div class="container-fluid wrapper">
            <div class="row justify-content-center py-4">
                <SingleCocktail v-for="cocktail in cocktails" :cocktail="cocktail"
                    @click="$router.push({ name: 'CocktailShow', params: { id: cocktail.id } })" />
            </div>
        </div>
        <nav aria-label="Page navigation example" v-if="activeCategory == ''">
            <ul class="pagination m-0 justify-content-center ">
                <li class="page-item bg-black"><button @click="prevPage"
                        class="page-link bg-black text-white">Previous</button></li>
                <li class="page-item bg-black text-white" v-for="page, index in numberofPage">
                    <button @click="singlePage(index + 1)" class="page-link bg-black text-white"
                        :class="activeIndex === index + 1 ? 'active' : ''">{{ index + 1 }}</button>
                </li>
                <li class="page-item"><button @click="nextPage" class="page-link bg-black text-white">Next</button></li>
            </ul>
        </nav>
    </article>
</template>

<script>
import SingleCocktail from "../components/SingleCocktail.vue";
import Select from "../components/Select.vue";
import axios from "axios";
export default {
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/cocktails',
            apiSelectCategoryUrl: 'http://127.0.0.1:8000/api/cocktails/filter/',
            cocktails: [],
            nextUrlPage: '',
            prevUrlPage: '',
            numberofPage: '',
            activeIndex: 1,
            activeCategory: "",
        }
    },
    methods: {
        getCocktailsFromSelect(cocktailType) {
            this.activeCategory = cocktailType;
            console.log(this.activeCategory);
            if (cocktailType != '') {
                const selectCategoryUrl = this.apiSelectCategoryUrl + this.activeCategory;
                axios.get(selectCategoryUrl, {
                    params: {
                        category: this.activeCategory,
                    }
                })
                    .then((response) => {
                        // handle success
                        this.cocktails = response.data;
                        console.log(response)
                        console.log(selectCategoryUrl)
                    })
                    .catch(function (error) {
                        // handle error 
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            } else {
                axios.get(this.apiUrl)
                    .then((response) => {
                        // handle success
                        this.nextUrlPage = response.data.next_page_url;
                        this.cocktails = response.data.data;
                        this.prevUrlPage = response.data.prev_page_url;
                        this.lastUrlPage = response.data.last_page_url;
                        this.firstUrlPage = response.data.first_page_url;
                        this.numberofPage = response.data.last_page;
                    })
                    .catch(function (error) {
                        // handle error 
                        console.log(error);
                    });
            }

        },

        getData(apiUrl = this.apiUrl) {
            axios.get(apiUrl)
                .then((response) => {
                    console.log(response)
                    this.nextUrlPage = response.data.next_page_url;
                    this.cocktails = response.data.data;
                    this.prevUrlPage = response.data.prev_page_url;
                    this.lastUrlPage = response.data.last_page_url;
                    this.firstUrlPage = response.data.first_page_url;
                    this.numberofPage = response.data.last_page;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
            console.log(this.activeIndex)
        },

        singlePage(index) {
            this.getData(`${this.apiUrl}?page=${index}`);
            this.activeIndex = index;
        },
        nextPage() {
            if (!this.nextUrlPage == '') {
                this.getData(this.nextUrlPage);
                this.activeIndex++;
            }

        },
        prevPage() {
            if (!this.prevUrlPage == '') {
                this.getData(this.prevUrlPage);
                this.activeIndex--;
            }
        },
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
    background: #161616;
}

.wrapper {
    max-width: 1500px;
    margin: 0 auto;
}
</style>