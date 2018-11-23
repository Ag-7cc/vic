// 首页
Mock.mock("/api/h5/banner/list", {
    "code": 200,
    "data": {
        "bannerList": [
            {
                "image": "/blog/images/1.jpg",
                "link": "#/"
            },
            {
                "image": "/blog/images/2.jpg",
                "link": "#/"
            },
            {
                "image": "/blog/images/3.jpg",
                "link": "#/"
            },
            {
                "image": "/blog/images/4.jpg",
                "link": "#/"
            }
        ],
        "imageText": [
            {
                "image": "/blog/images/h1.jpg",
                "link": "#/",
                "text": "为什么说10月24日是程序员的节日？"
            },
            {
                "image": "/blog/images/h2.jpg",
                "link": "#/",
                "text": "个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。"
            }
        ]
    },
    "message": "成功！"
})

