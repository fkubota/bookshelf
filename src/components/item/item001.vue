<template>
<v-card
    class="mx-auto"
    width="344"
  >
    <v-hover>
    <v-card-title
			slot-scope="{ hover }"
			:class="`${hover? 'class1': 'class2'}`"
            >
      <div>
        <span class="headline">Hover</span>              
      </div>

    </v-card-title>
    </v-hover>
  </v-card>
</template>

<style>
.class1 {
  background-color: blue;
}

.class2 {
  background-color:red;
}
</style>
