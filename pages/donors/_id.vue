<template>
  <div class="donor__page">
    <PartialsBreadcrumbs></PartialsBreadcrumbs>
    <div class="container">
      <div class="page__nav">
        <a href="" class="nav__links">
          About the donor
        </a>
        <a href="" class="nav__links">
          Personal Information
        </a>
        <a href="" class="nav__links">
          Other detheils
        </a>
        <a href="" class="nav__links">
          Medical information
        </a>

      </div>
      <div class="page__grid">
        <div class="main__info">
          <CategoryDonorGallery></CategoryDonorGallery>
          <div class="donor__title">
            <div class="donor__id">
              Donor id326338
            </div>
            <div class="params__wrapper">
              <div class="params__row">
                <div class="param__title">
                  Donor Identity
                </div>
                <div class="param__data">
                  ID Release/Non-ID Release
                </div>
              </div>
              <div class="params__row">
                <div class="param__title">
                  Race
                </div>
                <div class="param__data">
                  ID Release/Non-ID Release
                </div>
              </div>
              <div class="params__row">
                <div class="param__title">
                  Ethnic Origin
                </div>
                <div class="param__data">
                  Middle Eastern
                </div>
              </div>
              <div class="params__row">
                <div class="param__title">
                  Natural Eye colour
                </div>
                <div class="param__data">
                  Blue
                </div>
              </div>
              <div class="params__row">
                <div class="param__title">
                  Natural Hair colour
                </div>
                <div class="param__data">
                  Medium brown hair
                </div>
              </div>
              <div class="params__row">
                <div class="param__title">
                  Height
                </div>
                <div class="param__data">
                  167cm
                </div>
              </div>
              <div class="params__row">
                <div class="param__title">
                  Weight
                </div>
                <div class="param__data">
                  56 kg
                </div>
              </div>
              <div class="params__row">
                <div class="param__title">
                  Education
                </div>
                <div class="param__data">
                  specialized secondary
                </div>
              </div>
            </div>
            <div class="viewed__count">
              <img src="/img/eye.svg" width="22" height="22" alt="">
              total viewed 5 times
            </div>
          </div>

        </div>
        <div class="buy__block">
          <div class="block__wrapper">
            <div class="block__part">
              <div class="part__header">
                Stock Availability ***
              </div>
              <div class="part__subheader">
                Packages
              </div>
              <div class="packages">
                <div class="pack">
                  <div class="checkbox__wrapper">
                    <label>
                      <input class="uk-checkbox" type="radio" v-model="pack" value="0">
                      Basic Egg Package**
                    </label>
                  </div>
                  <div class="short__desc">
                    8 cryo donor’s oocytes*
                  </div>
                  <div class="gar">
                    (1 blastocyst guaranteed)
                  </div>
                  <div class="price">
                    <div class="price__wrap">
                      $ 9,680.00 *
                    </div>
                    <span class="tax">
                        inc TAX.
                    </span>

                  </div>

                </div>
                <div class="pack">
                  <div class="checkbox__wrapper">
                    <label>
                      <input class="uk-checkbox" type="radio" v-model="pack" value="1">
                      Premier Egg Package**

                    </label>
                  </div>
                  <div class="short__desc">
                    14 cryo donor’s oocytes

                  </div>
                  <div class="gar">
                    (2 blastocyst guaranteed
                  </div>
                  <div class="price">
                    <div class="price__wrap">
                      $ 15,400.00 *
                    </div>
                    <span class="tax">
                        inc TAX.
                    </span>

                  </div>
                </div>

              </div>

            </div>
            <div class="block__part">
              <div class="part__header">
                Options
              </div>
              <div class="part__subheader">
                Upon Request
              </div>
              <div class="opt__cols">
                <div class="col">
                  Each Additional Oocyte
                </div>
                <div class="col cost__coll ">
                  <div class="cost">$ 1,090.00 *</div>
                  <div class="tax">
                    inc TAX.
                  </div>
                </div>
              </div>
              <div class="opt__cols">
                <div class="col green">
                  Fresh sycle oocite*
                </div>
                <div class="col green end">
                  Available
                </div>
              </div>
              <PartialsAvailability statys="now"/>
              <a href="" class="reservation__btn">
                Reservation
              </a>
              <div class="read__it-first">
                <div class="head">
                  Read it first
                </div>
                <NuxtLink to="" class="nav__to">
                  *Cost and payment conditions

                </NuxtLink>
                <NuxtLink to="" class="nav__to">
                  **Delivery conditions
                </NuxtLink>
                <NuxtLink to="" class="nav__to">
                  ***About series of steps of Donor’s selection
                </NuxtLink>
              </div>
              <div class="question__block">
                <div class="num__row">
                  <span>Questions?</span>
                  <a href="tel:+10000000000">+1 NXX-NXX-XXXX</a>
                </div>
                <div class="schedule">
                  <span class="icon">
                      <img src="/img/clock.svg" width="20" height="20" alt="">
                  </span>
                  Mon - Fri: 9am - 9pm (EST)
                </div>
                <div class="write__us-wrapper">
                  <a href="" class="write__us-btn">Write us now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="block__wrapper">
            <div class="block__head">
              Reservation List
            </div>
            <div class="qty__wrapper">
              <div class="qty__header">
                Donor's Cryo Oocyte, qty
              </div>
              <div class="qty__input-wrapper">
                <a class="qty__btn minus" @click.prevent="minusQty">
                  <MinusIcon/>
                </a>
                <input type="number" class="qty" v-model="qty">
                <a class="qty__btn plus" @click.prevent="plusQty">
                  <PlusIcon/>
                </a>
              </div>
              <div class="av__req">
                Availability Request
              </div>
              <div class="fresh__wrapper">
                <label>
                  Fresh sycle oocite
                  <input
                    :class="{'active':fresh}"
                    v-model="fresh"
                    class="uk-checkbox"
                    type="checkbox">
                </label>

              </div>
              <PartialsAvailability status="request"/>
              <a href="" class="reservation__btn">
                Reservation
              </a>
              <div class="question__block">
                <div class="num__row">
                  <span>Questions?</span>
                  <a href="tel:+10000000000">+1 NXX-NXX-XXXX</a>
                </div>
                <div class="schedule">
                  <span class="icon">
                      <img src="/img/clock.svg" width="20" height="20" alt="">
                  </span>
                  Mon - Fri: 9am - 9pm (EST)
                </div>
                <div class="write__us-wrapper">
                  <a href="" class="write__us-btn">Write us now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="third__part">
          <div class="personal__info">
            <div class="personal__info-head">
              Personal Information / Profile Information
            </div>
            <div class="information__accordion-wrapper">
              <ul uk-accordion class="information__accordion">
                <li class="accordion__item">
                  <a class="uk-accordion-title" href="#">
                    Physical characteristics
                  </a>
                  <div class="uk-accordion-content">
                    <div class="physical__table">
                      <div class="table__row">
                        <div class="col title">
                          Race
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history

                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Ethnic Origin
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Age
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Skin colour
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Face shape
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Hair type
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Hair colour
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Forehead
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Eyes shape
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <a class="uk-accordion-title" href="#">
                    Other details
                  </a>
                  <div class="uk-accordion-content">
                    <div class="physical__table">
                      <div class="table__row">
                        <div class="col title">
                          Race
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history

                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Ethnic Origin
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Age
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Skin colour
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Face shape
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Hair type
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Hair colour
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Forehead
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Eyes shape
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <a class="uk-accordion-title" href="#">
                    Medical information
                  </a>
                  <div class="uk-accordion-content">
                    <div class="physical__table">
                      <div class="table__row">
                        <div class="col title">
                          Race
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history

                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Ethnic Origin
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Age
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Skin colour
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Face shape
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Hair type
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Hair colour
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Forehead
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Eyes shape
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood
                            photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
          <div class="photos">
            <div class="personal__info-head">
              <span> Photos</span>
              <span class="label">
                *All photos are natural, not processed
              </span>
            </div>
            <div uk-slider="finite:true" class="photo__slider">

              <div class="uk-slider-container">
                <ul class="uk-slider-items">
                  <li>
                    <div class="slide__wrapper">
                      <div class="img__wrapper">
                        <img src="/img/photo.png" width="" height="" alt="">
                      </div>
                      <div class="label">
                        Chilhood
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="slide__wrapper">
                      <div class="img__wrapper">
                        <img src="/img/photo.png" width="" height="" alt="">
                      </div>
                      <div class="label">
                        Adolescence
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="slide__wrapper">
                      <div class="img__wrapper">
                        <img src="/img/photo.png" width="" height="" alt="">
                      </div>
                      <div class="label">
                        Now
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="slide__wrapper">
                      <div class="img__wrapper">
                        <img src="/img/photo.png" width="" height="" alt="">
                      </div>
                      <div class="label">
                        Some text
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="slide__wrapper">
                      <div class="img__wrapper">
                        <img src="/img/photo.png" width="" height="" alt="">
                      </div>
                      <div class="label">
                        Chilhood
                      </div>
                    </div>
                  </li>

                </ul>
              </div>

              <a class="slider__nav prev" href="#" uk-slider-item="previous">
                <SliderPrev/>
              </a>
              <a class="slider__nav next" href="#" uk-slider-item="next">
                <SliderNext/>
              </a>


            </div>
          </div>
          <div class="documents">
            <div class="personal__info-head">
              Download documents
            </div>
            <div class="docs__wrapper">
              <a href="" class="doc__item">
                <img src="/img/pdf.svg" width="40" height="40" alt="">
                Pen sketch
              </a>
              <a href="" class="doc__item">
                <img src="/img/pdf.svg" width="40" height="40" alt="">
                Emotional Intelligence profile
              </a>
              <a href="" class="doc__item">
                <img src="/img/mp3.svg" width="40" height="40" alt="">
                Audio with donor voice
              </a>
            </div>
          </div>
          <div class="family__tree">
            <div class="personal__info-head">
              Family Tree
            </div>
            <div uk-slider="finite:true" class="family__slider">

              <div class="uk-slider-container">
                <ul class="uk-slider-items">
                  <li>
                    <div class="slide__wrapper">
                      <div class="fam__img">
                        <img src="/img/family.png" width="180" height="180" loading="lazy" alt="">

                      </div>
                      <div class="fam__age">
                        55 Years
                      </div>
                      <div class="fam__info">
                        <div class="fam__info-row">
                          <div class="row__title">
                            Kinship
                          </div>
                          <div class="row__data">
                            Mother
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Race
                          </div>
                          <div class="row__data">
                            Middle Eastern
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Eye colour
                          </div>
                          <div class="row__data">
                            Blue
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Natural Hair colour

                          </div>
                          <div class="row__data">
                            Medium brown hair
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Education
                          </div>
                          <div class="row__data">
                            specialized secondary
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="slide__wrapper">
                      <div class="fam__img">
                        <img src="/img/family.png" width="180" height="180" loading="lazy" alt="">

                      </div>
                      <div class="fam__age">
                        55 Years
                      </div>
                      <div class="fam__info">
                        <div class="fam__info-row">
                          <div class="row__title">
                            Kinship
                          </div>
                          <div class="row__data">
                            Mother
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Race
                          </div>
                          <div class="row__data">
                            Middle Eastern
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Eye colour
                          </div>
                          <div class="row__data">
                            Blue
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Natural Hair colour

                          </div>
                          <div class="row__data">
                            Medium brown hair
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Education
                          </div>
                          <div class="row__data">
                            specialized secondary
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="slide__wrapper">
                      <div class="fam__img">
                        <img src="/img/family.png" width="180" height="180" loading="lazy" alt="">

                      </div>
                      <div class="fam__age">
                        55 Years
                      </div>
                      <div class="fam__info">
                        <div class="fam__info-row">
                          <div class="row__title">
                            Kinship
                          </div>
                          <div class="row__data">
                            Mother
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Race
                          </div>
                          <div class="row__data">
                            Middle Eastern
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Eye colour
                          </div>
                          <div class="row__data">
                            Blue
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Natural Hair colour

                          </div>
                          <div class="row__data">
                            Medium brown hair
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Education
                          </div>
                          <div class="row__data">
                            specialized secondary
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="slide__wrapper">
                      <div class="fam__img">
                        <img src="/img/family.png" width="180" height="180" loading="lazy" alt="">

                      </div>
                      <div class="fam__age">
                        55 Years
                      </div>
                      <div class="fam__info">
                        <div class="fam__info-row">
                          <div class="row__title">
                            Kinship
                          </div>
                          <div class="row__data">
                            Mother
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Race
                          </div>
                          <div class="row__data">
                            Middle Eastern
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Eye colour
                          </div>
                          <div class="row__data">
                            Blue
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Natural Hair colour

                          </div>
                          <div class="row__data">
                            Medium brown hair
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Education
                          </div>
                          <div class="row__data">
                            specialized secondary
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="slide__wrapper">
                      <div class="fam__img">
                        <img src="/img/family.png" width="180" height="180" loading="lazy" alt="">

                      </div>
                      <div class="fam__age">
                        55 Years
                      </div>
                      <div class="fam__info">
                        <div class="fam__info-row">
                          <div class="row__title">
                            Kinship
                          </div>
                          <div class="row__data">
                            Mother
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Race
                          </div>
                          <div class="row__data">
                            Middle Eastern
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Eye colour
                          </div>
                          <div class="row__data">
                            Blue
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Natural Hair colour

                          </div>
                          <div class="row__data">
                            Medium brown hair
                          </div>
                        </div>
                        <div class="fam__info-row">
                          <div class="row__title">
                            Education
                          </div>
                          <div class="row__data">
                            specialized secondary
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="nav__wrapper">
                <a class="slider__nav prev" href="#" uk-slider-item="previous">
                  <SliderPrev/>
                </a>
                <a class="slider__nav next" href="#" uk-slider-item="next">
                  <SliderNext/>
                </a>
              </div>


            </div>
          </div>
          <div class="handwriting">
            <div class="personal__info-head">
              Handwriting
            </div>
            <div class="img__wrapper">
              <img src="/img/wrating.png" width="656" height="320" loading="lazy" alt="">
            </div>
          </div>
          <div class="eggbank__impressions">
            <div class="personal__info-head">
              Egg Bank staff impression
            </div>
            <div class="impressions__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec,
                mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed
                eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit
                amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu
                diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo
                hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet
                orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan,
                blandit sed diam.
              </p>
            </div>
          </div>
          <div class="qa__block">
            <div class="personal__info-head">
              Q&A with Anna Bolgar
            </div>
            <div class="qa__subtitle">
              Donor [nickname of donour] answers questions about life, experiences and preferences
            </div>
            <div class="information__accordion-wrapper">
              <ul uk-accordion class="information__accordion">
                <li class="accordion__item">
                  <a class="uk-accordion-title" href="#">
                    How much alcohol do you drink per week?
                  </a>
                  <div class="uk-accordion-content">
                    <div class="qa__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra
                        nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,
                        tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.
                      </p>
                    </div>

                  </div>
                </li>
                <li class="accordion__item">
                  <a class="uk-accordion-title" href="#">
                    Question question
                  </a>
                  <div class="uk-accordion-content">
                    <div class="qa__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra
                        nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,
                        tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.
                      </p>
                    </div>

                  </div>
                </li>
                <li class="accordion__item">
                  <a class="uk-accordion-title" href="#">
                    How much alcohol do you drink per week?
                  </a>
                  <div class="uk-accordion-content">
                    <div class="qa__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra
                        nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,
                        tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.
                      </p>
                    </div>

                  </div>
                </li>
                <li class="accordion__item">
                  <a class="uk-accordion-title" href="#">
                    How much alcohol do you drink per week?
                  </a>
                  <div class="uk-accordion-content">
                    <div class="qa__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra
                        nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,
                        tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.
                      </p>
                    </div>

                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import MinusIcon from '~/assets/img/minus.svg?inline'
import PlusIcon from '~/assets/img/plus.svg?inline'
import SliderPrev from '~/assets/img/slider_nav-prev.svg?inline'
import SliderNext from '~/assets/img/slider_nav-next.svg?inline'

export default {
  name: "Donor",
  data() {
    return {
      pack: 0,
      qty: 0,
      fresh: true,
      availability: 'now' //'request'
    }
  },
  methods: {
    minusQty() {
      this.qty > 0 ? this.qty-- : false

    },
    plusQty() {
      this.qty++;
    }
  },
  components: {
    MinusIcon,
    PlusIcon,
    SliderPrev,
    SliderNext
  }
}
</script>

<style lang="scss" scoped>
.page__nav {
  padding: 20px 25px;
  background: #CDE4F0;
  border: 1px solid #C3DAE7;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 19px;
  z-index: 5;

  .nav__links {
    font-size: 16px;
    line-height: 22px;
    color: black !important;
    transition: 0.3s;

    &:hover {
      color: $green !important;;
    }
  }
}

.page__grid {
  display: grid;
  grid-template-columns: 1fr 285px;
  grid-gap: 20px;
  grid-auto-rows: auto;
  grid-template-rows: (4, 1fr);
  margin-bottom: 70px;

  .main__info {
    display: grid;
    grid-template-columns: 1fr 270px;
    grid-gap: 20px;
    height: fit-content;
    grid-row-start: 1;
    grid-row-end: 2;

    .donor__images {

    }

    .donor__title {
      .donor__id {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 10px;
      }

      .params__row {
        margin-bottom: 10px;

        .param__title {
          font-size: 16px;
          line-height: 20px;
          color: $green;

        }

        .param__data {
          font-size: 18px;
          line-height: 20px;
          color: black;
        }
      }

      .viewed__count {
        margin-top: 22px;
        padding-top: 27px;
        border-top: 1px solid #CDE4F0;
        display: flex;
        align-items: center;
        font-size: 16px;
        line-height: 20px;
        color: #979797;
        margin-bottom: 20px;

        img {
          margin-right: 12px;
        }
      }
    }
  }

  .buy__block {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;

    .block__wrapper {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      padding: 15px;
      background: #FFFFFF;
      border: 1px solid #CDE4F0;
      border-radius: 12px;
      height: fit-content;

      .block__part {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #CDE4F0;

        &:last-child {
          border: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .part__header {
          font-size: 22px;
          line-height: 30px;
          margin-bottom: 1px;
          text-align: center;
        }

        .part__subheader {
          color: #979797;
          font-size: 16px;
          line-height: 30px;
          text-align: center;
          margin-bottom: 10px;
        }

        .packages {
          @include input-wrapper;

          .pack {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #CDE4F0;

            &:last-child {
              margin-bottom: 0;
              padding-bottom: 0;
              border: none;
            }

            .checkbox__wrapper {
              label {
                color: $green;

                font-size: 16px;
                line-height: 30px;

                .uk-checkbox {
                  margin-right: 8px;
                }
              }
            }

            .short__desc, .gar {

              font-size: 16px;
              line-height: 30px;

            }

            .gar {
              color: #979797;
            }

            .price, .gar, .short__desc {
              margin-left: 32px;
            }

            .price {
              display: flex;
              align-items: center;
              margin-top: 13px;

              .price__wrap {
                height: 34px;
                padding: 2px 10px;
                background: $green;
                border-radius: 12px;
                font-size: 16px;
                line-height: 30px;
                color: white;
                margin-right: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
              }


            }


          }


        }

        .tax {
          font-size: 12px;
          line-height: 30px;
          color: $green;
        }

        .opt__cols {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          grid-gap: 3px;
          margin-bottom: 10px;

          .col {
            font-size: 16px;
            line-height: 30px;
            color: black;

            &.green {
              color: $green;
            }

            &.end {
              text-align: end;
            }
          }

          .col.cost__coll {
            justify-self: end;

            .cost {
              height: 34px;
              padding: 2px 10px;
              background: $green;
              border-radius: 12px;
              font-size: 16px;
              line-height: 30px;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 5px;
            }

            .tax {
              text-align: end;
            }

          }


        }


        .read__it-first {
          margin-top: 50px;

          display: flex;
          flex-direction: column;
          align-items: center;

          .head {
            font-size: 22px;
            line-height: 30px;
            margin-bottom: 15px;
            color: $green;
          }

          .nav__to {
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: $green !important;
            text-decoration: underline !important;
            transition: 0.3s;
            margin-bottom: 15px;

            &:hover {
              text-decoration: none !important;
              color: $green-hover !important;
            }
          }
        }


      }

      .question__block {
        padding-top: 10px;
        border-top: 1px solid #CDE4F0;
        margin-top: 25px;

        .num__row {
          margin-bottom: 7px;
          display: flex;
          align-items: center;
          font-size: 16px;
          line-height: 22px;

          span {

            color: black;
            margin-right: 10px;
          }

          a {
            color: $green !important;;
            text-decoration: underline !important;
            transition: 0.3s;

            &:hover {
              text-decoration: none !important;
              color: $green-hover !important;
            }

          }
        }

        .schedule {
          margin-bottom: 11px;
          display: flex;
          align-items: center;
          font-size: 16px;
          line-height: 22px;

          .icon {
            margin-right: 10px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $green;
            width: 34px;
            height: 34px;
          }
        }

        .write__us-wrapper {
          text-align: center;

          .write__us-btn {
            color: $green !important;
            text-decoration: underline !important;
            transition: 0.3s;
            font-size: 16px;
            line-height: 22px;

            &:hover {
              color: $green-hover !important;
              text-decoration: none !important;
            }

          }
        }
      }
    }

    .reservation__btn {
      background: $green;
      border-radius: 80px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      color: white !important;
      transition: 0.3s;

      &:hover {
        background: $green-hover !important;
      }

    }

    .block__head {
      padding: 15px;
      background: #CDE4F0;
      border-radius: 12px;
      margin: -15px -15px 20px;
      text-align: center;
      font-size: 22px;
      line-height: 30px;
    }

    .qty__wrapper {
      .qty__header {
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        margin-bottom: 14px;
      }

      .qty__input-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 24px;

        .qty__btn {
          padding: 10px;
          cursor: pointer;

          svg {
            path {
              transition: 0.3s;
            }
          }

          &:hover {
            svg {
              path {
                fill: $green-hover;
              }
            }
          }

        }

        input {
          background-color: white;
          width: 75px;
          height: 60px;
          text-align: center;
          font-family: Avenir, sans-serif;
          font-size: 18px;
          line-height: 30px;
          border: 1px solid #CDE4F0;
          border-radius: 12px;
        }
      }

      .av__req {
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 17px;
        color: $green;
        text-align: center;

      }

      .fresh__wrapper {
        margin-bottom: 20px;

        label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 18px;
          line-height: 30px;
          color: black;

          .uk-checkbox {
            margin-left: 12px;
            width: 64px;
            height: 32px;
            background: #8C9097;
            border-radius: 100px;
            position: relative;

            &:focus {
              border-color: transparent;
            }

            &:after {
              transition: 0.5s;
              position: absolute;
              content: ' ';
              top: 50%;
              transform: translate(0, -50%);
              left: 1px;
              width: 29px;
              height: 29px;
              background-color: white;
              border-radius: 100%;
            }
          }

          .uk-checkbox.active {
            background: $green;

            &:after {
              transform: translate(31px, -50%);
            }
          }

        }


      }
    }
  }

  .third__part {
    grid-row-start: 2;
    grid-row-end: auto;
    overflow-x: hidden;

    .personal__info-head {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 15px;
    }

    .personal__info {
      margin-bottom: 40px;


      .physical__table {

        .table__row {
          display: grid;
          grid-template-columns: 180px 1fr;
          border-bottom: 1px solid #CDE4F0;

          &:last-child {
            border: none;
          }

          .col {
            padding: 5px 25px;
          }

          .title {
            display: flex;
            align-items: center;
            font-size: 18px;
            line-height: 30px;
            color: $green;
            border-right: 1px solid #CDE4F0;
          }

          .description {
            @include default-text;
          }
        }
      }
    }

    .information__accordion-wrapper {
      .information__accordion {
        margin-bottom: 40px;

        .accordion__item {
          border: 1px solid #CDE4F0;
          border-top: none;

          border-radius: 12px;

          .uk-accordion-title {
            padding: 15px 25px;
            background: #CDE4F0;
            border: 1px solid #C3DAE7;
            border-radius: 12px;

            &:before {
              background-image: url("/img/acc__arr.svg");
              transition: 0.3s;
            }

          }

          &.uk-open {
            .uk-accordion-title {
              &:before {
                transform: rotateX(180deg);
              }
            }
          }
        }

        .uk-accordion-content {
          margin-top: 0;


        }
      }
    }

    .photos {
      margin-bottom: 40px;

      .personal__info-head {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .label {
          font-size: 16px;
          line-height: 30px;
          color: #979797;
        }
      }

      .photo__slider {
        position: relative;
        z-index: 1;

        .uk-slider-container {
          margin: 0 55px;

          .uk-slider-items {
            li {
              padding: 0 10px;
              width: 25%;

              .slide__wrapper {
                padding-bottom: 15px;
                position: relative;

                .img__wrapper {
                  border: 1px solid #89CBC4;
                  border-radius: 12px;
                  overflow: hidden;

                  img {
                    width: 100%;
                    object-fit: contain;
                  }
                }

                .label {
                  position: absolute;
                  bottom: 0;
                  left: 10px;
                  font-size: 18px;
                  line-height: 30px;
                  color: white;
                  padding: 2px 10px;
                  background: $green;
                  border-radius: 12px;
                }
              }
            }
          }
        }

        .slider__nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 100%;
          border: 1px solid $green;
          transition: 0.3s;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;

          &.uk-invisible {
            visibility: visible !important;
            border-color: lightgray;

            svg {
              path {
                fill: lightgray;
              }
            }
          }

          &.prev {
            left: 0;
          }

          &.next {
            right: 0;

          }

          svg {
            path {
              transition: 0.3s;
            }
          }

          &:hover {
            border-color: $green-hover;

            svg {
              path {
                fill: $green-hover;
              }
            }
          }
        }

      }
    }

    .documents {
      margin-bottom: 40px;

      .docs__wrapper {
        display: flex;

        .doc__item {
          display: flex;
          align-items: center;
          font-size: 18px;
          line-height: 30px;
          color: $green !important;
          text-decoration: underline !important;
          transition: 0.3s;
          margin-right: 35px;

          &:last-child {
            margin-right: 0;
          }

          &:hover {
            text-decoration: none !important;
            color: $green-hover !important;
          }

          img {
            margin-right: 9px;
          }
        }
      }
    }

    .family__tree {
      margin-bottom: 40px;

      .personal__info-head {
        margin-bottom: 25px;
      }

      .family__slider {
        position: relative;

        .uk-slider-items {
          margin-left: -10px !important;

          li {
            padding-left: 10px;
            width: 33.333%;

          }

          .slide__wrapper {
            background: #FFFFFF;
            border: 1px solid #CDE4F0;
            border-radius: 12px;
            padding: 25px 15px;

            .fam__img {
              border-radius: 100%;
              width: 180px;
              height: 180px;
              overflow: hidden;
              border: 1px solid #89CBC4;
              margin: 0 auto 10px;
            }

            .fam__age {
              font-size: 18px;
              line-height: 30px;
              text-align: center;
              margin-bottom: 10px;
            }

            .fam__info {
              padding-top: 15px;
              border-top: 1px solid $green;

              .fam__info-row {
                margin-bottom: 10px;

                &:last-child {
                  margin-bottom: 0;
                }

                .row__title {
                  font-size: 16px;
                  line-height: 20px;
                  color: $green;
                }

                .row__data {
                  font-size: 18px;
                  line-height: 20px;
                  color: black;
                }
              }
            }

          }
        }

        .nav__wrapper {
          position: absolute;
          top: -58px;
          right: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 10px;
        }

        .slider__nav {

          width: 36px;
          height: 36px;
          border-radius: 100%;
          border: 1px solid $green;
          transition: 0.3s;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;

          &.uk-invisible {
            visibility: visible !important;
            border-color: lightgray;

            svg {
              path {
                fill: lightgray;
              }
            }
          }

          &.prev {
            left: 0;
          }

          &.next {
            right: 0;

          }

          svg {
            path {
              transition: 0.3s;
            }
          }

          &:hover {
            border-color: $green-hover;

            svg {
              path {
                fill: $green-hover;
              }
            }
          }
        }
      }
    }

    .handwriting {
      margin-bottom: 40px;

      .personal__info-head {
        margin-bottom: 25px;
      }

      .img__wrapper {
        padding: 10px;
        background: #FFFFFF;
        border: 1px solid #CDE4F0;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          object-fit: contain;
          max-width: 100%;
          height: auto;
        }
      }
    }

    .eggbank__impressions {
      padding-bottom: 40px;
      border-bottom: 1px solid $green;
      margin-bottom: 40px;

      .personal__info-head {
        margin-bottom: 25px;
      }

      .impressions__text {
        @include default-text;
      }
    }

    .qa__block {
      .personal__info-head {
        margin-bottom: 25px;
      }

      .qa__subtitle {
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 15px;
      }

      .qa__text {
        padding: 25px;
        @include default-text
      }

    }
  }

}

@media screen and (max-width: 1200px) {
  .page__grid .third__part .photos .photo__slider .uk-slider-container .uk-slider-items li {
    width: 33.3%;
  }
  .page__grid .third__part .documents .docs__wrapper {
    flex-wrap: wrap;

    .doc__item {
      margin-bottom: 15px;
    }
  }
}

@media screen and (max-width: 992px) {
  .page__grid .third__part .photos .photo__slider .uk-slider-container .uk-slider-items li {
    width: 50%;
  }
  .page__grid .third__part .family__tree .family__slider .uk-slider-items li {
    width: 50%;

  }
  .page__grid .main__info {
    grid-template-columns: 1fr 200px;
  }
}

@media screen and (max-width: 880px) {
  .page__grid {
    grid-template-columns: 1fr;
    grid-gap: 25px;

    .main__info {
      grid-row-start: initial;
      grid-row-end: initial;
      grid-template-columns: 2fr 1fr;
    }

    .buy__block {
      grid-row-start: initial;
      grid-row-end: initial;
      grid-column-start: initial;
      grid-column-end: initial;
    }

    .third__part {
      grid-row-start: initial;
      grid-row-end: initial;
    }
  }
}

@media screen and (max-width: 768px) {
  .page__nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    padding: 13px;
    margin-bottom: 15px;

    .nav__links {
      text-align: center;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .page__grid {
    margin-bottom: 50px;
    .main__info {
      .donor__title {
        .donor__id {
          font-size: 18px;
          line-height: 30px;
          margin-bottom: 20px;
        }

        .params__row {
          .param__title, .param__data {
            font-size: 14px;
            line-height: 20px;
          }
        }

        .viewed__count {
          margin-top: 25px;
          padding-top: 25px;
          font-size: 14px;
          line-height: 20px;
        }

      }
    }

    .buy__block {
      .block__wrapper {
        .block__part {
          .part__header {
            font-size: 18px;
            line-height: 30px;
          }

          .part__subheader {
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 15px;
          }

          .packages {
            .pack {
              padding-left: 30%;

              .checkbox__wrapper {
                label {
                  font-size: 14px;
                  line-height: 24px;
                }
              }

              .short__desc, .gar {
                font-size: 14px;
                line-height: 24px;
              }

              .price {
                margin-top: 18px;

                .price__wrap {
                  font-size: 14px;
                  line-height: 24px;
                }
              }
            }
          }

          .opt__cols {
            .col {
              font-size: 14px;
              line-height: 30px;
            }

            .col.cost__coll {
              .cost {
                font-size: 14px;
                line-height: 24px;
              }
            }
          }

          .read__it-first {
            margin-top: 15px;

            .head {
              font-size: 18px;
              line-height: 30px;
              margin-bottom: 5px;
            }

            .nav__to {
              font-size: 14px;
              line-height: 18px;
            }
          }
        }

        .question__block {
          margin-top: 20px;

          .num__row {
            justify-content: space-between;
            font-size: 14px;
            line-height: 20px;
          }

          .schedule {
            margin: 0 auto 5px;
            justify-content: center;
            font-size: 14px;
            line-height: 20px;
          }

          .write__us-wrapper {
            .write__us-btn {
              font-size: 14px;
              line-height: 20px;
            }

          }
        }

        .block__head {
          padding: 8px;
          font-size: 18px;
          line-height: 30px;
          margin-bottom: 15px;
        }

      }

      .qty__wrapper {
        .qty__header {
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 15px;
        }

        .av__req {
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 21px;
        }

        .fresh__wrapper {
          label {
            font-size: 14px;
            line-height: 24px;
          }
        }
      }

      .reservation__btn {
        max-width: 255px;
        font-size: 14px;
        line-height: 24px;
        height: 44px;
        margin: 0 auto;
      }
    }

    .third__part {
      .personal__info-head {
        font-size: 18px;
        line-height: 30px;
      }

      .personal__info {
        margin-bottom: 30px;

        .personal__info-head {
          margin-bottom: 15px;
        }

        .physical__table {
          .table__row {
            grid-template-columns: 1fr;
            grid-gap: 5px;
            padding: 15px;

            .title {
              border-right: none;
              font-size: 14px;
              line-height: 24px;
              padding: 0;
            }

            .description {
              padding: 0;
            }
          }
        }
      }

      .information__accordion-wrapper {
        .information__accordion {
          .accordion__item {
            .uk-accordion-title {
              padding: 10px 15px;
              font-size: 14px;
              line-height: 24px;

              &:before {
                width: 14px;
                height: 14px;
                background-size: contain;
                margin-top: 5px;
              }
            }
          }
        }
      }
      .photos{
        margin-bottom: 30px;
        .personal__info-head{
          .label{
            font-size: 14px;
            line-height: 24px;
          }
        }
        .photo__slider{
          .uk-slider-container{
            margin: 0 40px;
            .uk-slider-items{
              li{
                .slide__wrapper{
                  padding-bottom: 13px;
                  .label{
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 14px;
                    line-height: 24px;
                  }
                }
              }
            }
          }
        }
      }
      .documents{
        margin-bottom: 30px;
        .docs__wrapper{
          column-gap: 20px;
          .doc__item{
            font-size: 14px;
            line-height: 24px;
            margin-right: 0;
          }
        }
      }
      .family__tree{
        .family__slider{
          .uk-slider-items{
            .slide__wrapper{
              padding: 15px 10px;
              .fam__img{
                width: 120px;
                height: 120px;
              }
              .fam__age{
                font-size: 14px;
                line-height: 24px;
                margin-bottom: 15px;
              }
              .fam__info{
                .fam__info-row{
                  .row__title, .row__data{
                    font-size: 14px;
                    line-height: 20px;
                  }
                }
              }
            }
          }
        }
      }
      .eggbank__impressions{
        margin-bottom: 30px;
        padding-bottom: 30px;
        .personal__info-head{
          margin-bottom: 20px;
        }
      }
      .qa__block{
        .personal__info-head{
          margin-bottom: 20px;
        }
        .qa__subtitle{
          font-size: 14px;
          line-height: 24px;
        }
        .qa__text{
          padding: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .page__grid {
    .main__info {

      grid-template-columns: 1fr;

      .donor__title {
        .params__wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 15px;
        }
      }
    }
  }
  .page__grid .third__part .photos .photo__slider .uk-slider-container .uk-slider-items li{
    width: 100%;
  }
}

@media screen and (max-width: 540px) {
  .page__grid .buy__block .block__wrapper .block__part .packages .pack {
    padding-left: 20%;
  }
}
</style>
