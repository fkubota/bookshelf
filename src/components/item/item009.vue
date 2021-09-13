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
           :src="require('./images009/image001.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images009/image002.png')">
        </expandable-image>
    </v-col>
</v-row>

<br/> <br/>
<h3 class='contents-title'>どんなもの？</h3>
ホクソエム、タカヤナギ＝サンの記事。<br>
モデルの(例えば)F値最大化はビジネスとして最適とは限らない。<br>
ビジネス的に最大化すると嬉しい評価指標はなにか？を数式と具体例(家賃保証)を交えて解説。<br>
記事そのものの量は多くないがエッセンスが詰まってる。

<br/> <br/>

<h3 class='contents-title'>先行研究と比べてどこがすごい？</h3>
機械学習とビジネスに寄り添った評価指標についての議論している。
<br/> <br/>

<h3 class='contents-title'>技術や手法のキモはどこ？</h3>
ビジネス上の利益と損失から評価指標を導き出している。  <br>
二値分類モデルの閾値をどこに設定すればいいか？については、今回の提案手法で決定できる。
<br/> <br/>

<h3 class='contents-title'>どうやって有効だと検証した？</h3>
...
<br/> <br/>

<h3 class='contents-title'>議論はある？</h3>
recallが出てきていないことについて。これは「家賃保証契約をしない」場合において、一切の損失が発生しないと見做しているからである。
<br/> <br/>

<h3 class='contents-title'>次に読むべきものは？</h3>
<a href='www.amazon.co.jp/dp/4873116856'>戦略的データサイエンス入門</a> という本にこの当たりの話が書いてあるらしい。

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
        no: '009',
        date_: '2021/07/08',
        title: '[日本語] 機械学習とビジネスを橋渡しするものこそ評価指標であり, ”全てのビジネスは条件付期待値の最大化問題として書ける”仮説についての一考察',
        body: '機械学習の評価指標をビジネスと紐付ける話。かなり良い。',
        link: 'https://blog.hoxo-m.com/entry/2021/06/27/171421',
        chips: [
            {name: 'ML'},
            {name: 'Metrics'},
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
