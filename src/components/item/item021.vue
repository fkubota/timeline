<template>
    <v-hover>
    <v-timeline-item icon="mdi-account-voice" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2020/09/26</strong>
                </v-col>
                <v-col>
                    <h1 class='contents-title'>[登壇] 鳥コンペ反省会</h1>
                    <div class="text-caption">
                        <div class='contents-text'>
                            社会人になって初の登壇。  <br>
                            発表資料は<a href='https://speakerdeck.com/fkubota/niao-konpedecan-bai-sitahua-tokonpefalsequ-rizu-mifang'>こちら</a>。<br>
                            Kaggle日記の紹介も行った(初披露)。
                        </div>
                    </div>
                    <v-btn
                            text
                            style="color: #208ea3"
                            @click="reveal = true"
                            href='https://connpass.com/event/189722/'
                            >
                            Learn More
                    </v-btn>

                </v-col>
                <v-col>
                    <v-img src="./../../images/bg012.png" max-width='300' max-height='200' contain> </v-img>
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
