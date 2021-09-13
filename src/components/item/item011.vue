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
           :src="require('./images011/001.jpeg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images011/002.jpeg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images011/003.jpeg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images011/004.jpeg')">
        </expandable-image>
    </v-col>
</v-row>

<br/> <br/>
<h3 class='contents-title'>メモ</h3>
<a ref='https://twitter.com/ree_webmark/status/1412154643057037328?s=20'>図解はTwitterから持ってきた。</a>  
<br/> 1. ピラミッド
<br/> 2. 田の字
<br/> 3. 矢バネ
<br/> 4. ループ


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
        no: '010',
        date_: '2021/08/12',
        title: '[ビジネス書] 武器としての図で考える習慣',
        body: 'ピラミッドや矢羽などの使い方紹介。',
        link: 'https://www.amazon.co.jp/%E6%AD%A6%E5%99%A8%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AE%E5%9B%B3%E3%81%A7%E8%80%83%E3%81%88%E3%82%8B%E7%BF%92%E6%85%A3-%E3%80%8C%E6%8A%BD%E8%B1%A1%E5%8C%96%E6%80%9D%E8%80%83%E3%80%8D%E3%81%AE%E3%83%AC%E3%83%83%E3%82%B9%E3%83%B3-%E5%B9%B3%E4%BA%95-%E5%AD%9D%E5%BF%97/dp/4492046682/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E5%9B%B3%E3%81%A7%E8%80%83%E3%81%88%E3%82%8B&qid=1628728568&sr=8-1',
        chips: [
            {name: 'Biz'},
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
