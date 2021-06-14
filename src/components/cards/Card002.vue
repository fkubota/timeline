<template>
<v-timeline-item>
<v-hover v-slot="{ hover }">
  <v-card
    class="mx-auto"
    outlined
	color="#208ea3"
	dark
	max-width="800"
    :elevation="hover ? 16 : 2"
    :class="{ 'on-hover': hover  }"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          株式会社LINX に新卒入社
        </v-list-item-title>
        <v-list-item-subtitle>ファクトリーオートメーション系の商材を扱う専門商社。</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
              tile
              size="80"
              color="black"
              >
              <v-icon dark>
                  mdi-alarm
              </v-icon>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
    <v-btn outlined rounded text > Button </v-btn>
    </v-card-actions>
  </v-card>
</v-hover>
</v-timeline-item>
</template>

<script>
  export default {}
</script>
