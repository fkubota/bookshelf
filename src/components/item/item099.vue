<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card
            hover
            width='270'
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
        <b-container class="d-flex justify-content-end">
            <v-chip class="ma-1" small dark color='#208ea3b0'>ML</v-chip>
            <v-chip class="ma-1" small dark color='#208ea3b0'>DL</v-chip>
            <v-chip class="ma-1" small dark color='#208ea3b0'>Image</v-chip>
        </b-container>
            </div>
        </v-hover>
        </v-card>
      </template>

      <template v-slot:default="dialog">
      <v-card>
          <v-toolbar elevation='3px'>
          <v-card-title style="color:#208ea3">
              paper title
          </v-card-title>
          <v-spacer></v-spacer>
          <v-card-actions>
          <v-btn icon @click="dialog.value = false">
                  <v-icon>mdi-close</v-icon>
          </v-btn>
          </v-card-actions>
          </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>

<v-row class="pt-10">
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images099/bg001.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images099/bg002.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images099/bg003.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images099/bg003.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images099/bg003.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images099/bg003.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images099/bg002.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images099/bg003.png')">
        </expandable-image>
    </v-col>
</v-row>


<br/> <br/>
<h3 class='contents-title'>どんなもの？</h3>
hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf
<br/> <br/>

<h3 class='contents-title'>先行研究と比べてどこがすごい？</h3>
hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf
<br/> <br/>

<h3 class='contents-title'>技術や手法のキモはどこ？</h3>
hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf
<br/> <br/>

<h3 class='contents-title'>どうやって有効だと検証した？</h3>
hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf
<br/> <br/>

<h3 class='contents-title'>議論はある？</h3>
hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf
<br/> <br/>

<h3 class='contents-title'>次に読むべきものは？</h3>
hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf
<br><br>

        </v-card-text>

        </v-card>
    </template>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    methods: {
      show() {
        this.$viewerApi({
          images: this.images,
        })
      },
    },
  }
</script>
<style>
.image {
  width: 150px;
  max-width: 100%;
}

.card_text {
  color: #aaaaaa
}
.img1 {
    background-image: url('./../../images/hover_background001.png');
    background-size: cover;
}

.img2 {
  background-color: #fafafa;
}
</style>
