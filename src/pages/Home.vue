<template>

    <div id="home">

        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Actualités et Nouveautés</h3>
            </b-row>
            <b-row>
                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                    <b-carousel id="carousel1"
                        style="text-shadow: 1px 1px 2px #333;"
                        controls
                        indicators
                        background="#ababab"
                        :interval="4000"
                        v-model="slide"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
                    >
                        <router-link v-for="match in matchs" :key="match.id" :to="{ name: 'ticketing.view', params:{id: match.id}}">
                            <b-carousel-slide  :img-src="match.img"></b-carousel-slide>
                        </router-link>
                    </b-carousel>
                </b-col>
            </b-row>
        </b-col>

        <hr>

        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Mes Clubs</h3>
            </b-row>
            <b-row>
                <b-col xl="6" lg="6" md="6" sm="12" cols="12" v-for="match in nearMe" :key="match.id">
                    <router-link :to="{ name: 'ticketing.view', params:{id: match.id}}">
                        <b-card
                            class="mb-3 card-home"
                            :img-src="match.img"
                            img-top
                            style="padding-bottom:0rem"
                            >
                            <em slot="header"><h6 class="text-center footer-card">{{ match.sport }}</h6></em>
                            <em slot="footer"><h6 class="text-center footer-card">A partir de {{ match.price }} €</h6></em>
                            <b-row>
                                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                                    <h5 class="text-center"><b>{{ match.home }} - {{ match.visitor }}</b></h5>
                                </b-col>
                                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                                    <h6 class="text-center">{{ match.date | frontEndDateFormat }} à {{ match.hour }}</h6>
                                </b-col>
                                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                                    <h6 class="text-center">{{ match.address }}</h6>
                                </b-col>
                            </b-row>
                        </b-card>
                    </router-link>
                </b-col>
            </b-row>
        </b-col>

        <hr>

        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Autour de moi</h3>
            </b-row>
            <b-row>
                <b-col xl="12" lg="12" md="12" sm="12" cols="12" v-for="match in nearMe" :key="match.id">
                    <router-link :to="{ name: 'ticketing.view', params:{id: match.id}}">
                        <b-card
                            class="mb-3 card-home"
                            :img-src="match.img"
                            img-top
                            style="padding-bottom:0rem"
                            >
                            <em slot="header"><h6 class="text-center footer-card">{{ match.sport }}</h6></em>
                            <em slot="footer"><h6 class="text-center footer-card">A partir de {{ match.price }} €</h6></em>
                            <b-row>
                                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                                    <h5 class="text-center"><b>{{ match.home }} - {{ match.visitor }}</b></h5>
                                </b-col>
                                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                                    <h6 class="text-center">{{ match.date | frontEndDateFormat }} à {{ match.hour }}</h6>
                                </b-col>
                                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                                    <h6 class="text-center">{{ match.address }}</h6>
                                </b-col>
                            </b-row>
                        </b-card>
                    </router-link>
                </b-col>
            </b-row>
        </b-col>

        <hr>

        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Articles récents</h3>
            </b-row>
            <b-row>
                <b-col xl="4" lg="4" md="4" sm="12" cols="12" v-for="product in products" :key="product.id">
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

<script src="../js/home.js"></script>
