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
                <p class="ml-2 pb-0" style="float: left">003</p>
                <p class="mr-2 pb-0" style="text-align: right">{{ date_ }}</p>
              </div>
                <v-card-title style="color:#208ea3" class='pt-0'>
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
           :src="require('./images003/image001.jpg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images003/image002.jpg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images003/image003.jpg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images003/image004.jpg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images003/image005.jpg')">
        </expandable-image>
    </v-col>
</v-row>


<br/> <br/>
<h3 class='contents-title'>メモ</h3>
<ul>
  <li> <strong>万能近似定理</strong>: 層が２つあるニューラルネットワークは、1層当たりのパラメータの数が十分多ければ、どんな連続な関数でも(無視できる誤差の範囲で)近似できる。</li>
  <ul>
  <li>   3層以上はむしろ害悪である</li>
  <li>   ではなぜResNetなどの層の多いNNがいい精度を出しているのか？</li>
  <li>   そもそもなめらかでない関数を扱っている-->なめらかでない関数もNNなら表現可能(活性化関数)</li>
  </ul>
  <li> これまでの常識では、パラメータを増やすとバイアスが小さくなる。しかし小さくしすぎると過剰適合してしまう。</li>
  <ul>
  <li>   これまでの常識: 過剰適合のしやすさ= sqrt(NNの自由度/訓練データの数)</li>
  <li>   NNは膨大な数のパラメータがあるがなぜ過剰適合を抑えつついい精度を出しているのか？</li>
  <li>   本ではこれらに対して3つの重要な理論を紹介している。どれもメリデメはある。</li>
    <ul>
  <li>     <strong>暗黙的正則化</strong>: データ・アルゴリズムの構造実質的なモデルを制限する</li>
  <li>     <strong>損失平坦性</strong>: 損失関数の平坦さが複雑性誤差を抑制する</li>
  <li>     <strong>二重降下</strong>: 大モデル極限ではデータのスペクトルがタイトな上限を与える</li>
    </ul>
  </ul>
  <li>     <strong>これまでデータ分析の常識では、バイアスとバリアンスはトレードオフにあった。しかし、新理論の確立により、パラメータと増やすことでバイアスとバリアンスを同時に減少させることが可能になるかもしれない。</strong></li>

</ul>
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

        date_: '2021/06/24',
        title: '[本]深層学習の原理に迫る',
        body: '深層学習がなぜうまく行くのかについて書かれている本。万能近似定理のその先が書かれている。',
        link: 'https://www.amazon.co.jp/dp/4000297031',
        chips: [
            {name: 'Book'},
            {name: 'ML'},
            {name: 'Deep'},
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
