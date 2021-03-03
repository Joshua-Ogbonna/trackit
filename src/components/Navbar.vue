<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#"><i class="fas fa-chart-line"></i> track_it</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" id="links" to="/">Home <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" id="links" to="/#trackit">Why Track_It</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" id="links" to="/">How it Works</router-link>
                    </li>
                    
                    <li class="nav-item">
                        <router-link class="nav-link btn" id="button" to="/register">Get Started</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .navbar-brand {
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        font-weight: 800;
        font-size: 1.4rem;
    }
    .navbar-brand i {
        color: #f0a500;
    }
    .navbar-brand:hover {
        color: #fff;
    }
    
    #links {
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        font-size: .9rem;
    }
    @media only screen and (min-width: 1336px) {
        ul li a {
            margin-right: 3rem;
        }
    }
</style>