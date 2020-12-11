<template>
    <div class="color-preview-area">
        <v-select :options="colorOptions" v-model="colorMode" 
        :clearable="false" :searchable="false"></v-select>
        <div class="input-group">
            <Hex
                v-if="colorMode === 'Hex'"
                :red="red"
                :green="green"
                :blue="blue"
                :alpha="alpha"
                :updateColor="updateColor"
            />
            <RGB
                v-else
                :red="red"
                :green="green"
                :blue="blue"
                :alpha="alpha"
                :updateColor="updateColor"
            />
        </div>
    </div>
</template>

<script src="./script.js" />
