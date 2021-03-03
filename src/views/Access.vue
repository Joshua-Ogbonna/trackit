<template>
    <div class="access">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">

                </div>
                <div class="col-lg-6">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        components: {
            
        },

        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>
    .access {
        background: #0a043c;
        height: 100vh;
    }
</style>