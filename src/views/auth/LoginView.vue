<template>
    <div class="login">
        <!-- <% if (errorMessage) { %>
            <div class="text-center"><%= errorMessage %></div>
        <% } %>
        {{ error }} -->
        <div class="login-form shadow">
            <form method="post" @submit.prevent="login">
                <!--<img src="@/assets/img/logo.png" class="img-fluid">-->
                <h4>Jelentkezzen be webáruházunkba!</h4>
                <div class="mb-3 mt-5">
                    <input type="email" v-model="email" class="mezo" name="email" id="email" placeholder="Email" required>
                </div>
                <div class="mb-3">
                    <input type="password" v-model="password" class="mezo" name="password" id="password" placeholder="Jelszó" required>
                </div>
                <div class="mb-3 d-flex justify-content-end">
                    <a class="text-decoration-none" href="/reset">Elfelejtett jelszó</a>
                </div>
                <input type="hidden" name="_csrf" value="{{ csrfToken }}">
                <button class="specialButton btn-sm" type="submit">Bejelentkezés</button>
                <div class="pt-3 text-muted">
                    Nincs még fiókja? <a class="text-decoration-none" href="/signup">Regisztráció</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import AuthService from '@/services/authservice';

export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: '',
            isLoggedIn: false,
            error: ''
        }
    },
    methods: {
        async login() {
            try {
                const user = { email: this.email, password: this.password };
                await AuthService.postLogin(user);
                this.$router.push("/");
                this.isLoggedIn = true;
            } catch(err) {
                this.error = "Hibás email vagy jelszó";
            }
        }
    },
    created() {
        document.title = 'SpaceY · Bejelentkezés';
    }
}
</script>