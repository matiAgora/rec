<template>
  <div class="wrapper">
  
<div v-if="football">
  <EventStripe
    v-for="event in football"
    :firstName="event.firstName"
    :secondname="event.secondName"
    :firstScore="event.firstScore"
    :secondScore="event.secondScore"
    :firstLogo="event.firstLogo"
    :secondLogo="event.secondLogo"
    :key="event.id"
  />
</div>
<div v-if="volleyball">
  <EventStripe
    v-for="event in volleyball"
    :firstName="event.homeName"
    :secondname="event.awayName"
    :firstScore="event.firstScoreEnd"
    :secondScore="event.secondScorecoreEnd"
    :firstLogo="event.homeLogoSmall"
    :secondLogo="event.awayLogoSmall"
    :key="event.id"
  />
</div>
<div v-if="handball">
  <EventStripe
    v-for="event in handball"
    :firstName="event.homeTeamName"
    :secondname="event.awayTeamName"
    :firstScore="event.firstScoreHome"
    :secondScore="event.secondScoreAway"
    :firstLogo="event.logoHome"
    :secondLogo="event.logoAway"
    :key="event.id"
  />
</div>

  </div>
</template>
<script>


export default {
};
</script>

<style lang="scss" scoped>

</style>
