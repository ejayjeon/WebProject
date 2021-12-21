// eslint-disable-next-line 
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/views/LandingPage/Landing';
//import Signup from './components/views/SignupPage/Signup';
import Login from './components/views/LoginPage/Login';
import Results from './components/utils/Results';
import Main from './components/views/MainPage/Main';
import MainRank from './components/views/RankingPage/MainRank';
import RealTimeRank from './components/views/RankingPage/RealTimeRank';
import NewNovelRank from './components/views/RankingPage/NewNovelRank';
import GenreRank from './components/views/RankingPage/GenreRank';
import ScribeInfo from './components/views/ScribePage/ScribeInfo'
import MyScribe from './components/views/ScribePage/MyScribe'
import ScribeList from './components/views/ScribePage/ScribeList'
import './App.css';

export default function App() {
// 자식 라우터
	const LoginRouters = ({ match }) => {
		return (
			<Route
				path={match.url}
				render={props => (
					<Fragment>
						<Route exact path ={`${props.match.url}`} component={Login}/>
						<Route exact path ={`${props.match.url}/results`} component={Results}/>
					</Fragment>
				)}/>
		)}
	const RankingRouters = ({ match }) => {
		return(
			<Route 
				path={match.url}
				render={props => (
					<Fragment>
						<Route exact path ={`${props.match.url}`} component={MainRank}/>
						<Route exact path ={`${props.match.url}/newnovel`} component={NewNovelRank}/>
						<Route exact path ={`${props.match.url}/realtime`} component={RealTimeRank}/>
						<Route exact path ={`${props.match.url}/genre`} component={GenreRank}/>
					</Fragment>
				)}/>
		)}

	const ScribeRouters = ({ match }) => {
		return (
			<Route
				path={match.url}
				render={props => (
					<Fragment>
						<Route exact path ={`${props.match.url}`} component={ScribeInfo}/>
						<Route exact path ={`${props.match.url}/myscribe`} component={MyScribe}/>
						<Route exact path ={`${props.match.url}/scribelist`} component={ScribeList}/>
					</Fragment>
				)}/>
		)}

	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Landing}/>
				<Route exact path='/main' component={Main} />
				<Route exact path='login' component={Login} />
				<Route path='/login' component={LoginRouters}/>
				<Route path='/ranking' component={RankingRouters}/>
				<Route path='/scribe' component={ScribeRouters}/>
			</Switch>
		</div>
	);
}
