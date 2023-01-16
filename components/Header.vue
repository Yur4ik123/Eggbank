<template>

  <header class="header">
    <div class="container">

      <div class="logo__wrapper">
        <NuxtLink to="/">
          <img src="~/assets/img/logo.svg" width="177" height="46" alt="">
        </NuxtLink>
      </div>
      <nav class="nav__wrapper">
        <Menu></Menu>
      </nav>
      <div class="other__wrapper">
        <a href="#search_modal" uk-toggle class="search__icon ">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.8102 18.9119L14.6466 13.8308C15.9988 12.3616 16.8296 10.4187 16.8296 8.28068C16.8289 3.7071 13.0618 0 8.41447 0C3.76713 0 0 3.7071 0 8.28068C0 12.8543 3.76713 16.5614 8.41447 16.5614C10.4224 16.5614 12.2641 15.8668 13.7107 14.7122L18.8944 19.8134C19.147 20.0622 19.5571 20.0622 19.8096 19.8134C20.0628 19.5646 20.0628 19.1607 19.8102 18.9119ZM8.41447 15.2873C4.48231 15.2873 1.29468 12.1504 1.29468 8.28068C1.29468 4.41101 4.48231 1.27403 8.41447 1.27403C12.3467 1.27403 15.5343 4.41101 15.5343 8.28068C15.5343 12.1504 12.3467 15.2873 8.41447 15.2873Z"
              fill="black"/>
          </svg>

        </a>
        <LangSwitcher></LangSwitcher>
        <div class="wishlist ">
          <NuxtLink to="" class="circle__btn">
            <img src="~/assets/img/heart.svg" width="20" height="18" alt="">
          </NuxtLink>

        </div>
        <div class="profile ">
          <!--        TODO check login  -->
          <a href="#login" class="circle__btn" v-if="true" uk-toggle>
            <img src="~/assets/img/profile.svg" width="18" height="18" alt="">
          </a>
          <a href="" class="circle__btn" v-if="false">
            <img src="~/assets/img/profile.svg" width="18" height="18" alt="">
          </a>
          <ProfileDropdown v-if="false"/>
        </div>
        <a href="#mobile-menu" class="menu__btn" style="display: none;" uk-toggle>
          <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="show">
            <path
              d="M20.75 6.75H1.25C1.05109 6.75 0.860322 6.67098 0.71967 6.53033C0.579018 6.38968 0.5 6.19891 0.5 6C0.5 5.80109 0.579018 5.61032 0.71967 5.46967C0.860322 5.32902 1.05109 5.25 1.25 5.25H20.75C20.9489 5.25 21.1397 5.32902 21.2803 5.46967C21.421 5.61032 21.5 5.80109 21.5 6C21.5 6.19891 21.421 6.38968 21.2803 6.53033C21.1397 6.67098 20.9489 6.75 20.75 6.75ZM21.5 11.25C21.5 11.0511 21.421 10.8603 21.2803 10.7197C21.1397 10.579 20.9489 10.5 20.75 10.5H1.25C1.05109 10.5 0.860322 10.579 0.71967 10.7197C0.579018 10.8603 0.5 11.0511 0.5 11.25C0.5 11.4489 0.579018 11.6397 0.71967 11.7803C0.860322 11.921 1.05109 12 1.25 12H20.75C20.9489 12 21.1397 11.921 21.2803 11.7803C21.421 11.6397 21.5 11.4489 21.5 11.25ZM21.5 0.75C21.5 0.551088 21.421 0.360322 21.2803 0.21967C21.1397 0.0790178 20.9489 0 20.75 0H1.25C1.05109 0 0.860322 0.0790178 0.71967 0.21967C0.579018 0.360322 0.5 0.551088 0.5 0.75C0.5 0.948912 0.579018 1.13968 0.71967 1.28033C0.860322 1.42098 1.05109 1.5 1.25 1.5H20.75C20.9489 1.5 21.1397 1.42098 21.2803 1.28033C21.421 1.13968 21.5 0.948912 21.5 0.75Z"
              fill="black"/>
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="close"
               style="display: none;">
            <g clip-path="url(#clip0_199_11084)">
              <path
                d="M0.781396 16C0.626858 16 0.475783 15.9542 0.347281 15.8684C0.218778 15.7825 0.118621 15.6605 0.0594776 15.5177C0.000334661 15.3749 -0.0151369 15.2178 0.0150198 15.0663C0.0451766 14.9147 0.119607 14.7755 0.228896 14.6662L14.6664 0.228731C14.8129 0.0821988 15.0117 -0.00012207 15.2189 -0.00012207C15.4261 -0.00012207 15.6249 0.0821988 15.7714 0.228731C15.9179 0.375263 16.0002 0.574003 16.0002 0.781231C16.0002 0.988459 15.9179 1.1872 15.7714 1.33373L1.3339 15.7712C1.26141 15.8439 1.17528 15.9015 1.08047 15.9407C0.985653 15.98 0.884016 16.0001 0.781396 16Z"
                fill="black"/>
              <path
                d="M15.2189 16C15.1162 16.0001 15.0146 15.98 14.9198 15.9407C14.825 15.9015 14.7388 15.8439 14.6664 15.7712L0.228853 1.33373C0.0823209 1.1872 0 0.988459 0 0.781231C0 0.574003 0.0823209 0.375263 0.228853 0.228731C0.375385 0.0821988 0.574125 -0.00012207 0.781353 -0.00012207C0.988581 -0.00012207 1.18732 0.0821988 1.33385 0.228731L15.7714 14.6662C15.8806 14.7755 15.9551 14.9147 15.9852 15.0663C16.0154 15.2178 15.9999 15.3749 15.9408 15.5177C15.8816 15.6605 15.7815 15.7825 15.653 15.8684C15.5245 15.9542 15.3734 16 15.2189 16Z"
                fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_199_11084">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>


        </a>
      </div>
    </div>
    <div ref="mob_menu" id="mobile-menu" uk-offcanvas="flip: true; overlay: true">
      <div class="uk-offcanvas-bar">
        <div class="mob__menu-wrapper">
          <Menu></Menu>
          <LangSwitcher/>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
export default {
  name: "Header",
  watch: {
    $route(to, from) {
      this.$UIkit.offcanvas(this.$refs.mob_menu).hide();
    }
  }
}
</script>

<style lang="scss">
.header {
  border-bottom: 1px solid #CDE4F0;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;

  .container {
    display: grid;
    grid-template-columns: 178px 1fr 185px;
    grid-gap: 30px;
    height: 90px;
    align-content: center;
  }

  .nav__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .nav__list {
      display: flex;
      align-items: center;
      justify-content: center;

      .nav__list-item {
        margin: 0 10px;


        .nav__list-link {
          font-size: 16px;
          line-height: 22px;
          transition: 0.3s;

          &:hover {
            color: $green !important;
          }
        }
      }
    }

  }

  .other__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search__icon {
      margin-right: 20px;

      svg {
        path {
          transition: 0.3s;
        }

      }

      &:hover {
        svg {
          path {
            fill: $green;
          }
        }
      }
    }

    .wishlist {
      margin-right: 8px;
    }

    .circle__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background: $green;
      width: 36px;
      height: 36px;
      border-radius: 100%;
      transition: 0.3s;

      &:hover {
        background: $green-hover;
      }
    }

    .lang__switcher {
      margin-right: 17px;
    }

  }

  #mobile-menu {
    top: 91px !important;
    background: rgba(184, 221, 241, 0.4);
    backdrop-filter: blur(5px);

    .uk-offcanvas-bar {
      background: white;

      .mob__menu-wrapper {
        padding-top: 100px;

        .nav__list {
          display: flex;
          flex-direction: column;
          align-items: center;

          .nav__list-item {
            margin-bottom: 35px;

            .nav__list-link {
              color: black !important;
            }
          }
        }

        .lang__switcher {
          display: flex;
          justify-content: center;

          a {
            color: black !important;
          }
        }
      }

    }
  }

  .menu__btn {
    width: 22px;

    &[aria-expanded="true"] {
      .show {
        display: none;
      }

      .close {
        display: block !important;
      }
    }
  }
}

@media screen and (max-width: 1230px) {
  .header {
    .container {
      grid-template-columns: 1fr 185px;

      .nav__wrapper {
        display: none;
      }

      .lang__switcher {
        display: none;
      }

      .profile {
        margin-right: 20px;
      }

      .menu__btn {
        display: flex !important;
        align-items: center;
        justify-content: center;
      }
    }
  }

}

@media screen and (max-width: 576px) {
  .header {
    .container {
      height: 60px;
      grid-template-columns: 1fr 155px;


      .logo__wrapper {
        a {
          img {
            width: 108px;
            object-fit: contain;
          }
        }
      }

      .other__wrapper {
        .circle__btn {
          width: 30px;
          height: 30px;

          img {
            width: 16px;
            height: 14px;
          }
        }
      }
    }

    #mobile-menu {
      top: 61px !important;

      .uk-offcanvas-bar {
        width: 100%;
        right: -100%;
      }

      &.uk-open {
        .uk-offcanvas-bar {
          right: 0;

        }
      }


    }
  }
}

</style>
