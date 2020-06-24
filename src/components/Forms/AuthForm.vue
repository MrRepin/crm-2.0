<template>
    <v-col md="4">
        <v-card class="auth-form">
            <ColorIcon :icon="data.icon" />
            <p class="text-left form-title font-weight-light">{{data.title}}</p>
            <v-form
                ref="form"
                @submit.prevent="submitForm"
            >
                <v-text-field
                    v-model="email"
                    label="E-mail"
                    :error-messages="emailErrors"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    label="Password"
                    :error-messages="passErrors"
                    required
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                ></v-text-field>

                <v-btn
                    color="success"
                    class="mr-4"
                    type="submit"
                >
                    Send
                </v-btn>
            </v-form>
        </v-card>
        <v-btn class="change-forms" text color="primary" @click="$emit('change-form', !form)">{{data.button}}</v-btn>
    </v-col>
</template>

<script>

import {mapActions} from 'vuex'
import {email, required, minLength} from 'vuelidate/lib/validators'
import ColorIcon from '@/components/Icons/ColorIcon'
import formMixin from '@/mixins/FormMixin'

export default {
    name: 'AuthForm',
    mixins: [formMixin],
    props: {
        data: Object,
        form: Boolean,
    },
    data: () => ({
        email: '',
        password: ''
    }),
    validations: {
        email: {
            email,
            required,
        },
        password: {
            minLength: minLength(6),
            required
        },
    },
    methods: {
        ...mapActions(['signIn']),
        async submitForm() {
            if(this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            const signInData = {
                email: this.email,
                password: this.password
            }
            try {
                await this.signIn(signInData)
                this.$router.push('/')
            } catch(e) {
                console.log(e)
            }
        }
    },
    components: {
        ColorIcon
    }
}
</script>

<style lang="sass" scoped>
    .auth-form
        position: relative

    .form-title
        font-size: 25px
        margin-left: 80px

    .change-forms
        margin: 20px auto 0
        display: block
</style>