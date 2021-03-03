<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h1>Track your expense while you spend</h1>
                    <p>Stop spending carelessly! Track your spending wisely. Save, invest, and carefully analyse your finance effectively with no stress!</p>

                    <router-link to="/register" class="btn" id="button">Get Started</router-link>
                </div>
                <div class="col-lg-6">
                    <img src="@/assets/images/finance.svg" alt="Finance SVG" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    h1 {
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        font-weight: 800;
        font-size: 4rem;
    }
    p {
        color: #fff;
        line-height: 2rem;
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        margin: 2rem 0;
    }
    img {
        padding: 0 2rem;
        margin-top: 4rem;
    }
</style>