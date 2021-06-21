<template>
    <v-card
            hover
            min-width="200" max-width="300" 
                            class="ma-2"
                            v-bind='attrs' v-on='on'
                            >
        <v-hover>
            <div slot-scope="{ hover }" :class="`${hover? 'img1': 'img2'}`">
                <v-card-title style="color:#208ea3">
                    paper title
                </v-card-title>
                <v-card-text class="card_text">
                    hogehoge and hoge----gee----- and hogehoge no mi no nouryokusya
                </v-card-text>
        <v-chip-group
                column
                class="ml-2"
                >
            <v-chip small dark color='#208ea3b0'>ML</v-chip>
            <v-chip small dark color='#208ea3b0'>DL</v-chip>
            <v-chip small dark color='#208ea3b0'>Image</v-chip>
        </v-chip-group>
            </div>
        </v-hover>
      </v-card>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  }
}
</script>
<style>
.img1 {
    background:url(https://cdn.vuetifyjs.com/images/cards/cooking.png)
}

.img2 {
  background-color: #fafafa;
}
</style>
