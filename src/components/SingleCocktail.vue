<template>
    <div class="col-4 mb-4">
        <div class="card text-dark card-has-bg click-col" :style="{ 'background-image': 'url(' + cocktail.image + ')' }">

            <div class="card-img-overlay d-flex flex-column">
                <div class="card-body">
                    <small class="card-meta mb-2">{{ cocktail.category }}</small>
                    <h4 class="card-title mt-0 text-dark">{{ cocktail.name }}</h4>
                    <small> {{ cocktail.instructions }}</small>
                </div>
                <div class="card-footer">
                    <div class="media">
                        <div class="media-body">
                            <h6 class="my-0 text-dark d-block">{{ cocktail.alcoholic }}</h6>
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
//post card styles

.card {
    border: none;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    overflow: hidden;
    border-radius: 20px;
    min-height: 450px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);

    &.card-has-bg {
        transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
        background-size: 100%;
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
            background-size: 130%;
            transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

            .card-img-overlay {
                transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
                background: rgba(240, 233, 218, .6);

            }
        }
    }

    .card-footer {
        background: none;
        border-top: none;

        .media {
            img {
                border: solid 3px rgba(255, 255, 255, 0.3);
            }
        }
    }

    .card-title {
        font-weight: 800
    }

    .card-meta {
        color: rgba(0, 0, 0, 0.3);
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 2px;
    }

    .card-body {
        transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);


    }

    &:hover {
        .card-body {
            margin-top: 30px;
            transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        }

        cursor: pointer;
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    .card-img-overlay {
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);

    }
}
</style>