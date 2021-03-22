<template>
    <div>
        <appHeader/>
        <div class="container about">
            <div class="row justify-content-center">
                <div class="col-md-10 col-sm-6 col-xs-12">
                    <div class=" row justify-content-center">
                        <div class="col-md-6 section-about">
                            <h2 class="aboutus-title">About Us</h2>
                            <p class="aboutus-text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, eaque tempore exercitationem neque assumenda impedit! 
                                Debitis distinctio veritatis unde perferendis dignissimos iure animi voluptates ab modi aliquid. Placeat, nemo velit.
                            </p>
                            <p class="aboutus-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit dolores iusto reprehenderit repudiandae molestias esse. 
                                Quod est perspiciatis, repudiandae non vel consectetur pariatur dolorem nam incidunt? Necessitatibus, iure nobis?
                            </p>
                            <div>
                                <b-button 
                                        type="submit" 
                                        pill
                                        to="/contact"
                                        variant="outline-dark" 
                                        size="md"
                                    >Contact Us</b-button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <p>
                                <img src="../assets/images/undraw_laravel_and_vue_59tp.svg" alt="image" class="img-fluid">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
export default {
    components: {
        appHeader: Header,
    },
};
</script>

<style scoped>
.about{
    padding: 9rem 0;
}
.section-about{
    padding-top: 2.5rem;
    padding-right: 5rem;
}

.section-about h2 {
    padding-bottom: 1rem;
}

.section-about p{
    color: #606060;
    font-size: 14px;
    line-height: 22px;
}

.section-about button {
    margin-top: 1rem;
}
</style>
