<template>

    <div id="ticketing">
        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Boutique - Collection Enfant</h3>
            </b-row>
        </b-col>

        <hr>

        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Tous les articles</h3>
            </b-row>

            <b-row>
                <b-col xl="3" lg="3" md="3" sm="12" cols="12" v-for="product in products" :key="product.id">
                    <router-link :to="{ name: 'shop.view', params:{id: product.id}}">
                        <b-card
                            class="mb-3"
                            :img-src="product.img"
                            img-top
                            style="padding-bottom:0rem"
                            >
                            <em slot="footer"><h6 class="text-center footer-card">{{ product.price }} €</h6></em>
                            <b-row>
                                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                                    <h5 class="text-center"><b>{{ product.name }}</b></h5>
                                </b-col>
                            </b-row>
                        </b-card>
                    </router-link>
                </b-col>
            </b-row>
        </b-col>

    </div>


</template>

<script src="../js/kidshop.js"></script>
