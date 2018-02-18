<template>

    <b-navbar toggleable="sm" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand>
            <router-link :to="{ name: 'home'}" class="nav-link">
                FDSport
            </router-link>
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item>
                    <router-link :to="{ name: 'ticketing'}" class="nav-link">
                        Billeterie
                    </router-link>
                </b-nav-item>

                <b-nav-item>
                    <router-link :to="{ name: 'shop'}" class="nav-link">
                        Boutique
                    </router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link :to="{ name: 'profilling'}" class="nav-link">
                        Profilling
                    </router-link>
                </b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">

                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Recherche"/>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Rechercher</b-button>
                </b-nav-form>

                <b-nav-item-dropdown right>
                    <template slot="button-content">
                        <em>Mon compte</em>
                    </template>
                    <b-dropdown-item href="#">Mes paramètres</b-dropdown-item>
                    <b-dropdown-item href="#">Deconnexion</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>

</template>
