<template>
    <div class="signup">
        <!-- <% if (errorMessage) { %>
            <div class="text-center">{{ errorMessage }}</div>
        <% } %> -->
        <div class="login-form shadow">
            <form action="/signup" method="POST">
                <!--<img src="@/assets/img/logo.png" class="img-fluid">-->
                <h4>Regisztráljon webáruházunkra!</h4>
                <div class="mb-3 mt-5">
                    <input type="email" class="mezo" name="email" id="email" placeholder="Email" required>
                </div>
                <div class="mb-3">
                    <input type="password" class="mezo" name="password" id="password" placeholder="Jelszó" required>
                </div>
                <div class="mb-3">
                    <input type="password" class="mezo" name="confirmPassword" id="confirmPassword" placeholder="Jelszó újra" required>
                </div>
                <input type="hidden" name="_csrf" value="{{csrfToken}}">
                <button class="specialButton btn-sm" type="submit">Regisztráció</button>
                <div class="pt-3 text-muted">
                    Már van fiókja? <a class="text-decoration-none" href="/login">Bejelentkezés</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignupView',
    created() {
        document.title = 'SpaceY · Regisztráció';
    }
}
</script>