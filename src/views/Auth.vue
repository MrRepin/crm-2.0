<template>
    <div class="auth">
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <v-row align="center" justify="center">
                        <RegisterForm
                            v-if="form"
                            :form="form"
                            :data="regForm"
                            @change-form="changeForm"
                        />
                        <AuthForm
                            v-else
                            :form="form"
                            :data="authForm"
                            @change-form="changeForm"
                        />
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import AuthForm from '@/components/Forms/AuthForm'
import RegisterForm from '@/components/Forms/RegisterForm'
export default {
    name: 'Auth',
    data: () => ({
        form: true,
        regForm: {
            title: 'Registration',
            icon: 'mdi-account-plus',
            button: 'Login'
        },
        authForm: {
            title: 'Login',
            icon: 'mdi-login-variant',
            button: 'Registration'
        },
    }),
    methods: {
        changeForm() {
            this.form = !this.form
        }
    },
    components: {
      AuthForm,
      RegisterForm
    },
}
</script>

<style lang="sass">
    .auth
        height: 100vh
        .container,
        .row,
        .col-12
            height: 100%

    .auth-form
        padding: 20px
</style>