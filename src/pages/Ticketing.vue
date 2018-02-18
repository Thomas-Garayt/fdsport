<template>

    <div id="ticketing">
        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Billeterie</h3>
            </b-row>

            <b-row>
                <b-col xl="3" lg="3" md="3" sm="12" cols="12" v-for="match in matchs" :key="match.id">
                    <router-link :to="{ name: 'ticketing.view', params:{id: match.id}}">
                        <b-card
                            class="mb-3"
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
    </div>


</template>

<script src="../js/ticketing.js"></script>
