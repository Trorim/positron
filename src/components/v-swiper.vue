<template>
    <div class="my-swiper">
        <h3 class="section-title">Просмотренные товары</h3>

        <swiper
            :slides-per-view="4"
            :space-between="50"
            :pagination="{
                type: 'fraction',
            }"
            :navigation="true"
            :modules="modules"
        >
            <swiper-slide
                v-for="product in $store.state.products"
                :product="product"
                :key="product.id"
            >
                <div class="card-item">
                    <div>
                        <img
                            class="card-item__img"
                            :src="require('../assets/image/' + product.img)"
                            alt="Card item image"
                        />
                        <h4 class="card-item__title">{{ product.title }}</h4>
                        <p class="card-item__descr">
                            {{
                                product.descr.length > 100
                                    ? product.descr.slice(0, 98) + "..."
                                    : product.descr
                            }}
                        </p>
                    </div>
                    <div class="card-item__prices">
                        <b class="card-item__priceRub">
                            {{ product.priceRubMin }} ₽ -
                            {{ product.priceRubMax }} ₽
                        </b>
                        <p class="card-item__priceEur">
                            {{ product.priceEurMin }} € -
                            {{ product.priceEurMax }} €
                        </p>
                        <v-btn
                            @click.prevent="
                                $store.commit('addProductToCart', product)
                            "
                        >
                            Подробнее
                        </v-btn>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>

<style lang="scss">
.my-swiper {
    position: relative;
    margin-top: 96px;
}
.swiper {
    position: static;
}
.card-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 303px;
    height: 563px;
    background-color: #f6f8fa;
    border-radius: 5px;
    padding: 25px;
    &__img {
        width: 245px;
        height: 245px;
        margin: 0 auto;
    }
    &__title {
        margin-top: 5px;
        font-size: 22px;
        font-weight: 700;
        text-align-last: left;
        line-height: 120.523%;
    }
    &__descr {
        margin-top: 5px;
        font-size: 14px;
        font-weight: 400;
        line-height: 145%;
    }
    &__priceRub {
        font-family: Roboto, sans-serif;
        font-size: 22px;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: 0.11px;
    }
    &__priceEur {
        margin: 5px 0 20px;
        color: var(--main-color2);
        font-size: 16px;
        font-weight: 400;
        line-height: 145%;
    }
}
.section-title {
    margin-bottom: 60px;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 120.523%;
}

.swiper-button-next,
.swiper-button-prev {
    position: absolute;
    z-index: 20;
    top: 20px;
    right: 0px;
    background-color: #90a2b5;
    color: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    &:after {
        font-size: 20px;
        font-weight: 600;
    }
}

.swiper-button-prev {
    left: 1100px;
}

.swiper-pagination-horizontal {
    position: absolute;
    top: 12px;
    left: 1166px;
    width: 50px;
    color: var(--main-color2);
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
}

.swiper-pagination-current {
    color: var(--main-color1);
    font-size: 24px;
    font-weight: 500;
}
</style>
