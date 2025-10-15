const downloads = [
    {
        "id": 1,
        "name": "Şanslı mı Şanssız mı?",
        "description": "Orkun Işıtmak'ın sunduğu bu programda, sıra dışı özelliklere sahip insanlar konuk edilir ve bu özelliklerin avantaj mı yoksa dezavantaj mı olduğu tartışılır.",
        "image": "https://tse3.mm.bing.net/th/id/OIP._IJ4g_tEOxJezDqnhAjNQQHaDt?cb=12&pid=Api",
        "categories": ["Eğlence", "Talk Show", "Motivasyon"],
        "title": "Popüler",
        "duration": "45 dk",
        "progress": 0.75,
        "similar_movies": [
            {
                "id": 2,
                "name": "Buraların Yabancısıyız",
                "description": "Farklı kültürlerden gelen insanların Türkiye'deki yaşam deneyimlerini ve karşılaştıkları zorlukları konu alan bir program.",
                "image": "https://tse4.mm.bing.net/th/id/OIP.jxexaV57Q5f4NVN5lth8RgHaEK?cb=12&pid=Api",
                "title": "Popüler",
                "categories": ["Dram", "Komedi", "Sosyal Belgesel"],
                "duration": "50 dk",
                "progress": 0.4
            },
            {
                "id": 3,
                "name": "Veteriner Hekim Tugay İnanoğlu ve Dostları",
                "description": "Veteriner hekim Tugay İnanoğlu'nun hayvanlarla olan ilişkisini ve onların bakım süreçlerini izleyicilere sunan bir içerik.",
                "image": "https://tse3.mm.bing.net/th/id/OIP.cXp_O0SNeqUsxh91_1Dj_AHaKX?cb=12&pid=Api",
                "title": "Popüler",
                "categories": ["Belgesel", "Doğa", "Eğitim"],
                "duration": "40 dk",
                "progress": 0.25
            },
            {
                "id": 4,
                "name": "No Limit",
                "description": "Sınırları zorlayan ve ekstrem sporları konu alan bir program.",
                "image": "https://tse2.mm.bing.net/th/id/OIP.bEpzYCU_cQy68KYefamK6QHaE2?cb=12&pid=Api",
                "title": "Popüler",
                "categories": ["Spor", "Aksiyon", "Macera"],
                "duration": "55 dk",
                "progress": 0.9
            },
            {
                "id": 5,
                "name": "Tasarım Evler",
                "description": "Özgün ve yaratıcı ev tasarımlarını tanıtan bir içerik.",
                "image": "https://tse2.mm.bing.net/th/id/OIP.M_3cklphZFg-kFpnyAnpYQHaEK?cb=12&pid=Api",
                "title": "Popüler",
                "categories": ["Tasarım", "Mimari", "Yaşam"],
                "duration": "35 dk",
                "progress": 0.15
            }
        ]
    },
    {
        "id": 2,
        "name": "Buraların Yabancısıyız",
        "description": "Farklı kültürlerden gelen insanların Türkiye'deki yaşam deneyimlerini ve karşılaştıkları zorlukları konu alan bir program.",
        "image": "https://tse4.mm.bing.net/th/id/OIP.jxexaV57Q5f4NVN5lth8RgHaEK?cb=12&pid=Api",
        "title": "Popüler",
        "categories": ["Dram", "Komedi", "Sosyal Belgesel"],
        "duration": "50 dk",
        "progress": 0.5,
        "similar_movies": [
            {
                "id": 1,
                "name": "Şanslı mı Şanssız mı?",
                "description": "Orkun Işıtmak'ın sunduğu bu programda, sıra dışı özelliklere sahip insanlar konuk edilir ve bu özelliklerin avantaj mı yoksa dezavantaj mı olduğu tartışılır.",
                "image": "https://tse3.mm.bing.net/th/id/OIP._IJ4g_tEOxJezDqnhAjNQQHaDt?cb=12&pid=Api",
                "title": "Popüler",
                "categories": ["Eğlence", "Talk Show", "Motivasyon"],
                "duration": "45 dk",
                "progress": 0.7
            },
            {
                "id": 3,
                "name": "Veteriner Hekim Tugay İnanoğlu ve Dostları",
                "description": "Veteriner hekim Tugay İnanoğlu'nun hayvanlarla olan ilişkisini ve onların bakım süreçlerini izleyicilere sunan bir içerik.",
                "image": "https://tse3.mm.bing.net/th/id/OIP.cXp_O0SNeqUsxh91_1Dj_AHaKX?cb=12&pid=Api",
                "title": "Popüler",
                "categories": ["Belgesel", "Doğa", "Eğitim"],
                "duration": "40 dk",
                "progress": 0.3
            }
        ]
    },
    {
        "id": 3,
        "name": "Veteriner Hekim Tugay İnanoğlu ve Dostları",
        "description": "Veteriner hekim Tugay İnanoğlu'nun hayvanlarla olan ilişkisini ve onların bakım süreçlerini izleyicilere sunan bir içerik.",
        "image": "https://tse3.mm.bing.net/th/id/OIP.cXp_O0SNeqUsxh91_1Dj_AHaKX?cb=12&pid=Api",
        "title": "Popüler",
        "categories": ["Belgesel", "Doğa", "Eğitim"],
        "duration": "40 dk",
        "progress": 0.2,
        "similar_movies": []
    },
    {
        "id": 4,
        "name": "No Limit",
        "description": "Sınırları zorlayan ve ekstrem sporları konu alan bir program.",
        "image": "https://tse2.mm.bing.net/th/id/OIP.bEpzYCU_cQy68KYefamK6QHaE2?cb=12&pid=Api",
        "title": "Popüler",
        "categories": ["Spor", "Aksiyon", "Macera"],
        "duration": "55 dk",
        "progress": 0.9,
        "similar_movies": []
    },
    {
        "id": 5,
        "name": "Tasarım Evler",
        "description": "Özgün ve yaratıcı ev tasarımlarını tanıtan bir içerik.",
        "image": "https://tse2.mm.bing.net/th/id/OIP.M_3cklphZFg-kFpnyAnpYQHaEK?cb=12&pid=Api",
        "title": "Popüler",
        "categories": ["Tasarım", "Mimari", "Yaşam"],
        "duration": "35 dk",
        "progress": 0.1,
        "similar_movies": []
    }
];

export default downloads;
