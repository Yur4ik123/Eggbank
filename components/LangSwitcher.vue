<template>
  <div class="lang__switcher">
    <a href="" class="current__lang  ">ENG </a>
    <div uk-dropdown class="lang__dropdown">
      <ul>
        <li>
          <a href="">ENG</a>
        </li>
        <li>
          <a href="">ENG</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LangSwitcher"
}
</script>

<style lang="scss">
.lang__switcher {


  .current__lang {
    position: relative;
    display: block;
    padding-right: 13px;

    &:after {
      content: '';
      width: 9px;
      height: 6px;
      background: url("~assets/img/arr-d.svg") no-repeat center/cover;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

    }

  }

  .lang__dropdown {
    min-width: fit-content;
    background-color: white;
    padding: 15px;
    border-radius: 12px;

    a {
      color: black !important;
      transition: 0.3s;

      &:hover {
        color: $green !important;

      }

    }
  }
}
</style>
