import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = [
    {
      "_id": "japan",
      "title": "Япония",
      "image": "https://духи.рф/foto/articles/162.jpg?version=1622717896",
      "sights": [
        {
          "title": "Вулкан Фудзияма",
          "image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/FujiWestView2157.jpg",
          "description": "Старая японская пословица гласит: \"Каждый однажды должен подняться на Фудзи-сан, но лишь глупец делает это дважды\".",
          "maplink": "https://yandex.com/maps/org/vulkan_fudziyama_3776_m/162616296368/?ll=138.730327%2C35.363544&z=17"
        },
        {
          "title": "Памятник Хатико",
          "image": "https://img03.rl0.ru/6ae1f43ee46e99d542f12532fd6ceb16/c765x400i/https/store.rambler.ru/news/img/f11ed32e00956bc455e6d0338746e3d5",
          "description": "Статуя Хатико, самого известного пса. Того самого, который каждый день приходил на станцию Сибуя - провожать и встречать своего хозяина, даже после его смерти.",
          "maplink": "https://yandex.com/maps/org/khatiko/51602901852/?ll=139.700598%2C35.659052&z=17"
        },
        {
          "title": "Императорский дворец",
          "image": "https://avatars.mds.yandex.net/get-altay/4544819/2a000001788e0bb307f5a8343454be1e5304/XXXL",
          "description": "Один из неофициальных символов японской государственности. Дворец, где живет император, является закрытой территорией, под ней нельзя прокладывать метро и даже пролетать над ней на вертолете. Однако одна часть - Восточный парк - доступна для посетителей с 1968 года.",
          "maplink": "https://yandex.com/maps/org/imperatorskiy_dvorets/86273433521/?ll=139.752672%2C35.682461&z=17"
        },
        {
          "title": "Гора Харуна",
          "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Haruna-san.JPG",
          "description": "Знаете гору Акина, где базировались гонщики из манги Initial D? Гора Харуна - её реальный прототип.",
          "maplink": "https://yandex.com/maps/org/gora_kharuna/160039524593/?ll=138.877484%2C36.476088&z=17"
        },
        {
          "title": "Мемориальный парк мира в Хиросиме",
          "image": "https://agesmystery.ru/wp-content/uploads/2018/09/93.-%D0%9F%D0%B0%D1%80%D0%BA-%D0%9C%D0%B8%D1%80%D0%B0-%D0%B2-%D0%A5%D0%B8%D1%80%D0%BE%D1%81%D0%B8%D0%BC%D0%B5.jpg",
          "description": "Парк построен вблизи места взрыва, происшедшего 6 августа 1945 года. На монументе \"Пламя Мира\" постоянно горит огонь. Он не погаснет до тих пор, пока всё атомное оружие не исчезнет навсегда.",
          "maplink": "https://yandex.com/maps/org/memorialny_park_mira_v_khirosime/152104143527/?ll=132.452368%2C34.392434&z=17"
        }
      ],
      "films": [
        {
          "title": "ТОП-20 фильмов",
          "image_v": "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/64becb5d-e7b9-4a56-8c71-5008294a854a/600x900",
          "image_h": "https://hornews.com/images/news_large/c05290001jpg_4e753.jpeg",
          "description": "В основном сюда включены аниме, ставшие известными по всему миру.",
          "link": "https://www.kinopoisk.ru/lists/navigator/Anime/"
        },
        {
          "title": "Лучшие исторические фильмы",
          "image_v": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/3dd0a670-966c-474d-9656-50d5282f73e6/600x900",
          "image_h": "https://lh3.googleusercontent.com/proxy/1FfthLd6JT5pzA_huxklYTnPKUc3Uy4vhsPeYw7Dvf95-EYcIpvQ_QisKtHVx5FCqr3Im9AqxRkp2HWXEgjT1ceCl6sww8aMtWvL5zovKOX3Z86oYappA2ZZcc5QaG8jrjQ",
          "description": "Во главе списка - фильм Акиры Куросавы, одного из самых влиятельных режиссеров за всю историю кино. Идеальная подборка, чтобы узнать что-то новое об истории Японии и отдохнуть.",
          "link": "https://www.kinopoisk.ru/lists/navigator/history/country-9/?quick_filters=high_rated&limit=20&tab=best"
        },
        {
          "title": "Лучшие приключенческие фильмы",
          "image_v": "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/a114cdd9-a289-4f82-bd61-9c16577a82df/600x900",
          "image_h": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a9362324-1219-48a7-9529-3d7602b43084/960x960",
          "description": "Японская принцесса с самураем, пытающиеся перебраться на безопасную территорию под видом крестьян. Спасение собак в Антарктике. Семь самураев, защищающих село. Приключения? В японии!",
          "link": "https://www.kinopoisk.ru/lists/navigator/adventure/country-9/?quick_filters=high_rated&limit=20&tab=best"
        }
      ],
      "music": [
        {
          "title": "Гагаку",
          "image": "https://avatars.yandex.net/get-music-user-playlist/34120/553947738.1156.40588.ru/400x400?1533099340588",
          "link": "https://music.yandex.ru/users/ya.musicgenre/playlists/1156"
        },
        {
          "title": "Ня, кавай ^__^",
          "image": "https://avatars.yandex.net/get-music-user-playlist/69910/103372440.1815.87308/400x400?1568645687308",
          "link": "https://music.yandex.ru/users/music-blog/playlists/1815"
        },
        {
          "title": "Япония: вечные хиты",
          "image": "https://avatars.yandex.net/get-music-user-playlist/51766/103372440.2639.49741/400x400?1628251249741",
          "link": "https://music.yandex.ru/users/music-blog/playlists/2639"
        },
        {
          "title": "Популярно в Японии",
          "image": "https://avatars.yandex.net/get-music-user-playlist/34120/103372440.2539.11225/400x400?1623848911225",
          "link": "https://music.yandex.ru/users/music-blog/playlists/2539"
        },
        {
          "title": "Вечный J-Rock",
          "image": "https://avatars.yandex.net/get-music-user-playlist/51766/103372440.2149.77207ru/400x400?1601047877958",
          "link": "https://music.yandex.ru/users/music-blog/playlists/2149"
        }
      ],
      "items": [
        {
          "title": "Японский зеленый чай матча премиум Organice, 50г",
          "price": 299,
          "link": "https://market.yandex.ru/product--iaponskii-zelenyi-chai-matcha-premium-organice-50g/774390605?text=%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D1%8F&cpa=1&cpc=WtAOsssvzbHqSOjGp3bU2IYI2z1Fqhoutvmqul2KlSbwa3Sc_wK9_TcAhwV7JhNPq9Zn7a-J0zswHXmbGF3Vvo8x9QysYozCPR4CyGRJCwSyJDBE6ZskvJAyikl9Kuun113rePcBdC6wyvUklofz3-hdIsvJZkpZyXmaviziZT9m-IvaLxH1gg%2C%2C&sku=101123406369&do-waremd5=sEbwCC2VVQHgmZ7g9s-WfA&nid=73845",
          "image": "https://avatars.mds.yandex.net/get-mpic/4304063/img_id5040408811922942475.jpeg/orig"
        },
        {
          "title": "Благовония Shoyeido Japan",
          "price": 810,
          "link": "https://market.yandex.ru/product--blagovoniia-shoyeido-japan-121721/929410386?text=japan&cpa=1&cpc=NJoqZkiT5IwahXKUoo72UcLhr6M3HdgsRMf0qtjQo6L8jTYDA9zUcSdz3RMHqxcCly4bUbwXkhRQpxFBe46_JQquCIKFxfZgccdSBnJh9u-F2KkEkyO0kbyFI4JhU_eqfVwfOCgeZkvHhvEFQ_i3OH5X5yWuZVbLwDH0cbL0tTRbXKsAD9kJdabxNPSUyD-0&sku=101288959470&do-waremd5=rGzJpq52j3c7aZMx69HN-Q&nid=54438",
          "image": "https://avatars.mds.yandex.net/get-mpic/4370207/img_id7838527074162227629.png/orig"
        },
        {
          "title": "Japan Gals маска 3 слоя коллагена, 30 шт.",
          "price": 2151,
          "link": "https://market.yandex.ru/product--japan-gals-maska-3-sloia-kollagena/1843157264?text=japan&cpa=1&cpc=bRrO2TDBSqZYzvzxtd_zon-iV2vugQnC7m_rBueE8aCIg-9qqxGX_a7VnmJ65n_WhFK-H8UqWfeVlzF_KkXjifLd-VJlejeoIoMiMBuWTmNoIksU88HFACOj2LtNRBce4kno2tF4RbK5SqWm_Q_Ofn0WNYMoNuBd-qtW__C7oWf1qveoOILM2OEEeycwl8dp&sku=100595339380&do-waremd5=U6oAQIjnLB0lIJuJCE6NrA&nid=54438",
          "image": "https://avatars.mds.yandex.net/get-mpic/4219828/img_id6172373431263701159.jpeg/orig"
        },
        {
          "title": "Набор японских палочек (хаси), 5 шт.",
          "price": 1600,
          "link": "https://market.yandex.ru/product--nabor-iaponskikh-palochek-khasi-5-sht-riski/2000485426952?text=%D1%85%D0%B0%D1%81%D0%B8%20%D0%BF%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B8%20&cpa=1&cpc=O94DNLMTDMajw2hE9_d-N6VfsTU0YTXVM9YM0NS_KOF-Jourdaa8cXk-VBNadJx3JxMDMLmjH1yV146-wU4xYoXFX2fuSHWG5yp-UiXNo2iebGisWwyx9iAd7KtJNMuBL362rf_51bBqdi2Ly3UdpSYUNzWra3esBfNabavRmgGBec0o_JZf4J2uf--K_IRG&sku=2000485426952&do-waremd5=B_VKGp8xR4YcaEgbsaC23Q&nid=69177",
          "image": "https://avatars.mds.yandex.net/get-marketpic/1584269/pic06d707ec56361f01b4c24fe9c36d7d81/orig"
        },
        {
          "title": "Дакимакура Осаму Дазай Dakimi",
          "price": 4490,
          "link": "https://market.yandex.ru/product--dakimakura-osamu-dazai-dakimi-podushka-150x50-sm-navolochka-s-printom/946113220?text=%D0%B4%D0%B0%D0%BA%D0%B8%D0%BC%D0%B0%D0%BA%D1%83%D1%80%D0%B0%20%D1%81%20%D0%B4%D0%B0%D0%B7%D0%B0%D0%B5%D0%BC&cpa=1&cpc=Z_t_uohefydUZ80ICWGIHrAdSmyJtSjL9AMnyuh_expIfogheKmlFVWpD2ACatOb5osuVh5C1Ih9nQJcCeth7OpHeHDkXvPzVtQWBDecWPhfc1APgA_6n44C6_lJ_Ka0riIngABqIZGFjD6ky9HAf8WoiVchKCq_2CaXuGotO0ZFU9Te3hODMw%2C%2C&sku=101304740003&do-waremd5=u_FhfZpybxgDA1xGg6GGZQ&nid=60757",
          "image": "https://avatars.mds.yandex.net/get-mpic/5216590/img_id8763477118420703146.jpeg/orig"
        }
      ]
    }
  ];

  constructor() {
  }
  getData () {
    return this.data;
  }
  getCountry(id: any) {
    return 0;
  }
}
