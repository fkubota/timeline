<template>
<v-hover v-slot="{ hover }">
        <v-timeline-item
                color="#e4e2e2ff"
                small
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover  }"
                >
                <v-row class="pt-1">
                    <v-col cols="3">
                        <strong>5pm</strong>
                    </v-col>
                    <v-col>
                        <strong>New Icon</strong>
                        <div class="text-caption">
                            Mobile App
                        </div>
                    </v-col>
                </v-row>
        </v-timeline-item>
</v-hover>
</template>

<script>
  export default {}
</script>
