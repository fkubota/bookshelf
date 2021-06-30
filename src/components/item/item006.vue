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
機械学習で発生するコストについてまとめている。 
コストは、状況に応じて色々(お金、時間、etc.)ある。
コストは大きく分類すると6個ある。

<ul>
  <li><strong>Cost of Misclassification Errors</strong>: 分類ミスコスト。医療におけるFPとFNの非対称性などがこれに対応する。</li>
  <li><strong>Cost of Tests</strong>: テストコスト。テストする時に多額のお金が発生するなど。薬を試すときにお金がめっちゃかかるとかはまさにそれ。</li>
  <li><strong>Cost of Teacher</strong>: コレチョットヨクワカラナイ。</li>
  <li><strong>Cost of Intervention</strong>: 介入のコスト。特徴量ABCがありそれぞれが材料だとすると、ABCの量を変える事によりコストが変わる。Cが高い材料だったら,,,などなど。</li>
  <li><strong>Cost of Unwanted Archivements</strong>: 望まない成果のコスト。ヨウワカラン。</li>
  <li><strong>Cost of Computation</strong>: 計算コスト。言わずもがな。</li>
</ul>


<br/> <br/>

<h3 class='contents-title'>先行研究と比べてどこがすごい？</h3>
コストについてまとめている文献がない。
<br/> <br/>

<h3 class='contents-title'>技術や手法のキモはどこ？</h3>
...
<br/> <br/>

<h3 class='contents-title'>どうやって有効だと検証した？</h3>
...
<br/> <br/>

<h3 class='contents-title'>議論はある？</h3>
このまとめは完璧ではないと言及。
<br/> <br/>

<h3 class='contents-title'>次に読むべきものは？</h3>
各コストで気になった部分で紹介されている論文。

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

        date_: '2021-06-30',
        title: 'Types of Cost in Inductive Concept Learning',
        body: '機械学習で発生するコストについてまとめた論文。',
        link: 'https://arxiv.org/pdf/cs/0212034.pdf',
        chips: [
            {name: 'Cost'},
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
