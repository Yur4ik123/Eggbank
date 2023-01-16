<template>
  <div class="post__page">
    <PartialsBreadcrumbs/>
    <div class="container">
      <div class="post__content">
        <img src="/img/post.png" style="float: left" width="590" height="373" loading="lazy" alt="">
        <h2>Header of the article</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis
          ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
          tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit
          iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque
          rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius
          pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis
          ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
          tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. </p>
        <p></p>
        <h2>
          Header of the article
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis
          ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
          tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit
          iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque
          rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius
          pretium ligula, a aliquam odio euismod sit amet. </p>
        <iframe width="100%" src="https://www.youtube.com/embed/6stlCkUDG_s" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        <p></p>
        <h2>Header of the article</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis
          ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
          tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit
          iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque
          rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius
          pretium ligula, a aliquam odio euismod sit amet.
        </p>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Ada Lovelace</td>
            <td>December 10, 1815</td>
            <td style="text-align: center"><a href="">Edit</a>
            </td>
          </tr>
          <tr>
            <td>Ada Lovelace</td>
            <td>December 10, 1815</td>
            <td style="text-align: center"><a href="">Edit</a>
            </td>
          </tr>
          <tr>
            <td>Ada Lovelace</td>
            <td>December 10, 1815</td>
            <td style="text-align: center"><a href="">Edit</a>
            </td>
          </tr>
          <tr>
            <td>Ada Lovelace</td>
            <td>December 10, 1815</td>
            <td style="text-align: center"><a href="">Edit</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="related__posts">
      <div class="container">
        <div class="section__header">
          Related Posts
        </div>
        <div class="posts__wrapper">
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post"
}
</script>

<style lang="scss" scoped>
.post__content {
  margin-bottom: 70px;
  @include default-text;

  img {
    padding-right: 40px;
    padding-bottom: 40px;
  }

  iframe {
    width: 100%;
    aspect-ratio: 16/9;
  }

  table {
    width: 100%;
    border: 1px solid #A0BAC8;
    border-radius: 12px;
    overflow: hidden;
    border-spacing: 0;

    thead {
      border-radius: 12px 12px 0px 0px;
      background-color: #89CBC4;
    }

    th, td {
      text-align: left;
      border-right: 1px solid #A0BAC8;
      padding: 12px;
      font-size: 18px;
      line-height: 36px;
      font-weight: 400;

      &:last-child {
        border-right: none;
      }

      a {
        color: #89CBC4 !important;
        text-decoration: underline !important;
      }
    }

    td {
      border-bottom: 1px solid #A0BAC8;
    }

    tr:last-child {
      td {
        border-bottom: none;
      }
    }

    th {

      color: white;
    }
  }
}

.related__posts {
  padding: 55px 0 70px;
  border-radius: 60px 60px 0 0;
  background: #CDE4F0;

  .section__header {
    @include section-header;
    margin-bottom: 25px;
  }

  .posts__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
}

@media screen and (max-width: 992px) {
  .related__posts {
    .posts__wrapper {
      grid-template-columns: 1fr 1fr;

    }
  }
}

@media screen and (max-width: 900px) {
  .post__content {
    img {
      float: none !important;
      width: 100%;
      padding: 15px 0 15px 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .related__posts {
    border-radius: 12px 12px 0 0;
    padding: 30px 0 50px;
  }
  .post__content {
    h2:first-child {
      margin-top: 0;
    }

    table {
      td, th {
        font-size: 14px;
        line-height: 24px;
        padding: 10px;
      }

      a {
        font-size: 14px !important;
        line-height: 24px;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .related__posts {
    .posts__wrapper {
      grid-template-columns: 1fr;

    }
  }
}

</style>
