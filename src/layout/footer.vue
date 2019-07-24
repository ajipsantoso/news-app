<template>
  <v-footer color="primary">
    <v-layout class="pa-4 white--text">
      <v-flex xs5 pa-5>
        <v-layout>
          <v-flex>
            <div>Contact Us</div>
            <div>+62 22 87507720</div>
            <div>Jl. Margacinta No.29</div>
            <div>Bandung 40287</div>
          </v-flex>
          <v-flex>
            <div>Menu</div>
            <div>Politics</div>
            <div>Sport</div>
            <div>Health</div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-spacer />
      <v-flex xs5 pa-3>
        <v-layout column>
          <v-flex>
            Subscribe to GITS newsletter via email
          </v-flex>
          <v-flex>
            Subscribe now and stay updated
          </v-flex>
          <v-flex>
            <v-layout row fill-height>
              <v-flex xs5>
                <v-text-field
                  dark
                  label="Email Address"
                  single-line
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex xs5 mx-7>
                <v-btn large dark depressed color="orange">Subscribe</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
export default {};
</script>
