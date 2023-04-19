<script setup>
import { ref, computed } from 'vue'

const defaultRounds = [256, 128, 64, 32, 16, 8, 4, 2, 1]

const bracketSize = ref(8)

const rounds = computed(() => {
  return defaultRounds.filter((rounds) => rounds <= bracketSize.value)
})
</script>

<template>
  <div class="tournament-brackets">
    <div class="bracket">
      <template v-for="(round, index) in rounds" :key="index">
        <div class="round" :class="['round-' + round]">
          <template v-for="(match, matchIndex) in round" :key="matchIndex">
            <div class="match">
              <div class="match__content">{{ match }}</div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
}

.tournament-brackets {
  .bracket {
    display: flex;
  }

  .round {
    display: flex;
    flex-grow: 1;
    flex-direction: column;

    &:first-child {
      .match::before,
      .match__content::before {
        display: none;
      }
    }

    &:last-child {
      .match::after {
        display: none;
      }
    }
  }

  .match {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
    padding: 6px 0;
    flex-grow: 1;
    position: relative;

    &:before {
      content: '';
      display: block;
      min-height: 30px;
      border-left: 2px solid purple;
      position: absolute;
      left: -10px;
      top: 50%;
      margin-top: -15px;
      margin-left: -2px;
    }

    &:nth-child(odd):after {
      content: '';
      display: block;
      border: 2px solid transparent;
      border-top-color: purple;
      border-right-color: purple;
      height: 50%;
      position: absolute;
      right: -10px;
      width: 10px;
      top: 50%;
    }

    &:nth-child(even):after {
      content: '';
      display: block;
      border: 2px solid transparent;
      border-bottom-color: purple;
      border-right-color: purple;
      height: 50%;
      position: absolute;
      right: -10px;
      width: 10px;
      bottom: 50%;
    }

    &__content:before {
      content: '';
      display: block;
      width: 10px;
      border-bottom: 2px solid purple;
      margin-left: -2px;
      position: absolute;
      top: 50%;
      left: -10px;
    }

    &__content {
      border: 2px solid rgb(124, 0, 128);
      width: 100%;
      height: 30px;
      position: relative;
      padding: 5px;
      border-radius: 4px;
    }
  }
}
</style>
