<template>
    <v-app>
    <v-app-bar color="#208ea3" dark app class='title'>
      <v-toolbar-title justify='center'>fkubota's Bookshelf</v-toolbar-title>
      <v-img 
           src='./../images/icon.png'
           max-height="50"
           max-width="50"
           contain
        >
      </v-img>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://fkubota.github.io/timeline/' v-bind="attrs" v-on="on">
                  <v-icon>mdi-clock-outline</v-icon>
              </v-btn>
          </template>
          <span>timeline</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://twitter.com/fkubota_' v-bind="attrs" v-on="on">
                  <v-icon>mdi-twitter</v-icon>
              </v-btn>
          </template>
          <span>twitter</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://github.com/fkubota' v-bind="attrs" v-on="on">
                  <v-icon>mdi-github</v-icon>
              </v-btn>
          </template>
          <span>GitHub</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://www.kaggle.com/fkubota' v-bind="attrs" v-on="on">
                    <font-awesome-icon :icon="[ 'fab', 'kaggle' ]" />
              </v-btn>
          </template>
          <span>Kaggle</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://speakerdeck.com/fkubota' v-bind="attrs" v-on="on">
                    <font-awesome-icon :icon="[ 'fab', 'speaker-deck' ]" />
              </v-btn>
          </template>
          <span>Speaker Deck</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon href='https://github.com/fkubota/bookshelf' v-bind="attrs" v-on="on">
                  <v-icon>mdi-code-tags</v-icon>
              </v-btn>
          </template>
          <span>Source Code</span>
      </v-tooltip>
    </v-app-bar>
    <v-content class='mt-5'>
        <v-container>
            <v-row justify="center">
                <v-col><item003/></v-col>
                <v-col><item003/></v-col>
                <v-col><item003/></v-col>
                <v-col><item003/></v-col>
                <v-col><item003/></v-col>
                <v-col><item003/></v-col>
                <v-col><item003/></v-col>
                <v-col><item003/></v-col>
                <v-col><item003/></v-col>
                <v-col><item003/></v-col>
                <v-col><item003/></v-col>
                <v-col><item003/></v-col>

            </v-row>
        </v-container>
    </v-content>
    </v-app>
</template>

<script>
    import item003 from './item/item003';

    export default {
            name: 'App',
            components: {
                    item003,

                },
        };
</script>
