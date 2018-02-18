<template>

    <div id="ticketing">
        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Boutique - Les collections</h3>
            </b-row>

            <b-row>
                <b-col xl="3" lg="3" md="3" sm="12" cols="12">
                    <router-link :to="{ name: 'manshop' }">
                        <b-card
                            class="mb-3 card-shop"
                            img-src="https://www.go-sport.com/media/resized/1300x/catalog/product/01/39/58/28/ffr-maillot-home-18_1_v1.jpg"
                            img-alt="Collection Homme"
                            img-top
                            style="padding-bottom:0rem"
                            >
                            <em slot="footer"><h6 class="text-center footer-card">Collection Homme</h6></em>
                        </b-card>
                    </router-link>
                </b-col>

                <b-col xl="3" lg="3" md="3" sm="12" cols="12">
                    <router-link :to="{ name: 'womanshop' }">
                        <b-card
                            class="mb-3 card-shop"
                            img-src="https://www.go-sport.com/media/resized/1300x/catalog/product/01/35/26/09/innovate-7-w_1_v1.jpg"
                            img-alt="Collection Femme"
                            img-top
                            style="padding-bottom:0rem"
                            >
                            <em slot="footer"><h6 class="text-center footer-card">Collection Femme</h6></em>
                        </b-card>
                    </router-link>
                </b-col>

                <b-col xl="3" lg="3" md="3" sm="12" cols="12">
                    <router-link :to="{ name: 'kidshop' }">
                        <b-card
                            class="mb-3 card-shop"
                            img-src="https://www.go-sport.com/media/resized/1300x/catalog/product/66/24/14/52/maillot-entrainement-ffr-xv-rouge-enfant-adidas---taille--10-11-ans_1_v2.jpeg"
                            img-alt="Collection Enfant"
                            img-top
                            style="padding-bottom:0rem"
                            >
                            <em slot="footer"><h6 class="text-center footer-card">Collection Enfant</h6></em>
                        </b-card>
                    </router-link>
                </b-col>

                <b-col xl="3" lg="3" md="3" sm="12" cols="12">
                    <router-link :to="{ name: 'accessoriesshop' }">
                        <b-card
                            class="mb-3 card-shop"
                            img-src="https://www.go-sport.com/media/resized/1300x/catalog/product/01/37/85/11/pantoufle-psg-17_1_v1.jpg"
                            img-alt="Accessoires"
                            img-top
                            style="padding-bottom:0rem"
                            >
                            <em slot="footer"><h6 class="text-center footer-card">Accessoires</h6></em>
                        </b-card>
                    </router-link>
                </b-col>


            </b-row>
        </b-col>

        <hr>

        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Articles suggérés</h3>
            </b-row>

            <b-row>
                <b-col xl="3" lg="3" md="3" sm="12" cols="12">
                    <router-link :to="{ name: 'shop.view', params:{id:1}}">
                        <b-card
                            class="mb-3"
                            img-src="http://static1.kbobject.com/stores/om/artwork/english/banners/1_191488.jpg"
                            img-alt="Match Bordeaux"
                            img-top
                            style="padding-bottom:0rem"
                            >
                            <em slot="footer"><h6 class="text-center footer-card">34 €</h6></em>
                            <b-row>
                                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                                    <h5 class="text-center"><b>Survetement Homme OM</b></h5>
                                </b-col>
                            </b-row>
                        </b-card>
                    </router-link>
                </b-col>
                <b-col xl="3" lg="3" md="3" sm="12" cols="12">
                    <router-link :to="{ name: 'shop.view', params:{id:1}}">
                        <b-card
                            class="mb-3"
                            img-src="http://static1.kbobject.com/stores/om/artwork/english/banners/1_191488.jpg"
                            img-alt="Image Article"
                            img-top
                            style="padding-bottom:0rem"
                            >
                            <em slot="footer"><h6 class="text-center footer-card">34 €</h6></em>
                            <b-row>
                                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                                    <h5 class="text-center"><b>Survetement Homme OM</b></h5>
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

<script src="../js/shop.js"></script>
