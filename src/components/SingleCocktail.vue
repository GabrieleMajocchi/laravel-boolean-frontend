<template>
    <div class="col-lg-4 mb-4 col-md-6 col-sm-12">
        <div class="card card-has-bg" :style="{ 'background-image': 'url(' + cocktail.image + ')' }">

            <div class="card-img-overlay d-flex flex-column">
                <div class="card-body">
                    <small class="card-meta mb-2">{{ cocktail.category }}</small>
                    <h4 class="card-title mt-0">{{ cocktail.name }}</h4>
                    <small> {{ cocktail.instructions }}</small>
                </div>
                <div class="card-footer">
                    <div class="media">
                        <div class="media-body">
                            <h6 class="my-0 d-block">{{ cocktail.alcoholic }}</h6>
                            <small>{{ cocktail.glass }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cocktail: Object
    }
}
</script>

<style lang="scss" scoped>
.card {
    border: none;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    overflow: hidden;
    border-radius: 20px;
    height: 450px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);



    &.card-has-bg {
        transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
        background-size: 130%;
        background-repeat: no-repeat;
        background-position: center center;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: inherit;

            filter: grayscale(30%);
        }

        &:hover {
            transform: scale(0.98);
            box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
            background-size: 140%;
            transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

            small,
            h4,
            h6 {
                color: rgba(0, 0, 0, .8);
            }



            .card-img-overlay {
                transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
                background: rgba(240, 233, 218, .4);

            }
        }
    }

    .card-footer {
        background: transparent;
        border-top: none;
        height: 10%;
        padding: 0 1rem;

        .media {
            img {
                border: solid 3px rgba(255, 255, 255, 0.3);
            }
        }
    }

    .card-title {
        font-weight: 800;
        color: white;
    }

    .card-meta {

        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 2px;
    }

    .card-body {
        transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
        height: 400px;
        padding: .5rem;
    }

    &:hover {
        .card-body {
            margin-top: 10px;
            transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        }

        .card-footer {
            margin-bottom: 10px;
            transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        }

        cursor: pointer;
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    .card-img-overlay {
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        height: 100%;
        padding: .3rem .5rem;
        background: rgba(71, 71, 71, 0.4);

    }

    small,
    h4,
    h6 {
        color: white;
    }
}
</style>