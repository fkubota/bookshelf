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
                <p class="ml-2 pb-0" style="float: left">007</p>
                <p class="mr-2 pb-0" style="text-align: right">{{ date_ }}</p>
              </div>
                <v-card-title style="color:#208ea3" class="pt-0 text-subtitle-1 font-weight-bold">
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

<br/> <br/>
<h3 class='contents-title'>どんなもの？</h3>
インテックという企業の与信モデルの話。  <br>
2016年と少し古い記事だが勉強になることは多い。  <br>
以下のことが詳しい。  <br>
<ul>
  <li>与信モデルの歴史</li>
  <li>個人信用情報センター(JICC)</li>
  <li>不均衡対策</li>
  <li>決定木による分析</li>
  <li>モデルのスコア出力から意思決定まで(コストも加味)</li>
  <li>不況などでモデルとのズレを動的に補正する方法</li>
</ul>

<br/> <br/>

<h3 class='contents-title'>先行研究と比べてどこがすごい？</h3>
これまでは、個人信用情報センターの情報が使えなかったが、銀行でも扱えるようになった。これに関連して機械学習を使うようになったという話が新しい。
<br/> <br/>

<h3 class='contents-title'>技術や手法のキモはどこ？</h3>
ランダムフォレストによるスコア出力から、意思決定までのシステムが確立している。<br>
学習はクラスを1:1で学習させているが、デフォルト率をベイズ変換により修正している。  <br>
外的要因(不況など)でモデルと実際のデフォルト率の乖離が現れても「動的与信機能」によりチューニング可能としている。<br>
<br/> <br/>

<h3 class='contents-title'>どうやって有効だと検証した？</h3>
...
<br/> <br/>

<h3 class='contents-title'>議論はある？</h3>
...
<br/> <br/>

<h3 class='contents-title'>次に読むべきものは？</h3>
同じ人が書いてる日本語論文: <a href='https://www.ai-gakkai.or.jp/jsai2015/webprogram/2015/pdf/1J4-OS-13a-3.pdf'>銀行の自動審査ロジックの動的化</a>。

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

        date_: '2021/06/30',
        title: '[日本語]インテックの与信モデルの特徴と今後の展開',
        body: '与信モデルの作成から運用までの例を説明。モデルは古いが参考になることは多い。',
        link: 'https://www.intec.co.jp/company/itj/itj17/contents/itj17_12-17.pdf',
        chips: [
            {name: 'Cost'},
            {name: 'Credit'},
            {name: 'Bayes'},
            {name: 'MLOps'},
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
