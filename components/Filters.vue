<template>
  <div class="filters__sidebar" ref="filters_sidebar" id="filters_sidebar">
    <button class="uk-offcanvas-close" type="button" style="display: none">
      <img src="/img/close-modal.png" width="29" height="29" alt="">
    </button>
    <div class="side__bar">

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
            <img src="/img/f6.svg" width="26" height="26">
          </span>
            <span class="title">Weight (kg)</span>
          </a>
          <!--        TODO add checked if is check-->
          <div class="uk-accordion-content">
            <PartialsRanges/>
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
      <div class="sidebar__btns">
        <div class="link__wrapper">
          <NuxtLink to="" class="sidebar_btn">
            Help
            <br>
            center
          </NuxtLink>
        </div>
        <div class="link__wrapper">
          <NuxtLink to="" class="sidebar_btn">
            Contact
            <br>
            support
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  mounted() {
    window.addEventListener('resize', this.setMobile)
    this.setMobile();

  },
  methods: {
    checkFilter() {
      event.target.classList.toggle('checked');
    },
    setMobile() {
      if (window.innerWidth < 1200) {
        // this.is_mobile = true;
        this.$refs.filters_sidebar.setAttribute("uk-offcanvas", 'overlay: true');
        this.$refs.filters_sidebar.querySelector('.side__bar').classList.add('uk-offcanvas-bar');
      } else {
        this.$refs.filters_sidebar.removeAttribute("uk-offcanvas");
        this.$refs.filters_sidebar.classList.remove("uk-offcanvas");
        this.$refs.filters_sidebar.querySelector('.side__bar').classList.remove('uk-offcanvas-bar');
        //  this.is_mobile = false;
      }
    },

  }
}
</script>

<style lang="scss" scoped>
.filters__sidebar {
  .side__bar {
    background: #CDE4F0;
    border-radius: 12px;
    padding: 15px;
    height: fit-content;

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
            color: black !important;
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
              color: black !important;

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

    .sidebar__btns {
      padding: 6px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 87px;
      background: #89CBC4;
      margin: 20px -15px -15px;
      border-radius: 0px 0px 12px 12px;

      .link__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #6CA8A2;

        &:last-child {
          border-right: none;
        }

        .sidebar_btn {
          text-align: center;
          color: white !important;
          font-size: 18px;
          line-height: 24px;
          transition: 0.3s;

        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .filters__sidebar {
    top: 90px;
    background: rgba(184, 221, 241, 0.4);
    backdrop-filter: blur(5px);

    .uk-offcanvas-close {
      display: block !important;
      background-color: transparent;

    }

    .side__bar {
      width: 285px;
      overflow-y: auto;
      max-height: 100%;

    }
  }

}

@media screen and (max-width: 576px){
  .filters__sidebar{
    top: 60px;
    .side__bar{
      max-height:100%;
    }
  }
}
</style>
