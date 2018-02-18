<template>

    <div id="profilling">
        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Profilling</h3>
            </b-row>
        </b-col>

        <hr>

        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Etat du profil</h3>
            </b-row>
            <b-row>
                <b-col xl="12" lg="12" md="12" sm="12" cols="12">
                    <b-row><b>ID</b> : {{ this.user.id }}</b-row>
                    <b-row><b>Cookie</b> : {{ this.user.cookie.name }}</b-row><br>
                    <b-row><b>Age  (1 => 0 - 15 / 2 => 15 - 25 / 3 => 25 - 35 / 4 => > 35)</b> : {{ clicks[0].user.axe.age }}</b-row>
                    <b-row><b>CSP</b> : {{ clicks[0].user.axe.csp }}</b-row>
                    <b-row><b>Sport</b> : {{ clicks[0].user.axe.sport }}</b-row>
                    <b-row><b>Ville</b> : {{ clicks[0].user.axe.city }}</b-row>
                    <b-row><b>% Homme</b> : {{ clicks[0].user.axe.male }}</b-row>
                    <b-row><b>% Femme</b> : {{ clicks[0].user.axe.female }}</b-row>
                </b-col>
            </b-row>
        </b-col>

        <b-col xl="12" lg="12" md="12" sm="12" cols="12">
            <b-row class="mt-3 pb-3">
                <h3 class="pull-left">Articles visités (du plus récent au plus vieux)</h3>
            </b-row>

            <b-row>
                <b-col xl="12" lg="12" md="12" sm="12" cols="12" v-for="click in clicks" :key="click.id">
                    <b-row>
                        <p v-if="click.product">- Produit : {{ click.product.name }}</p>
                        <p v-if="click.match">- Match : {{ click.match.home }} / {{ click.match.visitor }}</p>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>

    </div>


</template>

<script src="../js/profilling.js"></script>
