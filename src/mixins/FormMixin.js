const formMixin = {
    data: () => ({
        email: '',
        password: '',
    }),
    computed: {
        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Email must be email')
            !this.$v.email.required && errors.push('Email is required.')
            return errors
        },
        passErrors() {
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.minLength && errors.push('Password must be more than 6 characters')
            !this.$v.password.required && errors.push('Password is required.')
            return errors
        },
    }
}

export default formMixin