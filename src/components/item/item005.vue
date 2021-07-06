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
                <p class="ml-2 pb-0" style="float: left">005</p>
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

<v-row class="pt-10">
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images005/image001.jpeg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images005/image002.jpeg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images005/image003.jpeg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images005/image004.jpeg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images005/image005.jpeg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images005/image006.jpeg')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images005/image007.jpeg')">
        </expandable-image>
    </v-col>
</v-row>


<br/> <br/>
<h3 class='contents-title'>どんなもの？</h3>

<br/> <br/>

<h3 class='contents-title'>先行研究と比べてどこがすごい？</h3>
コストを考えている。<br>
新しいmetricとして、SLR(Saved Loss Rate)を提案している(コストを考慮)。  <br>
SLR: 不正取引が行われたカードの利用可能な限度額の合計である潜在的な金銭的損失のうち、節約できた割合。
<br/> <br/>

<h3 class='contents-title'>技術や手法のキモはどこ？</h3>
クレジットカードの不正タスクにCost-Sensitive Learningを使っていること(医療ではよく使われているがこの分野ではまだ少ない)。 <br>
SLRを使っていること。
<br/> <br/>

<h3 class='contents-title'>どうやって有効だと検証した？</h3>
NN, Tree系, SVM, などのモデルとCS(Cost-Sensitive)を使ったモデルを比較。  <br>
Datasetは非常にインバランス。  <br>
Metricsには、TPRとSLRを使用。<br>
TPR, SLR共にCSを使ったモデルが強い。
<br/> <br/>

<h3 class='contents-title'>議論はある？</h3>
SLRは今後、この分野で使われていくだろうと書かれていたけど、どうなのか調べたい。
<br/> <br/>

<h3 class='contents-title'>次に読むべきものは？</h3>
機械学習で考えないといけないコストについてまとめられている<a href='https://arxiv.org/pdf/cs/0212034.pdf'>論文</a>。 <br>

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

        date_: '2021-06-25',
        title: 'A cost-sensitive decision tree approach for fraud detection',
        body: 'クレジットカードの不正検知にCost-Sensitive Learningを使った論文。',
        link: 'https://silo.tips/download/this-article-appeared-in-a-journal-published-by-elsevier-the-attached-copy-is-fu-86',
        images_dir: 'images005',
        chips: [
            {name: 'Credit'},
            {name: 'Cost-Sensitive'},
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
