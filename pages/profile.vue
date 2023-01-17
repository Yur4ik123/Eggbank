<template>
  <div class="profile__page">
    <PartialsBreadcrumbs/>
    <div class="container">
      <div class="profile__header">
        Hi, Jony Doel
      </div>
      <div class="profile__wrapper">
        <div class="profile__sidebar">
          <div class="sidebar">
            <NuxtLink to="/profile" class="sidebar__link">
                <span class="icon">
                  <img src="/img/prof1.svg" width="24" height="24" alt="">
                </span>
              <span class="title  ">My Account</span>
            </NuxtLink>

            <NuxtLink to="/profile/orders" class="sidebar__link">
                <span class="icon">
                  <img src="/img/prof2.png" width="24" height="24" alt="">
                </span>
              <span class="title  ">My Order</span>
            </NuxtLink>

            <NuxtLink to="/profile/wishlist" class="sidebar__link">
                <span class="icon">
                  <img src="/img/prof3.svg" width="24" height="20" alt="">
                </span>
              <span class="title  ">My Favorite Donors</span>
            </NuxtLink>

            <NuxtLink to="/profile/invoices" class="sidebar__link">
                <span class="icon">
                  <img src="/img/prof4.svg" width="22" height="22" alt="">
                </span>
              <span class="title  ">Invoices</span>
            </NuxtLink>

            <NuxtLink to="/profile/settings" class="sidebar__link">
                <span class="icon">
                  <img src="/img/prof5.svg" width="24" height="24" alt="">
                </span>
              <span class="title  ">Settings</span>
            </NuxtLink>


          </div>

        </div>
        <div class="profile__content">
          <NuxtChild></NuxtChild>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "index",

}
</script>

<style lang="scss" scoped>
.profile__page {
  margin-bottom: 70px;
}

.profile__header {
  margin: 15px 0 20px;
  font-size: 54px;
  line-height: 64px;
}

.profile__wrapper {
  display: grid;
  grid-template-columns: 284px 1fr;
  grid-gap: 20px;

  .profile__sidebar {
    .sidebar {
      background: #CDE4F0;
      border-radius: 12px;


      .sidebar__link:first-child {
        &:before {
          display: none;
        }
      }


      .sidebar__link {
        display: grid;
        grid-template-columns: 40px 1fr;
        grid-gap: 10px;
        padding: 10px 15px;
        border-radius: 12px;
        position: relative;
        transition: 0.3s;


        &:before {
          position: absolute;
          content: '';
          top: 0;
          left: 15px;
          right: 15px;
          height: 1px;
          background-color: white;
        }

        &.nuxt-link-exact-active {
          background-color: $green;

          &:before {
            display: none;
          }

          & + .sidebar__link {
            &:before {
              display: none;
            }
          }

        }

        .icon {
          width: 40px;
          height: 40px;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;

        }

        .title {
          align-self: center;
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
  }
}

@media screen and (max-width: 1250px) {
  .profile__wrapper {
    grid-template-columns: 230px 1fr;

  }
}

@media screen and (max-width: 1100px) {
  .profile__wrapper {
    grid-template-columns: 1fr;

    .profile__sidebar {
      display: none;
    }
  }
}

@media screen and (max-width: 768px) {
  .profile__page {
    margin-bottom: 50px;
  }
  .profile__header {
    font-size: 30px;
    line-height: 36px;
  }
}
</style>
