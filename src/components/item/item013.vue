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
              <div class="card_text text-caption">
                <p class="ml-2 pb-0" style="float: left">{{ no }}</p>
                <p class="mr-2 pb-0" style="text-align: right">{{ date_ }}</p>
              </div>
                <v-card-title style="color:#208ea3" class="pt-0 text-subtitle-2 font-weight-bold">
                  {{ title }}
                </v-card-title>
                <v-card-text class="card_text">
                  {{ body }}
                </v-card-text>
        <b-container class="d-flex justify-content-end">
          <v-chip
              class = 'ma-1' small dark color='#208ea3b0'
              v-for='chip in chips'
              :key='chip.name'
              >
              {{ chip.name }}
          </v-chip>
        </b-container>
            </div>
        </v-hover>
        </v-card>
      </template>

      <template v-slot:default="dialog">
      <v-card>
          <v-toolbar elevation='3px'>
          <v-toolbar-title style="color:#208ea3">
            {{ title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon :href='link' v-bind="attrs" v-on="on" style="color:#208ea3">
                <v-icon>mdi-file</v-icon>
              </v-btn>
            </template>
            <span>go to source</span>
          </v-tooltip>
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
           :src="require('./images013/image01.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images013/image02.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images013/image03.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images013/image04.png')">
        </expandable-image>
    </v-col>
</v-row>

<br/>
<h3 class='contents-title'>メモ</h3>
<br/>

- 「突然変異」「自然選択」「遺伝的浮動」という無作為過程の組み合わせ効果が、1つの集団の構成を変える原因になる。<br/>

- なんで人間の寿命は長いの？--><a ref='https://gendai.ismedia.jp/articles/-/59146'>「おばあちゃん仮説」</a><br/>

- セントラルドグマについての動画--> <a ref='https://www.youtube.com/watch?v=ZuEMAEXZTaQ'>タンパク質合成</a><br/>

- セントラル・ドグマの3D動画--> <a ref='https://www.youtube.com/watch?v=gG7uCskUOrA'>DNAからタンパク質へ-3D</a><br/>



<br/> <br/>


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

    data () {
      return {
        no: '012',
        date_: '2021/10/03',
        title: '進化(1冊でわかるシリーズ)',
        body: 'たまたま読んでみた岩波の「進化」に関する本がとてもおもしろかったのでメモ。ダーウィニズムを中心に解説されていて非常に面白かった。',
        link: 'https://www.iwanami.co.jp/book/b256801.html',
        chips: [
            {name: 'Bio'},
            ],

        }
      }
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
