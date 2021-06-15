<template>
    <v-hover>
    <v-timeline-item icon="mdi-github" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2021/06/15</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>「timeline」を公開</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                            これのこと。<br>
                            「何もしてない...」を防ぐため＆情報を一元化したいという意図があります。
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://github.com/fkubota/timeline'
                            >
                            Learn More
                    </v-btn>

                </v-col>
                <v-col>
                    <v-img src="./../../images/bg014.png" max-width='300' max-height='200' contain> </v-img>
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

