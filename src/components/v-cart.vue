<template>
    <div class="cart">
        <div class="cart-your">
            <div class="cart-header">
                <div class="cart-header__left">
                    <h2 class="cart__title">Ваша корзина</h2>
                    <p class="cart__productCount">
                        {{ $store.getters.countQuantity }} товара
                    </p>
                </div>
                <button
                    class="cart-header__right"
                    @click="$store.commit('emptyTrash')"
                >
                    Очистить корзину
                </button>
            </div>
            <div class="cart__content">
                <div class="cart__items" v-if="$store.state.cart.length !== 0">
                    <v-cart-item
                        v-for="product in $store.state.cart"
                        :key="product.id"
                        :product="product"
                    />
                    <v-cart-install />
                </div>
                <div class="cart__empty" v-else>Нет товаров в корзине</div>
            </div>
        </div>
        <v-cart-total />
    </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import vCartTotal from "./v-cart-total.vue";
import vCartInstall from "@/components/v-cart-install.vue";

export default {
    components: {
        vCartItem,
        vCartTotal,
        vCartInstall,
    },
};
</script>

<style lang="scss">
.cart {
    display: flex;
    justify-content: space-between;
    &__productCount {
        color: var(--main-color2);
    }
    &__empty {
        margin-top: 200px;
        text-align: center;
        font-size: 30px;
    }
    &-your {
        width: 800px;
    }
    &-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 20px;
        margin: 60px 0;
        &__left {
            display: flex;
            gap: 22px;
            align-items: baseline;
        }
        &__right {
            color: var(--main-color2);
            text-align: right;
            font-size: 14px;
            font-weight: 400;
            line-height: 150%;
            text-decoration-line: underline;
            background-color: transparent;
            border: none;
        }
    }
    &__title {
        font-size: 44px;
        font-weight: 700;
        line-height: 120.523%;
    }
    .cart__items {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .content {
        display: flex;
        justify-content: space-between;
    }
}
</style>
