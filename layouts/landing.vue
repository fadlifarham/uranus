<template>
    <div>
        <div class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <span class="logo-text has-text-primary is-bold">Uranus</span>
                    </a>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item" href="/produk">
                            Produk
                        </a>
                        <a class="navbar-item" href="/">
                            Cara Investasi
                        </a>
                        <a class="navbar-item" href="/">
                            Tim Kami
                        </a>
                        <a class="navbar-item" href="/">
                            Tentang Kami
                        </a>
                        <div v-if="!this.$auth.loggedIn" class="navbar-item">
                            <a href="/login" class="button is-primary is-inverted is-rounded">
                                Masuk
                            </a>
                        </div>
                        <div v-if="!this.$auth.loggedIn" class="navbar-item">
                            <a href="/register" class="button is-primary is-outlined is-rounded">
                                Daftar
                            </a>
                        </div>
                        <div v-if="this.$auth.loggedIn" class="navbar-item">
                            <a href="/dashboard" class="button is-primary is-rounded">
                                Dashboard
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="this.$route.path != '/'" style="padding-top: 110px"></div>

        <nuxt/>

        <footer class="footer has-background-grey-dark">
            <div class="container">
                <div class="columns">
                    <div class="column is-3">
                        <h4 class="title is-3 is-bold has-text-primary">Uranus</h4>
                        <p class="footer-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices in risus sed fermentum.
                        </p>
                        <div class="socials">
                            <a><i class="fab fa-instagram"></i></a>
                            <a><i class="fab fa-facebook"></i></a>
                            <a><i class="fab fa-pinterest"></i></a>
                            <a><i class="fab fa-medium"></i></a>
                        </div>
                    </div>
                    <div class="column is-2 is-offset-1">
                        <ul class="footer-menu">
                            <li><a href="">Tentang Kami</a></li>
                            <li><a href="">Produk</a></li>
                            <li><a href="">Tim Kami</a></li>
                            <li><a href="">Hubungi Kami</a></li>
                        </ul>
                    </div>
                    <div class="column is-2">
                        <ul class="footer-menu">
                            <li><a href="">Syarat dan Ketentuan</a></li>
                            <li><a href="">Kebijakan Privasi</a></li>
                        </ul>
                    </div>
                    <div class="column is-5">
                        <h4 class="title is-5 has-text-weight-bold has-text-white">Unduh</h4>
                        <div class="columns">
                            <div class="column is-6"><i class="fab fa-google-play"></i></div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="has-text-centered has-text-white">
                    <p>
                        &copy; 2020 Uranus
                    </p>
                    <p>HAK CIPTA DI LINDUNGI TUHAN YANG MAHA ESA</p>
                </div>
            </div>
        </footer>
        
        <div id="backtotop"><a><i class="fas fa-angle-up"></i></a></div>
    </div>
</template>

<script>
export default {

}
</script>