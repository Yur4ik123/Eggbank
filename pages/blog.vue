<template>
  <div class="blog__page">
    <PartialsBreadcrumbs/>
    <div class="container">
      <h1 class="page__header">
        ADONIS Egg Bank BLOG
      </h1>
      <div class="page__subheader">
        Guides, inspiration, and news on your journey towards becoming a parent using donor eggs
      </div>
    </div>
    <div class="blog__wrapper">
      <img src="/img/blog_abs1.png" width="242" height="466" loading="lazy" alt="" class="blog__abs">
      <div class="container">
        <img src="/img/blog_abs2.png" width="273" height="324" loading="lazy" alt="" class="blog__abs2">

        <ul class="blog__nav">
          <li class="nav__item">
            <NuxtLink to="/blog/" class="nav__item-link">All</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="/blog/fertility" class="nav__item-link">Fertility</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="/blog/donor-eggs" class="nav__item-link">Donor eggs</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="/blog/infertility" class="nav__item-link">Infertility and treatment</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="/blog/pregnancy" class="nav__item-link">Pregnancy</NuxtLink>
          </li>
        </ul>
        <NuxtChild/>
        <div class="btn__wrapper">
          <PartialsGreenBtn title="Load More"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog"
}
</script>

<style lang="scss">
.page__header {
  @include page-header;
  text-transform: initial;
  margin-bottom: 10px;
}

.page__subheader {
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 70px;
}

.blog__wrapper {
  padding: 55px 0 70px;
  border-radius: 60px 60px 0 0;
  background: #CDE4F0;
  position: relative;
  overflow: hidden;

  .blog__abs {
    z-index: 0;
    position: absolute;
    left: 0;
    bottom: 150px;
  }

  .container {
    position: relative;

    .blog__abs2 {
      position: absolute;
      top: 100px;
      right: 0;
      transform: translateX(50%);
    }
  }

  .blog__nav {
    padding-bottom: 25px !important;
    border-bottom: 1px solid #FFFFFF;
    display: flex;
    column-gap: 30px;
    margin-bottom: 45px !important;

    .nav__item {
      .nav__item-link {
        position: relative;
        z-index: 1;
        color: black !important;

        &.nuxt-link-exact-active {
          &:before {
            content: '';
            position: absolute;
            z-index: -1;
            left: -5px;
            right: -5px;
            top: -5px;
            bottom: -5px;
            background: #89CBC4;
            border-radius: 12px;
          }
        }

      }
    }
  }

  .blog__content {
    z-index: 2;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px 20px;
    margin-bottom: 50px;



  }

  .btn__wrapper {
    display: flex;
    justify-content: center;
  }
}



@media screen and (max-width: 850px) {
  .blog__wrapper {
    .blog__content {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media screen and (max-width: 768px) {
  .page__header {
    margin: 15px 0;
  }
  .page__subheader {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 40px;
  }
  .blog__wrapper {
    padding: 35px 0 50px;
    border-radius: 12px 12px 0 0;
    .blog__abs{
      display: none;
    }
    .container{
      .blog__abs2{
        display: none;
      }
    }
    .blog__nav {
      padding-bottom: 0 !important;
      border-bottom: none;
      margin-bottom: 30px !important;
      column-gap: 12px;
      row-gap: 12px;
      flex-wrap: wrap;
      justify-content: center;

      .nav__item {
        .nav__item-link {
          padding: 5px 12px;
          background-color: white;
          font-size: 12px;
          line-height: 24px;
          border-radius: 80px;

          &.nuxt-link-exact-active {
            background-color: #89CBC4;

            &:before {
              display: none !important;
            }
          }
        }

      }

    }

  }

}

@media screen and (max-width: 600px) {
  .blog__wrapper {
    .blog__content {
      grid-template-columns: 1fr;
      grid-gap: 30px;
    }
  }
}
</style>
