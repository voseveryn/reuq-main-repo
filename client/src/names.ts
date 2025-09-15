import { SchemaNames } from '@contember/client-content'
export const ContemberClientNames: SchemaNames = {
  "entities": {
    "Block": {
      "name": "Block",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "order": {
          "type": "column"
        },
        "type": {
          "type": "column"
        },
        "align": {
          "type": "column"
        },
        "blockVariation": {
          "type": "column"
        },
        "colorVariantion": {
          "type": "column"
        },
        "directionVariantion": {
          "type": "column"
        },
        "list": {
          "type": "one",
          "entity": "BlockList"
        },
        "title": {
          "type": "column"
        },
        "subtitle": {
          "type": "column"
        },
        "content": {
          "type": "one",
          "entity": "Content"
        },
        "text": {
          "type": "column"
        },
        "link": {
          "type": "one",
          "entity": "Link"
        },
        "image": {
          "type": "one",
          "entity": "Image"
        },
        "video": {
          "type": "one",
          "entity": "Video"
        },
        "cardList": {
          "type": "one",
          "entity": "CardList"
        },
        "heroContent": {
          "type": "one",
          "entity": "BlockHeroContent"
        },
        "textList": {
          "type": "one",
          "entity": "TextList"
        },
        "imageList": {
          "type": "one",
          "entity": "ImageList"
        },
        "productList": {
          "type": "one",
          "entity": "BlockProductList"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "order",
        "type",
        "align",
        "blockVariation",
        "colorVariantion",
        "directionVariantion",
        "title",
        "subtitle",
        "text"
      ]
    },
    "BlockHeroContent": {
      "name": "BlockHeroContent",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "block": {
          "type": "one",
          "entity": "Block"
        },
        "items": {
          "type": "many",
          "entity": "BlockHeroContentItem"
        }
      },
      "scalars": [
        "id",
        "createdAt"
      ]
    },
    "BlockHeroContentItem": {
      "name": "BlockHeroContentItem",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "link": {
          "type": "one",
          "entity": "Link"
        },
        "label": {
          "type": "column"
        },
        "list": {
          "type": "one",
          "entity": "BlockHeroContent"
        },
        "order": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "label",
        "order"
      ]
    },
    "BlockList": {
      "name": "BlockList",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "items": {
          "type": "many",
          "entity": "Block"
        },
        "pageBlocks": {
          "type": "one",
          "entity": "PageLocale"
        }
      },
      "scalars": [
        "id",
        "createdAt"
      ]
    },
    "BlockProductList": {
      "name": "BlockProductList",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "block": {
          "type": "one",
          "entity": "Block"
        },
        "productBlock": {
          "type": "one",
          "entity": "ProductBlock"
        },
        "subtitle": {
          "type": "column"
        },
        "order": {
          "type": "column"
        },
        "product": {
          "type": "many",
          "entity": "Product"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "subtitle",
        "order"
      ]
    },
    "Card": {
      "name": "Card",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "list": {
          "type": "one",
          "entity": "CardList"
        },
        "image": {
          "type": "one",
          "entity": "Image"
        },
        "type": {
          "type": "column"
        },
        "orderBy": {
          "type": "column"
        },
        "title": {
          "type": "column"
        },
        "subtitle": {
          "type": "column"
        },
        "text": {
          "type": "column"
        },
        "textList": {
          "type": "one",
          "entity": "TextList"
        },
        "points": {
          "type": "many",
          "entity": "CardPoint"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "type",
        "orderBy",
        "title",
        "subtitle",
        "text"
      ]
    },
    "CardList": {
      "name": "CardList",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "items": {
          "type": "many",
          "entity": "Card"
        },
        "block": {
          "type": "one",
          "entity": "Block"
        }
      },
      "scalars": [
        "id",
        "createdAt"
      ]
    },
    "CardPoint": {
      "name": "CardPoint",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "card": {
          "type": "one",
          "entity": "Card"
        },
        "label": {
          "type": "column"
        },
        "order": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "label",
        "order"
      ]
    },
    "Contact": {
      "name": "Contact",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "mapImage": {
          "type": "one",
          "entity": "Image"
        },
        "locales": {
          "type": "many",
          "entity": "ContactLocale"
        },
        "unique": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "unique"
      ]
    },
    "ContactItem": {
      "name": "ContactItem",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "list": {
          "type": "one",
          "entity": "ContactItemList"
        },
        "order": {
          "type": "column"
        },
        "text": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "order",
        "text"
      ]
    },
    "ContactItemList": {
      "name": "ContactItemList",
      "fields": {
        "id": {
          "type": "column"
        },
        "contact": {
          "type": "one",
          "entity": "ContactLocale"
        },
        "items": {
          "type": "many",
          "entity": "ContactItem"
        }
      },
      "scalars": [
        "id"
      ]
    },
    "ContactLocale": {
      "name": "ContactLocale",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "root": {
          "type": "one",
          "entity": "Contact"
        },
        "locale": {
          "type": "one",
          "entity": "Locale"
        },
        "itemList": {
          "type": "one",
          "entity": "ContactItemList"
        },
        "title": {
          "type": "column"
        },
        "subtitle": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "title",
        "subtitle"
      ]
    },
    "Content": {
      "name": "Content",
      "fields": {
        "id": {
          "type": "column"
        },
        "data": {
          "type": "column"
        },
        "references": {
          "type": "many",
          "entity": "ContentReference"
        },
        "blockContent": {
          "type": "one",
          "entity": "Block"
        },
        "footerContent": {
          "type": "one",
          "entity": "FooterItem"
        },
        "footerLinks": {
          "type": "one",
          "entity": "FooterLocale"
        }
      },
      "scalars": [
        "id",
        "data"
      ]
    },
    "ContentReference": {
      "name": "ContentReference",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "type": {
          "type": "column"
        },
        "content": {
          "type": "one",
          "entity": "Content"
        },
        "imageList": {
          "type": "one",
          "entity": "ImageList"
        },
        "text": {
          "type": "column"
        },
        "image": {
          "type": "one",
          "entity": "Image"
        },
        "link": {
          "type": "one",
          "entity": "Link"
        },
        "textList": {
          "type": "one",
          "entity": "TextList"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "type",
        "text"
      ]
    },
    "Customer": {
      "name": "Customer",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "name": {
          "type": "column"
        },
        "lastName": {
          "type": "column"
        },
        "phoneNumber": {
          "type": "column"
        },
        "email": {
          "type": "column"
        },
        "date": {
          "type": "column"
        },
        "text": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "name",
        "lastName",
        "phoneNumber",
        "email",
        "date",
        "text"
      ]
    },
    "Footer": {
      "name": "Footer",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "logo": {
          "type": "one",
          "entity": "Image"
        },
        "mapImage": {
          "type": "one",
          "entity": "Image"
        },
        "locales": {
          "type": "many",
          "entity": "FooterLocale"
        },
        "unique": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "unique"
      ]
    },
    "FooterItem": {
      "name": "FooterItem",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "list": {
          "type": "one",
          "entity": "FooterItemList"
        },
        "order": {
          "type": "column"
        },
        "content": {
          "type": "one",
          "entity": "Content"
        },
        "text": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "order",
        "text"
      ]
    },
    "FooterItemList": {
      "name": "FooterItemList",
      "fields": {
        "id": {
          "type": "column"
        },
        "footer": {
          "type": "one",
          "entity": "FooterLocale"
        },
        "items": {
          "type": "many",
          "entity": "FooterItem"
        }
      },
      "scalars": [
        "id"
      ]
    },
    "FooterLocale": {
      "name": "FooterLocale",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "root": {
          "type": "one",
          "entity": "Footer"
        },
        "locale": {
          "type": "one",
          "entity": "Locale"
        },
        "links": {
          "type": "one",
          "entity": "Content"
        },
        "title": {
          "type": "column"
        },
        "createdBy": {
          "type": "column"
        },
        "copyRight": {
          "type": "column"
        },
        "itemList": {
          "type": "one",
          "entity": "FooterItemList"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "title",
        "createdBy",
        "copyRight"
      ]
    },
    "Image": {
      "name": "Image",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "url": {
          "type": "column"
        },
        "width": {
          "type": "column"
        },
        "height": {
          "type": "column"
        },
        "fileName": {
          "type": "column"
        },
        "lastModified": {
          "type": "column"
        },
        "fileSize": {
          "type": "column"
        },
        "fileType": {
          "type": "column"
        },
        "ogImages": {
          "type": "many",
          "entity": "Seo"
        },
        "contentReferenceImage": {
          "type": "many",
          "entity": "ContentReference"
        },
        "blockImage": {
          "type": "many",
          "entity": "Block"
        },
        "imageItem": {
          "type": "many",
          "entity": "ImageItem"
        },
        "navigationLogo": {
          "type": "many",
          "entity": "Navigation"
        },
        "footerLogo": {
          "type": "many",
          "entity": "Footer"
        },
        "map": {
          "type": "many",
          "entity": "Footer"
        },
        "card": {
          "type": "many",
          "entity": "Card"
        },
        "textList": {
          "type": "many",
          "entity": "TextListItem"
        },
        "locales": {
          "type": "many",
          "entity": "ImageLocale"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "url",
        "width",
        "height",
        "fileName",
        "lastModified",
        "fileSize",
        "fileType"
      ]
    },
    "ImageItem": {
      "name": "ImageItem",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "image": {
          "type": "one",
          "entity": "Image"
        },
        "imageItem": {
          "type": "one",
          "entity": "ImageList"
        },
        "order": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "order"
      ]
    },
    "ImageList": {
      "name": "ImageList",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "contentReference": {
          "type": "one",
          "entity": "ContentReference"
        },
        "block": {
          "type": "many",
          "entity": "Block"
        },
        "productBlocks": {
          "type": "many",
          "entity": "ProductBlock"
        },
        "items": {
          "type": "many",
          "entity": "ImageItem"
        }
      },
      "scalars": [
        "id",
        "createdAt"
      ]
    },
    "ImageLocale": {
      "name": "ImageLocale",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "description": {
          "type": "column"
        },
        "alt": {
          "type": "column"
        },
        "root": {
          "type": "one",
          "entity": "Image"
        },
        "locale": {
          "type": "one",
          "entity": "Locale"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "description",
        "alt"
      ]
    },
    "Link": {
      "name": "Link",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "type": {
          "type": "column"
        },
        "link": {
          "type": "one",
          "entity": "Url"
        },
        "title": {
          "type": "column"
        },
        "blockLink": {
          "type": "many",
          "entity": "Block"
        },
        "internalTarget": {
          "type": "one",
          "entity": "Url"
        },
        "externalTarget": {
          "type": "column"
        },
        "navigationItemLink": {
          "type": "many",
          "entity": "NavigationItem"
        },
        "contentReferenceLink": {
          "type": "many",
          "entity": "ContentReference"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "type",
        "title",
        "externalTarget"
      ]
    },
    "Locale": {
      "name": "Locale",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "code": {
          "type": "column"
        },
        "label": {
          "type": "column"
        },
        "isPublished": {
          "type": "column"
        },
        "product": {
          "type": "many",
          "entity": "ProductLocale"
        },
        "footers": {
          "type": "many",
          "entity": "FooterLocale"
        },
        "navigation": {
          "type": "many",
          "entity": "NavigationLocale"
        },
        "pages": {
          "type": "many",
          "entity": "PageLocale"
        },
        "image": {
          "type": "many",
          "entity": "ImageLocale"
        },
        "contacts": {
          "type": "many",
          "entity": "ContactLocale"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "code",
        "label",
        "isPublished"
      ]
    },
    "Navigation": {
      "name": "Navigation",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "unique": {
          "type": "column"
        },
        "locales": {
          "type": "many",
          "entity": "NavigationLocale"
        },
        "logo": {
          "type": "one",
          "entity": "Image"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "unique"
      ]
    },
    "NavigationItem": {
      "name": "NavigationItem",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "list": {
          "type": "one",
          "entity": "NavigationList"
        },
        "order": {
          "type": "column"
        },
        "link": {
          "type": "one",
          "entity": "Link"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "order"
      ]
    },
    "NavigationList": {
      "name": "NavigationList",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "items": {
          "type": "many",
          "entity": "NavigationItem"
        },
        "navigation": {
          "type": "one",
          "entity": "NavigationLocale"
        }
      },
      "scalars": [
        "id",
        "createdAt"
      ]
    },
    "NavigationLocale": {
      "name": "NavigationLocale",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "root": {
          "type": "one",
          "entity": "Navigation"
        },
        "locale": {
          "type": "one",
          "entity": "Locale"
        },
        "navigationList": {
          "type": "one",
          "entity": "NavigationList"
        }
      },
      "scalars": [
        "id",
        "createdAt"
      ]
    },
    "Page": {
      "name": "Page",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "publishedAt": {
          "type": "column"
        },
        "archivedAt": {
          "type": "column"
        },
        "locales": {
          "type": "many",
          "entity": "PageLocale"
        },
        "pageType": {
          "type": "column"
        },
        "seo": {
          "type": "one",
          "entity": "Seo"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "publishedAt",
        "archivedAt",
        "pageType"
      ]
    },
    "PageLocale": {
      "name": "PageLocale",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "root": {
          "type": "one",
          "entity": "Page"
        },
        "locale": {
          "type": "one",
          "entity": "Locale"
        },
        "title": {
          "type": "column"
        },
        "subtitle": {
          "type": "column"
        },
        "url": {
          "type": "one",
          "entity": "Url"
        },
        "blocks": {
          "type": "one",
          "entity": "BlockList"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "title",
        "subtitle"
      ]
    },
    "Product": {
      "name": "Product",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "blockProducts": {
          "type": "one",
          "entity": "BlockProductList"
        },
        "image": {
          "type": "one",
          "entity": "Image"
        },
        "imageList": {
          "type": "one",
          "entity": "ImageList"
        },
        "icon": {
          "type": "one",
          "entity": "Image"
        },
        "mediaList": {
          "type": "one",
          "entity": "ImageList"
        },
        "locales": {
          "type": "many",
          "entity": "ProductLocale"
        },
        "seo": {
          "type": "one",
          "entity": "Seo"
        }
      },
      "scalars": [
        "id",
        "createdAt"
      ]
    },
    "ProductBlock": {
      "name": "ProductBlock",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "order": {
          "type": "column"
        },
        "type": {
          "type": "column"
        },
        "align": {
          "type": "column"
        },
        "blockVariation": {
          "type": "column"
        },
        "colorVariantion": {
          "type": "column"
        },
        "directionVariantion": {
          "type": "column"
        },
        "list": {
          "type": "one",
          "entity": "ProductBlockList"
        },
        "title": {
          "type": "column"
        },
        "subtitle": {
          "type": "column"
        },
        "text": {
          "type": "column"
        },
        "image": {
          "type": "one",
          "entity": "Image"
        },
        "imageList": {
          "type": "one",
          "entity": "ImageList"
        },
        "supportedProducts": {
          "type": "one",
          "entity": "BlockProductList"
        },
        "textList": {
          "type": "one",
          "entity": "TextList"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "order",
        "type",
        "align",
        "blockVariation",
        "colorVariantion",
        "directionVariantion",
        "title",
        "subtitle",
        "text"
      ]
    },
    "ProductBlockList": {
      "name": "ProductBlockList",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "items": {
          "type": "many",
          "entity": "ProductBlock"
        },
        "productBlocks": {
          "type": "one",
          "entity": "ProductLocale"
        }
      },
      "scalars": [
        "id",
        "createdAt"
      ]
    },
    "ProductLocale": {
      "name": "ProductLocale",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "externalLink": {
          "type": "column"
        },
        "title": {
          "type": "column"
        },
        "description": {
          "type": "column"
        },
        "url": {
          "type": "one",
          "entity": "Url"
        },
        "shortLabel": {
          "type": "column"
        },
        "infoLabel": {
          "type": "column"
        },
        "root": {
          "type": "one",
          "entity": "Product"
        },
        "locale": {
          "type": "one",
          "entity": "Locale"
        },
        "blocks": {
          "type": "one",
          "entity": "ProductBlockList"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "externalLink",
        "title",
        "description",
        "shortLabel",
        "infoLabel"
      ]
    },
    "Seo": {
      "name": "Seo",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "title": {
          "type": "column"
        },
        "description": {
          "type": "column"
        },
        "keywords": {
          "type": "column"
        },
        "image": {
          "type": "one",
          "entity": "Image"
        },
        "pageSeo": {
          "type": "one",
          "entity": "Page"
        },
        "product": {
          "type": "one",
          "entity": "Product"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "title",
        "description",
        "keywords"
      ]
    },
    "TextList": {
      "name": "TextList",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "orderBy": {
          "type": "column"
        },
        "card": {
          "type": "many",
          "entity": "Card"
        },
        "type": {
          "type": "column"
        },
        "block": {
          "type": "one",
          "entity": "Block"
        },
        "productBlock": {
          "type": "one",
          "entity": "ProductBlock"
        },
        "contentReferenceTextList": {
          "type": "many",
          "entity": "ContentReference"
        },
        "items": {
          "type": "many",
          "entity": "TextListItem"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "orderBy",
        "type"
      ]
    },
    "TextListItem": {
      "name": "TextListItem",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "list": {
          "type": "one",
          "entity": "TextList"
        },
        "image": {
          "type": "one",
          "entity": "Image"
        },
        "order": {
          "type": "column"
        },
        "text": {
          "type": "column"
        },
        "orderBy": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "order",
        "text",
        "orderBy"
      ]
    },
    "Url": {
      "name": "Url",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "url": {
          "type": "column"
        },
        "target": {
          "type": "one",
          "entity": "Link"
        },
        "links": {
          "type": "many",
          "entity": "Link"
        },
        "pageUrl": {
          "type": "one",
          "entity": "PageLocale"
        },
        "product": {
          "type": "one",
          "entity": "ProductLocale"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "url"
      ]
    },
    "Video": {
      "name": "Video",
      "fields": {
        "id": {
          "type": "column"
        },
        "createdAt": {
          "type": "column"
        },
        "url": {
          "type": "column"
        },
        "block": {
          "type": "many",
          "entity": "Block"
        },
        "width": {
          "type": "column"
        },
        "height": {
          "type": "column"
        },
        "fileName": {
          "type": "column"
        },
        "lastModified": {
          "type": "column"
        },
        "fileSize": {
          "type": "column"
        },
        "fileType": {
          "type": "column"
        }
      },
      "scalars": [
        "id",
        "createdAt",
        "url",
        "width",
        "height",
        "fileName",
        "lastModified",
        "fileSize",
        "fileType"
      ]
    }
  },
  "enums": {
    "alignContent": [
      "left",
      "center",
      "right"
    ],
    "blockType": [
      "text",
      "hero",
      "card",
      "information",
      "partners",
      "team",
      "solution",
      "newsletter",
      "contact",
      "history",
      "products",
      "imageList",
      "listWithIcons"
    ],
    "blockVariantion": [
      "one",
      "two",
      "three",
      "four",
      "five"
    ],
    "cardType": [
      "timeline",
      "quote",
      "desc"
    ],
    "colorVariantion": [
      "classic",
      "reverse",
      "grey"
    ],
    "contentReferenceTypeEnum": [
      "image",
      "imageList",
      "quote",
      "text",
      "link"
    ],
    "directionVariantion": [
      "horizontal",
      "vertical"
    ],
    "linkType": [
      "internal",
      "external"
    ],
    "one": [
      "One"
    ],
    "pageType": [
      "homePage",
      "solutionPage",
      "genericPage"
    ],
    "textListType": [
      "timeline",
      "point"
    ],
    "unique": [
      "unique"
    ]
  }
}