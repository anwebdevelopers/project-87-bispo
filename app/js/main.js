document.addEventListener( 'DOMContentLoaded', function( event ) {

    'use strict';


    /*******************************************************/
    //ACCORDION
    /*******************************************************/
    ( function( $ ) {

        $( '.accordion' ).on( 'click', '.accordion__title', function( event ) {

            $( this ).closest( '.accordion' ).toggleClass( 'active' ).children( '.accordion__box' ).slideToggle( 300 );

        } ).find( '.accordion__box' ).hide();

    } ( jQuery ) );

    /*******************************************************/
    //SPEAKERS SHOW MORE
    /*******************************************************/

    ( function( $ ) {
        const jurySwiper = {};
        $( window ).on( 'load resize', function () {
            const $jury__box =  $( '.jury__box' );
            if ( window.innerWidth <= 480 ) {
                $jury__box.each( function () {
                    const $this = $( this );

                    if ( ! jurySwiper[ $this.index() ] || jurySwiper[ $this.index() ].destroyed ) {
                        $this.addClass( 'swiper-container' )
                            .find( '.jury__item' )
                            .addClass( 'swiper-slide' )
                            .wrapAll( '<div class="jury__wrapper swiper-wrapper"></div>' )
                            .end()

                            // .before( '<div class="jury__dots"></div>' )
                            .append( '<div class="jury__nav"><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>' )
                            .append( '<div class="jury__pagination swiper-pagination"></div>' );

                        jurySwiper[ $this.index() ] = new Swiper( $this, {

                            speed: 800,
                            spaceBetween: 20,
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                            pagination: {
                                el: '.swiper-pagination',
                                type: 'fraction',
                            },
                        } );
                    } else {
                        jurySwiper[ $this.index() ].updateSize();
                    }
                } );
            } else {
                $jury__box.each( function () {
                    const $this = $(this);

                    if ( jurySwiper[ $this.index() ] && ! jurySwiper[ $this.index() ].destroyed ) {
                        $this.removeClass( 'swiper-container' )
                            .find( '.jury__item' )
                            .removeClass( 'swiper-slide' )
                            .unwrap( '.jury__wrapper' )
                            .end()
                            .find( '.jury__nav, .jury__pagination' ).remove();

                        jurySwiper[ $this.index() ].destroy( true, true );
                    }


                } );

            }

        } );
    } ( jQuery) );

    /*******************************************************/
    //SPEAKERS SHOW MORE
    /*******************************************************/

    ( function( $ ) {

        const $juryBox = $( '.jury__box' ),
            $juryItem = $( '.jury__item' );
        let heightBox,
            heightItem;

        $juryBox.after( '<div class="jury__button"><button type="button" class="button jury-show-more close">Показать всех</button></div>' );

        const $juryShowMore = $( '.jury-show-more' );


        $( window ).on( 'resize load', function() {
            if ( window.innerWidth > 480 ) {
                heightItem = $juryItem.first().height();
                $juryBox.removeAttr( 'style' );
                heightBox = $juryBox.height();
                $juryBox.css( {
                    'overflow': 'hidden',
                    'max-height': $juryShowMore.hasClass( 'close' ) ? heightItem : heightBox
                } );

            } else {
                $juryBox.removeAttr( 'style' );
            }
        } );

        $juryShowMore.click(function() {
            const $this = $( this );

            if ( $this.hasClass( 'close' ) ) {

                $this.text( 'Скрыть всех' ).removeClass( 'close' );

                $juryBox.animate( {
                    'max-height': heightBox
                },  heightBox * 0.1 + 300);

            } else {

                $this.text( 'Показать всех' ).addClass( 'close' );

                $juryBox.animate( {
                    'max-height': heightItem
                }, heightBox * 0.1 + 300);

                $( 'html' ).animate( { scrollTop: $juryBox.offset().top }, heightBox * 0.1 + 300, 'swing' );
            }
        } );

    } ( jQuery) );

    /*******************************************************/
    //TRUST SLIDER
    /*******************************************************/
    ( function( $ ) {

        $( '.trust__box' ).each( function () {

            const $trust__box = $( this );


            $trust__box.addClass( 'swiper-container' )
                .find( '.trust__item' )
                .addClass( 'swiper-slide' )
                .wrapAll( '<div class="trust__wrapper swiper-wrapper"></div>' )
                .end()
                .append( '<div class="trust__nav"><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>' );

            const trustSwiper = new Swiper( $trust__box, {
                slidesPerView: 5,
                speed: 800,
                spaceBetween: 20,
                loop: true,

                autoplay: {
                    delay: 5000,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    640: {
                        slidesPerView: 2,
                    }
                },
            } );

            window.addEventListener( 'resize', function () {
                trustSwiper.updateSize();
            } );

        } );

    } ( jQuery ) );


    /*******************************************************/
    //REVIEWS SLIDER
    /*******************************************************/

    ( function( $ ) {

        $( '.reviews__box' ).each( function () {

            const $reviews__box = $( this );


            $reviews__box.addClass( 'swiper-container' )
                .find( '.reviews__item' )
                .addClass( 'swiper-slide' )
                .wrapAll( '<div class="reviews__wrapper swiper-wrapper"></div>' )
                .end()
                .append( '<div class="reviews__nav"><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>' );

            const reviewsSwiper = new Swiper( $reviews__box, {

                speed: 800,
                spaceBetween: 60,
                loop: true,

                autoplay: {
                    delay: 15000,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

            } );

            window.addEventListener( 'resize', function () {
                reviewsSwiper.updateSize();
            } );

        } );

    } ( jQuery ) );


    /*******************************************************/
    //TRUST SLIDER
    /*******************************************************/
    ( function( $ ) {

        $( '.partners__box' ).each( function () {

            const $partners__box = $( this );


            $partners__box.addClass( 'swiper-container' )
                .find( '.partners__item' )
                .addClass( 'swiper-slide' )
                .wrapAll( '<div class="partners__wrapper swiper-wrapper"></div>' )
                .end()
                .append( '<div class="partners__nav"><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>' );

            const partnersSwiper = new Swiper( $partners__box, {
                slidesPerView: 5,
                speed: 800,
                spaceBetween: 20,
                loop: true,

                autoplay: {
                    delay: 5000,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    640: {
                        slidesPerView: 2,
                    }
                },
            } );

            window.addEventListener( 'resize', function () {
                partnersSwiper.updateSize();
            } );

        } );

    } ( jQuery ) );


    /*******************************************************/
    //TRUST SLIDER
    /*******************************************************/

    ( function( $ ) {

        if ( typeof tinymce === 'object' && $( '[ data-tiny ]' ).length ) {
            tinymce.init( {
                selector: '[ data-tiny ]',
                height: 300,
                //menubar: false,
                // mobile: {
                //     theme: 'silver'
                // }
            } );
        }

    } ( jQuery ) );



} );


