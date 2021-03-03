<template>
    <div class="form">
        <div class="register">
            <h2>Track and manage <br> your finance with ease</h2>
            <p id="first">Request access to start using our app</p>
            <h5 class="text-center mb-3">Personal Information</h5>
        </div>
        <form>
            
            <div class="form-group">
                <div class="row">
                    <div class="col-lg-6">
                        <label for="first name">First Name</label>
                        <input type="name" class="form-control" placeholder="Ahmed">
                    </div>
                    <div class="col-lg-6">
                        <label for="last name">Last Name</label>
                        <input type="name" class="form-control" placeholder="Mohammed">
                    </div>
                </div>
            </div>
            
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" class="form-control" placeholder="hi@gmail.com">
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-lg-6">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" placeholder="*********">
                    </div>
                    <div class="col-lg-6">
                        <label for="confirm password">Confirm Password</label>
                        <input type="password" class="form-control" placeholder="*********">
                    </div>
                </div>
            </div>
            <button class="btn" id="button">Submit</button>
            <p id="para">Have an account? <router-link id="link" to="/login">Login</router-link></p>
        </form>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                
            }
        },
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
    #button {
        margin: 1rem 0;
        color: #0a043c;
        font-weight: 400;
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
    #para {
        text-align: left;
    }
    #first {
        line-height: 5px;
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
</style>