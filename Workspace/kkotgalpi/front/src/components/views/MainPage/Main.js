import React, { useState, createElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper';
import { Layout, Menu, Tabs } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	StarOutlined,
	LikeOutlined,
	SmileOutlined,
	UserAddOutlined,
	CrownOutlined,
	EditOutlined,
	CheckCircleOutlined,
	ReadOutlined,
	BookOutlined,
} from '@ant-design/icons';
import {
	Flex,
	IconButton,
	SearchField,
	Box,
	Button,
	Image,
	Text,
} from 'gestalt';
import '../../../../node_modules/gestalt/dist/gestalt.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './main.css';

const { SubMenu } = Menu;
const { TabPane } = Tabs;

SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);

export default function Main() {
	let history = useHistory();
	const [slide, setSlide] = useState();
	const { Header, Sider, Content } = Layout;
	const [side, setSide] = useState(false);




	// 컴포넌트 : 메인 이미지
	const Img = () => {
		return (
			<Box height={210} paddingX={2} width={150}>
				<Image
					alt=''
					fit='contain'
					color='#fff'
					naturalHeight={210}
					naturalWidth={150}
					src={require('./img/illu1.jpeg')}>
					<Box height='100%' padding={3}>
						<Flex direction='column' height='100%' justifyContent='between'>
							<Text color='black' weight='bold'></Text>
							<Button
								color='red'
								size='sm'
								onClick={() => {
									history.push('/mylibrary');
								}}
								text='click'
								role='link'
							/>
						</Flex>
					</Box>
				</Image>
			</Box>
		);
	};

	// 컴포넌트 : 메인 슬라이드
	const Slide = (props) => {
		let slide = props.slide;
		return (
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				coverflowEffect={{
					rotate: 30,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={{
					clickable: true,
				}}
				className='mySwiper'>
				{
					// eslint-disable-next-line array-callback-return
					slide &&
						slide.map((a, i) => {
							return (
								<SwiperSlide key={i}>
									<Img />
									{/* <img src={require('./img/illu1.jpeg')} alt='illu1' /> */}
								</SwiperSlide>
							);
						})
				}
			</Swiper>
		);
	};

	// 컴포넌트 : 메인 Search
	// https://dev.to/asimdahall/simple-search-form-in-react-using-hooks-42pg 
	const Search = () => {
		const [search, setSearch] = useState('');
		const onSetSearch = (e) => {
			setSearch(e.value)
		}
		const onSearch = ({value}) => {
			console.log('검색정보', value)

		}
		return (
			
			<Flex alignItems='center' flex='grow' gap={4}>
				<IconButton
					accessibilityLabel='Notifications'
					icon='view-type-dense'
					size='md'
				/>
				<Flex.Item flex='grow'>
				<form method="GET" onSubmit={onSearch}>
					<SearchField
						type='search'
						accessibilityLabel='Search'
						accessibilityClearButtonLabel='Clear search field'
						id='searchField'
						value={search}
						onChange={onSetSearch}
						onKeyPress={ e => {
							if(e.key === 'Enter') {
								onSearch();
							} }}
						placeholder='원하시는 작품을 검색해보세요'
						
					/>
					</form>
				</Flex.Item>
				<IconButton
					accessibilityLabel='Search'
					color='gray'
					icon='search'
					size='md'
					onClick={onSearch}
				/>
				
			</Flex>
			
		);
	};

	// 메인화면 렌더링
	return (
		<>
			<Layout>
				<Sider className='sidebar' trigger={null} collapsible collapsed={side}>
					<div className='logo'>
						<button
							className='trigger'
							onClick={() => {
								setSide(!side);
							}}>
							{createElement(side ? MenuUnfoldOutlined : MenuFoldOutlined)}
						</button>
					</div>
					<Menu mode='inline' defaultSelectedKeys={['1']}>
						<SubMenu key='1' icon={<CrownOutlined />} title='랭킹 보기'>
							<Menu.Item
								key='11'
								onClick={() => {
									history.push('/ranking/now');
								}}>
								실시간 랭킹
							</Menu.Item>
							<Menu.Item
								key='12'
								onClick={() => {
									history.push('/ranking/age');
								}}>
								연령별 랭킹
							</Menu.Item>
							<Menu.Item
								key='13'
								onClick={() => {
									history.push('/ranking/cate');
								}}>
								카테고리별 랭킹
							</Menu.Item>
						</SubMenu>
						<SubMenu key='2' icon={<ReadOutlined />} title='소설 구독'>
							<Menu.Item
								key='21'
								onClick={() => {
									history.push('/novel/new');
								}}>
								신작 소설 보기
							</Menu.Item>
							<Menu.Item
								key='22'
								onClick={() => {
									history.push('/novel/polished');
								}}>
								연재 완료작 보기
							</Menu.Item>
							<Menu.Item
								key='23'
								onClick={() => {
									history.push('/novel/charged');
								}}>
								유료 소설 보기
							</Menu.Item>
							<Menu.Item
								key='24'
								onClick={() => {
									history.push('/novel/adultsonly');
								}}>
								19+ 소설 보기
							</Menu.Item>
						</SubMenu>
						<SubMenu key='3' icon={<EditOutlined />} title='내 서재 가기'>
							<Menu.Item
								key='31'
								onClick={() => {
									history.push('/mylibrary/novel');
								}}>
								소설 모아보기
							</Menu.Item>
							<Menu.Item
								key='32'
								onClick={() => {
									history.push('/mylibrary/writer');
								}}>
								작가 모아보기
							</Menu.Item>
						</SubMenu>
						<SubMenu key='4' icon={<BookOutlined />} title='내 작품 관리'>
							<Menu.Item
								key='41'
								onClick={() => {
									history.push('/mylibrary/myscribe/list');
								}}>
								내 작품 목록
							</Menu.Item>
							<Menu.Item
								key='42'
								onClick={() => {
									history.push('/mylibrary/myscribe/scribe');
								}}>
								내 작품 쓰기
							</Menu.Item>
							<Menu.Item
								key='43'
								onClick={() => {
									history.push('/mylibrary/myscribe/modify_nickname');
								}}>
								작가명 수정
							</Menu.Item>
							<Menu.Item
								key='44'
								onClick={() => {
									history.push('/mylibrary/myscribe/analizeviewer');
								}}>
								구독자 통계
							</Menu.Item>
						</SubMenu>
						<SubMenu key='5' icon={<UserOutlined />} title='내 정보 관리'>
							<Menu.Item
								key='51'
								onClick={() => {
									history.push('/mylibrary/myinfo/chat');
								}}>
								1 : 1 채팅
							</Menu.Item>
							<Menu.Item
								key='52'
								onClick={() => {
									history.push('/mylibrary/myinfo/purchase');
								}}>
								결제 정보 보기
							</Menu.Item>
							<Menu.Item
								key='53'
								onClick={() => {
									history.push('/mylibrary/myinfo/modify');
								}}>
								내 정보 수정
							</Menu.Item>
							<Menu.Item
								key='54'
								onClick={() => {
									history.push('/mylibrary/myinfo/leaveout');
								}}>
								회원 탈퇴
							</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				{/* 사이드바 끝  */}

				<Layout className='site-layout'>
					<Content
						className='site-layout-background'
						style={{
							minHeight: 1000,
						}}>
						<div>
							<Slide />
						</div>
						<div className='search'>
							<Search />
						</div>
						<div className='tab'>
							<Tabs className='tabColor' defaultActiveKey='1'>
								<TabPane
									tab={
										<span>
											<SmileOutlined />
											새로운 소설
										</span>
									}
									key='1'>
									<h1>새로운 소설</h1>
									{/* 새로운 소설 : 컴포넌트 */}
								</TabPane>
								<TabPane
									tab={
										<span>
											<UserAddOutlined />
											새로운 작가 소설
										</span>
									}
									key='2'>
									<h1>새로운 작가 소설</h1>
									{/* 새로운 작가 소설 : 컴포넌트 */}
								</TabPane>
								<TabPane
									tab={
										<span>
											<LikeOutlined />
											실시간 인기 소설
										</span>
									}
									key='3'>
									<h1>실시간 인기 소설</h1>
									{/* 실시간 인기소설 : 컴포넌트 */}
								</TabPane>
								<TabPane
									tab={
										<span>
											<StarOutlined />
											카테고리별 인기 소설
										</span>
									}
									key='4'>
									<h1>카테고리별 인기 소설</h1>
									{/* 카테고리별 인기소설 : 컴포넌트 */}
								</TabPane>
								<TabPane
									tab={
										<span>
											<CrownOutlined />
											연령별 인기 소설
										</span>
									}
									key='5'>
									<h1>연령별 인기 소설</h1>
									{/* 연령별 인기소설 : 컴포넌트 */}
								</TabPane>
								<TabPane
									tab={
										<span>
											<CheckCircleOutlined />
											연재 완료된 소설
										</span>
									}
									key='6'>
									<h1>연재 완료된 소설</h1>
									{/* 연재 완료된 소설 : 컴포넌트 */}
								</TabPane>
							</Tabs>
						</div>
					</Content>
				</Layout>
			</Layout>
		</>
	);
}

{
	/* <SwiperSlide>
					<img src={require('./img/illu2.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu3.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu4.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu5.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu6.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu7.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu8.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu9.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu10.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu11.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu12.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu13.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu14.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu15.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu16.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu17.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu18.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu19.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu20.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu21.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu22.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu23.jpeg')} alt='illu1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require('./img/illu24.jpeg')} alt='illu1' />
				</SwiperSlide> */
}
{
	/* {slide &&
					slide.map((a, i) => {
						return (
							<SwiperSlide key={i}>
                                <h3> 상품 </h3>
								<img
									src={require('./img/illu' + (i + 1) + '.jpeg')}
									alt='이미지 '
								/>
							</SwiperSlide>
						);
					})} */
}
