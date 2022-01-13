import { createRouter, createWebHistory } from "vue-router";
import Landing from '@/views/landing/Landing';

const routes = [
  {
		path: '/',
		redirect: '/landing',
		// 초기 진입 페이지 설정 -> landing으로 넘어간다
	},
	{
		path: '/landing',
		name: 'Landing',
		component: Landing,
	},
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/landing/Signup"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/main/Main"),
  },
  {
    path: '/category',
    component: () => import("../views/category/Category"),
    children: [
      {
        path: 'fantasy',
        component: () => import("../views/category/Fantasy"),
      }, 
      {
        path: 'romance',
        component: () => import("../views/category/Romance"),
      }, 
      {
        path: 'sf',
        component: () => import("../views/category/SF"),
      }, 
      {
        path: 'thriller',
        component: () => import("../views/category/Thriller"),
      }, 
      {
        path: 'history',
        component: () => import("../views/category/History"),
      }, 
      {
        path: 'adultonly',
        component: () => import("../views/category/AdultOnly"),
      }, 
      {
        path: 'etc',
        component: () => import("../views/category/Etc"),
      },
    ]
  },
  {
    path: '/mypage',
    component: () => import("../views/mypage/MyPage"),
    children: [
      {
        path: 'myprofile',
        component: () => import("../views/mypage/MyProfile"),
        children: [
          {
            path: 'writerprofile',
            component: () => import("../views/mypage/WriterProfile"),
          },
          {
            path: 'editprofile',
            component: () => import("../views/mypage/EditProfile"),
          },
        ]
      }, 
      {
        path: 'mysubscribe',
        component: () => import("../views/mypage/MySubscribe"),
      }, 
      {
        path: 'mynovel',
        component: () => import("../views/mynovel/MyNovel"),
        children: [
          {
            path: 'creation',
            component: () => import("../views/mynovel/Creation"),
          },
          {
            path: 'postnovel',
            component: () => import("../views/mynovel/PostNovel"),
          },
          {
            path: 'manageturn',
            component: () => import("../views/mynovel/ManageTurn"),
          },
          {
            path: 'updatenovel',
            component: () => import("../views/mynovel/UpdateNovel"),
            children: [
              {
                path: 'noveldetail:id(\\d+)',
                component: () => import("../views/mynovel/NovelDetail"),
              }
            ],
          },
          {
            path: 'boardnovel',
            component: () => import("../views/mynovel/BoardNovel"),
          },
          {
            path: 'readersparty',
            component: () => import("../views/mynovel/ReadersParty"),
          },
          {
            path: 'readerschart',
            component: () => import("../views/mynovel/ReadersChart"),
          },
        ]
      }, 
      {
        path: 'setting',
        component: () => import("../views/mypage/Setting"),
      },
      {
        path: 'whoeverlist',
        component: () => import("../views/mypage/WhoeverList"),
      },
    ]
  },
  {
    path: '/whoever',
    component: () => import("../views/whoever/Whoever"),
  }, 
  {
    path: '/contact',
    component: () => import("../views/contact/Contact"),
  }, 
  {
    // 아무글자나 입력하면 여기로
      path: "/:anything(.*)",
      component: () => import("../views/contact/404"), // 이 컴퍼넌트에 404페이지 디자인하면됨 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
