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

<br/>
<h3 class='contents-title'>メモ</h3>
<br/>


日経新聞が読める本
	<ul>
    <li> 2016年 に書かれた本</li>
    <li> 日本のGDPは500兆円</li>
    <li> 日本の国家予算(歳出)は100兆円</li>
			<ul>
        <li> 国税収入で50兆円</li>
					<ul>
            <li> 所得税15兆円</li>
            <li> 消費税18兆円</li>
					</ul>
        <li> 国債で50兆円</li>
			</ul>
    <li> 東証時価総額500兆円</li>
    <li> トヨタの時価総額: 25兆円</li>
    <li> 日経平均株価: 16,000円 (2021年8月は27,682円)</li>
    <li> TOPIX: 1,200円 (2021年8月は1,900円)</li>
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
        no: '011',
        date_: '2021/08/30',
        title: '社会人1年目からのとりあえず日経新聞が読める本',
        body: '昔読んでよかったので再読。タイトルの通りで日本経済の数字感覚が学べる。',
        link: 'https://www.amazon.co.jp/%E7%A4%BE%E4%BC%9A%E4%BA%BA1%E5%B9%B4%E7%9B%AE%E3%81%8B%E3%82%89%E3%81%AE%E3%81%A8%E3%82%8A%E3%81%82%E3%81%88%E3%81%9A%E6%97%A5%E7%B5%8C%E6%96%B0%E8%81%9E%E3%81%8C%E8%AA%AD%E3%82%81%E3%82%8B%E6%9C%AC-%E3%80%8C%E3%82%84%E3%82%8B%E3%81%98%E3%82%83%E3%82%93%E3%80%82%E3%80%8D%E3%83%96%E3%83%83%E3%82%AF%E3%82%B9-%E5%B1%B1%E6%9C%AC-%E5%8D%9A%E5%B9%B8/dp/4799318497/ref=pd_vtp_1/356-4338985-3848325?pd_rd_w=lmul6&pf_rd_p=949e26f5-c2ef-4c96-bfde-49d7614d0317&pf_rd_r=CWQ2JQ1EQACBHH94KRWP&pd_rd_r=383c1d94-98af-4c39-a5ee-088507dfb0a3&pd_rd_wg=MD4by&pd_rd_i=4799318497&psc=1',
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
