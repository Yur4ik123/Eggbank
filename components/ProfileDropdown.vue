<template>
  <div uk-dropdown="mode: click; pos: bottom-right; offset: 28" class="profile__dropdown">
    <ul class="drop__list">
      <li>
        <NuxtLink to="/profile/account" class="drop__link">
          My Account
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile/orders" class="drop__link">
          My Order
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile/wishlist" class="drop__link">
          My Favorite Donors <span class="count">1</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile/invoices" class="drop__link">
          Invoices
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile/settings" class="drop__link">
          Settings
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/faq" class="drop__link">
          FAQ
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="" class="drop__link">
          <img src="~/assets/img/loguot.svg" width="20" height="20" alt="">Sign out
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProfileDropdown"
}
</script>

<style lang="scss" scoped>
.profile__dropdown {
  background: #CDE4F0;
  border-radius: 0px 0px 12px 12px;
  padding: 10px 15px 20px;
  width: 220px;

  .drop__list {
    li {
      margin-bottom: 10px;
      border-bottom: 1px solid #FAFCFD;
      padding-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
        border-bottom: none;
        padding-bottom: 0;
      }

      .drop__link {
        font-size: 18px;
        line-height: 30px;
        color: black !important;
        transition: 0.3s;
        display: inline-flex;
        align-items: center;

        img {
          margin-right: 10px;
        }

        .count {
          width: 24px;
          height: 24px;
          background-color: #E8BDD8;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-left: 3px;
          border-radius: 100%;
          font-size: 16px;
          line-height: 16px;
        }

        &:hover {
          color: $green-hover !important;
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .profile__dropdown {
    top: 61px !important;
  }
}
</style>
