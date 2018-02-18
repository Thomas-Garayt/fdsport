<template>

    <div id="singleticketing">
        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Détails Billet - {{ match.home }} / {{ match.visitor }}</h3>
            </b-row>

            <b-row>
                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                    <img class="img-fluid" :src="match.img">
                </b-col>
            </b-row>
        </b-col>

        <hr>

        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Description</h3>
            </b-row>

            <b-row>
                <b-col xl="6" lg="6" md="6" sm="12" cols="12">
                    Date : {{ match.date | frontEndDateFormat }} à {{ match.hour }}
                </b-col>

                <b-col xl="6" lg="6" md="6" sm="12" cols="12">
                    Equipe Maison : {{ match.home }}
                </b-col>

                <b-col xl="6" lg="6" md="6" sm="12" cols="12">
                    Lieu : {{ match.address }}
                </b-col>

                <b-col xl="6" lg="6" md="6" sm="12" cols="12">
                    Equipe Visiteur : {{ match.visitor }}
                </b-col>

            </b-row>
        </b-col>

        <hr>

        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Les tarifs</h3>
            </b-row>

            <b-row>
                <b-col xl="12" lg="12" md="12" sm="12" cols="12" v-for="ticket in match.tickets" :key="ticket.id">
                    Catégorie {{ ticket.category }}
                    <hr>
                    <b-row>
                        <b-col xl="2" lg="2" md="2" sm="0" cols="0"></b-col>
                        <b-col xl="6" lg="6" md="6" sm="6" cols="6">
                            Tribune A - {{ ticket.price }}
                        </b-col>
                        <b-col xl="2" lg="2" md="2" sm="6" cols="6">
                            <b-form-input type="number"></b-form-input>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <hr>

            <b-row>
                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                    <b-row>
                        <b-col xl="2" lg="2" md="2" sm="2" cols="2">TOTAL</b-col>
                        <b-col xl="6" lg="6" md="6" sm="0" cols="0"></b-col>
                        <b-col xl="4" lg="4" md="4" sm="4" cols="4">0 €</b-col>
                    </b-row>
                </b-col>
            </b-row>

            <br>

            <b-row>
                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                    <b-row>
                        <b-col xl="2" lg="2" md="2" sm="0" cols="0"></b-col>
                        <b-col xl="6" lg="6" md="6" sm="0" cols="0"></b-col>
                        <b-col xl="4" lg="4" md="4" sm="12" cols="12" class="pull-left">
                            <b-button variant="outline-primary">Ajouter au panier</b-button>
                        </b-col>
                    </b-row>

                </b-col>
            </b-row>

        </b-col>

        <hr>

        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Plan d'accès</h3>
            </b-row>

            <b-row>
                <b-col xl="12" lg="12" md="12" sm="12" cols="12" class="text-center">
                    <img class="img-fluid" src="https://en-marche.fr/maps/50.686142,3.158114">
                </b-col>
            </b-row>
        </b-col>

        <br>

    </div>


</template>

<script src="../js/singleticketing.js"></script>
