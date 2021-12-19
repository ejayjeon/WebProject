import React from 'react';
import { useState } from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import { Rate } from 'antd';

export default function Star() {
	const 별점 = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
	const [value, setValue] = useState(5);

	function handleChange(value) {
		setValue(value);
	}
	return (
		<span>
			<Rate tooltips={별점} onChange={handleChange} value={value} />
			{value ? <span className='ant-rate-text'>{별점[value - 1]}</span> : ''}
		</span>
	);
}
