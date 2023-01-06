<template>
  <div class="filters__sidebar">
    <ul uk-accordion="multiple: true" class="filters__accordion">
      <li class="filter__row">
        <a class="uk-accordion-title" href="#">
          <span class="icon">
            <img src="/img/f1.svg" width="26" height="26">
          </span>
          <span class="title">Race</span>
        </a>
        <!--        TODO add checked if is check-->
        <div class="uk-accordion-content">
          <ul class="params__list">
            <li class="params__item">
              <a class="prams__item-checkbox checked" href="#" @click.prevent="checkFilter">
                Asian
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                Black
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                Caucasian
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                Black
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox checked" href="#" @click.prevent="checkFilter">
                East Indian
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                Hawaiian
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                Middle Eastern
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                Native American
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="filter__row">
        <a class="uk-accordion-title" href="#">
          <span class="icon">
            <img src="/img/f2.svg" width="26" height="26">
          </span>
          <span class="title">Ethnic Origin</span>
        </a>
        <!--        TODO add checked if is check-->
        <div class="uk-accordion-content">
          <ul class="params__list">
            <li class="params__item">
              <a class="prams__item-checkbox checked" href="#" @click.prevent="checkFilter">
                Asian
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                European
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                Native American
              </a>
            </li>

          </ul>
        </div>
      </li>
      <li class="filter__row">
        <a class="uk-accordion-title" href="#">
          <span class="icon">
            <img src="/img/f3.svg" width="26" height="26">
          </span>
          <span class="title">Natural Hair colour</span>
        </a>
        <!--        TODO add checked if is check-->
        <div class="uk-accordion-content">
          <ul class="params__list">
            <li class="params__item">
              <a class="prams__item-checkbox checked" href="#" @click.prevent="checkFilter">
                Black
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                Brown
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                Blond
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                White
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="filter__row">
        <a class="uk-accordion-title" href="#">
          <span class="icon">
            <img src="/img/f4.svg" width="22" height="22">
          </span>
          <span class="title">Natural Eye colour</span>
        </a>
        <!--        TODO add checked if is check-->
        <div class="uk-accordion-content">
          <ul class="params__list">
            <li class="params__item">
              <a class="prams__item-checkbox checked" href="#" @click.prevent="checkFilter">
                Brown
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                Hazel
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                Green
              </a>
            </li>

          </ul>
        </div>
      </li>
      <li class="filter__row">
        <a class="uk-accordion-title" href="#">
          <span class="icon">
            <img src="/img/f5.svg" width="26" height="26">
          </span>
          <span class="title">Height (cm)</span>
        </a>
        <!--        TODO add checked if is check-->
        <div class="uk-accordion-content">
          <PartialsRanges/>
        </div>
      </li>
      <li class="filter__row">
        <a class="uk-accordion-title" href="#">
          <span class="icon">
            <img src="/img/f2.svg" width="26" height="26">
          </span>
          <span class="title">Ethnic Origin</span>
        </a>
        <!--        TODO add checked if is check-->
        <div class="uk-accordion-content">
          <ul class="params__list">
            <li class="params__item">
              <a class="prams__item-checkbox checked" href="#" @click.prevent="checkFilter">
                Asian
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                European
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                Native American
              </a>
            </li>

          </ul>
        </div>
      </li>
      <li class="filter__row">
        <a class="uk-accordion-title" href="#">
          <span class="icon">
            <img src="/img/f7.svg" width="26" height="26">
          </span>
          <span class="title">Blood Type</span>
        </a>
        <!--        TODO add checked if is check-->
        <div class="uk-accordion-content">
          <ul class="params__list">
            <li class="params__item">
              <a class="prams__item-checkbox checked" href="#" @click.prevent="checkFilter">
                A+
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                A-
              </a>
            </li>
            <li class="params__item">
              <a class="prams__item-checkbox" href="#" @click.prevent="checkFilter">
                AB+
              </a>
            </li>

          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Filters",
  methods: {
    checkFilter() {
      event.target.classList.toggle('checked');
    }
  }
}
</script>

<style lang="scss" scoped>
.filters__sidebar {
  background: #CDE4F0;
  border-radius: 12px;
  padding: 15px;

  .filters__accordion {
    & > :nth-child(n+2) {
      margin-top: 10px;
    }

    .filter__row {
      padding-bottom: 10px;
      border-bottom: 1px solid white;

      &:last-child {
        padding-bottom: 0;
        border-bottom: 0;
      }

      .uk-accordion-title {
        display: grid;
        grid-template-columns: 40px 1fr;
        grid-gap: 10px;
        position: relative;
        padding-right: 15px;

        &:after {
          position: absolute;
          content: '';
          width: 12px;
          height: 7px;
          right: 0;
          top: 15px;
          transition: 0.3s;
          transform: rotateX(-180deg);
          background: url("/img/arr-w.svg") no-repeat center/cover;
        }

        &:before {
          display: none;
        }

        .icon {
          width: 40px;
          height: 40px;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
        }

        .title {
          font-size: 18px;
          line-height: 30px;
          color: black;
          align-self: center;
        }
      }

      &.uk-open {
        .uk-accordion-title {
          &:after {
            transform: translateX(0);
          }
        }
      }

      .uk-accordion-content {
        margin-top: 10px;

        .params__list {
          .prams__item-checkbox {
            padding-left: 29px;
            font-size: 16px;
            line-height: 30px;
            position: relative;

            &:before {
              position: absolute;
              left: 0;
              content: '';
              width: 20px;
              height: 20px;
              border: 1px solid white;
              border-radius: 2px;
              top: 50%;
              transform: translateY(-50%);
              background-size: 70%;
            }

            &.checked {
              &:before {
                background: white url("/img/check.svg") no-repeat center;

              }
            }
          }
        }
      }
    }
  }
}
</style>
