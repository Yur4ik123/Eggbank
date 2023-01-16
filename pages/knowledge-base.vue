<template>
  <div class="knowledge__page">
    <PartialsBreadcrumbs/>
    <div class="container">
      <h1 class="page__header">
        ADONIS Egg Bank KNOWLEDGE BASE

      </h1>
    </div>
    <div class="blocks__wrapper">
      <div class="container">
        <div class="search__block">
        <PartialsBlogSearch/>
        </div>
        <div class="nav__block">
          <NuxtLink to="/faq" class="nav__item">
            <div class="img__wrapper">
              <img src="/img/faq_icon.svg" width="385" height="140" alt="">
            </div>
            <div class="item__head">
              FAQ
            </div>
            <div class="item__title">
              Quick answers to the frequently
              asked questions
            </div>
          </NuxtLink>
          <NuxtLink to="/blog" class="nav__item">
            <div class="img__wrapper">
              <img src="/img/news_icon.svg" width="386" height="140" alt="">
            </div>
            <div class="item__head">
              NEWS
            </div>
            <div class="item__title">
              ADONIS Egg Bank useful articles
            </div>
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "knowledge-base"
}
</script>

<style lang="scss" scoped>
.page__header {
  text-align: center;
  margin-bottom: 65px;
}

.blocks__wrapper {
  padding: 55px 0 70px;
  background: #CDE4F0;
  border-radius: 60px 60px 0 0;

  .search__block {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;


  }

  .nav__block {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    .nav__item {
      background: #FAFCFD;
      border: 1px solid #CDE4F0;
      border-radius: 12px;
      transition: 0.3s;
      display: grid;

      &:hover {
        -webkit-box-shadow: 0px 0px 29px -12px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 29px -12px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 29px -12px rgba(0, 0, 0, 0.75);
      }

      .img__wrapper {
        width: 100%;
        margin-bottom: 15px;

        img {
          width: 100%;
        }
      }

      .item__head {
        font-size: 36px;
        line-height: 54px;
        text-align: center;

        color: black;
      }

      .item__title {
        padding: 15px 65px 20px;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .section__header {
    margin-bottom: 40px;
  }
  .blocks__wrapper {
    padding: 35px 0 50px;
    border-radius: 12px 12px 0 0;
    .search__block{
      .search__wrapper{
        input{
          font-size: 14px;
        }
      }
    }

    .nav__block {
      grid-gap: 8px;

      .nav__item {
        .img__wrapper {
          margin-bottom: 10px;
        }

        .item__head {
          font-size: 30px;
          line-height: 36px;
          margin-bottom: 5px;
        }

        .item__title {
          font-size: 14px;
          line-height: 24px;
          padding: 0 13px 30px;
        }
      }
    }
  }

}
</style>
