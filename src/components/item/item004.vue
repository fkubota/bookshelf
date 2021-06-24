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
                <div class="text-caption card_text mr-2" style="text-align: right">
                  {{ date_ }}
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
           :src="require('./images004/image001.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images004/image002.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images004/image003.png')">
        </expandable-image>
    </v-col>
</v-row>


<br/> <br/>
<h3 class='contents-title'>どんなもの？</h3>
クレジットカードの不正データセット(Kaggle)を用いて、教師あり(6個)vs教師なし(4個)のモデルを10個試す。評価にはAUCを使う。インバランス(284,807:497)なのが特徴。
<br/> <br/>

<h3 class='contents-title'>先行研究と比べてどこがすごい？</h3>
教師ありvs教師なしで比較しているところ。
<br/> <br/>

<h3 class='contents-title'>技術や手法のキモはどこ？</h3>
特になし。
<br/> <br/>

<h3 class='contents-title'>どうやって有効だと検証した？</h3>
Kaggleのクレジットカードのデータセットで10個のモデルをAUCで評価。
<br/> <br/>

<h3 class='contents-title'>議論はある？</h3>
教師ありは、ハイパフォーマンスを出すが、データのラベル付にコストがかかりメンテナンスが大変。教師なしはそのあたりが有利。
<br/> <br/>

<h3 class='contents-title'>次に読むべきものは？</h3>
- <a href='https://d1wqtxts1xzle7.cloudfront.net/39570235/A_cost-sensitive_decision_tree_approach_20151031-2600-1vf1ph9.pdf?1446294650=&response-content-disposition=inline%3B+filename%3DA_cost_sensitive_decision_tree_approach.pdf&Expires=1624523062&Signature=PfGUzVWVGVKKD3jeKA6UUu-hodSv8zoQb6SCZI20rF7gBX3oqcamC-gDbhLD2Tlp~WyofFYqsvfJGAt1EO0wK~7uNjJPtw7DRT8QTLMEfJpFFlGrempS57OgIn87jESJplsTQqB1g5PmUbJY7dU-E7Kl54uXt8xN0AKAusU43qQmMauZn8pDB3BQ5nfsyP1v~bdrJ-cj2JQO--nUds-bGZCRnx5~xiG7K1ahcwF3IPN6yuKU6YAuKhXx2vVmAfBlXVK-cvGx334oL620lvyE4kKXrGgU3lTYIztY0~SbtYa-UYGff0YJvaLPoYLnC1LvbKjo6UAzSIQ8OxEDweJQXw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA'>cost-sensitive learningについての論文</a>。 <br>
- 3つの問題(インバランス、ドリフト、検証待ち時間)について言及している<a href='https://re.public.polimi.it/retrieve/handle/11311/1044896/260717/08038008.pdf'>論文</a>。<br>


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

        date_: '2021-06-24',
        title: 'A Comparison Study of Credit Card Fraud Detection: Supervised versus Unsupervised',
        body: 'クレジットカードの不正利用検知について。教師ありvs教師なし がテーマ。',
        link: 'https://arxiv.org/pdf/1904.10604.pdf',
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
