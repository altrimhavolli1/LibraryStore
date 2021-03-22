<template>
    <div>
        <appHeader/>
        <div class="container contact">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-xs-4">
                            <h3 class="heading mb-4">Let's talk about everything!</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia iusto debitis.</p>
                            <p>
                                <img src="../assets/images/undraw-contact.svg" alt="image" class="img-fluid image-min">
                            </p>
                        </div>
                        <div class="col-md-6">
                            <b-form class="contact" @submit.prevent = "submit">
                                <b-form-group>
                                  <b-form-input
                                      id="fullName"
                                      type="text"
                                      placeholder="Full Name"
                                      value
                                      autofocus
                                      v-model="form.fullName"
                                      size="lg"
                                    ></b-form-input>
                                </b-form-group>
                                <b-form-group>
                                    <b-form-input
                                      id="email"
                                      type="text"
                                      placeholder="Email"
                                      value
                                      autofocus
                                      v-model="form.email"
                                      size="lg"
                                    ></b-form-input>
                                </b-form-group>
                                <b-form-group>
                                    <b-form-input
                                      id="subject"
                                      type="text"
                                      placeholder="Subject"
                                      value
                                      autofocus
                                      v-model="form.subject"
                                      size="lg"
                                    ></b-form-input>
                                </b-form-group>
                                <b-form-group>
                                    <b-form-textarea
                                        id="message"
                                        v-model="form.message"
                                        placeholder="Message"
                                        value
                                        size="lg"
                                    >{{form.message}}</b-form-textarea>
                                </b-form-group>
                                <b-form-group align="right">
                                    <b-button 
                                      type="submit" 
                                      pill 
                                      variant="outline-info" 
                                      size="lg"
                                    >Submit</b-button>
                                </b-form-group>
                            </b-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
import router from '@/router';
export default {
    data() {
        return {
            form: {
                fullName: "",
                email: "",
                subject: "",
                message: ""
            },
            error: null,
        };
    },
    components: {
        appHeader: Header,
    },
    methods: {
        submit() {
            let newContact = {
                fullName: this.form.fullName,
                email: this.form.email,
                subject: this.form.subject,
                message: this.form.message
            }
            axios.post('http://localhost:3000/contacts', newContact)
                .then(res => {
                    console.log(res);
                    router.push({name: "home"})
                }, err => {
                    this.error = err.message;
                })
        }
    }
};
</script>

<style scoped>

.contact {
    padding: 6rem 0;
}

.form {
  padding: 2.5rem 0 0 2.5rem; 
}

.heading{
    font-size: 2.5rem;
    font-weight: 900;
}


@media only screen and (max-width: 600px) {
    .contact {
        padding: 3rem 0;
    }

    .form {
        padding: 1rem 0 0 1rem; 
    }

    .image-min{
        width: 80%;
        margin-left: 10%;
    }
}
</style>
