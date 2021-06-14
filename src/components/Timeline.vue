<template>
    <v-app>
    <v-app-bar color="#208ea3" dark app class='title'>
      <v-toolbar-title>fkubota's Timeline</v-toolbar-title>
    </v-app-bar>
    <v-content>
    <v-container>
    <v-timeline align-top dense class="mx-auto" >
      <!-- <v-img src="./../images/bg100.jpg" > -->

            <item92/>
            <item92/>
            <item92/>
            <item92/>
            <item92/>
            <item92/>
            <item92/>
            <item92/>
            <item92/>

            <item007/>
            <item008/>
            <item006/>
            <item005/>
            <item004/>
            <item003/>
            <item002/>
            <item001/>
            <item009/>

<!-- </v-img> -->
    </v-timeline>
</v-container>
</v-content>
</v-app>
</template>

<script>
    import item001 from './item/item001';
    import item002 from './item/item002';
    import item003 from './item/item003';
    import item004 from './item/item004';
    import item005 from './item/item005';
    import item006 from './item/item006';
    import item007 from './item/item007';
    import item008 from './item/item008';
    import item009 from './item/item009';

    import item92 from './item/item92';
    export default {
            name: 'App',
            components: {
                    item001,
                    item002,
                    item003,
                    item004,
                    item005,
                    item006,
                    item007,
                    item008,
                    item009,

                    item92,
                }
        };
</script>
<style>
#App {
  background: url('./../images/bg100.jpg')
    no-repeat center center fixed !important;
  background-size: cover;
}
</style>
