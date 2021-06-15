<template>
    <v-hover>
    <v-timeline-item icon="mdi-newspaper" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2020/09/29</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>[記事] 「Kaggle日記という戦い方」を公開</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                            鳥コンペの反省会で反響が大きかったので記事にした。<br>
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://zenn.dev/fkubota/articles/3d8afb0e919b555ef068'
                            >
                            Learn More
                    </v-btn>

                </v-col>
                <v-col>
                    <v-img src="./../../images/bk013.png" max-width='300' max-height='200' contain> </v-img>
                </v-col>
            </v-row>
        </v-timeline-item>
    </v-hover>
</template>

<script>
    export default {
        }
</script>

<style>
  @import "./../../css/mycss.css";
</style>
