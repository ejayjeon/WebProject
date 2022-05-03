import React, { createElement, useState } from 'react';
import {  Comment, Avatar, Tooltip  } from 'antd';
import 'antd/dist/antd.css';
import {
    LikeOutlined, DislikeFilled,
    DislikeOutlined, LikeFilled
  } from '@ant-design/icons';

export default function Reply() {
const [likesCount, setLikesCount] = useState(0);
const [dislikesCount, setDislikesCount] = useState(0);
const [action, setAction] = useState(null);

return(
  <div style={{
      display: 'block', width: 700, padding: 10
    }}>
      <Comment
        author={<>jemma</>}
        avatar={
        <Avatar style={{ backgroundColor: 'pink' }}>J</Avatar>}
        
        content={
          <p style={{textAlign: 'left'}}> 
          안녕, 이거는 뭐냐면 Ant-design으로 미리 만들어놓은 Reply 컴포넌트야. 그냥 그렇다고 ㅠㅠ
          </p>
        }
        actions={[
          <Tooltip title="Like">
            <span onClick={() => {
              setLikesCount(likesCount + 1);
              //setDislikesCount(dislikesCount + 1);
              setAction('liked');
            }}>
              {createElement(action === 'liked' ? 
              LikeFilled : LikeOutlined)}
              {likesCount}
            </span>
          </Tooltip>,
          <Tooltip title="Dislike">
            <span onClick={() => {
              //setLikesCount(0);
              setDislikesCount(dislikesCount + 1);
              setAction('disliked');
            }}>
              {React.createElement(
              action === 'disliked' 
              ? DislikeFilled 
              : DislikeOutlined
              )}
              {dislikesCount}
            </span>
          </Tooltip>,
          <span key="comment-basic-reply-to">Reply to</span>,
        ]}
        datetime={'2021-12-15 11:09AM'}
      />
    </div>
    )
}


// const data = [
//   {
//     actions: [<span key="comment-list-reply-to-0">Reply to</span>],
//     author: 'Han Solo',
//     avatar: 'https://joeschmoe.io/api/v1/random',
//     content: (
//       <p>
//        내용
//       </p>
//     ),
//     datetime: (
//       <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
//         <span>{moment().subtract(1, 'days').fromNow()}</span>
//       </Tooltip>
//     ),
//   },
//   {
//     actions: [<span key="comment-list-reply-to-0">Reply to</span>],
//     author: 'Han Solo',
//     avatar: 'https://joeschmoe.io/api/v1/random',
//     content: (
//       <p>
//        내용
//       </p>
//     ),
//     datetime: (
//       <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
//         <span>{moment().subtract(2, 'days').fromNow()}</span>
//       </Tooltip>
//     ),
//   },
// ];

// ReactDOM.render(
//   <List
//     className="comment-list"
//     header={`${data.length} replies`}
//     itemLayout="horizontal"
//     dataSource={data}
//     renderItem={item => (
//       <li>
//         <Comment
//           actions={item.actions}
//           author={item.author}
//           avatar={item.avatar}
//           content={item.content}
//           datetime={item.datetime}
//         />
//       </li>
//     )}
//   />,
//   mountNode,
// );