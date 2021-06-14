<template>
    <v-hover>
        <v-timeline-item icon="mdi-twitter" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2019/05/01</strong>
                </v-col>
                <v-col>
                    <h1 class='contents-title'>令和初日にTwitterを開始</h1>
                    <div class="text-caption">
                        <div class='contents-text'>
                            初日は完全に狙った。
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://twitter.com/fkubota_'
                            >
                            Learn More
                    </v-btn>
                </v-col>
                <v-col>
                    <v-img src="./../../images/bg010.png" max-width='300' max-height='200' contain> </v-img>
                </v-col>
            </v-row>
        </v-timeline-item>
    </v-hover>
</template>

<script>
    export default {}
</script>

<style>
  @import "./../../css/mycss.css";
</style>
