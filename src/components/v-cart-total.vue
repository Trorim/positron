<template>
    <div class="total">
        <div>
            <p class="total__title">Итого</p>
            <div class="total__descr">
                <div class="total__text">
                    <p>Сумма заказа</p>
                    <p>
                        {{
                            $store.state.cart.reduce(
                                (acc, cur) =>
                                    (acc += cur.priceRub * cur.quantity),
                                0
                            )
                        }}
                        ₽
                    </p>
                </div>
                <div class="total__text">
                    <p>Количество</p>
                    <p>{{ $store.getters.countQuantity }} шт</p>
                </div>
                <div class="total__text">
                    <p>Установка</p>
                    <p>
                        {{ $store.state.equipmentInstallation ? "Да" : "Нет" }}
                    </p>
                </div>
                <div class="devider"></div>
                <div class="total__text">
                    <p>Стоимость товаров</p>
                    <b>
                        {{
                            $store.state.cart.reduce(
                                (acc, cur) =>
                                    (acc += cur.priceRub * cur.quantity),
                                0
                            )
                        }}
                        ₽
                    </b>
                </div>
            </div>
            <div class="btns">
                <v-btn @click="$store.dispatch('postData')"
                    >Оформить заказ</v-btn
                >
                <v-btn class="btn_white">Купить в один клик</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.total {
    margin-top: 150px;
    padding: 30px;
    width: 425px;
    height: 458px;
    border-radius: 5px;
    background-color: #f6f8fa;
    font-size: 24px;
    font-weight: 600;
    line-height: 120.523%;
    &__title {
        color: var(--main-color1);
        font-size: 24px;
        font-weight: 600;
        line-height: 120.523%;
    }
    &__descr {
        margin-top: 31px;
    }
    &__text {
        margin-top: 18px;
        display: flex;
        justify-content: space-between;
        align-items: last baseline;
        font-size: 16px;
        font-weight: 500;
    }
}
.devider {
    margin-top: 29px;
    width: 365px;
    height: 1px;
    background-color: var(--main-color2);
}
.btns {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
