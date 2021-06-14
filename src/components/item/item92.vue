<template>
    <v-timeline-item color="#e4e2e2ff" small >
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong>5pm</strong>
                </v-col>
                <v-col>
                    <strong>hoge</strong>
                    <div class="text-caption">
                        Mobile App
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href="http://www.phys.u-ryukyu.ac.jp/wiki/index.php?FrontPage"
                            >
                            Learn More
                    </v-btn>
                </v-col>
            </v-row>
    </v-timeline-item>
</template>

<script>
    export default {}
</script>
