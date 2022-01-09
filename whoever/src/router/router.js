import { createRouter, createWebHistory } from 'vue-router';
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
	// {
	// 	path: '/login',
	// 	component: () => import('@/views/landing/LogIn'),
	// },
	{
		path: '/signup',
		component: () => import('@/views/landing/SignUp'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/views/landing/About'),
	},
	{
		path: '/main',
		name: 'Main',
		component: () => import('@/views/main/Main'),
		children: [
			{
				path: 'category',
				component: () => import('@/views/main/Category'),
				children: [
					{
						path: 'noveldetail/:id',
						component: () => import('@/views/main/NovelDetail'),
						children: [
							{
								path: 'comment',
								component: () =>
									import('@/views/mypage/Comment'),
							},
						],
					},
				],
			},
			{
				path: 'search',
				component: () => import('@/views/main/Search'),
			},
			{
				path: 'ranking',
				component: () => import('@/views/main/Ranking'),
			},
			{
				path: 'whoeverscribe',
				component: () => import('@/views/main/WhoeverScribe'),
			},
		],
	},
	{
		path: '/mypage',
		component: () => import('@/views/mypage/MyPage'),
		beforeEnter: (to, from, next) => {
			if (!localStorage.getItem('uid')) return next('block');
			return next();
		},
		children: [
			{
				path: 'profile',
				component: () => import('@/views/mypage/Profile'),
				children: [
					{
						path: 'profilechange',
						component: () => import('@/views/mypage/ProfileChange'),
					},
					{
						path: 'subscription',
						omponent: () => import('@/views/mypage/Subscription'),
					},
				],
			},
			{
				path: 'creation',
				component: () => import('@/views/mypage/Creation'),
			},
			{
				path: 'scribe',
				component: () => import('@/views/mypage/Scribe'),
			},
			{
				path: 'serialstory',
				component: () => import('@/views/mypage/SerialStory'),
			},
			{
				path: 'communication',
				component: () => import('@/views/mypage/Communicaton'),
			},
		],
	},
	{
		path: '/:anything(.*)',
		name: '404',
		component: () => import('@/components/404'),
	},
	{
		path: '/block',
		name: 'Block',
		component: () => import('@/views/landing/Block'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
