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
           :src="require('./images002/image001.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images002/image002.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images002/image003.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images002/image004.png')">
        </expandable-image>
    </v-col>
    <v-col cols="3">
        <expandable-image 
           class="image" 
           :src="require('./images002/image005.png')">
        </expandable-image>
    </v-col>
</v-row>


<br/> <br/>
<h3 class='contents-title'>どんなもの？</h3>
- 融資を行う際にデフォルトリスクを予測したい。 <br>
- 国内の中小企業のデータを用いて、機械学習手法によりスコアリングモデルを構築する。 <br>
- 学習は企業が融資実行後にデフォルトしたかどうかを示すフラグを教師データとして学習を行った。 <br>
- 様々なモデルとそのスタッキングで検証。 <br>

<br/> <br/>
<h3 class='contents-title'>先行研究と比べてどこがすごい？</h3>
- 消費者向けがほとんどの報告。今回は法人向けデータ。  

<br/> <br/>
<h3 class='contents-title'>技術や手法のキモはどこ？</h3>
- データが多い。 <br>
- スタッキングを使っている。 <br>


<br/><br/>
<h3 class='contents-title'>どうやって有効だと検証した？</h3>
- CAP曲線から得られるAR値で評価し、スタッキングがダントツでスコア良かった。 <br>
- 学習データが多いほど有利であるということも証明している。 <br>

<br/> <br/>
<h3 class='contents-title'>議論はある？</h3>

<br/> <br/>
<h3 class='contents-title'>次に読むべきものは？</h3>
- CAP曲線とAR値に関するもの。


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

        title: '[日本語]機械学習による中小企業の信用スコアリングモデルの構築',
        body: 'hoge',
        link: 'https://sigfin.org/?plugin=attach&refer=019-04&openfile=SIG-FIN-019-04.pdf',
        chips: [
            {name: 'Fintech'},
            {name: 'Credit'},
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
