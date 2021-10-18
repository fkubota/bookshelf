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
           :src="require('./images014/image005.jpg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images014/image001.jpg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images014/image002.jpg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images014/image003.jpg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images014/image004.jpg')">
        </expandable-image>
    </v-col>
</v-row>

<br/>
<h3 class='contents-title'>メモ</h3>
<br/>


<ul>
<li> 2章: リサーチ・データ分析のはじめ方
	<ul>
    <li> あらゆるデータ収集はデスクリサーチから。</li>
			<ul>
        <li> いわゆるググるという作業をマーケティング用語でデスクリサーチというらしい。リサーチの仕方を調べるときはデスクリサーチでググるとよさそう。</li>
      </ul>
    <li> デスクリサーチのポイント</li>
			<ul>
        <li> デスクリサーチの目的を明確にする</li>
        <li> 数値やグラフが印象されていたら5W1Hをチェックする</li>
        <li> 信頼できる情報ソースを抑えておく</li>
      </ul>
    <li> 信頼できる情報ソース</li>
			<ul>
        <li> 政府が発表している統計情報</li>
					<ul>
            <li> <a ref='https://www.stat.go.jp/data/'>総務省統計局の好評データ</a> </li>
            <li> <a ref='https://dashboard.e-stat.go.jp/'> 総務省統計ダッシュボード[e-STAT]</a></li>
            <li> <a ref='https://www.soumu.go.jp/johotsusintokei/whitepaper/'>情報通信白書(総務省)  </a> </li>
            <li> <a ref='https://disclosure.edinet-fsa.go.jp/'> EDINET </a> </li>
            <li> <a ref='https://www.esri.cao.go.jp/jp/stat/shouhi/menu_shouhi.html'> 消費動向調査(内閣府) </a></li>
            <li> <a ref='https://www.esri.cao.go.jp/jp/stat/shouhi/menu_shouhi.html'> 世論調査(内閣府) </a></li>
            <li> <a ref='https://www.e-stat.go.jp/estat/html/tokei_itiran.pdf'> 政府が公表している統計調査一覧</a></li>
            <li> <a ref='https://www.jetro.go.jp/'> 海外のビジネス全般(JETRO)</a> </li>
          </ul>
        </ul>
      </ul>
<li> 3章: よく活用されるインターネットリサーチとインタビュー調査</li>
  <ul>
    <li> 標本誤差早見表の図(上にある)</li>
  </ul>
<li> 4章: 仮説思考の重要性</li>
  <ul>
    <li> 「インプットの量x質」は大事だが、日々のトレンドを浅く広くウォッチする目的のインプットだけでは、良質な仮説は生み出せない。</li>
    <li> 全体像・構造・因果関係を体系的に理解するには、該当テーマの本を3冊ほど読むことが大事。</li>
    <li> 図を3つ掲載(上にある)</li>
  </ul>
<li> 5章: データを分析しアクションにつなげる</li>
  <ul>
    <li> データ分析で抑えるべき5つの視点</li>
      <ul>
        <li> 1. 分析目的</li>
        <li> 2. 比較</li>
        <li> 3. 構造・構成</li>
        <li> 4. 関係性</li>
        <li> 5. 分布</li>
      </ul>
    <li> 比較の視点の図(上にある)</li>
  </ul>
</ul>

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
        no: '013',
        date_: '2021/10/18',
        title: 'マーケティングリサーチとデータ分析の基本',
        body: '意思決定につながるデータ分析の基礎が学べるのではないかと思い読んでみた。間違ってなかった。',
        link: 'https://www.amazon.co.jp/%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%AA%E3%82%B5%E3%83%BC%E3%83%81%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E5%88%86%E6%9E%90%E3%81%AE%E5%9F%BA%E6%9C%AC-%E4%B8%AD%E9%87%8E-%E5%B4%87/dp/4799106945/ref=sr_1_1_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%AA%E3%82%B5%E3%83%BC%E3%83%81&qid=1634547534&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFQWUtLM05KTjdSQ1kmZW5jcnlwdGVkSWQ9QTEwMjEwNzVWSks0UEVURzhSR0UmZW5jcnlwdGVkQWRJZD1BNFJNSkwzTldHMVlCJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
        chips: [
            {name:'データ分析'},
            {name:'Marketing'},
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
