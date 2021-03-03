<template>
    <div class="form">
        <div class="login">
            <h2>Welcome back</h2>
            <p>Login to your account</p>
        </div>

        <form>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" class="form-control" placeholder="hi@gmail.com">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="**********">
            </div>
            <button class="btn" id="button">Submit</button>
            <p id="para">Don't have an account? <router-link id="link" to="/register">Register</router-link></p>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    input {
        padding-top: 25px;
        padding-bottom: 25px;
    }
    input:focus {
        box-shadow: inset 0 -5px 0 #fff;
    }
    .form {
        font-family: 'Open Sans', sans-serif;
        
    }
    .form-group {
        margin-bottom: 1rem;
    }
    h2 {
        color: #0a043c;
        font-weight: 800;
        text-align: center;
    }
    p {
        color: #0a043c;
        text-align: center;
    }
    h5 {
        color: #000;
        margin-top: 4rem;
        font-size: 1.1rem;
        font-weight: 700;
    }
    .form-group label {
        color: #0a043c;
        font-size: 1rem;
        font-weight: 600;
    }
    #link {
        color: #6930c3;
        text-decoration: none;
    }
    #button {
        margin: 1rem 0;
        color: #0a043c;
        font-weight: 400;
    }
    #para {
        text-align: left;
    }
    form {
        margin-top: 4rem;
    }
</style>