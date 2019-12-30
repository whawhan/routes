<template>
  <div>
    <div>
      <TopBar />
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<br>
      <MyPrimaryButton>View</MyPrimaryButton>
      <MyButton>Save</MyButton>
      <MyButton>Delete</MyButton>
      <MyButton>Update</MyButton>
    </div>

    <!-- <div>
      <h1>Home</h1>
      <Score :value="homeScore"/>
      <MyButton @tekan="minus('home')">-</MyButton>
      <MyButton @tekan="plus('home')">+</MyButton>
    </div>

    <div>
      <h1>Away</h1>
      <Score :value="awayScore"/>
      <MyButton @tekan="minus('away')">-</MyButton>
      <MyButton @tekan="plus('away')">+</MyButton>
    </div> -->
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    <div>
      <Score :value="homeScore" @update="updateScore">
        <h1>Home</h1>
      </Score>
    </div>

    <div>
      <Score :value="awayScore" @update="updateScoreAway">
        <h1>Away</h1>
      </Score>
    </div>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";
import MyButton from "./components/MyButton";
import MyPrimaryButton from "./components/MyPrimaryButton";
import Score from './components/Score';
export default {
  components: {
    TopBar,
    MyButton,
    MyPrimaryButton,
    Score
  },

  data: () => ({
    homeScore: 10,
    awayScore: 15,
  }),

  methods: {
    updateScore(value) {
      this.homeScore = value
    },
    updateScoreAway(value) {
      this.awayScore = value
    }
  },

  plus(side) {
      if (side === 'home') {
        this.homeScore++
      } else {
        this.awayScore++
      }
    },

    minus(side) {
      if (side === 'home') {
        this.homeScore--
      } else {
        this.awayScore--
      }
    },


};
</script>
