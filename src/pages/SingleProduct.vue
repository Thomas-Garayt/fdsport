<template>

    <div id="singleticketing">
        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Détails {{ product.name }}</h3>
            </b-row>

            <b-row>
                <b-col xl="4" lg="4" md="4" sm="12" cols="12" class="text-center">
                    <img class="img-fluid" :src="product.img">
                </b-col>
            </b-row>
        </b-col>

        <hr>

        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Description</h3>
            </b-row>

            <b-row>
                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                    {{ product.description }}
                </b-col>
            </b-row>

            <hr>

            <b-row>
                <b-col xl="6" lg="6" md="6" sm="12" cols="12">
                    Couleur
                </b-col>
                <b-col xl="4" lg="4" md="4" sm="12" cols="12">
                    <b-form-select v-model="selected" :options="couleurs"/>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col xl="6" lg="6" md="6" sm="12" cols="12">
                    Taille
                </b-col>
                <b-col xl="4" lg="4" md="4" sm="12" cols="12">
                    <b-form-select v-model="selected" :options="tailles"/>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col xl="6" lg="6" md="6" sm="12" cols="12">
                    Quantité
                </b-col>
                <b-col xl="4" lg="4" md="4" sm="12" cols="12">
                    <b-form-input type="number"></b-form-input>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col xl="6" lg="6" md="6" sm="12" cols="12">
                    Prix
                </b-col>
                <b-col xl="4" lg="4" md="4" sm="12" cols="12">
                    <b>{{ product.price }} €</b>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col xl="6" lg="6" md="6" sm="12" cols="12">
                    <b>Total</b>
                </b-col>
                <b-col xl="4" lg="4" md="4" sm="12" cols="12">
                    <b>{{ product.price }} €</b>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col xl="12" lg="12" md="12" sm="12" cols="12" class="pull-right">
                    <b-button variant="outline-primary">Ajouter au panier</b-button>
                </b-col>
            </b-row>

        </b-col>

        <hr>

        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Avis</h3>
            </b-row>

            <b-row>
                <b-col xl="4" lg="4" md="4" sm="12" cols="12" class="pull-left mb-3">
                    <b-card class="card-avis">
                        <b>C. Kent</b> - Note : 4/5<br>
                        "Excellent produit"
                    </b-card>
                </b-col>
                <b-col xl="4" lg="4" md="4" sm="12" cols="12" class="pull-left mb-3">
                    <b-card class="card-avis">
                        <b>C. Kent</b> - Note : 4/5<br>
                        "Excellent produit"
                    </b-card>
                </b-col>
                <b-col xl="4" lg="4" md="4" sm="12" cols="12" class="pull-left mb-3">
                    <b-card class="card-avis">
                        <b>C. Kent</b> - Note : 4/5<br>
                        "Excellent produit"
                    </b-card>
                </b-col>
                <b-col xl="4" lg="4" md="4" sm="12" cols="12" class="pull-left mb-3">
                    <b-card class="card-avis">
                        <b>C. Kent</b> - Note : 4/5<br>
                        "Excellent produit"
                    </b-card>
                </b-col>
            </b-row>
        </b-col>

    </div>


</template>

<script src="../js/singleproduct.js"></script>
