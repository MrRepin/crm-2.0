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
                    v-model="name"
                    label="Name"
                    :error-messages="nameErrors"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                ></v-text-field>

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

                <v-checkbox
                    v-model="checkbox"
                    :error-messages="checkboxErrors"
                    label="Do you agree?"
                    required
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                ></v-checkbox>

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
        name: '',
        email: '',
        password: '',
        checkbox: false,
    }),
    validations: {
        name: {
            required,
        },
        email: {
            email,
            required,
        },
        password: {
            minLength: minLength(6),
            required
        },
        checkbox: {
            checked(val) {
                return val
            },
        },
    },
    computed: {
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        checkboxErrors () {
            const errors = []
            if (!this.$v.checkbox.$dirty) return errors
            !this.$v.checkbox.checked && errors.push('You must agree to continue!')
            return errors
        },
    },
    methods: {
        ...mapActions(['register']),
        async submitForm() {
            if(this.$v.$invalid) {
                this.$v.$touch()
                return
            }

            const data = {
                email: this.email,
                password: this.password,
                name: this.name
            }

            try {
                await this.register(data)
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