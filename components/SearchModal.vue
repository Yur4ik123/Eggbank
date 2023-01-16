<template>
  <div class=" search__modal uk-flex-top" ref="search_modal" id="search_modal" uk-modal>
    <button class="uk-modal-close">
      <img src="/img/search__close.svg" width="65" height="65" alt="">
    </button>
    <div class="uk-modal-dialog uk-margin-auto-vertical">
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
  </div>
</template>

<script>
export default {
  name: "SearchModal"
}
</script>

<style lang="scss" scoped>
.search__modal {
  .uk-modal-close {
    position: absolute;
    top: 15px;
    right: 20px;
    background-color: transparent;
  }
  .uk-modal-dialog{
    border-radius: 80px;
    width: 100%;
    max-width: 880px!important;
  }
  .search__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    height: 60px;


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

  @media screen and (max-width: 768px) {
    .search__wrapper {
      padding: 0 15px;
      height: 44px;
      input {
        font-size: 14px;
      }
    }
  }
}
</style>
