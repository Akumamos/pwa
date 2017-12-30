<template>
  <div class="fullscreen-bg">
    <video ref="video" class="fullscreen-bg__video"/>
    <q-btn outline round color="primary" @click="capture">
      <i aria-hidden="true" class="q-icon material-icons">camera</i>
    </q-btn>
  </div>
</template>

<script>
 import { QBtn } from 'quasar'

 export default {
   components: {
     QBtn
   },
   data () {
     return {
       mediaStream: null
     }
   },
   mounted () {
     navigator.mediaDevices.getUserMedia({ video: true })
       .then(mediaStream => {
         this.mediaStream = mediaStream
         this.$refs.video.srcObject = mediaStream
         this.$refs.video.play()
       })
       .catch(error => console.error('getUserMedia() error:', error))
   },
   destroyed () {
     const tracks = this.mediaStream.getTracks()
     tracks.map(track => track.stop())
   },
   methods: {
     capture () {
       const mediaStreamTrack = this.mediaStream.getVideoTracks()[0]
       const imageCapture = new window.ImageCapture(mediaStreamTrack)
       console.log('Img', mediaStreamTrack, imageCapture)
     }
   }
 }
</script>

<style scoped>
  .fullscreen-bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
  }

  .fullscreen-bg__video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }

  .q-btn{
    position: absolute;
    bottom: 0
  }
</style>
