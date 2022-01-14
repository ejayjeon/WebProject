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
    path: "/login",
    name: "Login",
    component: () => import("../views/landing/Login"),
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
    beforeEnter: (to, from, next) => {
      console.log(to);
      console.log(from);
      if(!localStorage.getItem('googleUserToken')) return next('/block');
      return next();
    },
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
        beforeRouteLeave (to, from, next) {
          console.log(to, from)
          if(!this.$store.state.myContent) return next($this.router.push('/creation'))
          else return next($this.router.push('/managingnovel'))
        }
      },
      {
        path: '/mynovel/creation',
        component: () => import("../views/mynovel/Creation"),
      },
      {
        path: '/mynovel/managingturn',
        component: () => import("../views/mynovel/ManagingTurn"),
      },
      {
        path: '/mynovel/managingnovel',
        component: () => import("../views/mynovel/ManagingNovel"),
        children: [
          {
            path: 'noveldetail:id(\\d+)',
            component: () => import("../views/mynovel/NovelDetail"),
          },
          {
            path: 'postnovel',
            component: () => import("../views/mynovel/PostNovel"),
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
    path: '/block',
    component: () => import("../views/landing/Block"),
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
