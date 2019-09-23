module.exports = {
  context: {
    tag: 'div',
    class: '',
    badge: {
      name: 'badge--new',
      context: {
        class: 'badge badge--new product-grid-item__badge',
        text: 'NEW'
      }
    },
    image: {
      wrapperClass: 'product-grid-item__image-wrapper',
      dataSrc: '/images/product-grid-item/product-320_480.jpg'
    },
    name: 'Long product name can have maximum 50 caractere...',
    price: {
      name: 'price',
      context: {
        regularPrice: '1 400',
        specialPrice: '',
        prefix: {
          tag: '',
          text: '$'
        },
        suffix: {
          tag: '',
          text: ''
        }
      }
    },
    rating: {
      class: 'rating--secondary product-grid-item__rating'
    },
    secondaryActions: {
      wishlist: {
        tag: 'button',
        class: 'product-grid-item__wishlist',
        icon: {
          id: 'heart',
          title: 'Heart',
          class: 'button__icon'
        },
        attributes: 'type="button" aria-label="Add to Wish List"',
      },
      compare: {
        tag: 'button',
        class: 'button--icon',
        icon: {
          id: 'compare',
          title: 'Compare',
          class: 'button__icon'
        },
        attributes: 'type="button" aria-label="Add to compare"',
      }
    }
  },
  variants: [
    {
      name: 'special-price',
      context: {
        badge: {
          name: 'badge',
          context: {
            text: '-10%',
            class: 'product-grid-item__badge'
          }
        },
        name: 'Short name',
        price: {
          name: 'price--with-special-price',
          context: {
            oldPriceClass: 'product-grid-item__old-price',
            regularPrice: '1000.00',
            specialPrice: '899.99',
            specialPriceClass: 'product-grid-item__special-price',
            prefix: {
              tag: '',
              text: '$'
            },
            suffix: {
              tag: '',
              text: ''
            }
          }
        }
      }
    },
    {
      name: 'wishlist',
      context: {
        class: 'product-grid-item--wishlist',
        wisthlistComment: {
          class: 'product-grid-item__wishlist-comment',
          label: {
            text: 'Comment',
            hidden: true
          },
          field: {
            id: 'wishlist-comment-product-1',
            name: 'wishlist-comment-product-1',
            placeholder: 'Comment',
            type: 'text'
          }
        },
        wishlistQtyLabel: {
          text: 'Quantity:',
          for: 'qty-product-1'
        },
        wishlistQtyUpdate: {
          input: {
            id: 'qty-product-1',
            name: 'qty-product-1'
          }
        },
        secondaryActions: {
          edit: {
            tag: 'a',
            class: '',
            icon: {
              id: 'edit',
              title: 'edit',
              class: 'button__icon'
            },
            attributes: 'href="#" aria-label="Edit product"',
          },
          remove: {
            tag: 'button',
            class: '',
            icon: {
              id: 'remove',
              title: 'Remove',
              class: 'button__icon'
            },
            attributes: 'type="button" aria-label="Remove product from wishlist"'
          }
        },
        wishlistAddToCart: {
          tag: 'button',
          class: '',
          text: 'Add to cart',
          attributes: 'type="button"'
        }
      }
    }
  ]
};
