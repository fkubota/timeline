<template>
<v-timeline-item>
<span slot="opposite">Tus eu perfecto</span>
<v-hover v-slot="{ hover }">
  <v-card
    class="mx-auto"
    outlined
	max-width="800"
    :elevation="hover ? 16 : 0"
    :class="{ 'on-hover': hover  }"
  >
    <v-list-item three-line>
      <v-list-item-content>
          <!-- <v-list-item-title class="text-h5 mb-1 cyan--text text--darken-2"> -->
        <v-list-item-title class="text-h5 mb-1">
          琉球大学大学院理工学研究科 物質地球科学物理学専攻 を卒業
        </v-list-item-title>
        <v-list-item-subtitle>専門は強相関電子系の物性。核磁気共鳴を使った実験系研究室に所属。</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</v-hover>
</v-timeline-item>
</template>

<script>
  export default {}
</script>
