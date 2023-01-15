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
          <div class="search__wrapper">
            <input type="text" placeholder="What are you looking for?">
            <button type="button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.8102 18.9119L14.6466 13.8308C15.9988 12.3616 16.8296 10.4187 16.8296 8.28068C16.8289 3.7071 13.0618 0 8.41447 0C3.76713 0 0 3.7071 0 8.28068C0 12.8543 3.76713 16.5614 8.41447 16.5614C10.4224 16.5614 12.2641 15.8668 13.7107 14.7122L18.8944 19.8134C19.147 20.0622 19.5571 20.0622 19.8096 19.8134C20.0628 19.5646 20.0628 19.1607 19.8102 18.9119ZM8.41447 15.2873C4.48231 15.2873 1.29468 12.1504 1.29468 8.28068C1.29468 4.41101 4.48231 1.27403 8.41447 1.27403C12.3467 1.27403 15.5343 4.41101 15.5343 8.28068C15.5343 12.1504 12.3467 15.2873 8.41447 15.2873Z"
                  fill="black"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="nav__block">
          <NuxtLink to="" class="nav__item">
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
          <NuxtLink to="" class="nav__item">
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

    .search__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 600px;
      width: 100%;
      padding: 20px;
      height: 60px;
      border: 1px solid #A2CDE3;
      border-radius: 80px;

      input {
        width: 100%;
        background-color: transparent;
        border: none;
        font-size: 16px;
        line-height: 22px;
        color: black;
        font-family: Avenir, sans-serif;
        padding-right: 20px;
      }

      button {
        background-color: transparent;
      }
    }
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
